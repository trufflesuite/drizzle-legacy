import { call, put, takeLatest } from 'redux-saga/effects'
import getWeb3 from '@drizzle-utils/get-web3'
import Web3 from 'web3' // only required for custom/fallback provider option

import * as action from './web3Types'

/**
 * Initializes Web3
 *
 * @param {Object} param.options - The drizzle Web3 options.
 * @param {Object} param.options.fallback - web3 fallbackProvider.
 * @param {string} param.options.fallback.type - The provider protocol, either `ws` or `wss`.
 * @param {string} param.options.fallback.url - The provider url.
 * @returns web3
 */
export function* initializeWeb3({ options }) {
  try {
    const web3Options = {}

    // Todo: * Verify wss is supported.
    // Todo: * Can this logic be pushed to get-web3 to remove Web3 dependency from drizzle?
    //
    const {fallback} = options
    if (fallback && /ws.?$/i.test(fallback.type)) {
      web3Options.fallbackProvider = new Web3.providers.WebsocketProvider(fallback.url)
    }

    const web3 = yield call(getWeb3, web3Options)
    console.log('getWeb3 resolves web3:', web3)

    yield put({ type: action.WEB3_INITIALIZED })
    return web3
  } catch (error) {
    console.error('Error intializing web3')
    console.error(error)

    // Todo: * How should we handle this catastrophic failure? propagate action
    // Todo:   through redux? AND throw?
    //
    yield put({type: action.WEB3_FAILED})
    throw error
  }
}

/**
 * Resolve the networkId of web3 provider
 *
 * @param {Object} param.options - The drizzle state.
 * @param {Object} - param.web3 - The Web3 provider
 * @returns {string} - The networkId
 */
export function* getNetworkId({ web3 }) {
  try {
    const networkId = yield call(web3.eth.net.getId)
    yield put({ type: action.NETWORK_ID_FETCHED, networkId })
    return networkId
  } catch (error) {
    // Todo: * How should we handle this catastrophic failure? Unable to get
    // Todo:   networkId Propagate action through redux? AND Throw?
    //
    yield put({ type: action.NETWORK_ID_FAILED, error })
    throw error
  }
}

function* web3Saga() {
  // Todo: * No function currently puts `action.NETWORK_ID_FETCHING` to be
  //         taken. Investigate if this can be removed.
  //
  yield takeLatest(action.NETWORK_ID_FETCHING, getNetworkId)
}

export default web3Saga
