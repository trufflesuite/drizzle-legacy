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

    // Function Bindings
    this.getWeb3 = this.getWeb3.bind(this)
    this.getAccounts = this.getAccounts.bind(this)
    this.getContracts = this.getContracts.bind(this)
    this.observeBlocks = this.observeBlocks.bind(this)
    this.watchAccounts = this.watchAccounts.bind(this)

    // Drizzle load event
    this.ready = new Event('DrizzleReady')

    // Wait for window load event in case of injected web3.
    window.addEventListener('load', () => {
      this.getWeb3()
    })
  }

  getWeb3() {
    this.store.dispatch({type: 'WEB3_INITIALIZING'})

    // Check if we are going to ignore metamask
    const ignoreMetamask = ('ignoreMetamask' in this.options.web3) ?
      this.options.web3.ignoreMetamask :
      false

    const useMetamask = ('useMetamask' in this.options.web3) ?
      this.options.web3.useMetamask :
      false;

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined' && !ignoreMetamask && !useMetamask) {

      // Use Mist/MetaMask's provider.
      this.web3 = new Web3(window.web3.currentProvider)

      console.log('Injected web3 detected.')
      this.store.dispatch({type: 'WEB3_INITIALIZED'})

      return this.getAccounts()
    } else {

      if (this.options.web3.fallback) {
        // Attempt fallback if no web3 injection.
        console.log('No web3 instance injected, using fallback.')

        switch (this.options.web3.fallback.type) {
          case 'ws':
            var provider = new Web3.providers.WebsocketProvider(this.options.web3.fallback.url)
            this.web3 = new Web3(provider)
            if (typeof window.web3 !== 'undefined' && useMetamask) {
              var metamaksProvider = window.web3.currentProvider
              window.web3 = new Web3(metamaksProvider)
              this.metamaskWeb3 = window.web3
            }
            this.store.dispatch({type: 'WEB3_INITIALIZED'})
            return this.getAccounts()
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

  getAccounts() {
    var web3 = this.metamaskWeb3 || this.web3

    return new Promise((resolve, reject) => {
      this.store.dispatch({type: 'ACCOUNTS_FETCHING', web3, resolve, reject})
    })
    .then(() => {
      let state = this.store.getState()
      let accounts = state.accounts;
      this.store.dispatch({type: 'ACCOUNT_BALANCES_FETCHING', web3, accounts})
      this.watchAccounts();
      this.watchNetwork();
      this.getContracts()
    }).catch((error) => {
      console.error('Error fetching accounts:')
      console.error(error)
    })
  }

  /**
   * Watch for metamask login and account changes
   * setInterval is unfortunately still the best way to detect account changes
   */
  watchAccounts() {
    var web3 = this.metamaskWeb3 || this.web3
    var accountInterval = setInterval(async () => {
      let state = this.store.getState()
      let accounts = state.accounts;
      let newAccounts = await web3.eth.getAccounts()
      if (newAccounts[0] !== accounts[0]) {
        await new Promise((resolve, reject) => {
          this.store.dispatch({type: 'ACCOUNTS_FETCHING', web3, resolve, reject})
        })
        state = this.store.getState()
        accounts = state.accounts;
        this.store.dispatch({type: 'GET_BALANCES', web3, accounts})
      }
    }, 300);
  }

  watchNetwork() {
    var web3 = this.metamaskWeb3 || this.web3
    var accountInterval = setInterval(async () => {
      let state = this.store.getState()
      let networkId = state.web3.networkId;
      let newNetworkId = await web3.eth.net.getId()
      if (networkId !== newNetworkId) {
        networkId = newNetworkId;
        this.store.dispatch({type: 'NETWORK_ID_FETCHED', web3, networkId})
      }
    }, 1000);
  }

  getContracts() {
    var store = this.store
    var web3 = this.metamaskWeb3 || this.web3

    // Get all JSON artifacts passed in by user, instantiating and storing each contract.
    for (var i = 0; i < this.options.contracts.length; i++)
    {
      const contractArtifact = this.options.contracts[i]
      const events = contractArtifact.contractName in this.options.events ? this.options.events[contractArtifact.contractName] : []

      this.contracts[contractArtifact.contractName] = new DrizzleContract(contractArtifact, web3, store, events)
    }

    // Wait until all contracts are intialized before observing changes
    this.readytoObserve = store.subscribe(() => {
      const state = store.getState()
      var initializedContracts = 0

      for (var contract in state.contracts)
      {
        if (state.contracts[contract].initialized === true)
        {
          initializedContracts++

          if (initializedContracts === Object.keys(state.contracts).length)
          {
            // All contracts are initialized, we can begin observing changes
            this.observeBlocks()
          }
        }
      }
    })
  }

  observeBlocks() {
    // Cancels our store subscription.
    this.readytoObserve()
    let web3 = this.web3

    this.store.dispatch({type: 'DRIZZLE_INITIALIZED', drizzleInstance: this })

    let state = this.store.getState()

    var contractAddresses = []
    var contractNames = []
    var accountAddresses = Object.values(state.accounts);

    // Collect contract addresses in an array for later comparison in txs.
    for (var contract in this.contracts)
    {
      contractNames.push(this.contracts[contract].contractArtifact.contractName)
      contractAddresses.push(this.contracts[contract].options.address)
    }

    // TODO reconnection logic
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
                const contractName = contractNames[index]
                this.store.dispatch({type: 'CONTRACT_SYNCING', contract: this.contracts[contractName]})
              }
              // TODO update ETH balance of accounts
              if (accountAddresses.indexOf(txs[i].from) !== -1 || accountAddresses.indexOf(txs[i].to) !== -1)
              {
                const index = accountAddresses.indexOf(txs[i].from) !== -1 ? accountAddresses.indexOf(txs[i].from) : accountAddresses.indexOf(txs[i].to)
                const account = accountAddresses[index]
                this.store.dispatch({ type: 'GET_ACCOUNT_BALANCE', account, web3 })
              }
            }
          }
          return true;
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
