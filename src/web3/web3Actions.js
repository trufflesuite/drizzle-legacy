import * as type from './web3Types'

export const web3Initializing = results => ({
  type: type.WEB3_INITIALIZING,
  payload: results
})

export const web3Initialized = results => ({
  type: type.WEB3_INITIALIZED,
  payload: results
})

export const web3Failed = results => ({
  type: type.WEB3_FAILED,
  payload: results
})
