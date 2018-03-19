import 'babel-polyfill' // Required for async/await in redux-saga
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import reducer from './reducer'

function generateStore(options) {
  // Redux DevTools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  var preloadedState = {
    accounts: {},
    contracts: {},
    //web3: {}
  }

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        thunkMiddleware
      )
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}

module.exports = generateStore
