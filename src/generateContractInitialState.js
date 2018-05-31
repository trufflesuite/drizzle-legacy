import getAbi from './getAbi'

export function generateContractInitialState (contractConfig) {
  var state = {
    initialized: false,
    synced: false,
    state: {}
  }

  // Constant getters
  var abi = getAbi(contractConfig)
  for (var i2 = 0; i2 < abi.length; i2++) {
    var item = abi[i2];

    if (item.type == "function" && item.constant === true) {
      state.state[item.name] = {}
    }
  }

  return state
}
