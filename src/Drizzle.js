import DrizzleContract from './DrizzleContract'

var Web3 = require('web3')

class Drizzle {
  constructor(options, store) {
    // Variables
    // TODO: Add default options.
    this.options = options
    this.contracts = {}
    this.errors = {}
    this.initialized = false
    this.store = store
    this.web3 = {}
    this.networkId = null

    // Function Bindings
    this.getWeb3 = this.getWeb3.bind(this)
    this.connect = this.connect.bind(this)
    this.getAccounts = this.getAccounts.bind(this)
    this.addContract = this.addContract.bind(this)
    this.getContracts = this.getContracts.bind(this)
    this.observeBlocks = this.observeBlocks.bind(this)

    // Drizzle load event
    this.ready = new Event('DrizzleReady')

    // Wait for window load event in case of injected web3.
    window.addEventListener('load', () => {
      this.getWeb3()
    })
  }

  getWeb3() {
    this.store.dispatch({type: 'WEB3_INITIALIZING'})

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      this.web3 = new Web3(window.web3.currentProvider)

      console.log('Injected web3 detected.')
      this.store.dispatch({type: 'WEB3_INITIALIZED'})

      return this.connect()
    } else {

      if (this.options.web3.fallback) {
        // Attempt fallback if no web3 injection.
        console.log('No web3 instance injected, using fallback.')

        switch (this.options.web3.fallback.type) {
          case 'ws':
            var provider = new Web3.providers.WebsocketProvider(this.options.web3.fallback.url)
            this.web3 = new Web3(provider)
            this.store.dispatch({type: 'WEB3_INITIALIZED'})
            return this.connect()
            break
          default:
            // Invalid options; throw.
            this.store.dispatch({type: 'WEB3_FAILED'})
            console.error('Invalid web3 fallback provided.')
        }
      }

      // Out of web3 options; throw.
      this.store.dispatch({type: 'WEB3_FAILED'})
      console.error('Cannot initialize web3.')
    }
  }

  connect() {
    return this.web3.eth.net.getId()
      .then((_networkId) => {
        this.networkId = _networkId
        return this.getAccounts()
      }).then(() => {
        this.getContracts()
        return this.observeBlocks()
      }).catch((error) => {
        console.error('Error fetching accounts:')
        console.error(error)
      })
  }

  getAccounts() {
    var web3 = this.web3
    return new Promise((resolve, reject) => {
      this.store.dispatch({type: 'ACCOUNTS_FETCHING', web3, resolve, reject})
    })
  }

  addContract(contractArtifact, address, events) {
    var store = this.store
    var web3 = this.web3
    return new DrizzleContract(contractArtifact, address, web3, store, events)
  }

  getContracts() {
    var store = this.store
    // Get all JSON artifacts passed in by user, instantiating and storing each contract.
    for (var i = 0; i < this.options.contracts.length; i++)
    {
      const contractArtifact = this.options.contracts[i]
      const events = contractArtifact.contractName in this.options.events ? this.options.events[contractArtifact.contractName] : []
      this.addContract(contractArtifact, contractArtifact.networks[this.networkId].address, events)
    }
  }

  observeBlocks() {
    // Cancels our store subscription.

    this.store.dispatch({type: 'DRIZZLE_INITIALIZED'})

    var contractAddresses = []
    var contractNames = []

    // Collect contract addresses in an array for later comparison in txs.
    for (var contract in this.contracts)
    {
      contractNames.push(this.contracts[contract].contractArtifact.contractName)
      contractAddresses.push(this.contracts[contract].address)
    }

    // Observe new blocks and re-sync contracts.
    this.web3.eth.subscribe('newBlockHeaders', (error, result) => {
      if (error)
      {
        console.error('Error in block header subscription:')
        console.error(error)
      }
    })
    .on('data', (blockHeader) => {
      // If block isn't pending, check block txs for interation with observed contracts.
      if (blockHeader.number !== null)
      {
        // Check block txs for our contract txs, if contract involved, sync contract.
        const blockNumber = blockHeader.number

        this.web3.eth.getBlock(blockNumber, true).then((block) => {
          const txs = block.transactions

          if (txs.length > 0)
          {
            // Loop through txs looking for contract address
            for (var i = 0; i < txs.length; i++)
            {
              if (contractAddresses.indexOf(txs[i].from) !== -1 || contractAddresses.indexOf(txs[i].to) !== -1)
              {
                const index = contractAddresses.indexOf(txs[i].from) !== -1 ? contractAddresses.indexOf(txs[i].from) : contractAddresses.indexOf(txs[i].to)
                const contractAddress = contractAddresses[index]

                return this.store.dispatch({type: 'CONTRACT_SYNCING', contract: this.contracts[contractAddress]})
              }
            }
          }

          return
        })
        .catch((error) => {
          console.error('Error in block fetching:')
          console.error(error)
        })
      }
    })
  }
}

export default Drizzle
