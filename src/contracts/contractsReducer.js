const initialState = {}

const contractsReducer = (state = initialState, action) => {

  /*
   * Contract Status
   */
  if (action.type === 'CONTRACT_INITIALIZED')
  {
    return {
      ...state,
      [action.contract.address]: {
        ...action.contract,
        ...state[action.contract],
        initialized: true,
        synced: true,
        events: []
      }
    }
  }

  if (action.type === 'CONTRACT_SYNCING')
  {
    const contractAddress = action.contract.address
    return {
      ...state,
      [contractAddress]: {
        ...state[contractAddress],
        synced: false
      }
    }
  }

  if (action.type === 'CONTRACT_SYNCED')
  {
    return {
      ...state,
      [action.contractAddress]: {
        ...state[action.contractAddress],
        synced: true
      }
    }
  }

  if (action.type === 'CONTRACT_SYNC_IND')
  {
    return {
      ...state,
      [action.contractAddress]: {
        ...state[action.contractAddress],
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
      [action.contractAddress]: {
        ...state[action.contractAddress],
        [action.variable]: {
          ...state[action.contractAddress][action.variable],
          [action.argsHash]: {
            ...state[action.contractAddress][action.variable][action.argsHash],
            args: action.args,
            fnIndex: action.fnIndex,
            value: action.value
          }
        }
      }
    }
  }

  if (action.type === 'ERROR_CONTRACT_VAR')
  {
    return {
      ...state,
      [action.contractAddress]: {
        ...state[action.contractAddress],
        [action.variable]: {
          ...state[action.contractAddress][action.variable],
          [action.argsHash]: {
            ...state[action.contractAddress][action.variable][action.argsHash],
            args: action.args,
            fnIndex: action.fnIndex,
            error: action.error
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
      [action.contractAddress]: {
        ...state[action.contractAddress],
        events: [
          ...state[action.contractAddress].events,
          action.event
        ]
      }
    }
  }

  return state
}

export default contractsReducer
