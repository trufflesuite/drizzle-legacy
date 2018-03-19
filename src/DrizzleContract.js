class DrizzleContract {
  constructor(contractArtifact, address, web3, store, events = []) {
    this.abi = contractArtifact.abi
    this.name = contractArtifact.contractName
    this.address = address
    this.web3 = web3
    this.store = store

    // Instantiate the contract.
    var web3Contract = new this.web3.eth.Contract(
      this.abi,
      address,
      {
        from: this.store.getState().accounts[0],
        data: contractArtifact.deployedBytecode
      }
    )

    // Merge web3 contract instance into DrizzleContract instance.
    Object.assign(this, web3Contract)

    for (var i = 0; i < this.abi.length; i++) {
      var item = this.abi[i]
      if (item.type == "function" && item.constant === true) {
        this[item.name] = { }
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
    store.dispatch({ type: 'CONTRACT_INITIALIZED', contract: this })
  }

  cacheCallFunction(fnName, fnIndex, fn) {
    var contract = this

    return function() {
      // Collect args and hash to use as key, 0x0 if no args
      var argsHash = '0x0'
      var args = arguments

      if (args.length > 0) {
        argsHash = contract.generateArgsHash(args)
      }
      const contractAddress = contract.address
      const functionState = contract.store.getState().contracts[contractAddress][fnName]

      // If call result is in state and fresh, return value instead of calling
      if (argsHash in functionState) {
        if (contract.store.getState().contracts[contractAddress].synced === true) {
          return argsHash
        }
      }

      // Otherwise, call function and update store
      contract.store.dispatch({type: 'CALL_CONTRACT_FN', contract, fnName, fnIndex, args, argsHash})

      // Return nothing because state is currently empty.
      return argsHash
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
      //const name = contract.name
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
