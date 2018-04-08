var Web3EthContract = require("web3-eth-contract");

class DrizzleContract extends Web3EthContract {
  constructor(contractArtifact, web3, networkId, store, events = []) {
    super(contractArtifact.abi, contractArtifact.networks[networkId].address, {
      from: store.getState().accounts[0],
      data: contractArtifact.deployedBytecode,
    });

    this.contractArtifact = contractArtifact;
    this.abi = contractArtifact.abi;
    this.web3 = web3;
    this.store = store;

    for (var i = 0; i < this.abi.length; i++) {
      var item = this.abi[i];

      if (item.type == "function" && item.constant === true) {
        this.methods[item.name].cacheCall = this.cacheCallFunction(
          item.name,
          i
        );
      }

      if (item.type == "function" && item.constant === false) {
        this.methods[item.name].cacheSend = this.cacheSendFunction(
          item.name,
          i
        );
      }
    }

    // Register event listeners if any events.
    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        const eventName = events[i];

        store.dispatch({ type: "LISTEN_FOR_EVENT", contract: this, eventName });
      }
    }

    const name = contractArtifact.contractName;

    store.dispatch({ type: "CONTRACT_INITIALIZED", name });
  }

  cacheCallFunction(fnName, fnIndex, fn) {
    var contract = this;

    return function() {
      // Collect args and hash to use as key, 0x0 if no args
      var argsHash = "0x0";
      var args = arguments;

      if (args.length > 0) {
        argsHash = contract.generateArgsHash(args);
      }
      const contractName = contract.contractArtifact.contractName;
      const functionState = contract.store.getState().contracts[contractName][
        fnName
      ];

      // If call result is in state and fresh, return value instead of calling
      if (argsHash in functionState) {
        if (contract.store.getState().contracts[contractName].synced === true) {
          return argsHash;
        }
      }

      // Otherwise, call function and update store
      contract.store.dispatch({
        type: "CALL_CONTRACT_FN",
        contract,
        fnName,
        fnIndex,
        args,
        argsHash,
      });

      // Return nothing because state is currently empty.
      return argsHash;
    };
  }

  cacheSendFunction(fnName, fnIndex, fn) {
    // NOTE: May not need fn index
    var contract = this;

    return function() {
      var args = arguments;

      // Generate temporary ID
      var stackId = contract.store.getState().transactionStack.length;

      // Add ID to "transactionStack" with empty value
      contract.store.dispatch({ type: "PUSH_TO_STACK" });

      // Dispatch tx to saga
      // When txhash received, will be value of stack ID
      contract.store.dispatch({
        type: "SEND_CONTRACT_TX",
        contract,
        fnName,
        fnIndex,
        args,
        stackId,
      });

      // return stack ID
      return stackId;
    };
  }

  generateArgsHash(args) {
    var web3 = this.web3;
    var hashString = "";

    for (var i = 0; i < args.length; i++) {
      if (typeof args[i] !== "function") {
        var argToHash = args[i];

        // Stringify objects to allow hashing
        if (typeof argToHash === "object") {
          argToHash = JSON.stringify(argToHash);
        }

        // This check is in place for web3 v0.x
        if ("utils" in web3) {
          var hashPiece = web3.utils.sha3(argToHash);
        } else {
          var hashPiece = web3.sha3(argToHash);
        }

        hashString += hashPiece;
      }
    }

    return web3.utils.sha3(hashString);
  }
}

export default DrizzleContract;
