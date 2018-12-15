import * as type from './web3Types'

const initialState = {
  status: ''
}

const web3Reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.WEB3_INITIALIZING:
      return {
        ...state,
        status: 'initializing'
      }

    case type.WEB3_INITIALIZED:
      return {
        ...state,
        status: 'initialized'
      }

    case type.WEB3_FAILED:
      return {
        ...state,
        status: 'failed'
      }

    case type.NETWORK_ID_FETCHED:
      return {
        ...state,
        networkId: action.networkId
      }

    case type.NETWORK_ID_FAILED:
      // Todo: * Why do we have a networkId if the saga failed?
      //
      return {
        ...state,
        networkId: action.networkId
      }

    default:
      return state
  }
}

export default web3Reducer
