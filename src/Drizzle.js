// Check to see if we are running in react-native.
if (!(typeof navigator != 'undefined' && navigator.product == 'ReactNative')) {
  // Not running in react-native, load as promise so async Drizzle initialization still resolves
  var windowPromise = new Promise((resolve, reject) => {
    window.addEventListener('load', resolve)
  })
}

class Drizzle {
  constructor(options, store) {
    // Variables
    this.contracts = {}
    this.contractList = []
    this.options = options
    this.store = store
    this.web3 = {}

    this.loadingContract = {}

    // Check to see if we are running in react-native.
    if (typeof navigator != 'undefined' && navigator.product == 'ReactNative') {
      // Running in react-native, no promise / event to wait for. Begin Drizzle initialization.
      store.dispatch({type: 'DRIZZLE_INITIALIZING', drizzle: this, options})
    }
    else {
      // Not running in react-native, wait for window load event in case of injected web3.
      windowPromise.then(() => {
        // Begin Drizzle initialization.
        store.dispatch({type: 'DRIZZLE_INITIALIZING', drizzle: this, options})
      })
    }
  }

  addContract (contractConfig, events = []) {
    this.store.dispatch({type: 'ADD_CONTRACT', drizzle: this, contractConfig, events, web3: this.web3})
  }

  _addContract (drizzleContract) {
    if (this.contracts[drizzleContract.contractName]) { throw `Contract already exists: ${drizzleContract.contractName}` }
    this.contracts[drizzleContract.contractName] = drizzleContract
    this.contractList.push(drizzleContract)
  }

  findContractByAddress (address) {
    return this.contractList.find((contract) => {
      return contract.address.toLowerCase() === address.toLowerCase()
    })
  }
}

export default Drizzle
