import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import reducer from "./reducer";

function generateStore(options) {
  // Redux DevTools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Preloaded state
  var contractsInitialState = {};

  for (var i = 0; i < options.contracts.length; i++) {
    // Initial contract details
    var contractName = options.contracts[i].contractName;

    contractsInitialState[contractName] = {
      initialized: false,
      synced: false,
    };

    // Constant getters
    for (var i2 = 0; i2 < options.contracts[i].abi.length; i2++) {
      var item = options.contracts[i].abi[i2];

      if (item.type == "function" && item.constant === true) {
        contractsInitialState[contractName][item.name] = {};
      }
    }
  }

  var preloadedState = {
    contracts: contractsInitialState,
  };

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

module.exports = generateStore;
