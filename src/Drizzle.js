import { generateStore } from './generateStore'

// make sure env is ready for drizzle init
//
let isEnvReadyPromise = new Promise((resolve, reject) => {
   
  // early return initialization if web documents already loaded
  if(document.readyState === `complete`) return resolve()
  
  // early return if react-native
  if(navigator && navigator.product === 'ReactNative') return resolve()
  
  // browser and document not ready
  window.addEventListener('load', resolve)
})


class Drizzle {
  constructor (options, store) {
    // Variables
    this.contracts = {}
    this.contractList = []
    this.options = options
    this.store = store || this.generateStore(options)
    this.web3 = {}

    this.loadingContract = {}

    // Wait for window load event in case of injected web3.
    isEnvReadyPromise.then(() => {
      // Begin Drizzle initialization.
      this.store.dispatch({ type: 'DRIZZLE_INITIALIZING', drizzle: this, options })
    })
  }

  addContract (contractConfig, events = []) {
    this.store.dispatch({
      type: 'ADD_CONTRACT',
      drizzle: this,
      contractConfig,
      events,
      web3: this.web3
    })
  }

  _addContract (drizzleContract) {
    if (this.contracts[drizzleContract.contractName]) {
      throw `Contract already exists: ${drizzleContract.contractName}`
    }
    this.contracts[drizzleContract.contractName] = drizzleContract
    this.contractList.push(drizzleContract)
  }

  findContractByAddress (address) {
    return this.contractList.find(contract => {
      return contract.address.toLowerCase() === address.toLowerCase()
    })
  }

  /*
   * NOTE
   * This strangeness is for backward compatibility with < v1.2.4
   * Future versions will have generateStore's contents here
   */
  generateStore (options) {
    return generateStore(options)
  }
}

export default Drizzle
