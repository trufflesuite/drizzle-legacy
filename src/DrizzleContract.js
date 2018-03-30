class DrizzleContract {
  constructor(contractArtifact, web3, store, events = []) {
    this.contractArtifact = contractArtifact
    this.abi = contractArtifact.abi
    this.web3 = web3
    this.store = store

    var networkId = 0

    this.initContractState();

    // Instantiate the contract.
    web3.eth.net.getId()
    .then((networkId) => {
      var web3Contract = new web3.eth.Contract(
        this.abi,
        this.contractArtifact.networks[networkId].address,
        {
          from: this.store.getState().accounts[0],
          data: this.contractArtifact.deployedBytecode
        }
      )


      // Merge web3 contract instance into DrizzleContract instance.
      Object.assign(this, web3Contract)

      for (var i = 0; i < this.abi.length; i++) {
        var item = this.abi[i]

        if (item.type == "function" && item.constant === true) {
          this.methods[item.name].cacheCall = this.cacheCallFunction(item.name, i)
        }

        if (item.type == "function" && item.constant === false) {
          this.methods[item.name].cacheSend = this.cacheSendFunction(item.name, i)
        }
      }


      // Register event listeners if any events.
      if (events.length > 0) {
        for (i = 0; i < events.length; i++) {
          const eventName = events[i]

          store.dispatch({type: 'LISTEN_FOR_EVENT', contract: this, eventName})
        }
      }

      const name = contractArtifact.contractName
      const methods = this.methods
      const address = this._address
      store.dispatch({type: 'CONTRACT_INITIALIZED', name, methods, address})

      return networkId
    })
    .catch((error) => {
      console.error('Error retrieving network ID:')
      console.error(error)

      return
    })
  }

  initContractState() {
    // Initial contract details
    var contractName = this.contractArtifact.contractName

    // initialize contract state
    var initialState = {
      initialized: false,
      synced: false,
      state: {},
      networks: this.contractArtifact.networks
    }

    // Constant getters
    for (var i = 0; i < this.abi.length; i++) {
      var item = this.abi[i]

      if (item.type == "function" && item.constant === true) {
        initialState.state[item.name] = {}
      }
    }

    this.store.dispatch({ type: 'INIT_CONTRACT_STATE', contractName, initialState });
  }

  cacheCallFunction(fnName, fnIndex, fn) {
    var contract = this

    return function() {
      const state = contract.store.getState();
      // if (!state.drizzleStatus.initialize) return null;
      const contractName = contract.contractArtifact.contractName
      var contractState = state.contracts[contractName];
      const functionState = contractState.state[fnName]

      if (!contractState.initialized) return null
      // Collect args and hash to use as key, 0x0 if no args
      var argsHash = '0x0'
      var args = arguments

      if (args.length > 0) {
        argsHash = contract.generateArgsHash(args)
      }

      let result = null;
      // If call result is in state, return value instead of calling
      // Syncing is happening by other means so we don't have to worry about it
      if (argsHash in functionState) {
        return functionState[argsHash].value;
      }

      // Otherwise, call function and update store
      contract.store.dispatch({type: 'CALL_CONTRACT_FN', contract, fnName, fnIndex, args, argsHash})

      // Return nothing because state is currently empty.
      return result
    }
  }

  cacheSendFunction(fnName, fnIndex, fn) {
    // NOTE: May not need fn index
    var contract = this

    return function() {
      var args = arguments

      // Generate temporary ID
      var stackId = contract.store.getState().transactionStack.length

      // Add ID to "transactionStack" with empty value
      contract.store.dispatch({type: 'PUSH_TO_STACK'})

      // TODO: FOR DEMO, MOVE MOVE MOVE
      //const name = contract.contractArtifact.contractName
      //contract.store.dispatch({type: 'CONTRACT_SYNC_IND', contractName: name})

      // Dispatch tx to saga
      // When txhash received, will be value of stack ID
      contract.store.dispatch({type: 'SEND_CONTRACT_TX', contract, fnName, fnIndex, args, stackId})

      // return stack ID
      return stackId
    }
  }

  generateArgsHash(args) {
    var web3 = this.web3
    var hashString = ''

    for (var i = 0; i < args.length; i++)
    {
      if (typeof args[i] !== 'function')
      {
        var argToHash = args[i]

        // Stringify objects to allow hashing
        if (typeof argToHash === 'object') {
          argToHash = JSON.stringify(argToHash)
        }

        var hashPiece = web3.utils.sha3(argToHash)

        hashString += hashPiece
      }
    }

    return web3.utils.sha3(hashString)
  }
}

export default DrizzleContract
