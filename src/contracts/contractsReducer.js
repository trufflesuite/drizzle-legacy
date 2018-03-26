const initialState = {}

const contractsReducer = (state = initialState, action) => {
  /*
   * Contract Status
   */

  if (action.type === 'INIT_CONTRACT_STATE') {
    return {
      ...state,
      [action.contractName]: action.initialState
    }
  }

  if (action.type === 'CONTRACT_INITIALIZED')
  {
    return {
      ...state,
      [action.name]: {
        ...state[action.name],
        initialized: true,
        synced: true,
        events: [],
        methods: action.methods,
        address: action.address
      }
    }
  }

  if (action.type === 'CONTRACT_SYNCING')
  {
    const contractName = action.contract.contractArtifact.contractName

    return {
      ...state,
      [contractName]: {
        ...state[contractName],
        synced: false
      }
    }
  }

  if (action.type === 'CONTRACT_SYNCED')
  {
    return {
      ...state,
      [action.contractName]: {
        ...state[action.contractName],
        synced: true
      }
    }
  }

  if (action.type === 'CONTRACT_SYNC_IND')
  {
    return {
      ...state,
      [action.contractName]: {
        ...state[action.contractName],
        synced: false
      }
    }
  }

  /*
   * Contract Functions
   */

  if (action.type === 'GOT_CONTRACT_VAR')
  {
    return {
      ...state,
      [action.name]: {
        ...state[action.name],
        state: {
          ...state[action.name].state,
          [action.variable]: {
            ...state[action.name].state[action.variable],
            [action.argsHash]: {
              ...state[action.name].state[action.variable][action.argsHash],
              args: action.args,
              fnIndex: action.fnIndex,
              value: action.value
            }
          }
        }
      }
    }
  }

  if (action.type === 'ERROR_CONTRACT_VAR')
  {
    return {
      ...state,
      [action.name]: {
        ...state[action.name],
        state: {
          ...state[action.name].state,
          [action.variable]: {
            ...state[action.name][action.variable],
            [action.argsHash]: {
              ...state[action.name][action.variable][action.argsHash],
              args: action.args,
              fnIndex: action.fnIndex,
              error: action.error
            }
          }
        }
      }
    }
  }

  /*
   * Contract Events
   */

  if (action.type === 'EVENT_FIRED')
  {
    return {
      ...state,
      [action.name]: {
        ...state[action.name],
        events: [
          ...state[action.name].events,
          action.event
        ]
      }
    }
  }

  return state
}

export default contractsReducer
