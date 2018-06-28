(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("redux"), require("redux-saga"), require("eth-block-tracker-es5"), require("deepmerge"), require("is-plain-object"), require("web3"));
	else if(typeof define === 'function' && define.amd)
		define(["redux", "redux-saga", "eth-block-tracker-es5", "deepmerge", "is-plain-object", "web3"], factory);
	else if(typeof exports === 'object')
		exports["drizzle"] = factory(require("redux"), require("redux-saga"), require("eth-block-tracker-es5"), require("deepmerge"), require("is-plain-object"), require("web3"));
	else
		root["drizzle"] = factory(root["redux"], root["redux-saga"], root["eth-block-tracker-es5"], root["deepmerge"], root["is-plain-object"], root["web3"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__, __WEBPACK_EXTERNAL_MODULE_33__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.drizzleSagas = exports.drizzleReducers = exports.generateStore = exports.generateContractsInitialState = exports.Drizzle = undefined;
	
	var _Drizzle = __webpack_require__(1);
	
	var _Drizzle2 = _interopRequireDefault(_Drizzle);
	
	var _generateStore = __webpack_require__(2);
	
	var _generateStore2 = _interopRequireDefault(_generateStore);
	
	var _generateContractsInitialState = __webpack_require__(44);
	
	var _accountsReducer = __webpack_require__(35);
	
	var _accountsReducer2 = _interopRequireDefault(_accountsReducer);
	
	var _accountBalancesReducer = __webpack_require__(36);
	
	var _accountBalancesReducer2 = _interopRequireDefault(_accountBalancesReducer);
	
	var _contractsReducer = __webpack_require__(37);
	
	var _contractsReducer2 = _interopRequireDefault(_contractsReducer);
	
	var _drizzleStatusReducer = __webpack_require__(40);
	
	var _drizzleStatusReducer2 = _interopRequireDefault(_drizzleStatusReducer);
	
	var _transactionsReducer = __webpack_require__(41);
	
	var _transactionsReducer2 = _interopRequireDefault(_transactionsReducer);
	
	var _transactionStackReducer = __webpack_require__(42);
	
	var _transactionStackReducer2 = _interopRequireDefault(_transactionStackReducer);
	
	var _web3Reducer = __webpack_require__(43);
	
	var _web3Reducer2 = _interopRequireDefault(_web3Reducer);
	
	var _accountsSaga = __webpack_require__(21);
	
	var _accountsSaga2 = _interopRequireDefault(_accountsSaga);
	
	var _accountBalancesSaga = __webpack_require__(22);
	
	var _accountBalancesSaga2 = _interopRequireDefault(_accountBalancesSaga);
	
	var _blocksSaga = __webpack_require__(23);
	
	var _blocksSaga2 = _interopRequireDefault(_blocksSaga);
	
	var _contractsSaga = __webpack_require__(25);
	
	var _contractsSaga2 = _interopRequireDefault(_contractsSaga);
	
	var _drizzleStatusSaga = __webpack_require__(27);
	
	var _drizzleStatusSaga2 = _interopRequireDefault(_drizzleStatusSaga);
	
	var _web3Saga = __webpack_require__(32);
	
	var _web3Saga2 = _interopRequireDefault(_web3Saga);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var drizzleReducers = {
	  accounts: _accountsReducer2.default,
	  accountBalances: _accountBalancesReducer2.default,
	  contracts: _contractsReducer2.default,
	  drizzleStatus: _drizzleStatusReducer2.default,
	  transactions: _transactionsReducer2.default,
	  transactionStack: _transactionStackReducer2.default,
	  web3: _web3Reducer2.default
	
	  // Sagas
	};
	
	// Reducers
	
	
	var drizzleSagas = [_accountsSaga2.default, _accountBalancesSaga2.default, _blocksSaga2.default, _contractsSaga2.default, _drizzleStatusSaga2.default, _web3Saga2.default];
	
	exports.Drizzle = _Drizzle2.default;
	exports.generateContractsInitialState = _generateContractsInitialState.generateContractsInitialState;
	exports.generateStore = _generateStore2.default;
	exports.drizzleReducers = drizzleReducers;
	exports.drizzleSagas = drizzleSagas;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Load as promise so that async Drizzle initialization can still resolve
	var windowPromise = new Promise(function (resolve, reject) {
	  window.addEventListener('load', resolve);
	});
	
	var Drizzle = function () {
	  function Drizzle(options, store) {
	    var _this = this;
	
	    _classCallCheck(this, Drizzle);
	
	    // Variables
	    this.contracts = {};
	    this.contractList = [];
	    this.options = options;
	    this.store = store;
	    this.web3 = {};
	
	    this.loadingContract = {};
	
	    // Wait for window load event in case of injected web3.
	    windowPromise.then(function () {
	      // Begin Drizzle initialization.
	      store.dispatch({ type: 'DRIZZLE_INITIALIZING', drizzle: _this, options: options });
	    });
	  }
	
	  _createClass(Drizzle, [{
	    key: 'addContract',
	    value: function addContract(contractConfig) {
	      var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	      this.store.dispatch({ type: 'ADD_CONTRACT', drizzle: this, contractConfig: contractConfig, events: events, web3: this.web3 });
	    }
	  }, {
	    key: '_addContract',
	    value: function _addContract(drizzleContract) {
	      if (this.contracts[drizzleContract.contractName]) {
	        throw 'Contract already exists: ' + drizzleContract.contractName;
	      }
	      this.contracts[drizzleContract.contractName] = drizzleContract;
	      this.contractList.push(drizzleContract);
	    }
	  }, {
	    key: 'findContractByAddress',
	    value: function findContractByAddress(address) {
	      return this.contractList.find(function (contract) {
	        return contract.address.toLowerCase() === address.toLowerCase();
	      });
	    }
	  }]);
	
	  return Drizzle;
	}();
	
	exports.default = Drizzle;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _redux = __webpack_require__(3);
	
	var _reduxSaga = __webpack_require__(4);
	
	var _reduxSaga2 = _interopRequireDefault(_reduxSaga);
	
	var _rootSaga = __webpack_require__(5);
	
	var _rootSaga2 = _interopRequireDefault(_rootSaga);
	
	var _reducer = __webpack_require__(34);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _generateContractsInitialState = __webpack_require__(44);
	
	var _getAbi = __webpack_require__(39);
	
	var _getAbi2 = _interopRequireDefault(_getAbi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function generateStore(options) {
	  // Redux DevTools
	  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
	
	  // Preloaded state
	  var preloadedState = {
	    contracts: (0, _generateContractsInitialState.generateContractsInitialState)(options)
	
	    // create the saga middleware
	  };var sagaMiddleware = (0, _reduxSaga2.default)();
	
	  var store = (0, _redux.createStore)(_reducer2.default, preloadedState, composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware)));
	
	  sagaMiddleware.run(_rootSaga2.default);
	
	  return store;
	}
	
	module.exports = generateStore;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(6);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.default = root;
	
	var _effects = __webpack_require__(9);
	
	var _accountsSaga = __webpack_require__(21);
	
	var _accountsSaga2 = _interopRequireDefault(_accountsSaga);
	
	var _accountBalancesSaga = __webpack_require__(22);
	
	var _accountBalancesSaga2 = _interopRequireDefault(_accountBalancesSaga);
	
	var _blocksSaga = __webpack_require__(23);
	
	var _blocksSaga2 = _interopRequireDefault(_blocksSaga);
	
	var _contractsSaga = __webpack_require__(25);
	
	var _contractsSaga2 = _interopRequireDefault(_contractsSaga);
	
	var _drizzleStatusSaga = __webpack_require__(27);
	
	var _drizzleStatusSaga2 = _interopRequireDefault(_drizzleStatusSaga);
	
	var _web3Saga = __webpack_require__(32);
	
	var _web3Saga2 = _interopRequireDefault(_web3Saga);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [root].map(_regenerator2.default.mark);
	
	function root() {
	  return _regenerator2.default.wrap(function root$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return (0, _effects.all)([(0, _effects.fork)(_accountsSaga2.default), (0, _effects.fork)(_accountBalancesSaga2.default), (0, _effects.fork)(_blocksSaga2.default), (0, _effects.fork)(_contractsSaga2.default), (0, _effects.fork)(_drizzleStatusSaga2.default), (0, _effects.fork)(_web3Saga2.default)]);
	
	        case 2:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g =
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this;
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(8);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof global.process === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _io = __webpack_require__(10);
	
	Object.defineProperty(exports, 'take', {
	  enumerable: true,
	  get: function get() {
	    return _io.take;
	  }
	});
	Object.defineProperty(exports, 'takem', {
	  enumerable: true,
	  get: function get() {
	    return _io.takem;
	  }
	});
	Object.defineProperty(exports, 'put', {
	  enumerable: true,
	  get: function get() {
	    return _io.put;
	  }
	});
	Object.defineProperty(exports, 'all', {
	  enumerable: true,
	  get: function get() {
	    return _io.all;
	  }
	});
	Object.defineProperty(exports, 'race', {
	  enumerable: true,
	  get: function get() {
	    return _io.race;
	  }
	});
	Object.defineProperty(exports, 'call', {
	  enumerable: true,
	  get: function get() {
	    return _io.call;
	  }
	});
	Object.defineProperty(exports, 'apply', {
	  enumerable: true,
	  get: function get() {
	    return _io.apply;
	  }
	});
	Object.defineProperty(exports, 'cps', {
	  enumerable: true,
	  get: function get() {
	    return _io.cps;
	  }
	});
	Object.defineProperty(exports, 'fork', {
	  enumerable: true,
	  get: function get() {
	    return _io.fork;
	  }
	});
	Object.defineProperty(exports, 'spawn', {
	  enumerable: true,
	  get: function get() {
	    return _io.spawn;
	  }
	});
	Object.defineProperty(exports, 'join', {
	  enumerable: true,
	  get: function get() {
	    return _io.join;
	  }
	});
	Object.defineProperty(exports, 'cancel', {
	  enumerable: true,
	  get: function get() {
	    return _io.cancel;
	  }
	});
	Object.defineProperty(exports, 'select', {
	  enumerable: true,
	  get: function get() {
	    return _io.select;
	  }
	});
	Object.defineProperty(exports, 'actionChannel', {
	  enumerable: true,
	  get: function get() {
	    return _io.actionChannel;
	  }
	});
	Object.defineProperty(exports, 'cancelled', {
	  enumerable: true,
	  get: function get() {
	    return _io.cancelled;
	  }
	});
	Object.defineProperty(exports, 'flush', {
	  enumerable: true,
	  get: function get() {
	    return _io.flush;
	  }
	});
	Object.defineProperty(exports, 'getContext', {
	  enumerable: true,
	  get: function get() {
	    return _io.getContext;
	  }
	});
	Object.defineProperty(exports, 'setContext', {
	  enumerable: true,
	  get: function get() {
	    return _io.setContext;
	  }
	});
	Object.defineProperty(exports, 'takeEvery', {
	  enumerable: true,
	  get: function get() {
	    return _io.takeEvery;
	  }
	});
	Object.defineProperty(exports, 'takeLatest', {
	  enumerable: true,
	  get: function get() {
	    return _io.takeLatest;
	  }
	});
	Object.defineProperty(exports, 'throttle', {
	  enumerable: true,
	  get: function get() {
	    return _io.throttle;
	  }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.asEffect = exports.takem = undefined;
	exports.take = take;
	exports.put = put;
	exports.all = all;
	exports.race = race;
	exports.call = call;
	exports.apply = apply;
	exports.cps = cps;
	exports.fork = fork;
	exports.spawn = spawn;
	exports.join = join;
	exports.cancel = cancel;
	exports.select = select;
	exports.actionChannel = actionChannel;
	exports.cancelled = cancelled;
	exports.flush = flush;
	exports.getContext = getContext;
	exports.setContext = setContext;
	exports.takeEvery = takeEvery;
	exports.takeLatest = takeLatest;
	exports.throttle = throttle;
	
	var _utils = __webpack_require__(11);
	
	var _sagaHelpers = __webpack_require__(13);
	
	var IO = (0, _utils.sym)('IO');
	var TAKE = 'TAKE';
	var PUT = 'PUT';
	var ALL = 'ALL';
	var RACE = 'RACE';
	var CALL = 'CALL';
	var CPS = 'CPS';
	var FORK = 'FORK';
	var JOIN = 'JOIN';
	var CANCEL = 'CANCEL';
	var SELECT = 'SELECT';
	var ACTION_CHANNEL = 'ACTION_CHANNEL';
	var CANCELLED = 'CANCELLED';
	var FLUSH = 'FLUSH';
	var GET_CONTEXT = 'GET_CONTEXT';
	var SET_CONTEXT = 'SET_CONTEXT';
	
	var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';
	
	var effect = function effect(type, payload) {
	  var _ref;
	
	  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
	};
	
	function take() {
	  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
	
	  if (arguments.length) {
	    (0, _utils.check)(arguments[0], _utils.is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
	  }
	  if (_utils.is.pattern(patternOrChannel)) {
	    return effect(TAKE, { pattern: patternOrChannel });
	  }
	  if (_utils.is.channel(patternOrChannel)) {
	    return effect(TAKE, { channel: patternOrChannel });
	  }
	  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
	}
	
	take.maybe = function () {
	  var eff = take.apply(undefined, arguments);
	  eff[TAKE].maybe = true;
	  return eff;
	};
	
	var takem = /*#__PURE__*/exports.takem = (0, _utils.deprecate)(take.maybe, /*#__PURE__*/(0, _utils.updateIncentive)('takem', 'take.maybe'));
	
	function put(channel, action) {
	  if (arguments.length > 1) {
	    (0, _utils.check)(channel, _utils.is.notUndef, 'put(channel, action): argument channel is undefined');
	    (0, _utils.check)(channel, _utils.is.channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
	    (0, _utils.check)(action, _utils.is.notUndef, 'put(channel, action): argument action is undefined');
	  } else {
	    (0, _utils.check)(channel, _utils.is.notUndef, 'put(action): argument action is undefined');
	    action = channel;
	    channel = null;
	  }
	  return effect(PUT, { channel: channel, action: action });
	}
	
	put.resolve = function () {
	  var eff = put.apply(undefined, arguments);
	  eff[PUT].resolve = true;
	  return eff;
	};
	
	put.sync = (0, _utils.deprecate)(put.resolve, (0, _utils.updateIncentive)('put.sync', 'put.resolve'));
	
	function all(effects) {
	  return effect(ALL, effects);
	}
	
	function race(effects) {
	  return effect(RACE, effects);
	}
	
	function getFnCallDesc(meth, fn, args) {
	  (0, _utils.check)(fn, _utils.is.notUndef, meth + ': argument fn is undefined');
	
	  var context = null;
	  if (_utils.is.array(fn)) {
	    var _fn = fn;
	    context = _fn[0];
	    fn = _fn[1];
	  } else if (fn.fn) {
	    var _fn2 = fn;
	    context = _fn2.context;
	    fn = _fn2.fn;
	  }
	  if (context && _utils.is.string(fn) && _utils.is.func(context[fn])) {
	    fn = context[fn];
	  }
	  (0, _utils.check)(fn, _utils.is.func, meth + ': argument ' + fn + ' is not a function');
	
	  return { context: context, fn: fn, args: args };
	}
	
	function call(fn) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  return effect(CALL, getFnCallDesc('call', fn, args));
	}
	
	function apply(context, fn) {
	  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
	  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
	}
	
	function cps(fn) {
	  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    args[_key2 - 1] = arguments[_key2];
	  }
	
	  return effect(CPS, getFnCallDesc('cps', fn, args));
	}
	
	function fork(fn) {
	  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    args[_key3 - 1] = arguments[_key3];
	  }
	
	  return effect(FORK, getFnCallDesc('fork', fn, args));
	}
	
	function spawn(fn) {
	  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    args[_key4 - 1] = arguments[_key4];
	  }
	
	  var eff = fork.apply(undefined, [fn].concat(args));
	  eff[FORK].detached = true;
	  return eff;
	}
	
	function join() {
	  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	    tasks[_key5] = arguments[_key5];
	  }
	
	  if (tasks.length > 1) {
	    return all(tasks.map(function (t) {
	      return join(t);
	    }));
	  }
	  var task = tasks[0];
	  (0, _utils.check)(task, _utils.is.notUndef, 'join(task): argument task is undefined');
	  (0, _utils.check)(task, _utils.is.task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
	  return effect(JOIN, task);
	}
	
	function cancel() {
	  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	    tasks[_key6] = arguments[_key6];
	  }
	
	  if (tasks.length > 1) {
	    return all(tasks.map(function (t) {
	      return cancel(t);
	    }));
	  }
	  var task = tasks[0];
	  if (tasks.length === 1) {
	    (0, _utils.check)(task, _utils.is.notUndef, 'cancel(task): argument task is undefined');
	    (0, _utils.check)(task, _utils.is.task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
	  }
	  return effect(CANCEL, task || _utils.SELF_CANCELLATION);
	}
	
	function select(selector) {
	  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
	    args[_key7 - 1] = arguments[_key7];
	  }
	
	  if (arguments.length === 0) {
	    selector = _utils.ident;
	  } else {
	    (0, _utils.check)(selector, _utils.is.notUndef, 'select(selector,[...]): argument selector is undefined');
	    (0, _utils.check)(selector, _utils.is.func, 'select(selector,[...]): argument ' + selector + ' is not a function');
	  }
	  return effect(SELECT, { selector: selector, args: args });
	}
	
	/**
	  channel(pattern, [buffer])    => creates an event channel for store actions
	**/
	function actionChannel(pattern, buffer) {
	  (0, _utils.check)(pattern, _utils.is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
	  if (arguments.length > 1) {
	    (0, _utils.check)(buffer, _utils.is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
	    (0, _utils.check)(buffer, _utils.is.buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
	  }
	  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
	}
	
	function cancelled() {
	  return effect(CANCELLED, {});
	}
	
	function flush(channel) {
	  (0, _utils.check)(channel, _utils.is.channel, 'flush(channel): argument ' + channel + ' is not valid channel');
	  return effect(FLUSH, channel);
	}
	
	function getContext(prop) {
	  (0, _utils.check)(prop, _utils.is.string, 'getContext(prop): argument ' + prop + ' is not a string');
	  return effect(GET_CONTEXT, prop);
	}
	
	function setContext(props) {
	  (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)(null, props));
	  return effect(SET_CONTEXT, props);
	}
	
	function takeEvery(patternOrChannel, worker) {
	  for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
	    args[_key8 - 2] = arguments[_key8];
	  }
	
	  return fork.apply(undefined, [_sagaHelpers.takeEveryHelper, patternOrChannel, worker].concat(args));
	}
	
	function takeLatest(patternOrChannel, worker) {
	  for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
	    args[_key9 - 2] = arguments[_key9];
	  }
	
	  return fork.apply(undefined, [_sagaHelpers.takeLatestHelper, patternOrChannel, worker].concat(args));
	}
	
	function throttle(ms, pattern, worker) {
	  for (var _len10 = arguments.length, args = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
	    args[_key10 - 3] = arguments[_key10];
	  }
	
	  return fork.apply(undefined, [_sagaHelpers.throttleHelper, ms, pattern, worker].concat(args));
	}
	
	var createAsEffectType = function createAsEffectType(type) {
	  return function (effect) {
	    return effect && effect[IO] && effect[type];
	  };
	};
	
	var asEffect = exports.asEffect = {
	  take: createAsEffectType(TAKE),
	  put: createAsEffectType(PUT),
	  all: createAsEffectType(ALL),
	  race: createAsEffectType(RACE),
	  call: createAsEffectType(CALL),
	  cps: createAsEffectType(CPS),
	  fork: createAsEffectType(FORK),
	  join: createAsEffectType(JOIN),
	  cancel: createAsEffectType(CANCEL),
	  select: createAsEffectType(SELECT),
	  actionChannel: createAsEffectType(ACTION_CHANNEL),
	  cancelled: createAsEffectType(CANCELLED),
	  flush: createAsEffectType(FLUSH),
	  getContext: createAsEffectType(GET_CONTEXT),
	  setContext: createAsEffectType(SET_CONTEXT)
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.check = check;
	exports.hasOwn = hasOwn;
	exports.remove = remove;
	exports.deferred = deferred;
	exports.arrayOfDeffered = arrayOfDeffered;
	exports.delay = delay;
	exports.createMockTask = createMockTask;
	exports.autoInc = autoInc;
	exports.makeIterator = makeIterator;
	exports.log = log;
	exports.deprecate = deprecate;
	var sym = exports.sym = function sym(id) {
	  return '@@redux-saga/' + id;
	};
	
	var TASK = exports.TASK = sym('TASK');
	var HELPER = exports.HELPER = sym('HELPER');
	var MATCH = exports.MATCH = sym('MATCH');
	var CANCEL = exports.CANCEL = sym('CANCEL_PROMISE');
	var SAGA_ACTION = exports.SAGA_ACTION = sym('SAGA_ACTION');
	var SELF_CANCELLATION = exports.SELF_CANCELLATION = sym('SELF_CANCELLATION');
	var konst = exports.konst = function konst(v) {
	  return function () {
	    return v;
	  };
	};
	var kTrue = exports.kTrue = konst(true);
	var kFalse = exports.kFalse = konst(false);
	var noop = exports.noop = function noop() {};
	var ident = exports.ident = function ident(v) {
	  return v;
	};
	
	function check(value, predicate, error) {
	  if (!predicate(value)) {
	    log('error', 'uncaught at check', error);
	    throw new Error(error);
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(object, property) {
	  return is.notUndef(object) && hasOwnProperty.call(object, property);
	}
	
	var is = exports.is = {
	  undef: function undef(v) {
	    return v === null || v === undefined;
	  },
	  notUndef: function notUndef(v) {
	    return v !== null && v !== undefined;
	  },
	  func: function func(f) {
	    return typeof f === 'function';
	  },
	  number: function number(n) {
	    return typeof n === 'number';
	  },
	  string: function string(s) {
	    return typeof s === 'string';
	  },
	  array: Array.isArray,
	  object: function object(obj) {
	    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  },
	  promise: function promise(p) {
	    return p && is.func(p.then);
	  },
	  iterator: function iterator(it) {
	    return it && is.func(it.next) && is.func(it.throw);
	  },
	  iterable: function iterable(it) {
	    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
	  },
	  task: function task(t) {
	    return t && t[TASK];
	  },
	  observable: function observable(ob) {
	    return ob && is.func(ob.subscribe);
	  },
	  buffer: function buffer(buf) {
	    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
	  },
	  pattern: function pattern(pat) {
	    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
	  },
	  channel: function channel(ch) {
	    return ch && is.func(ch.take) && is.func(ch.close);
	  },
	  helper: function helper(it) {
	    return it && it[HELPER];
	  },
	  stringableFunc: function stringableFunc(f) {
	    return is.func(f) && hasOwn(f, 'toString');
	  }
	};
	
	var object = exports.object = {
	  assign: function assign(target, source) {
	    for (var i in source) {
	      if (hasOwn(source, i)) {
	        target[i] = source[i];
	      }
	    }
	  }
	};
	
	function remove(array, item) {
	  var index = array.indexOf(item);
	  if (index >= 0) {
	    array.splice(index, 1);
	  }
	}
	
	var array = exports.array = {
	  from: function from(obj) {
	    var arr = Array(obj.length);
	    for (var i in obj) {
	      if (hasOwn(obj, i)) {
	        arr[i] = obj[i];
	      }
	    }
	    return arr;
	  }
	};
	
	function deferred() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var def = _extends({}, props);
	  var promise = new Promise(function (resolve, reject) {
	    def.resolve = resolve;
	    def.reject = reject;
	  });
	  def.promise = promise;
	  return def;
	}
	
	function arrayOfDeffered(length) {
	  var arr = [];
	  for (var i = 0; i < length; i++) {
	    arr.push(deferred());
	  }
	  return arr;
	}
	
	function delay(ms) {
	  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	  var timeoutId = void 0;
	  var promise = new Promise(function (resolve) {
	    timeoutId = setTimeout(function () {
	      return resolve(val);
	    }, ms);
	  });
	
	  promise[CANCEL] = function () {
	    return clearTimeout(timeoutId);
	  };
	
	  return promise;
	}
	
	function createMockTask() {
	  var _ref;
	
	  var running = true;
	  var _result = void 0,
	      _error = void 0;
	
	  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
	    return running;
	  }, _ref.result = function result() {
	    return _result;
	  }, _ref.error = function error() {
	    return _error;
	  }, _ref.setRunning = function setRunning(b) {
	    return running = b;
	  }, _ref.setResult = function setResult(r) {
	    return _result = r;
	  }, _ref.setError = function setError(e) {
	    return _error = e;
	  }, _ref;
	}
	
	function autoInc() {
	  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	  return function () {
	    return ++seed;
	  };
	}
	
	var uid = exports.uid = autoInc();
	
	var kThrow = function kThrow(err) {
	  throw err;
	};
	var kReturn = function kReturn(value) {
	  return { value: value, done: true };
	};
	function makeIterator(next) {
	  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	  var isHelper = arguments[3];
	
	  var iterator = { name: name, next: next, throw: thro, return: kReturn };
	
	  if (isHelper) {
	    iterator[HELPER] = true;
	  }
	  if (typeof Symbol !== 'undefined') {
	    iterator[Symbol.iterator] = function () {
	      return iterator;
	    };
	  }
	  return iterator;
	}
	
	/**
	  Print error in a useful way whether in a browser environment
	  (with expandable error stack traces), or in a node.js environment
	  (text-only log output)
	 **/
	function log(level, message) {
	  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	  /*eslint-disable no-console*/
	  if (typeof window === 'undefined') {
	    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
	  } else {
	    console[level](message, error);
	  }
	}
	
	function deprecate(fn, deprecationWarning) {
	  return function () {
	    if (process.env.NODE_ENV === 'development') log('warn', deprecationWarning);
	    return fn.apply(undefined, arguments);
	  };
	}
	
	var updateIncentive = exports.updateIncentive = function updateIncentive(deprecated, preferred) {
	  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
	};
	
	var internalErr = exports.internalErr = function internalErr(err) {
	  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
	};
	
	var createSetContextWarning = exports.createSetContextWarning = function createSetContextWarning(ctx, props) {
	  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
	};
	
	var wrapSagaDispatch = exports.wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
	  return function (action) {
	    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
	  };
	};
	
	var cloneableGenerator = exports.cloneableGenerator = function cloneableGenerator(generatorFunc) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var history = [];
	    var gen = generatorFunc.apply(undefined, args);
	    return {
	      next: function next(arg) {
	        history.push(arg);
	        return gen.next(arg);
	      },
	      clone: function clone() {
	        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
	        history.forEach(function (arg) {
	          return clonedGen.next(arg);
	        });
	        return clonedGen;
	      },
	      return: function _return(value) {
	        return gen.return(value);
	      },
	      throw: function _throw(exception) {
	        return gen.throw(exception);
	      }
	    };
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.throttleHelper = exports.takeLatestHelper = exports.takeEveryHelper = exports.throttle = exports.takeLatest = exports.takeEvery = undefined;
	
	var _takeEvery = __webpack_require__(14);
	
	var _takeEvery2 = _interopRequireDefault(_takeEvery);
	
	var _takeLatest = __webpack_require__(19);
	
	var _takeLatest2 = _interopRequireDefault(_takeLatest);
	
	var _throttle = __webpack_require__(20);
	
	var _throttle2 = _interopRequireDefault(_throttle);
	
	var _utils = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var deprecationWarning = function deprecationWarning(helperName) {
	  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
	};
	
	var takeEvery = /*#__PURE__*/(0, _utils.deprecate)(_takeEvery2.default, /*#__PURE__*/deprecationWarning('takeEvery'));
	var takeLatest = /*#__PURE__*/(0, _utils.deprecate)(_takeLatest2.default, /*#__PURE__*/deprecationWarning('takeLatest'));
	var throttle = /*#__PURE__*/(0, _utils.deprecate)(_throttle2.default, /*#__PURE__*/deprecationWarning('throttle'));
	
	exports.takeEvery = takeEvery;
	exports.takeLatest = takeLatest;
	exports.throttle = throttle;
	exports.takeEveryHelper = _takeEvery2.default;
	exports.takeLatestHelper = _takeLatest2.default;
	exports.throttleHelper = _throttle2.default;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = takeEvery;
	
	var _fsmIterator = __webpack_require__(15);
	
	var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
	
	var _io = __webpack_require__(10);
	
	var _channel = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function takeEvery(patternOrChannel, worker) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  var yTake = { done: false, value: (0, _io.take)(patternOrChannel) };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	
	  var action = void 0,
	      setAction = function setAction(ac) {
	    return action = ac;
	  };
	
	  return (0, _fsmIterator2.default)({
	    q1: function q1() {
	      return ['q2', yTake, setAction];
	    },
	    q2: function q2() {
	      return action === _channel.END ? [_fsmIterator.qEnd] : ['q1', yFork(action)];
	    }
	  }, 'q1', 'takeEvery(' + (0, _fsmIterator.safeName)(patternOrChannel) + ', ' + worker.name + ')');
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.qEnd = undefined;
	exports.safeName = safeName;
	exports.default = fsmIterator;
	
	var _utils = __webpack_require__(11);
	
	var done = { done: true, value: undefined };
	var qEnd = exports.qEnd = {};
	
	function safeName(patternOrChannel) {
	  if (_utils.is.channel(patternOrChannel)) {
	    return 'channel';
	  } else if (Array.isArray(patternOrChannel)) {
	    return String(patternOrChannel.map(function (entry) {
	      return String(entry);
	    }));
	  } else {
	    return String(patternOrChannel);
	  }
	}
	
	function fsmIterator(fsm, q0) {
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';
	
	  var updateState = void 0,
	      qNext = q0;
	
	  function next(arg, error) {
	    if (qNext === qEnd) {
	      return done;
	    }
	
	    if (error) {
	      qNext = qEnd;
	      throw error;
	    } else {
	      updateState && updateState(arg);
	
	      var _fsm$qNext = fsm[qNext](),
	          q = _fsm$qNext[0],
	          output = _fsm$qNext[1],
	          _updateState = _fsm$qNext[2];
	
	      qNext = q;
	      updateState = _updateState;
	      return qNext === qEnd ? done : output;
	    }
	  }
	
	  return (0, _utils.makeIterator)(next, function (error) {
	    return next(null, error);
	  }, name, true);
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.UNDEFINED_INPUT_ERROR = exports.INVALID_BUFFER = exports.isEnd = exports.END = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.emitter = emitter;
	exports.channel = channel;
	exports.eventChannel = eventChannel;
	exports.stdChannel = stdChannel;
	
	var _utils = __webpack_require__(11);
	
	var _buffers = __webpack_require__(17);
	
	var _scheduler = __webpack_require__(18);
	
	var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
	var END = exports.END = { type: CHANNEL_END_TYPE };
	var isEnd = exports.isEnd = function isEnd(a) {
	  return a && a.type === CHANNEL_END_TYPE;
	};
	
	function emitter() {
	  var subscribers = [];
	
	  function subscribe(sub) {
	    subscribers.push(sub);
	    return function () {
	      return (0, _utils.remove)(subscribers, sub);
	    };
	  }
	
	  function emit(item) {
	    var arr = subscribers.slice();
	    for (var i = 0, len = arr.length; i < len; i++) {
	      arr[i](item);
	    }
	  }
	
	  return {
	    subscribe: subscribe,
	    emit: emit
	  };
	}
	
	var INVALID_BUFFER = exports.INVALID_BUFFER = 'invalid buffer passed to channel factory function';
	var UNDEFINED_INPUT_ERROR = exports.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';
	
	if (process.env.NODE_ENV !== 'production') {
	  exports.UNDEFINED_INPUT_ERROR = UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
	}
	
	function channel() {
	  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers.buffers.fixed();
	
	  var closed = false;
	  var takers = [];
	
	  (0, _utils.check)(buffer, _utils.is.buffer, INVALID_BUFFER);
	
	  function checkForbiddenStates() {
	    if (closed && takers.length) {
	      throw (0, _utils.internalErr)('Cannot have a closed channel with pending takers');
	    }
	    if (takers.length && !buffer.isEmpty()) {
	      throw (0, _utils.internalErr)('Cannot have pending takers with non empty buffer');
	    }
	  }
	
	  function put(input) {
	    checkForbiddenStates();
	    (0, _utils.check)(input, _utils.is.notUndef, UNDEFINED_INPUT_ERROR);
	    if (closed) {
	      return;
	    }
	    if (!takers.length) {
	      return buffer.put(input);
	    }
	    for (var i = 0; i < takers.length; i++) {
	      var cb = takers[i];
	      if (!cb[_utils.MATCH] || cb[_utils.MATCH](input)) {
	        takers.splice(i, 1);
	        return cb(input);
	      }
	    }
	  }
	
	  function take(cb) {
	    checkForbiddenStates();
	    (0, _utils.check)(cb, _utils.is.func, "channel.take's callback must be a function");
	
	    if (closed && buffer.isEmpty()) {
	      cb(END);
	    } else if (!buffer.isEmpty()) {
	      cb(buffer.take());
	    } else {
	      takers.push(cb);
	      cb.cancel = function () {
	        return (0, _utils.remove)(takers, cb);
	      };
	    }
	  }
	
	  function flush(cb) {
	    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
	    (0, _utils.check)(cb, _utils.is.func, "channel.flush' callback must be a function");
	    if (closed && buffer.isEmpty()) {
	      cb(END);
	      return;
	    }
	    cb(buffer.flush());
	  }
	
	  function close() {
	    checkForbiddenStates();
	    if (!closed) {
	      closed = true;
	      if (takers.length) {
	        var arr = takers;
	        takers = [];
	        for (var i = 0, len = arr.length; i < len; i++) {
	          arr[i](END);
	        }
	      }
	    }
	  }
	
	  return {
	    take: take,
	    put: put,
	    flush: flush,
	    close: close,
	    get __takers__() {
	      return takers;
	    },
	    get __closed__() {
	      return closed;
	    }
	  };
	}
	
	function eventChannel(subscribe) {
	  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers.buffers.none();
	  var matcher = arguments[2];
	
	  /**
	    should be if(typeof matcher !== undefined) instead?
	    see PR #273 for a background discussion
	  **/
	  if (arguments.length > 2) {
	    (0, _utils.check)(matcher, _utils.is.func, 'Invalid match function passed to eventChannel');
	  }
	
	  var chan = channel(buffer);
	  var close = function close() {
	    if (!chan.__closed__) {
	      if (unsubscribe) {
	        unsubscribe();
	      }
	      chan.close();
	    }
	  };
	  var unsubscribe = subscribe(function (input) {
	    if (isEnd(input)) {
	      close();
	      return;
	    }
	    if (matcher && !matcher(input)) {
	      return;
	    }
	    chan.put(input);
	  });
	  if (chan.__closed__) {
	    unsubscribe();
	  }
	
	  if (!_utils.is.func(unsubscribe)) {
	    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
	  }
	
	  return {
	    take: chan.take,
	    flush: chan.flush,
	    close: close
	  };
	}
	
	function stdChannel(subscribe) {
	  var chan = eventChannel(function (cb) {
	    return subscribe(function (input) {
	      if (input[_utils.SAGA_ACTION]) {
	        cb(input);
	        return;
	      }
	      (0, _scheduler.asap)(function () {
	        return cb(input);
	      });
	    });
	  });
	
	  return _extends({}, chan, {
	    take: function take(cb, matcher) {
	      if (arguments.length > 1) {
	        (0, _utils.check)(matcher, _utils.is.func, "channel.take's matcher argument must be a function");
	        cb[_utils.MATCH] = matcher;
	      }
	      chan.take(cb);
	    }
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.buffers = exports.BUFFER_OVERFLOW = undefined;
	
	var _utils = __webpack_require__(11);
	
	var BUFFER_OVERFLOW = exports.BUFFER_OVERFLOW = "Channel's Buffer overflow!";
	
	var ON_OVERFLOW_THROW = 1;
	var ON_OVERFLOW_DROP = 2;
	var ON_OVERFLOW_SLIDE = 3;
	var ON_OVERFLOW_EXPAND = 4;
	
	var zeroBuffer = { isEmpty: _utils.kTrue, put: _utils.noop, take: _utils.noop };
	
	function ringBuffer() {
	  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
	  var overflowAction = arguments[1];
	
	  var arr = new Array(limit);
	  var length = 0;
	  var pushIndex = 0;
	  var popIndex = 0;
	
	  var push = function push(it) {
	    arr[pushIndex] = it;
	    pushIndex = (pushIndex + 1) % limit;
	    length++;
	  };
	
	  var take = function take() {
	    if (length != 0) {
	      var it = arr[popIndex];
	      arr[popIndex] = null;
	      length--;
	      popIndex = (popIndex + 1) % limit;
	      return it;
	    }
	  };
	
	  var flush = function flush() {
	    var items = [];
	    while (length) {
	      items.push(take());
	    }
	    return items;
	  };
	
	  return {
	    isEmpty: function isEmpty() {
	      return length == 0;
	    },
	    put: function put(it) {
	      if (length < limit) {
	        push(it);
	      } else {
	        var doubledLimit = void 0;
	        switch (overflowAction) {
	          case ON_OVERFLOW_THROW:
	            throw new Error(BUFFER_OVERFLOW);
	          case ON_OVERFLOW_SLIDE:
	            arr[pushIndex] = it;
	            pushIndex = (pushIndex + 1) % limit;
	            popIndex = pushIndex;
	            break;
	          case ON_OVERFLOW_EXPAND:
	            doubledLimit = 2 * limit;
	
	            arr = flush();
	
	            length = arr.length;
	            pushIndex = arr.length;
	            popIndex = 0;
	
	            arr.length = doubledLimit;
	            limit = doubledLimit;
	
	            push(it);
	            break;
	          default:
	          // DROP
	        }
	      }
	    },
	    take: take,
	    flush: flush
	  };
	}
	
	var buffers = exports.buffers = {
	  none: function none() {
	    return zeroBuffer;
	  },
	  fixed: function fixed(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_THROW);
	  },
	  dropping: function dropping(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_DROP);
	  },
	  sliding: function sliding(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
	  },
	  expanding: function expanding(initialSize) {
	    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.asap = asap;
	exports.suspend = suspend;
	exports.flush = flush;
	var queue = [];
	/**
	  Variable to hold a counting semaphore
	  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
	    already suspended)
	  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
	    triggers flushing the queued tasks.
	**/
	var semaphore = 0;
	
	/**
	  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
	  and flushed after this task has finished (assuming the scheduler endup in a released
	  state).
	**/
	function exec(task) {
	  try {
	    suspend();
	    task();
	  } finally {
	    release();
	  }
	}
	
	/**
	  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
	**/
	function asap(task) {
	  queue.push(task);
	
	  if (!semaphore) {
	    suspend();
	    flush();
	  }
	}
	
	/**
	  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
	  scheduler is released.
	**/
	function suspend() {
	  semaphore++;
	}
	
	/**
	  Puts the scheduler in a `released` state.
	**/
	function release() {
	  semaphore--;
	}
	
	/**
	  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
	**/
	function flush() {
	  release();
	
	  var task = void 0;
	  while (!semaphore && (task = queue.shift()) !== undefined) {
	    exec(task);
	  }
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = takeLatest;
	
	var _fsmIterator = __webpack_require__(15);
	
	var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
	
	var _io = __webpack_require__(10);
	
	var _channel = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function takeLatest(patternOrChannel, worker) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  var yTake = { done: false, value: (0, _io.take)(patternOrChannel) };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	  var yCancel = function yCancel(task) {
	    return { done: false, value: (0, _io.cancel)(task) };
	  };
	
	  var task = void 0,
	      action = void 0;
	  var setTask = function setTask(t) {
	    return task = t;
	  };
	  var setAction = function setAction(ac) {
	    return action = ac;
	  };
	
	  return (0, _fsmIterator2.default)({
	    q1: function q1() {
	      return ['q2', yTake, setAction];
	    },
	    q2: function q2() {
	      return action === _channel.END ? [_fsmIterator.qEnd] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
	    },
	    q3: function q3() {
	      return ['q1', yFork(action), setTask];
	    }
	  }, 'q1', 'takeLatest(' + (0, _fsmIterator.safeName)(patternOrChannel) + ', ' + worker.name + ')');
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = throttle;
	
	var _fsmIterator = __webpack_require__(15);
	
	var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
	
	var _io = __webpack_require__(10);
	
	var _channel = __webpack_require__(16);
	
	var _buffers = __webpack_require__(17);
	
	var _utils = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function throttle(delayLength, pattern, worker) {
	  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	    args[_key - 3] = arguments[_key];
	  }
	
	  var action = void 0,
	      channel = void 0;
	
	  var yActionChannel = { done: false, value: (0, _io.actionChannel)(pattern, _buffers.buffers.sliding(1)) };
	  var yTake = function yTake() {
	    return { done: false, value: (0, _io.take)(channel) };
	  };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	  var yDelay = { done: false, value: (0, _io.call)(_utils.delay, delayLength) };
	
	  var setAction = function setAction(ac) {
	    return action = ac;
	  };
	  var setChannel = function setChannel(ch) {
	    return channel = ch;
	  };
	
	  return (0, _fsmIterator2.default)({
	    q1: function q1() {
	      return ['q2', yActionChannel, setChannel];
	    },
	    q2: function q2() {
	      return ['q3', yTake(), setAction];
	    },
	    q3: function q3() {
	      return action === _channel.END ? [_fsmIterator.qEnd] : ['q4', yFork(action)];
	    },
	    q4: function q4() {
	      return ['q2', yDelay];
	    }
	  }, 'q1', 'throttle(' + (0, _fsmIterator.safeName)(pattern) + ', ' + worker.name + ')');
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(6);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.getAccounts = getAccounts;
	
	var _reduxSaga = __webpack_require__(4);
	
	var _effects = __webpack_require__(9);
	
	var _accountBalancesSaga = __webpack_require__(22);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [getAccounts, createAccountsPollChannel, callCreateAccountsPollChannel, accountsSaga].map(_regenerator2.default.mark);
	
	/*
	 * Fetch Accounts List
	 */
	
	function getAccounts(action) {
	  var web3, accounts;
	  return _regenerator2.default.wrap(function getAccounts$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          web3 = action.web3;
	          _context.prev = 1;
	          _context.next = 4;
	          return (0, _effects.call)(web3.eth.getAccounts);
	
	        case 4:
	          accounts = _context.sent;
	
	          if (accounts) {
	            _context.next = 7;
	            break;
	          }
	
	          throw 'No accounts found!';
	
	        case 7:
	          _context.next = 9;
	          return (0, _effects.put)({ type: 'ACCOUNTS_FETCHED', accounts: accounts });
	
	        case 9:
	          _context.next = 17;
	          break;
	
	        case 11:
	          _context.prev = 11;
	          _context.t0 = _context['catch'](1);
	          _context.next = 15;
	          return (0, _effects.put)({ type: 'ACCOUNTS_FAILED', error: _context.t0 });
	
	        case 15:
	          console.error('Error fetching accounts:');
	          console.error(_context.t0);
	
	        case 17:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this, [[1, 11]]);
	}
	
	/*
	 * Poll for Account Changes
	 */
	
	function createAccountsPollChannel(_ref) {
	  var interval = _ref.interval,
	      web3 = _ref.web3;
	  return _regenerator2.default.wrap(function createAccountsPollChannel$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          return _context2.abrupt('return', (0, _reduxSaga.eventChannel)(function (emit) {
	            var persistedWeb3 = web3;
	
	            var accountsPoller = setInterval(function () {
	              emit({ type: 'SYNCING_ACCOUNTS', persistedWeb3: persistedWeb3 });
	            }, interval); // options.polls.accounts
	
	            var unsubscribe = function unsubscribe() {
	              clearInterval(accountsPoller);
	            };
	
	            return unsubscribe;
	          }));
	
	        case 1:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}
	
	function callCreateAccountsPollChannel(_ref2) {
	  var interval = _ref2.interval,
	      web3 = _ref2.web3;
	  var accountsChannel, event;
	  return _regenerator2.default.wrap(function callCreateAccountsPollChannel$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          _context3.next = 2;
	          return (0, _effects.call)(createAccountsPollChannel, { interval: interval, web3: web3 });
	
	        case 2:
	          accountsChannel = _context3.sent;
	          _context3.prev = 3;
	
	        case 4:
	          if (false) {
	            _context3.next = 17;
	            break;
	          }
	
	          _context3.next = 7;
	          return (0, _effects.take)(accountsChannel);
	
	        case 7:
	          event = _context3.sent;
	
	          if (!(event.type === 'SYNCING_ACCOUNTS')) {
	            _context3.next = 13;
	            break;
	          }
	
	          _context3.next = 11;
	          return (0, _effects.call)(getAccounts, { web3: event.persistedWeb3 });
	
	        case 11:
	          _context3.next = 13;
	          return (0, _effects.call)(_accountBalancesSaga.getAccountBalances, { web3: event.persistedWeb3 });
	
	        case 13:
	          _context3.next = 15;
	          return (0, _effects.put)(event);
	
	        case 15:
	          _context3.next = 4;
	          break;
	
	        case 17:
	          _context3.prev = 17;
	
	          accountsChannel.close();
	          return _context3.finish(17);
	
	        case 20:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[2], this, [[3,, 17, 20]]);
	}
	
	function accountsSaga() {
	  return _regenerator2.default.wrap(function accountsSaga$(_context4) {
	    while (1) {
	      switch (_context4.prev = _context4.next) {
	        case 0:
	          _context4.next = 2;
	          return (0, _effects.takeLatest)('ACCOUNTS_FETCHING', getAccounts);
	
	        case 2:
	          _context4.next = 4;
	          return (0, _effects.takeLatest)('ACCOUNTS_POLLING', callCreateAccountsPollChannel);
	
	        case 4:
	        case 'end':
	          return _context4.stop();
	      }
	    }
	  }, _marked[3], this);
	}
	
	exports.default = accountsSaga;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(6);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.getAccountBalances = getAccountBalances;
	
	var _effects = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [getAccountBalances, accountBalancesSaga].map(_regenerator2.default.mark);
	
	function getAccountBalances(action) {
	  var accounts, web3, i, account, accountBalance;
	  return _regenerator2.default.wrap(function getAccountBalances$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return (0, _effects.select)(getAccountsState);
	
	        case 2:
	          accounts = _context.sent;
	          web3 = action.web3;
	
	
	          if (!accounts) {
	            console.error('No accounts found while attempting to fetch balances!');
	          }
	
	          _context.prev = 5;
	          _context.t0 = _regenerator2.default.keys(accounts);
	
	        case 7:
	          if ((_context.t1 = _context.t0()).done) {
	            _context.next = 17;
	            break;
	          }
	
	          i = _context.t1.value;
	          account = accounts[i];
	          _context.next = 12;
	          return (0, _effects.call)(web3.eth.getBalance, account);
	
	        case 12:
	          accountBalance = _context.sent;
	          _context.next = 15;
	          return (0, _effects.put)({ type: 'ACCOUNT_BALANCE_FETCHED', account: account, accountBalance: accountBalance });
	
	        case 15:
	          _context.next = 7;
	          break;
	
	        case 17:
	          _context.next = 25;
	          break;
	
	        case 19:
	          _context.prev = 19;
	          _context.t2 = _context['catch'](5);
	          _context.next = 23;
	          return (0, _effects.put)({ type: 'ACCOUNT_BALANCE_FAILED', error: _context.t2 });
	
	        case 23:
	          console.error('Error fetching account ' + account + ' balance:');
	          console.error(_context.t2);
	
	        case 25:
	          _context.next = 27;
	          return (0, _effects.put)({ type: 'ACCOUNT_BALANCES_FETCHED' });
	
	        case 27:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this, [[5, 19]]);
	}
	
	var getAccountsState = function getAccountsState(state) {
	  return state.accounts;
	};
	
	function accountBalancesSaga() {
	  return _regenerator2.default.wrap(function accountBalancesSaga$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return (0, _effects.takeLatest)('ACCOUNT_BALANCES_FETCHING', getAccountBalances);
	
	        case 2:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}
	
	exports.default = accountBalancesSaga;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(6);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _reduxSaga = __webpack_require__(4);
	
	var _effects = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [callCreateBlockChannel, callCreateBlockPollChannel, processBlockHeader, processBlock, blocksSaga].map(_regenerator2.default.mark);
	
	var BlockTracker = __webpack_require__(24);
	
	/*
	 * Listen for Blocks
	 */
	
	function createBlockChannel(_ref) {
	  var drizzle = _ref.drizzle,
	      web3 = _ref.web3,
	      syncAlways = _ref.syncAlways;
	
	  return (0, _reduxSaga.eventChannel)(function (emit) {
	    var blockEvents = web3.eth.subscribe('newBlockHeaders', function (error, result) {
	      if (error) {
	        emit({ type: 'BLOCKS_FAILED', error: error });
	
	        console.error('Error in block header subscription:');
	        console.error(error);
	
	        emit(_reduxSaga.END);
	      }
	    }).on('data', function (blockHeader) {
	      emit({ type: 'BLOCK_RECEIVED', blockHeader: blockHeader, drizzle: drizzle, web3: web3, syncAlways: syncAlways });
	    }).on('error', function (error) {
	      emit({ type: 'BLOCKS_FAILED', error: error });
	      emit(_reduxSaga.END);
	    });
	
	    var unsubscribe = function unsubscribe() {
	      blockEvents.off();
	    };
	
	    return unsubscribe;
	  });
	}
	
	function callCreateBlockChannel(_ref2) {
	  var drizzle = _ref2.drizzle,
	      web3 = _ref2.web3,
	      syncAlways = _ref2.syncAlways;
	  var blockChannel, event;
	  return _regenerator2.default.wrap(function callCreateBlockChannel$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return (0, _effects.call)(createBlockChannel, { drizzle: drizzle, web3: web3 });
	
	        case 2:
	          blockChannel = _context.sent;
	          _context.prev = 3;
	
	        case 4:
	          if (false) {
	            _context.next = 12;
	            break;
	          }
	
	          _context.next = 7;
	          return (0, _effects.take)(blockChannel);
	
	        case 7:
	          event = _context.sent;
	          _context.next = 10;
	          return (0, _effects.put)(event);
	
	        case 10:
	          _context.next = 4;
	          break;
	
	        case 12:
	          _context.prev = 12;
	
	          blockChannel.close();
	          return _context.finish(12);
	
	        case 15:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this, [[3,, 12, 15]]);
	}
	
	/*
	 * Poll for Blocks
	 */
	
	function createBlockPollChannel(_ref3) {
	  var drizzle = _ref3.drizzle,
	      interval = _ref3.interval,
	      web3 = _ref3.web3,
	      syncAlways = _ref3.syncAlways;
	
	  return (0, _reduxSaga.eventChannel)(function (emit) {
	    var blockTracker = new BlockTracker({ provider: web3.currentProvider, pollingInterval: interval });
	
	    blockTracker.on('latest', function (block) {
	      emit({ type: 'BLOCK_FOUND', block: block, drizzle: drizzle, web3: web3, syncAlways: syncAlways });
	    });
	
	    blockTracker.start().catch(function (error) {
	      emit({ type: 'BLOCKS_FAILED', error: error });
	      emit(_reduxSaga.END);
	    });
	
	    var unsubscribe = function unsubscribe() {
	      blockTracker.stop();
	    };
	
	    return unsubscribe;
	  });
	}
	
	function callCreateBlockPollChannel(_ref4) {
	  var drizzle = _ref4.drizzle,
	      interval = _ref4.interval,
	      web3 = _ref4.web3,
	      syncAlways = _ref4.syncAlways;
	  var blockChannel, event;
	  return _regenerator2.default.wrap(function callCreateBlockPollChannel$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return (0, _effects.call)(createBlockPollChannel, { drizzle: drizzle, interval: interval, web3: web3 });
	
	        case 2:
	          blockChannel = _context2.sent;
	          _context2.prev = 3;
	
	        case 4:
	          if (false) {
	            _context2.next = 12;
	            break;
	          }
	
	          _context2.next = 7;
	          return (0, _effects.take)(blockChannel);
	
	        case 7:
	          event = _context2.sent;
	          _context2.next = 10;
	          return (0, _effects.put)(event);
	
	        case 10:
	          _context2.next = 4;
	          break;
	
	        case 12:
	          _context2.prev = 12;
	
	          blockChannel.close();
	          return _context2.finish(12);
	
	        case 15:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this, [[3,, 12, 15]]);
	}
	
	/*
	 * Process Blocks
	 */
	
	function processBlockHeader(_ref5) {
	  var blockHeader = _ref5.blockHeader,
	      drizzle = _ref5.drizzle,
	      web3 = _ref5.web3,
	      syncAlways = _ref5.syncAlways;
	  var blockNumber, block;
	  return _regenerator2.default.wrap(function processBlockHeader$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          blockNumber = blockHeader.number;
	          _context3.prev = 1;
	          _context3.next = 4;
	          return (0, _effects.call)(web3.eth.getBlock, blockNumber, true);
	
	        case 4:
	          block = _context3.sent;
	          _context3.next = 7;
	          return (0, _effects.call)(processBlock, { block: block, drizzle: drizzle, web3: web3, syncAlways: syncAlways });
	
	        case 7:
	          _context3.next = 16;
	          break;
	
	        case 9:
	          _context3.prev = 9;
	          _context3.t0 = _context3['catch'](1);
	
	          console.error('Error in block processing:');
	          console.error(_context3.t0);
	
	          _context3.next = 15;
	          return (0, _effects.put)({ type: 'BLOCK_FAILED', error: _context3.t0 });
	
	        case 15:
	          return _context3.abrupt('return');
	
	        case 16:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[2], this, [[1, 9]]);
	}
	
	function processBlock(_ref6) {
	  var block = _ref6.block,
	      drizzle = _ref6.drizzle,
	      web3 = _ref6.web3,
	      syncAlways = _ref6.syncAlways;
	  var txs, i, from, fromContract, to, toContract;
	  return _regenerator2.default.wrap(function processBlock$(_context4) {
	    while (1) {
	      switch (_context4.prev = _context4.next) {
	        case 0:
	          _context4.prev = 0;
	
	          if (!syncAlways) {
	            _context4.next = 5;
	            break;
	          }
	
	          _context4.next = 4;
	          return all(drizzle.contracts.map(function (contract) {
	            (0, _effects.put)({ type: 'CONTRACT_SYNCING', contract: contract });
	          }));
	
	        case 4:
	          return _context4.abrupt('return');
	
	        case 5:
	          txs = block.transactions;
	
	          if (!(txs.length > 0)) {
	            _context4.next = 22;
	            break;
	          }
	
	          i = 0;
	
	        case 8:
	          if (!(i < txs.length)) {
	            _context4.next = 22;
	            break;
	          }
	
	          from = txs[i].from || '';
	          fromContract = drizzle.findContractByAddress(from.toLowerCase());
	
	          if (!fromContract) {
	            _context4.next = 14;
	            break;
	          }
	
	          _context4.next = 14;
	          return (0, _effects.put)({ type: 'CONTRACT_SYNCING', contract: fromContract });
	
	        case 14:
	          to = txs[i].to || '';
	          toContract = drizzle.findContractByAddress(to.toLowerCase());
	
	          if (!toContract) {
	            _context4.next = 19;
	            break;
	          }
	
	          _context4.next = 19;
	          return (0, _effects.put)({ type: 'CONTRACT_SYNCING', contract: toContract });
	
	        case 19:
	          i++;
	          _context4.next = 8;
	          break;
	
	        case 22:
	          _context4.next = 31;
	          break;
	
	        case 24:
	          _context4.prev = 24;
	          _context4.t0 = _context4['catch'](0);
	
	          console.error('Error in block processing:');
	          console.error(_context4.t0);
	
	          _context4.next = 30;
	          return (0, _effects.put)({ type: 'BLOCK_FAILED', error: _context4.t0 });
	
	        case 30:
	          return _context4.abrupt('return');
	
	        case 31:
	        case 'end':
	          return _context4.stop();
	      }
	    }
	  }, _marked[3], this, [[0, 24]]);
	}
	
	function blocksSaga() {
	  return _regenerator2.default.wrap(function blocksSaga$(_context5) {
	    while (1) {
	      switch (_context5.prev = _context5.next) {
	        case 0:
	          _context5.next = 2;
	          return (0, _effects.takeLatest)('BLOCKS_LISTENING', callCreateBlockChannel);
	
	        case 2:
	          _context5.next = 4;
	          return (0, _effects.takeEvery)('BLOCK_RECEIVED', processBlockHeader);
	
	        case 4:
	          _context5.next = 6;
	          return (0, _effects.takeLatest)('BLOCKS_POLLING', callCreateBlockPollChannel);
	
	        case 6:
	          _context5.next = 8;
	          return (0, _effects.takeEvery)('BLOCK_FOUND', processBlock);
	
	        case 8:
	        case 'end':
	          return _context5.stop();
	      }
	    }
	  }, _marked[4], this);
	}
	
	exports.default = blocksSaga;

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(6);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.addContract = addContract;
	exports.instantiateWeb3Contract = instantiateWeb3Contract;
	exports.instantiateContract = instantiateContract;
	
	var _reduxSaga = __webpack_require__(4);
	
	var _effects = __webpack_require__(9);
	
	var _DrizzleContract = __webpack_require__(26);
	
	var _DrizzleContract2 = _interopRequireDefault(_DrizzleContract);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var _marked = [addContract, instantiateWeb3Contract, instantiateContract, callListenForContractEvent, callSendContractTx, callCallContractFn, callSyncContract, contractsSaga].map(_regenerator2.default.mark);
	
	function addContract(_ref) {
	  var drizzle = _ref.drizzle,
	      contractConfig = _ref.contractConfig,
	      events = _ref.events,
	      web3 = _ref.web3;
	  var drizzleContract;
	  return _regenerator2.default.wrap(function addContract$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          if (!drizzle.loadingContract[contractConfig.contractName]) {
	            _context.next = 2;
	            break;
	          }
	
	          return _context.abrupt('return', false);
	
	        case 2:
	
	          drizzle.loadingContract[contractConfig.contractName] = true;
	
	          _context.next = 5;
	          return (0, _effects.put)({ type: 'CONTRACT_INITIALIZING', contractConfig: contractConfig });
	
	        case 5:
	          drizzleContract = void 0;
	
	          if (!contractConfig.web3Contract) {
	            _context.next = 12;
	            break;
	          }
	
	          _context.next = 9;
	          return (0, _effects.call)(instantiateWeb3Contract, { web3Contract: contractConfig.web3Contract, name: contractConfig.contractName, events: events, store: drizzle.store, web3: web3 });
	
	        case 9:
	          drizzleContract = _context.sent;
	          _context.next = 15;
	          break;
	
	        case 12:
	          _context.next = 14;
	          return (0, _effects.call)(instantiateContract, { contractArtifact: contractConfig, events: events, store: drizzle.store, web3: web3 });
	
	        case 14:
	          drizzleContract = _context.sent;
	
	        case 15:
	
	          drizzle._addContract(drizzleContract);
	
	          _context.next = 18;
	          return (0, _effects.put)({ type: 'CONTRACT_INITIALIZED', name: contractConfig.contractName });
	
	        case 18:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}
	
	/*
	 * Instantiation
	 */
	
	function instantiateWeb3Contract(_ref2) {
	  var web3Contract = _ref2.web3Contract,
	      name = _ref2.name,
	      events = _ref2.events,
	      store = _ref2.store,
	      web3 = _ref2.web3;
	  return _regenerator2.default.wrap(function instantiateWeb3Contract$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          return _context2.abrupt('return', new _DrizzleContract2.default(web3Contract, web3, name, store, events));
	
	        case 1:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}
	
	function instantiateContract(_ref3) {
	  var contractArtifact = _ref3.contractArtifact,
	      events = _ref3.events,
	      store = _ref3.store,
	      web3 = _ref3.web3;
	  var networkId, web3Contract;
	  return _regenerator2.default.wrap(function instantiateContract$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          _context3.next = 2;
	          return (0, _effects.select)(getNetworkId);
	
	        case 2:
	          networkId = _context3.sent;
	
	
	          // Instantiate the contract.
	          web3Contract = new web3.eth.Contract(contractArtifact.abi, contractArtifact.networks[networkId].address, {
	            from: store.getState().accounts[0],
	            data: contractArtifact.deployedBytecode
	          });
	          return _context3.abrupt('return', new _DrizzleContract2.default(web3Contract, web3, contractArtifact.contractName, store, events, contractArtifact));
	
	        case 5:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[2], this);
	}
	
	/*
	 * Events
	 */
	
	function createContractEventChannel(_ref4) {
	  var contract = _ref4.contract,
	      eventName = _ref4.eventName,
	      eventOptions = _ref4.eventOptions;
	
	  var name = contract.contractName;
	
	  return (0, _reduxSaga.eventChannel)(function (emit) {
	    var eventListener = contract.events[eventName](eventOptions).on('data', function (event) {
	      emit({ type: 'EVENT_FIRED', name: name, event: event });
	    }).on('changed', function (event) {
	      emit({ type: 'EVENT_CHANGED', name: name, event: event });
	    }).on('error', function (error) {
	      emit({ type: 'EVENT_ERROR', name: name, error: error });
	      emit(_reduxSaga.END);
	    });
	
	    var unsubscribe = function unsubscribe() {
	      eventListener.removeListener(eventName);
	    };
	
	    return unsubscribe;
	  });
	}
	
	function callListenForContractEvent(_ref5) {
	  var contract = _ref5.contract,
	      eventName = _ref5.eventName,
	      eventOptions = _ref5.eventOptions;
	  var contractEventChannel, event;
	  return _regenerator2.default.wrap(function callListenForContractEvent$(_context4) {
	    while (1) {
	      switch (_context4.prev = _context4.next) {
	        case 0:
	          _context4.next = 2;
	          return (0, _effects.call)(createContractEventChannel, { contract: contract, eventName: eventName, eventOptions: eventOptions });
	
	        case 2:
	          contractEventChannel = _context4.sent;
	
	        case 3:
	          if (false) {
	            _context4.next = 11;
	            break;
	          }
	
	          _context4.next = 6;
	          return (0, _effects.take)(contractEventChannel);
	
	        case 6:
	          event = _context4.sent;
	          _context4.next = 9;
	          return (0, _effects.put)(event);
	
	        case 9:
	          _context4.next = 3;
	          break;
	
	        case 11:
	        case 'end':
	          return _context4.stop();
	      }
	    }
	  }, _marked[3], this);
	}
	
	/*
	 * Send and Cache
	 */
	
	function createTxChannel(_ref6) {
	  var txObject = _ref6.txObject,
	      stackId = _ref6.stackId,
	      _ref6$sendArgs = _ref6.sendArgs,
	      sendArgs = _ref6$sendArgs === undefined ? {} : _ref6$sendArgs,
	      contractName = _ref6.contractName;
	
	  var persistTxHash;
	
	  return (0, _reduxSaga.eventChannel)(function (emit) {
	    var txPromiEvent = txObject.send(sendArgs).on('transactionHash', function (txHash) {
	      persistTxHash = txHash;
	
	      emit({ type: 'TX_BROADCASTED', txHash: txHash, stackId: stackId });
	      emit({ type: 'CONTRACT_SYNC_IND', contractName: contractName });
	    }).on('confirmation', function (confirmationNumber, receipt) {
	      emit({ type: 'TX_CONFIRMAITON', confirmationReceipt: receipt, txHash: persistTxHash });
	    }).on('receipt', function (receipt) {
	      emit({ type: 'TX_SUCCESSFUL', receipt: receipt, txHash: persistTxHash });
	      emit(_reduxSaga.END);
	    }).on('error', function (error) {
	      emit({ type: 'TX_ERROR', error: error, txHash: persistTxHash });
	      emit(_reduxSaga.END);
	    });
	
	    var unsubscribe = function unsubscribe() {
	      txPromiEvent.off();
	    };
	
	    return unsubscribe;
	  });
	}
	
	function callSendContractTx(_ref7) {
	  var contract = _ref7.contract,
	      fnName = _ref7.fnName,
	      fnIndex = _ref7.fnIndex,
	      args = _ref7.args,
	      stackId = _ref7.stackId;
	  var finalArg, sendArgs, finalArgTest, contractName, txObject, txChannel, event;
	  return _regenerator2.default.wrap(function callSendContractTx$(_context5) {
	    while (1) {
	      switch (_context5.prev = _context5.next) {
	        case 0:
	          // Check for type of object and properties indicative of call/send options.
	          if (args.length) {
	            finalArg = args.length > 1 ? args[args.length - 1] : args[0];
	            sendArgs = {};
	            finalArgTest = false;
	
	
	            if ((typeof finalArg === 'undefined' ? 'undefined' : _typeof(finalArg)) === 'object') {
	              finalArgTest = (0, _effects.call)(isSendOrCallOptions, finalArg);
	            }
	
	            if (finalArgTest) {
	              sendArgs = finalArg;
	
	              args.length > 1 ? delete args[args.length - 1] : delete args[0];
	              args.length = args.length - 1;
	            }
	          }
	
	          // Get name to mark as desynchronized on tx creation
	          contractName = contract.contractName;
	
	          // Create the transaction object and execute the tx.
	
	          _context5.next = 4;
	          return _effects.call.apply(undefined, [contract.methods[fnName]].concat(_toConsumableArray(args)));
	
	        case 4:
	          txObject = _context5.sent;
	          _context5.next = 7;
	          return (0, _effects.call)(createTxChannel, { txObject: txObject, stackId: stackId, sendArgs: sendArgs, contractName: contractName });
	
	        case 7:
	          txChannel = _context5.sent;
	          _context5.prev = 8;
	
	        case 9:
	          if (false) {
	            _context5.next = 17;
	            break;
	          }
	
	          _context5.next = 12;
	          return (0, _effects.take)(txChannel);
	
	        case 12:
	          event = _context5.sent;
	          _context5.next = 15;
	          return (0, _effects.put)(event);
	
	        case 15:
	          _context5.next = 9;
	          break;
	
	        case 17:
	          _context5.prev = 17;
	
	          txChannel.close();
	          return _context5.finish(17);
	
	        case 20:
	        case 'end':
	          return _context5.stop();
	      }
	    }
	  }, _marked[4], this, [[8,, 17, 20]]);
	}
	
	/*
	 * Call and Cache
	 */
	
	function callCallContractFn(_ref8) {
	  var contract = _ref8.contract,
	      fnName = _ref8.fnName,
	      fnIndex = _ref8.fnIndex,
	      args = _ref8.args,
	      argsHash = _ref8.argsHash,
	      _ref8$sync = _ref8.sync,
	      sync = _ref8$sync === undefined ? false : _ref8$sync;
	  var finalArg, callArgs, finalArgTest, txObject, callResult, dispatchArgs, errorArgs;
	  return _regenerator2.default.wrap(function callCallContractFn$(_context6) {
	    while (1) {
	      switch (_context6.prev = _context6.next) {
	        case 0:
	          if (!sync) {
	            _context6.next = 2;
	            break;
	          }
	
	          return _context6.abrupt('return');
	
	        case 2:
	
	          // Check for type of object and properties indicative of call/send options.
	          if (args.length) {
	            finalArg = args.length > 1 ? args[args.length - 1] : args[0];
	            callArgs = {};
	            finalArgTest = false;
	
	
	            if ((typeof finalArg === 'undefined' ? 'undefined' : _typeof(finalArg)) === 'object') {
	              finalArgTest = (0, _effects.call)(isSendOrCallOptions, finalArg);
	            }
	
	            if (finalArgTest) {
	              callArgs = finalArg;
	
	              args.length > 1 ? delete args[args.length - 1] : delete args[0];
	              args.length = args.length - 1;
	            }
	          }
	
	          // Create the transaction object and execute the call.
	          _context6.next = 5;
	          return _effects.call.apply(undefined, [contract.methods[fnName]].concat(_toConsumableArray(args)));
	
	        case 5:
	          txObject = _context6.sent;
	          _context6.prev = 6;
	          _context6.next = 9;
	          return (0, _effects.call)(txObject.call, callArgs);
	
	        case 9:
	          callResult = _context6.sent;
	          dispatchArgs = {
	            name: contract.contractName,
	            variable: contract.abi[fnIndex].name,
	            argsHash: argsHash,
	            args: args,
	            value: callResult,
	            fnIndex: fnIndex
	          };
	          _context6.next = 13;
	          return (0, _effects.put)(Object.assign({ type: 'GOT_CONTRACT_VAR' }, dispatchArgs));
	
	        case 13:
	          _context6.next = 21;
	          break;
	
	        case 15:
	          _context6.prev = 15;
	          _context6.t0 = _context6['catch'](6);
	
	          console.error(_context6.t0);
	
	          errorArgs = {
	            name: contract.contractName,
	            variable: contract.abi[fnIndex].name,
	            argsHash: argsHash,
	            args: args,
	            error: _context6.t0,
	            fnIndex: fnIndex
	          };
	          _context6.next = 21;
	          return (0, _effects.put)(Object.assign({ type: 'ERROR_CONTRACT_VAR' }, errorArgs));
	
	        case 21:
	        case 'end':
	          return _context6.stop();
	      }
	    }
	  }, _marked[5], this, [[6, 15]]);
	}
	
	/*
	 * Sync Contract
	 */
	
	function callSyncContract(action) {
	  var contract, contractName, contractsState, contractFnsState, fnName, argsHash, fnIndex, args;
	  return _regenerator2.default.wrap(function callSyncContract$(_context7) {
	    while (1) {
	      switch (_context7.prev = _context7.next) {
	        case 0:
	          // Get contract state from store
	          contract = action.contract;
	          contractName = contract.contractName;
	          _context7.next = 4;
	          return (0, _effects.select)(getContractsState);
	
	        case 4:
	          contractsState = _context7.sent;
	          contractFnsState = Object.assign({}, contractsState[contractName]);
	
	          // Remove unnecessary keys
	
	          delete contractFnsState.initialized;
	          delete contractFnsState.synced;
	          delete contractFnsState.events;
	
	          // Iterate over functions and hashes
	          _context7.t0 = _regenerator2.default.keys(contractFnsState);
	
	        case 10:
	          if ((_context7.t1 = _context7.t0()).done) {
	            _context7.next = 25;
	            break;
	          }
	
	          fnName = _context7.t1.value;
	          _context7.t2 = _regenerator2.default.keys(contractFnsState[fnName]);
	
	        case 13:
	          if ((_context7.t3 = _context7.t2()).done) {
	            _context7.next = 23;
	            break;
	          }
	
	          argsHash = _context7.t3.value;
	          fnIndex = contractFnsState[fnName][argsHash].fnIndex;
	          args = contractFnsState[fnName][argsHash].args;
	
	          // Pull args and call fn for each given function
	          // keeping for pre-v1.1.5 compatibility with CALL_CONTRACT_FN event.
	
	          _context7.next = 19;
	          return (0, _effects.put)({ type: 'CALL_CONTRACT_FN', contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, argsHash: argsHash, sync: true });
	
	        case 19:
	          _context7.next = 21;
	          return (0, _effects.call)(callCallContractFn, { contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, argsHash: argsHash });
	
	        case 21:
	          _context7.next = 13;
	          break;
	
	        case 23:
	          _context7.next = 10;
	          break;
	
	        case 25:
	          _context7.next = 27;
	          return (0, _effects.put)({ type: 'CONTRACT_SYNCED', contractName: contractName });
	
	        case 27:
	        case 'end':
	          return _context7.stop();
	      }
	    }
	  }, _marked[6], this);
	}
	
	var getContractsState = function getContractsState(state) {
	  return state.contracts;
	};
	var getNetworkId = function getNetworkId(state) {
	  return state.web3.networkId;
	};
	
	function isSendOrCallOptions(options) {
	  if ('from' in options) return true;
	  if ('gas' in options) return true;
	  if ('gasPrice' in options) return true;
	  if ('value' in options) return true;
	
	  return false;
	}
	
	function contractsSaga() {
	  return _regenerator2.default.wrap(function contractsSaga$(_context8) {
	    while (1) {
	      switch (_context8.prev = _context8.next) {
	        case 0:
	          _context8.next = 2;
	          return (0, _effects.takeEvery)('SEND_CONTRACT_TX', callSendContractTx);
	
	        case 2:
	          _context8.next = 4;
	          return (0, _effects.takeEvery)('CALL_CONTRACT_FN', callCallContractFn);
	
	        case 4:
	          _context8.next = 6;
	          return (0, _effects.takeEvery)('CONTRACT_SYNCING', callSyncContract);
	
	        case 6:
	          _context8.next = 8;
	          return (0, _effects.takeEvery)('LISTEN_FOR_EVENT', callListenForContractEvent);
	
	        case 8:
	          _context8.next = 10;
	          return (0, _effects.takeEvery)('ADD_CONTRACT', addContract);
	
	        case 10:
	        case 'end':
	          return _context8.stop();
	      }
	    }
	  }, _marked[7], this);
	}
	
	exports.default = contractsSaga;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DrizzleContract = function () {
	  function DrizzleContract(web3Contract, web3, name, store) {
	    var events = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	    var contractArtifact = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	
	    _classCallCheck(this, DrizzleContract);
	
	    this.abi = web3Contract.options.jsonInterface;
	    this.address = web3Contract.options.address;
	    this.web3 = web3;
	    this.contractName = name;
	    this.contractArtifact = contractArtifact;
	    this.store = store;
	
	    // Merge web3 contract instance into DrizzleContract instance.
	    Object.assign(this, web3Contract);
	
	    for (var i = 0; i < this.abi.length; i++) {
	      var item = this.abi[i];
	
	      if (item.type == "function" && item.constant === true) {
	        this.methods[item.name].cacheCall = this.cacheCallFunction(item.name, i);
	      }
	
	      if (item.type == "function" && item.constant === false) {
	        this.methods[item.name].cacheSend = this.cacheSendFunction(item.name, i);
	      }
	    }
	
	    // Register event listeners if any events.
	    if (events.length > 0) {
	      for (i = 0; i < events.length; i++) {
	        var event = events[i];
	
	        if ((typeof event === "undefined" ? "undefined" : _typeof(event)) === 'object') {
	          store.dispatch({ type: 'LISTEN_FOR_EVENT', contract: this, eventName: event.eventName, eventOptions: event.eventOptions });
	        } else {
	          store.dispatch({ type: 'LISTEN_FOR_EVENT', contract: this, eventName: event });
	        }
	      }
	    }
	  }
	
	  _createClass(DrizzleContract, [{
	    key: "cacheCallFunction",
	    value: function cacheCallFunction(fnName, fnIndex, fn) {
	      var contract = this;
	
	      return function () {
	        // Collect args and hash to use as key, 0x0 if no args
	        var argsHash = '0x0';
	        var args = arguments;
	
	        if (args.length > 0) {
	          argsHash = contract.generateArgsHash(args);
	        }
	        var contractName = contract.contractName;
	        var functionState = contract.store.getState().contracts[contractName][fnName];
	
	        // If call result is in state and fresh, return value instead of calling
	        if (argsHash in functionState) {
	          if (contract.store.getState().contracts[contractName].synced === true) {
	            return argsHash;
	          }
	        }
	
	        // Otherwise, call function and update store
	        contract.store.dispatch({ type: 'CALL_CONTRACT_FN', contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, argsHash: argsHash });
	
	        // Return nothing because state is currently empty.
	        return argsHash;
	      };
	    }
	  }, {
	    key: "cacheSendFunction",
	    value: function cacheSendFunction(fnName, fnIndex, fn) {
	      // NOTE: May not need fn index
	      var contract = this;
	
	      return function () {
	        var args = arguments;
	
	        // Generate temporary ID
	        var stackId = contract.store.getState().transactionStack.length;
	
	        // Add ID to "transactionStack" with empty value
	        contract.store.dispatch({ type: 'PUSH_TO_STACK' });
	
	        // Dispatch tx to saga
	        // When txhash received, will be value of stack ID
	        contract.store.dispatch({ type: 'SEND_CONTRACT_TX', contract: contract, fnName: fnName, fnIndex: fnIndex, args: args, stackId: stackId });
	
	        // return stack ID
	        return stackId;
	      };
	    }
	  }, {
	    key: "generateArgsHash",
	    value: function generateArgsHash(args) {
	      var web3 = this.web3;
	      var hashString = '';
	
	      for (var i = 0; i < args.length; i++) {
	        if (typeof args[i] !== 'function') {
	          var argToHash = args[i];
	
	          // Stringify objects to allow hashing
	          if ((typeof argToHash === "undefined" ? "undefined" : _typeof(argToHash)) === 'object') {
	            argToHash = JSON.stringify(argToHash);
	          }
	
	          // Convert number to strong to allow hashing
	          if (typeof argToHash === 'number') {
	            argToHash = argToHash.toString();
	          }
	
	          // This check is in place for web3 v0.x
	          if ('utils' in web3) {
	            var hashPiece = web3.utils.sha3(argToHash);
	          } else {
	            var hashPiece = web3.sha3(argToHash);
	          }
	
	          hashString += hashPiece;
	        }
	      }
	
	      return web3.utils.sha3(hashString);
	    }
	  }]);
	
	  return DrizzleContract;
	}();
	
	exports.default = DrizzleContract;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(6);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _effects = __webpack_require__(9);
	
	var _defaultOptions = __webpack_require__(28);
	
	var _defaultOptions2 = _interopRequireDefault(_defaultOptions);
	
	var _mergeOptions = __webpack_require__(29);
	
	var _mergeOptions2 = _interopRequireDefault(_mergeOptions);
	
	var _web3Saga = __webpack_require__(32);
	
	var _accountsSaga = __webpack_require__(21);
	
	var _accountBalancesSaga = __webpack_require__(22);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [initializeDrizzle, drizzleStatusSaga].map(_regenerator2.default.mark);
	
	// Initialization Functions
	
	
	function initializeDrizzle(action) {
	  var options, web3Options, drizzle, web3, i, contractConfig, events, contractName, syncAlways, interval;
	  return _regenerator2.default.wrap(function initializeDrizzle$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.prev = 0;
	          options = (0, _mergeOptions2.default)(_defaultOptions2.default, action.options);
	          web3Options = options.web3;
	          drizzle = action.drizzle;
	
	          // Initialize web3 and get the current network ID.
	
	          _context.next = 6;
	          return (0, _effects.call)(_web3Saga.initializeWeb3, { options: web3Options });
	
	        case 6:
	          web3 = _context.sent;
	
	          drizzle.web3 = web3;
	
	          _context.next = 10;
	          return (0, _effects.call)(_web3Saga.getNetworkId, { web3: web3 });
	
	        case 10:
	          _context.next = 12;
	          return (0, _effects.call)(_accountsSaga.getAccounts, { web3: web3 });
	
	        case 12:
	          _context.next = 14;
	          return (0, _effects.call)(_accountBalancesSaga.getAccountBalances, { web3: web3 });
	
	        case 14:
	          i = 0;
	
	        case 15:
	          if (!(i < options.contracts.length)) {
	            _context.next = 25;
	            break;
	          }
	
	          contractConfig = options.contracts[i];
	          events = [];
	          contractName = contractConfig.contractName;
	
	
	          if (contractName in options.events) {
	            events = options.events[contractName];
	          }
	
	          _context.next = 22;
	          return (0, _effects.put)({ type: 'ADD_CONTRACT', drizzle: drizzle, contractConfig: contractConfig, events: events, web3: web3 });
	
	        case 22:
	          i++;
	          _context.next = 15;
	          break;
	
	        case 25:
	          syncAlways = options.syncAlways;
	
	          if (!web3.currentProvider.isMetaMask) {
	            _context.next = 32;
	            break;
	          }
	
	          // Using MetaMask, attempt block polling.
	          interval = options.polls.blocks;
	          _context.next = 30;
	          return (0, _effects.put)({ type: 'BLOCKS_POLLING', drizzle: drizzle, interval: interval, web3: web3, syncAlways: syncAlways });
	
	        case 30:
	          _context.next = 34;
	          break;
	
	        case 32:
	          _context.next = 34;
	          return (0, _effects.put)({ type: 'BLOCKS_LISTENING', drizzle: drizzle, web3: web3, syncAlways: syncAlways });
	
	        case 34:
	          if (!('accounts' in options.polls)) {
	            _context.next = 37;
	            break;
	          }
	
	          _context.next = 37;
	          return (0, _effects.put)({ type: 'ACCOUNTS_POLLING', interval: options.polls.accounts, web3: web3 });
	
	        case 37:
	          _context.next = 46;
	          break;
	
	        case 39:
	          _context.prev = 39;
	          _context.t0 = _context['catch'](0);
	          _context.next = 43;
	          return (0, _effects.put)({ type: 'DRIZZLE_FAILED', error: _context.t0 });
	
	        case 43:
	
	          console.error('Error initializing Drizzle:');
	          console.error(_context.t0);
	
	          return _context.abrupt('return');
	
	        case 46:
	          _context.next = 48;
	          return (0, _effects.put)({ type: 'DRIZZLE_INITIALIZED' });
	
	        case 48:
	          return _context.abrupt('return');
	
	        case 49:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this, [[0, 39]]);
	}
	
	function drizzleStatusSaga() {
	  return _regenerator2.default.wrap(function drizzleStatusSaga$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.next = 2;
	          return (0, _effects.takeLatest)('DRIZZLE_INITIALIZING', initializeDrizzle);
	
	        case 2:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this);
	}
	
	exports.default = drizzleStatusSaga;

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var defaultOptions = {
	  web3: {
	    // `block` no longer needed;
	    // keeping for pre-v1.1.1 compatibility with drizzle-react.
	    block: false,
	    fallback: {
	      type: 'ws',
	      url: 'ws://127.0.0.1:8545'
	    }
	  },
	  contracts: [],
	  events: {},
	  polls: {
	    blocks: 3000
	  },
	  syncAlways: false
	};
	
	exports.default = defaultOptions;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (defaultOptions, newOptions) {
	  return (0, _deepmerge2.default)(defaultOptions, newOptions, {
	    isMergeableObject: isPlainObject
	  });
	};
	
	var _deepmerge = __webpack_require__(30);
	
	var _deepmerge2 = _interopRequireDefault(_deepmerge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isPlainObject = __webpack_require__(31);

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(6);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.initializeWeb3 = initializeWeb3;
	exports.getNetworkId = getNetworkId;
	
	var _effects = __webpack_require__(9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [initializeWeb3, getNetworkId, callSendTx, web3Saga].map(_regenerator2.default.mark);
	
	var Web3 = __webpack_require__(33);
	
	/*
	 * Initialization
	 */
	
	function initializeWeb3(_ref) {
	  var options = _ref.options;
	  var web3, provider;
	  return _regenerator2.default.wrap(function initializeWeb3$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.prev = 0;
	          web3 = {};
	
	          // Checking if Web3 has been injected by the browser (Mist/MetaMask)
	
	          if (!(typeof window.web3 !== 'undefined')) {
	            _context.next = 11;
	            break;
	          }
	
	          // Use Mist/MetaMask's provider.
	          web3 = new Web3(window.web3.currentProvider);
	          web3.eth.cacheSendTransaction = function (txObject) {
	            return (0, _effects.put)({ type: 'SEND_WEB3_TX', txObject: txObject, stackId: stackId, web3: web3 });
	          };
	
	          console.log('Injected web3 detected.');
	
	          _context.next = 8;
	          return (0, _effects.put)({ type: 'WEB3_INITIALIZED' });
	
	        case 8:
	          return _context.abrupt('return', web3);
	
	        case 11:
	          if (!options.fallback) {
	            _context.next = 24;
	            break;
	          }
	
	          // Attempt fallback if no web3 injection.
	          console.log('No web3 instance injected, using fallback.');
	
	          _context.t0 = options.fallback.type;
	          _context.next = _context.t0 === 'ws' ? 16 : 23;
	          break;
	
	        case 16:
	          provider = new Web3.providers.WebsocketProvider(options.fallback.url);
	
	          web3 = new Web3(provider);
	
	          // Attach drizzle functions
	          web3.eth['cacheSendTransaction'] = function (txObject) {
	            return (0, _effects.put)({ type: 'SEND_WEB3_TX', txObject: txObject, stackId: stackId, web3: web3 });
	          };
	
	          _context.next = 21;
	          return (0, _effects.put)({ type: 'WEB3_INITIALIZED' });
	
	        case 21:
	          return _context.abrupt('return', web3);
	
	        case 23:
	          throw "Invalid web3 fallback provided.";
	
	        case 24:
	          throw "Cannot find injected web3 or valid fallback.";
	
	        case 25:
	          _context.next = 33;
	          break;
	
	        case 27:
	          _context.prev = 27;
	          _context.t1 = _context['catch'](0);
	          _context.next = 31;
	          return (0, _effects.put)({ type: 'WEB3_FAILED', error: _context.t1 });
	
	        case 31:
	          console.error('Error intializing web3:');
	          console.error(_context.t1);
	
	        case 33:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this, [[0, 27]]);
	}
	
	/*
	 * Network ID
	 */
	
	function getNetworkId(_ref2) {
	  var web3 = _ref2.web3;
	  var networkId;
	  return _regenerator2.default.wrap(function getNetworkId$(_context2) {
	    while (1) {
	      switch (_context2.prev = _context2.next) {
	        case 0:
	          _context2.prev = 0;
	          _context2.next = 3;
	          return (0, _effects.call)(web3.eth.net.getId);
	
	        case 3:
	          networkId = _context2.sent;
	          _context2.next = 6;
	          return (0, _effects.put)({ type: 'NETWORK_ID_FETCHED', networkId: networkId });
	
	        case 6:
	          return _context2.abrupt('return', networkId);
	
	        case 9:
	          _context2.prev = 9;
	          _context2.t0 = _context2['catch'](0);
	          _context2.next = 13;
	          return (0, _effects.put)({ type: 'NETWORK_ID_FAILED', error: _context2.t0 });
	
	        case 13:
	
	          console.error('Error fetching network ID:');
	          console.error(_context2.t0);
	
	          return _context2.abrupt('return');
	
	        case 16:
	        case 'end':
	          return _context2.stop();
	      }
	    }
	  }, _marked[1], this, [[0, 9]]);
	}
	
	/*
	 * Send Transaction
	 */
	
	function createTxChannel(_ref3) {
	  var txObject = _ref3.txObject,
	      stackId = _ref3.stackId,
	      web3 = _ref3.web3;
	
	  var persistTxHash;
	
	  return eventChannel(function (emit) {
	    var txPromiEvent = web3.eth.sendTransaction(txObject).on('transactionHash', function (txHash) {
	      persistTxHash = txHash;
	
	      emit({ type: 'W3TX_BROADCASTED', txHash: txHash, stackId: stackId });
	    }).on('confirmation', function (confirmationNumber, receipt) {
	      emit({ type: 'W3TX_CONFIRMAITON', confirmationReceipt: receipt, txHash: persistTxHash });
	    }).on('receipt', function (receipt) {
	      emit({ type: 'W3TX_SUCCESSFUL', receipt: receipt, txHash: persistTxHash });
	      emit(END);
	    }).on('error', function (error) {
	      emit({ type: 'W3TX_ERROR', error: error, txHash: persistTxHash });
	      emit(END);
	    });
	
	    var unsubscribe = function unsubscribe() {
	      txPromiEvent.off();
	    };
	
	    return unsubscribe;
	  });
	}
	
	function callSendTx(_ref4) {
	  var txObject = _ref4.txObject,
	      stackId = _ref4.stackId,
	      web3 = _ref4.web3;
	  var txChannel, event;
	  return _regenerator2.default.wrap(function callSendTx$(_context3) {
	    while (1) {
	      switch (_context3.prev = _context3.next) {
	        case 0:
	          _context3.next = 2;
	          return (0, _effects.call)(createTxChannel, { txObject: txObject, stackId: stackId, web3: web3 });
	
	        case 2:
	          txChannel = _context3.sent;
	          _context3.prev = 3;
	
	        case 4:
	          if (false) {
	            _context3.next = 12;
	            break;
	          }
	
	          _context3.next = 7;
	          return take(txChannel);
	
	        case 7:
	          event = _context3.sent;
	          _context3.next = 10;
	          return (0, _effects.put)(event);
	
	        case 10:
	          _context3.next = 4;
	          break;
	
	        case 12:
	          _context3.prev = 12;
	
	          txChannel.close();
	          return _context3.finish(12);
	
	        case 15:
	        case 'end':
	          return _context3.stop();
	      }
	    }
	  }, _marked[2], this, [[3,, 12, 15]]);
	}
	
	function web3Saga() {
	  return _regenerator2.default.wrap(function web3Saga$(_context4) {
	    while (1) {
	      switch (_context4.prev = _context4.next) {
	        case 0:
	          _context4.next = 2;
	          return (0, _effects.takeLatest)('NETWORK_ID_FETCHING', getNetworkId);
	
	        case 2:
	          _context4.next = 4;
	          return (0, _effects.takeEvery)('SEND_WEB3_TX', callSendTx);
	
	        case 4:
	        case 'end':
	          return _context4.stop();
	      }
	    }
	  }, _marked[3], this);
	}
	
	exports.default = web3Saga;

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_33__;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(3);
	
	var _accountsReducer = __webpack_require__(35);
	
	var _accountsReducer2 = _interopRequireDefault(_accountsReducer);
	
	var _accountBalancesReducer = __webpack_require__(36);
	
	var _accountBalancesReducer2 = _interopRequireDefault(_accountBalancesReducer);
	
	var _contractsReducer = __webpack_require__(37);
	
	var _contractsReducer2 = _interopRequireDefault(_contractsReducer);
	
	var _drizzleStatusReducer = __webpack_require__(40);
	
	var _drizzleStatusReducer2 = _interopRequireDefault(_drizzleStatusReducer);
	
	var _transactionsReducer = __webpack_require__(41);
	
	var _transactionsReducer2 = _interopRequireDefault(_transactionsReducer);
	
	var _transactionStackReducer = __webpack_require__(42);
	
	var _transactionStackReducer2 = _interopRequireDefault(_transactionStackReducer);
	
	var _web3Reducer = __webpack_require__(43);
	
	var _web3Reducer2 = _interopRequireDefault(_web3Reducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reducer = (0, _redux.combineReducers)({
	  accounts: _accountsReducer2.default,
	  accountBalances: _accountBalancesReducer2.default,
	  contracts: _contractsReducer2.default,
	  drizzleStatus: _drizzleStatusReducer2.default,
	  transactions: _transactionsReducer2.default,
	  transactionStack: _transactionStackReducer2.default,
	  web3: _web3Reducer2.default
	});
	
	exports.default = reducer;

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initialState = {};
	
	var accountsReducer = function accountsReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  if (action.type === 'ACCOUNTS_FETCHING') {
	    return state;
	  }
	
	  if (action.type === 'ACCOUNTS_FETCHED') {
	    return Object.assign({}, state, action.accounts);
	  }
	
	  return state;
	};
	
	exports.default = accountsReducer;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var initialState = {};
	
	var accountBalancesReducer = function accountBalancesReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  if (action.type === 'ACCOUNT_BALANCE_FETCHED') {
	    return Object.assign({}, state, _defineProperty({}, action.account, action.accountBalance));
	  }
	
	  return state;
	};
	
	exports.default = accountBalancesReducer;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _generateContractInitialState = __webpack_require__(38);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var initialState = {};
	
	var contractsReducer = function contractsReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  /*
	   * Contract Status
	   */
	
	  if (action.type === 'CONTRACT_INITIALIZING') {
	    return Object.assign({}, state, _defineProperty({}, action.contractConfig.contractName, (0, _generateContractInitialState.generateContractInitialState)(action.contractConfig)));
	  }
	
	  if (action.type === 'CONTRACT_INITIALIZED') {
	    return Object.assign({}, state, _defineProperty({}, action.name, Object.assign({}, state[action.name], {
	      initialized: true,
	      synced: true,
	      events: []
	    })));
	  }
	
	  if (action.type === 'CONTRACT_SYNCING') {
	    var contractName = action.contract.contractName;
	
	    return Object.assign({}, state, _defineProperty({}, contractName, Object.assign({}, state[contractName], {
	      synced: false
	    })));
	  }
	
	  if (action.type === 'CONTRACT_SYNCED') {
	    return Object.assign({}, state, _defineProperty({}, action.contractName, Object.assign({}, state[action.contractName], {
	      synced: true
	    })));
	  }
	
	  if (action.type === 'CONTRACT_SYNC_IND') {
	    return Object.assign({}, state, _defineProperty({}, action.contractName, Object.assign({}, state[action.contractName], {
	      synced: false
	    })));
	  }
	
	  /*
	   * Contract Functions
	   */
	
	  if (action.type === 'GOT_CONTRACT_VAR') {
	    return Object.assign({}, state, _defineProperty({}, action.name, Object.assign({}, state[action.name], _defineProperty({}, action.variable, Object.assign({}, state[action.name][action.variable], _defineProperty({}, action.argsHash, Object.assign({}, state[action.name][action.variable][action.argsHash], {
	      args: action.args,
	      fnIndex: action.fnIndex,
	      value: action.value
	    })))))));
	  }
	
	  if (action.type === 'ERROR_CONTRACT_VAR') {
	    return Object.assign({}, state, _defineProperty({}, action.name, Object.assign({}, state[action.name], _defineProperty({}, action.variable, Object.assign({}, state[action.name][action.variable], _defineProperty({}, action.argsHash, Object.assign({}, state[action.name][action.variable][action.argsHash], {
	      args: action.args,
	      fnIndex: action.fnIndex,
	      error: action.error
	    })))))));
	  }
	
	  /*
	   * Contract Events
	   */
	
	  if (action.type === 'EVENT_FIRED') {
	    return Object.assign({}, state, _defineProperty({}, action.name, Object.assign({}, state[action.name], {
	      events: [].concat(_toConsumableArray(state[action.name].events), [action.event])
	    })));
	  }
	
	  return state;
	};
	
	exports.default = contractsReducer;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generateContractInitialState = generateContractInitialState;
	
	var _getAbi = __webpack_require__(39);
	
	var _getAbi2 = _interopRequireDefault(_getAbi);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function generateContractInitialState(contractConfig) {
	  var state = {
	    initialized: false,
	    synced: false
	
	    // Constant getters
	  };var abi = (0, _getAbi2.default)(contractConfig);
	  for (var i2 = 0; i2 < abi.length; i2++) {
	    var item = abi[i2];
	
	    if (item.type == "function" && item.constant === true) {
	      state[item.name] = {};
	    }
	  }
	
	  return state;
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getAbi;
	function getAbi(contractEntry) {
	  if (contractEntry.web3Contract) {
	    return contractEntry.web3Contract.options.jsonInterface;
	  } else {
	    return contractEntry.abi;
	  }
	}

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initialState = {
	  initialized: false
	};
	
	var drizzleStatusReducer = function drizzleStatusReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  /*
	   * Drizzle Status
	   */
	
	  if (action.type === 'DRIZZLE_INITIALIZED') {
	    return Object.assign({}, state, {
	      initialized: true
	    });
	  }
	  return state;
	};
	
	exports.default = drizzleStatusReducer;

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var initialState = {};
	
	var transactionsReducer = function transactionsReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];
	
	    if (action.type === 'TX_BROADCASTED') {
	        return Object.assign({}, state, _defineProperty({}, action.txHash, {
	            status: 'pending',
	            confirmations: []
	        }));
	    }
	
	    if (action.type === 'TX_CONFIRMAITON') {
	        return Object.assign({}, state, _defineProperty({}, action.txHash, Object.assign({}, state[action.txHash], {
	            confirmations: [].concat(_toConsumableArray(state[action.txHash].confirmations), [action.confirmationReceipt])
	        })));
	    }
	
	    if (action.type === 'TX_SUCCESSFUL') {
	        return Object.assign({}, state, _defineProperty({}, action.txHash, Object.assign({}, state[action.txHash], {
	            status: 'success',
	            receipt: action.receipt
	        })));
	    }
	
	    if (action.type === 'TX_ERROR') {
	        return Object.assign({}, state, _defineProperty({}, action.txHash, Object.assign({}, state[action.txHash], {
	            status: 'error',
	            error: action.error
	        })));
	    }
	
	    return state;
	};
	
	exports.default = transactionsReducer;

/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var initialState = [];
	
	var transactionStackReducer = function transactionStackReducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];
	
	    if (action.type === 'PUSH_TO_TXSTACK') {
	        state.push('');
	
	        return [].concat(_toConsumableArray(state));
	    }
	
	    if (action.type === 'POP_FROM_TXSTACK') {
	        state.pop();
	
	        return [].concat(_toConsumableArray(state));
	    }
	
	    if (action.type === 'TX_BROADCASTED') {
	        state[action.stackId] = action.txHash;
	
	        return [].concat(_toConsumableArray(state));
	    }
	
	    return state;
	};
	
	exports.default = transactionStackReducer;

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var initialState = {
	  status: ''
	};
	
	var web3Reducer = function web3Reducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  if (action.type === 'WEB3_INITIALIZING') {
	    return Object.assign({}, state, {
	      status: 'initializing'
	    });
	  }
	
	  if (action.type === 'WEB3_INITIALIZED') {
	    return Object.assign({}, state, {
	      status: 'initialized'
	    });
	  }
	
	  if (action.type === 'WEB3_FAILED') {
	    return Object.assign({}, state, {
	      status: 'failed'
	    });
	  }
	
	  if (action.type === 'NETWORK_ID_FETCHED') {
	    return Object.assign({}, state, {
	      networkId: action.networkId
	    });
	  }
	
	  if (action.type === 'NETWORK_ID_FAILED') {
	    return Object.assign({}, state, {
	      networkId: action.networkId
	    });
	  }
	
	  return state;
	};
	
	exports.default = web3Reducer;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.generateContractsInitialState = generateContractsInitialState;
	
	var _generateContractInitialState = __webpack_require__(38);
	
	function generateContractsInitialState(options) {
	  // Preloaded state
	  var contractsInitialState = {};
	
	  for (var i = 0; i < options.contracts.length; i++) {
	    // Initial contract details
	    var contractName = options.contracts[i].contractName;
	    contractsInitialState[contractName] = (0, _generateContractInitialState.generateContractInitialState)(options.contracts[i]);
	  }
	
	  return contractsInitialState;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNjk1OThkZDM5YzRlZWM1ODM4MCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RyaXp6bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jvb3RTYWdhLmpzIiwid2VicGFjazovLy8uLi9iYWJlbC1wcmVzZXQtcmVhY3QtYXBwL34vYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL2JhYmVsLXByZXNldC1yZWFjdC1hcHAvfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL3JlZHV4LXNhZ2EvbGliL2VmZmVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL2lvLmpzIiwid2VicGFjazovLy8uLi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL3NhZ2FIZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9zYWdhSGVscGVycy90YWtlRXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL3NhZ2FIZWxwZXJzL2ZzbUl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9jaGFubmVsLmpzIiwid2VicGFjazovLy8uLi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9idWZmZXJzLmpzIiwid2VicGFjazovLy8uLi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9zY2hlZHVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rha2VMYXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9hY2NvdW50c1NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYmxvY2tzU2FnYS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldGgtYmxvY2stdHJhY2tlci1lczVcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJhY3RzL2NvbnRyYWN0c1NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RyaXp6bGVDb250cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzU2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmYXVsdE9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lcmdlT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWVwbWVyZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpcy1wbGFpbi1vYmplY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViMy93ZWIzU2FnYS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL2FjY291bnRzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyYWN0cy9jb250cmFjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZXRBYmkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYjMvd2ViM1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlLmpzIl0sIm5hbWVzIjpbImRyaXp6bGVSZWR1Y2VycyIsImFjY291bnRzIiwiYWNjb3VudEJhbGFuY2VzIiwiY29udHJhY3RzIiwiZHJpenpsZVN0YXR1cyIsInRyYW5zYWN0aW9ucyIsInRyYW5zYWN0aW9uU3RhY2siLCJ3ZWIzIiwiZHJpenpsZVNhZ2FzIiwiRHJpenpsZSIsImdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlIiwiZ2VuZXJhdGVTdG9yZSIsIndpbmRvd1Byb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcHRpb25zIiwic3RvcmUiLCJjb250cmFjdExpc3QiLCJsb2FkaW5nQ29udHJhY3QiLCJ0aGVuIiwiZGlzcGF0Y2giLCJ0eXBlIiwiZHJpenpsZSIsImNvbnRyYWN0Q29uZmlnIiwiZXZlbnRzIiwiZHJpenpsZUNvbnRyYWN0IiwiY29udHJhY3ROYW1lIiwicHVzaCIsImFkZHJlc3MiLCJmaW5kIiwiY29udHJhY3QiLCJ0b0xvd2VyQ2FzZSIsImNvbXBvc2VFbmhhbmNlcnMiLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJwcmVsb2FkZWRTdGF0ZSIsInNhZ2FNaWRkbGV3YXJlIiwicnVuIiwibW9kdWxlIiwiZXhwb3J0cyIsInJvb3QiLCJnZXRBY2NvdW50cyIsImNyZWF0ZUFjY291bnRzUG9sbENoYW5uZWwiLCJjYWxsQ3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbCIsImFjY291bnRzU2FnYSIsImFjdGlvbiIsImV0aCIsImVycm9yIiwiY29uc29sZSIsImludGVydmFsIiwicGVyc2lzdGVkV2ViMyIsImFjY291bnRzUG9sbGVyIiwic2V0SW50ZXJ2YWwiLCJlbWl0IiwidW5zdWJzY3JpYmUiLCJjbGVhckludGVydmFsIiwiYWNjb3VudHNDaGFubmVsIiwiZXZlbnQiLCJjbG9zZSIsImdldEFjY291bnRCYWxhbmNlcyIsImFjY291bnRCYWxhbmNlc1NhZ2EiLCJnZXRBY2NvdW50c1N0YXRlIiwiaSIsImFjY291bnQiLCJnZXRCYWxhbmNlIiwiYWNjb3VudEJhbGFuY2UiLCJzdGF0ZSIsImNhbGxDcmVhdGVCbG9ja0NoYW5uZWwiLCJjYWxsQ3JlYXRlQmxvY2tQb2xsQ2hhbm5lbCIsInByb2Nlc3NCbG9ja0hlYWRlciIsInByb2Nlc3NCbG9jayIsImJsb2Nrc1NhZ2EiLCJCbG9ja1RyYWNrZXIiLCJyZXF1aXJlIiwiY3JlYXRlQmxvY2tDaGFubmVsIiwic3luY0Fsd2F5cyIsImJsb2NrRXZlbnRzIiwic3Vic2NyaWJlIiwicmVzdWx0Iiwib24iLCJibG9ja0hlYWRlciIsIm9mZiIsImJsb2NrQ2hhbm5lbCIsImNyZWF0ZUJsb2NrUG9sbENoYW5uZWwiLCJibG9ja1RyYWNrZXIiLCJwcm92aWRlciIsImN1cnJlbnRQcm92aWRlciIsInBvbGxpbmdJbnRlcnZhbCIsImJsb2NrIiwic3RhcnQiLCJjYXRjaCIsInN0b3AiLCJibG9ja051bWJlciIsIm51bWJlciIsImdldEJsb2NrIiwiYWxsIiwibWFwIiwidHhzIiwibGVuZ3RoIiwiZnJvbSIsImZyb21Db250cmFjdCIsImZpbmRDb250cmFjdEJ5QWRkcmVzcyIsInRvIiwidG9Db250cmFjdCIsImFkZENvbnRyYWN0IiwiaW5zdGFudGlhdGVXZWIzQ29udHJhY3QiLCJpbnN0YW50aWF0ZUNvbnRyYWN0IiwiY2FsbExpc3RlbkZvckNvbnRyYWN0RXZlbnQiLCJjYWxsU2VuZENvbnRyYWN0VHgiLCJjYWxsQ2FsbENvbnRyYWN0Rm4iLCJjYWxsU3luY0NvbnRyYWN0IiwiY29udHJhY3RzU2FnYSIsIndlYjNDb250cmFjdCIsIm5hbWUiLCJjb250cmFjdEFydGlmYWN0IiwiX2FkZENvbnRyYWN0IiwiZ2V0TmV0d29ya0lkIiwibmV0d29ya0lkIiwiQ29udHJhY3QiLCJhYmkiLCJuZXR3b3JrcyIsImdldFN0YXRlIiwiZGF0YSIsImRlcGxveWVkQnl0ZWNvZGUiLCJjcmVhdGVDb250cmFjdEV2ZW50Q2hhbm5lbCIsImV2ZW50TmFtZSIsImV2ZW50T3B0aW9ucyIsImV2ZW50TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRyYWN0RXZlbnRDaGFubmVsIiwiY3JlYXRlVHhDaGFubmVsIiwidHhPYmplY3QiLCJzdGFja0lkIiwic2VuZEFyZ3MiLCJwZXJzaXN0VHhIYXNoIiwidHhQcm9taUV2ZW50Iiwic2VuZCIsInR4SGFzaCIsImNvbmZpcm1hdGlvbk51bWJlciIsInJlY2VpcHQiLCJjb25maXJtYXRpb25SZWNlaXB0IiwiZm5OYW1lIiwiZm5JbmRleCIsImFyZ3MiLCJmaW5hbEFyZyIsImZpbmFsQXJnVGVzdCIsImlzU2VuZE9yQ2FsbE9wdGlvbnMiLCJtZXRob2RzIiwidHhDaGFubmVsIiwiYXJnc0hhc2giLCJzeW5jIiwiY2FsbEFyZ3MiLCJjYWxsIiwiY2FsbFJlc3VsdCIsImRpc3BhdGNoQXJncyIsInZhcmlhYmxlIiwidmFsdWUiLCJlcnJvckFyZ3MiLCJnZXRDb250cmFjdHNTdGF0ZSIsImNvbnRyYWN0c1N0YXRlIiwiY29udHJhY3RGbnNTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImluaXRpYWxpemVkIiwic3luY2VkIiwiRHJpenpsZUNvbnRyYWN0IiwianNvbkludGVyZmFjZSIsIml0ZW0iLCJjb25zdGFudCIsImNhY2hlQ2FsbCIsImNhY2hlQ2FsbEZ1bmN0aW9uIiwiY2FjaGVTZW5kIiwiY2FjaGVTZW5kRnVuY3Rpb24iLCJmbiIsImFyZ3VtZW50cyIsImdlbmVyYXRlQXJnc0hhc2giLCJmdW5jdGlvblN0YXRlIiwiaGFzaFN0cmluZyIsImFyZ1RvSGFzaCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b1N0cmluZyIsImhhc2hQaWVjZSIsInV0aWxzIiwic2hhMyIsImluaXRpYWxpemVEcml6emxlIiwiZHJpenpsZVN0YXR1c1NhZ2EiLCJ3ZWIzT3B0aW9ucyIsImlzTWV0YU1hc2siLCJwb2xscyIsImJsb2NrcyIsImRlZmF1bHRPcHRpb25zIiwiZmFsbGJhY2siLCJ1cmwiLCJuZXdPcHRpb25zIiwiaXNNZXJnZWFibGVPYmplY3QiLCJpc1BsYWluT2JqZWN0IiwiaW5pdGlhbGl6ZVdlYjMiLCJjYWxsU2VuZFR4Iiwid2ViM1NhZ2EiLCJXZWIzIiwiY2FjaGVTZW5kVHJhbnNhY3Rpb24iLCJsb2ciLCJwcm92aWRlcnMiLCJXZWJzb2NrZXRQcm92aWRlciIsIm5ldCIsImdldElkIiwiZXZlbnRDaGFubmVsIiwic2VuZFRyYW5zYWN0aW9uIiwiRU5EIiwidGFrZSIsInJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJhY2NvdW50c1JlZHVjZXIiLCJhY2NvdW50QmFsYW5jZXNSZWR1Y2VyIiwiY29udHJhY3RzUmVkdWNlciIsImdlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUiLCJpMiIsImdldEFiaSIsImNvbnRyYWN0RW50cnkiLCJkcml6emxlU3RhdHVzUmVkdWNlciIsInRyYW5zYWN0aW9uc1JlZHVjZXIiLCJzdGF0dXMiLCJjb25maXJtYXRpb25zIiwidHJhbnNhY3Rpb25TdGFja1JlZHVjZXIiLCJwb3AiLCJ3ZWIzUmVkdWNlciIsImNvbnRyYWN0c0luaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFhQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQWhCQSxLQUFNQSxrQkFBa0I7QUFDdEJDLHNDQURzQjtBQUV0QkMsb0RBRnNCO0FBR3RCQyx3Q0FIc0I7QUFJdEJDLGdEQUpzQjtBQUt0QkMsOENBTHNCO0FBTXRCQyxzREFOc0I7QUFPdEJDOztBQUdGO0FBVndCLEVBQXhCOztBQVRBOzs7QUEyQkEsS0FBTUMsZUFBZSx1SkFBckI7O1NBVUVDLE87U0FDQUMsNkI7U0FDQUMsYTtTQUNBWCxlLEdBQUFBLGU7U0FDQVEsWSxHQUFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0NGO0FBQ0EsS0FBSUksZ0JBQWdCLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDbkRDLFVBQU9DLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDSCxPQUFoQztBQUNELEVBRm1CLENBQXBCOztLQUlNTCxPO0FBQ0osb0JBQVlTLE9BQVosRUFBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCO0FBQ0EsVUFBS2hCLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxVQUFLaUIsWUFBTCxHQUFvQixFQUFwQjtBQUNBLFVBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtaLElBQUwsR0FBWSxFQUFaOztBQUVBLFVBQUtjLGVBQUwsR0FBdUIsRUFBdkI7O0FBRUE7QUFDQVQsbUJBQWNVLElBQWQsQ0FBbUIsWUFBTTtBQUN2QjtBQUNBSCxhQUFNSSxRQUFOLENBQWUsRUFBQ0MsTUFBTSxzQkFBUCxFQUErQkMsY0FBL0IsRUFBOENQLGdCQUE5QyxFQUFmO0FBQ0QsTUFIRDtBQUlEOzs7O2lDQUVZUSxjLEVBQTZCO0FBQUEsV0FBYkMsTUFBYSx1RUFBSixFQUFJOztBQUN4QyxZQUFLUixLQUFMLENBQVdJLFFBQVgsQ0FBb0IsRUFBQ0MsTUFBTSxjQUFQLEVBQXVCQyxTQUFTLElBQWhDLEVBQXNDQyw4QkFBdEMsRUFBc0RDLGNBQXRELEVBQThEcEIsTUFBTSxLQUFLQSxJQUF6RSxFQUFwQjtBQUNEOzs7a0NBRWFxQixlLEVBQWlCO0FBQzdCLFdBQUksS0FBS3pCLFNBQUwsQ0FBZXlCLGdCQUFnQkMsWUFBL0IsQ0FBSixFQUFrRDtBQUFFLDZDQUFrQ0QsZ0JBQWdCQyxZQUFsRDtBQUFrRTtBQUN0SCxZQUFLMUIsU0FBTCxDQUFleUIsZ0JBQWdCQyxZQUEvQixJQUErQ0QsZUFBL0M7QUFDQSxZQUFLUixZQUFMLENBQWtCVSxJQUFsQixDQUF1QkYsZUFBdkI7QUFDRDs7OzJDQUVzQkcsTyxFQUFTO0FBQzlCLGNBQU8sS0FBS1gsWUFBTCxDQUFrQlksSUFBbEIsQ0FBdUIsVUFBQ0MsUUFBRCxFQUFjO0FBQzFDLGdCQUFPQSxTQUFTRixPQUFULENBQWlCRyxXQUFqQixPQUFtQ0gsUUFBUUcsV0FBUixFQUExQztBQUNELFFBRk0sQ0FBUDtBQUdEOzs7Ozs7bUJBR1l6QixPOzs7Ozs7OztBQ3hDZjs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsVUFBU0UsYUFBVCxDQUF1Qk8sT0FBdkIsRUFBZ0M7QUFDOUI7QUFDQSxPQUFNaUIsbUJBQW1CbkIsT0FBT29CLG9DQUFQLGtCQUF6Qjs7QUFFQTtBQUNBLE9BQUlDLGlCQUFpQjtBQUNuQmxDLGdCQUFXLGtFQUE4QmUsT0FBOUI7O0FBR2I7QUFKcUIsSUFBckIsQ0FLQSxJQUFNb0IsaUJBQWlCLDBCQUF2Qjs7QUFFQSxPQUFNbkIsUUFBUSwyQ0FFWmtCLGNBRlksRUFHWkYsaUJBQ0UsNEJBQ0VHLGNBREYsQ0FERixDQUhZLENBQWQ7O0FBVUFBLGtCQUFlQyxHQUFmOztBQUVBLFVBQU9wQixLQUFQO0FBQ0Q7O0FBRURxQixRQUFPQyxPQUFQLEdBQWlCOUIsYUFBakIsQzs7Ozs7O0FDbENBLGdEOzs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7Ozs7OzttQkNTeUIrQixJOztBQVR6Qjs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztnQkFFeUJBLEk7O0FBQVYsVUFBVUEsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDUCxrQkFBSSxDQUNSLDBDQURRLEVBRVIsaURBRlEsRUFHUix3Q0FIUSxFQUlSLDJDQUpRLEVBS1IsK0NBTFEsRUFNUixzQ0FOUSxDQUFKLENBRE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRTs7Ozs7O0FDVGY7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZCxNQUFLO0FBQ0wsZUFBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQXlEO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EseUNBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNuSUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBLDBCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBOztB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SDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFrQjtBQUNsQjtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUVBQWdFLGNBQWM7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0VBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ3hTQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDdkx0Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBLG1CQUFrQixxQkFBcUIsNkRBQTZELHFCQUFxQjtBQUN6SDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDOzs7Ozs7QUNsQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQSxxRkFBb0YsYUFBYTtBQUNqRztBQUNBOztBQUVBLGdCQUFlO0FBQ2Y7QUFDQSxhQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFOzs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsYUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRTs7Ozs7O0FDdkRBOztBQUVBO0FBQ0E7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSwwQkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0wsSUFBRzs7QUFFSCxxQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRTs7Ozs7OztBQ25OQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFD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QTdCLENBQXRDO0FBQ0Q7O0FBRUQsVUFBT3FLLHFCQUFQO0FBQ0QsRSIsImZpbGUiOiJkcml6emxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVkdXhcIiksIHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpLCByZXF1aXJlKFwiZXRoLWJsb2NrLXRyYWNrZXItZXM1XCIpLCByZXF1aXJlKFwiZGVlcG1lcmdlXCIpLCByZXF1aXJlKFwiaXMtcGxhaW4tb2JqZWN0XCIpLCByZXF1aXJlKFwid2ViM1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWR1eFwiLCBcInJlZHV4LXNhZ2FcIiwgXCJldGgtYmxvY2stdHJhY2tlci1lczVcIiwgXCJkZWVwbWVyZ2VcIiwgXCJpcy1wbGFpbi1vYmplY3RcIiwgXCJ3ZWIzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXp6bGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWR1eFwiKSwgcmVxdWlyZShcInJlZHV4LXNhZ2FcIiksIHJlcXVpcmUoXCJldGgtYmxvY2stdHJhY2tlci1lczVcIiksIHJlcXVpcmUoXCJkZWVwbWVyZ2VcIiksIHJlcXVpcmUoXCJpcy1wbGFpbi1vYmplY3RcIiksIHJlcXVpcmUoXCJ3ZWIzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkcml6emxlXCJdID0gZmFjdG9yeShyb290W1wicmVkdXhcIl0sIHJvb3RbXCJyZWR1eC1zYWdhXCJdLCByb290W1wiZXRoLWJsb2NrLXRyYWNrZXItZXM1XCJdLCByb290W1wiZGVlcG1lcmdlXCJdLCByb290W1wiaXMtcGxhaW4tb2JqZWN0XCJdLCByb290W1wid2ViM1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzMxX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzNfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNjk1OThkZDM5YzRlZWM1ODM4MCIsImltcG9ydCBEcml6emxlIGZyb20gJy4vRHJpenpsZS5qcydcbmltcG9ydCBnZW5lcmF0ZVN0b3JlIGZyb20gJy4vZ2VuZXJhdGVTdG9yZSdcbmltcG9ydCB7IGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9nZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZSdcblxuLy8gUmVkdWNlcnNcbmltcG9ydCBhY2NvdW50c1JlZHVjZXIgZnJvbSAnLi9hY2NvdW50cy9hY2NvdW50c1JlZHVjZXInXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzUmVkdWNlciBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyJ1xuaW1wb3J0IGNvbnRyYWN0c1JlZHVjZXIgZnJvbSAnLi9jb250cmFjdHMvY29udHJhY3RzUmVkdWNlcidcbmltcG9ydCBkcml6emxlU3RhdHVzUmVkdWNlciBmcm9tICcuL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXInXG5pbXBvcnQgdHJhbnNhY3Rpb25zUmVkdWNlciBmcm9tICcuL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyIGZyb20gJy4vdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyJ1xuaW1wb3J0IHdlYjNSZWR1Y2VyIGZyb20gJy4vd2ViMy93ZWIzUmVkdWNlcidcblxuY29uc3QgZHJpenpsZVJlZHVjZXJzID0ge1xuICBhY2NvdW50czogYWNjb3VudHNSZWR1Y2VyLFxuICBhY2NvdW50QmFsYW5jZXM6IGFjY291bnRCYWxhbmNlc1JlZHVjZXIsXG4gIGNvbnRyYWN0czogY29udHJhY3RzUmVkdWNlcixcbiAgZHJpenpsZVN0YXR1czogZHJpenpsZVN0YXR1c1JlZHVjZXIsXG4gIHRyYW5zYWN0aW9uczogdHJhbnNhY3Rpb25zUmVkdWNlcixcbiAgdHJhbnNhY3Rpb25TdGFjazogdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIsXG4gIHdlYjM6IHdlYjNSZWR1Y2VyXG59XG5cbi8vIFNhZ2FzXG5pbXBvcnQgYWNjb3VudHNTYWdhIGZyb20gJy4vYWNjb3VudHMvYWNjb3VudHNTYWdhJ1xuaW1wb3J0IGFjY291bnRCYWxhbmNlc1NhZ2EgZnJvbSAnLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcbmltcG9ydCBibG9ja3NTYWdhIGZyb20gJy4vYmxvY2tzL2Jsb2Nrc1NhZ2EnXG5pbXBvcnQgY29udHJhY3RzU2FnYSBmcm9tICcuL2NvbnRyYWN0cy9jb250cmFjdHNTYWdhJ1xuaW1wb3J0IGRyaXp6bGVTdGF0dXNTYWdhIGZyb20gJy4vZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzU2FnYSdcbmltcG9ydCB3ZWIzU2FnYSBmcm9tICcuL3dlYjMvd2ViM1NhZ2EnXG5cbmNvbnN0IGRyaXp6bGVTYWdhcyA9IFtcbiAgYWNjb3VudHNTYWdhLFxuICBhY2NvdW50QmFsYW5jZXNTYWdhLFxuICBibG9ja3NTYWdhLFxuICBjb250cmFjdHNTYWdhLFxuICBkcml6emxlU3RhdHVzU2FnYSxcbiAgd2ViM1NhZ2Fcbl1cblxuZXhwb3J0IHtcbiAgRHJpenpsZSxcbiAgZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUsXG4gIGdlbmVyYXRlU3RvcmUsXG4gIGRyaXp6bGVSZWR1Y2VycyxcbiAgZHJpenpsZVNhZ2FzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyBMb2FkIGFzIHByb21pc2Ugc28gdGhhdCBhc3luYyBEcml6emxlIGluaXRpYWxpemF0aW9uIGNhbiBzdGlsbCByZXNvbHZlXG52YXIgd2luZG93UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlKVxufSlcblxuY2xhc3MgRHJpenpsZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMsIHN0b3JlKSB7XG4gICAgLy8gVmFyaWFibGVzXG4gICAgdGhpcy5jb250cmFjdHMgPSB7fVxuICAgIHRoaXMuY29udHJhY3RMaXN0ID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5zdG9yZSA9IHN0b3JlXG4gICAgdGhpcy53ZWIzID0ge31cblxuICAgIHRoaXMubG9hZGluZ0NvbnRyYWN0ID0ge31cblxuICAgIC8vIFdhaXQgZm9yIHdpbmRvdyBsb2FkIGV2ZW50IGluIGNhc2Ugb2YgaW5qZWN0ZWQgd2ViMy5cbiAgICB3aW5kb3dQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gQmVnaW4gRHJpenpsZSBpbml0aWFsaXphdGlvbi5cbiAgICAgIHN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnRFJJWlpMRV9JTklUSUFMSVpJTkcnLCBkcml6emxlOiB0aGlzLCBvcHRpb25zfSlcbiAgICB9KVxuICB9XG5cbiAgYWRkQ29udHJhY3QgKGNvbnRyYWN0Q29uZmlnLCBldmVudHMgPSBbXSkge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdBRERfQ09OVFJBQ1QnLCBkcml6emxlOiB0aGlzLCBjb250cmFjdENvbmZpZywgZXZlbnRzLCB3ZWIzOiB0aGlzLndlYjN9KVxuICB9XG5cbiAgX2FkZENvbnRyYWN0IChkcml6emxlQ29udHJhY3QpIHtcbiAgICBpZiAodGhpcy5jb250cmFjdHNbZHJpenpsZUNvbnRyYWN0LmNvbnRyYWN0TmFtZV0pIHsgdGhyb3cgYENvbnRyYWN0IGFscmVhZHkgZXhpc3RzOiAke2RyaXp6bGVDb250cmFjdC5jb250cmFjdE5hbWV9YCB9XG4gICAgdGhpcy5jb250cmFjdHNbZHJpenpsZUNvbnRyYWN0LmNvbnRyYWN0TmFtZV0gPSBkcml6emxlQ29udHJhY3RcbiAgICB0aGlzLmNvbnRyYWN0TGlzdC5wdXNoKGRyaXp6bGVDb250cmFjdClcbiAgfVxuXG4gIGZpbmRDb250cmFjdEJ5QWRkcmVzcyAoYWRkcmVzcykge1xuICAgIHJldHVybiB0aGlzLmNvbnRyYWN0TGlzdC5maW5kKChjb250cmFjdCkgPT4ge1xuICAgICAgcmV0dXJuIGNvbnRyYWN0LmFkZHJlc3MudG9Mb3dlckNhc2UoKSA9PT0gYWRkcmVzcy50b0xvd2VyQ2FzZSgpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcml6emxlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRHJpenpsZS5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4vcm9vdFNhZ2EnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZSB9IGZyb20gJy4vZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUnXG5pbXBvcnQgZ2V0QWJpIGZyb20gJy4vZ2V0QWJpJ1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVN0b3JlKG9wdGlvbnMpIHtcbiAgLy8gUmVkdXggRGV2VG9vbHNcbiAgY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcblxuICAvLyBQcmVsb2FkZWQgc3RhdGVcbiAgdmFyIHByZWxvYWRlZFN0YXRlID0ge1xuICAgIGNvbnRyYWN0czogZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUob3B0aW9ucylcbiAgfVxuXG4gIC8vIGNyZWF0ZSB0aGUgc2FnYSBtaWRkbGV3YXJlXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBwcmVsb2FkZWRTdGF0ZSxcbiAgICBjb21wb3NlRW5oYW5jZXJzKFxuICAgICAgYXBwbHlNaWRkbGV3YXJlKFxuICAgICAgICBzYWdhTWlkZGxld2FyZVxuICAgICAgKVxuICAgIClcbiAgKVxuXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcblxuICByZXR1cm4gc3RvcmVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZVN0b3JlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VuZXJhdGVTdG9yZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuXG5pbXBvcnQgYWNjb3VudHNTYWdhIGZyb20gJy4vYWNjb3VudHMvYWNjb3VudHNTYWdhJ1xuaW1wb3J0IGFjY291bnRCYWxhbmNlc1NhZ2EgZnJvbSAnLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzU2FnYSdcbmltcG9ydCBibG9ja3NTYWdhIGZyb20gJy4vYmxvY2tzL2Jsb2Nrc1NhZ2EnXG5pbXBvcnQgY29udHJhY3RzU2FnYSBmcm9tICcuL2NvbnRyYWN0cy9jb250cmFjdHNTYWdhJ1xuaW1wb3J0IGRyaXp6bGVTdGF0dXNTYWdhIGZyb20gJy4vZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzU2FnYSdcbmltcG9ydCB3ZWIzU2FnYSBmcm9tICcuL3dlYjMvd2ViM1NhZ2EnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290KCkge1xuICB5aWVsZCBhbGwoW1xuICAgIGZvcmsoYWNjb3VudHNTYWdhKSxcbiAgICBmb3JrKGFjY291bnRCYWxhbmNlc1NhZ2EpLFxuICAgIGZvcmsoYmxvY2tzU2FnYSksXG4gICAgZm9yayhjb250cmFjdHNTYWdhKSxcbiAgICBmb3JrKGRyaXp6bGVTdGF0dXNTYWdhKSxcbiAgICBmb3JrKHdlYjNTYWdhKVxuICBdKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Jvb3RTYWdhLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2JhYmVsLXByZXNldC1yZWFjdC1hcHAvfi9iYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9XG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpcztcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL2JhYmVsLXByZXNldC1yZWFjdC1hcHAvfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZ2xvYmFsLnByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgZ2xvYmFsLnByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBnbG9iYWwucHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vYmFiZWwtcHJlc2V0LXJlYWN0LWFwcC9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaW8gPSByZXF1aXJlKCcuL2ludGVybmFsL2lvJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGFrZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby50YWtlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGFrZW0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8udGFrZW07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdwdXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8ucHV0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnYWxsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLmFsbDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JhY2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8ucmFjZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NhbGwnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8uY2FsbDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2FwcGx5Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLmFwcGx5O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3BzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLmNwcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2ZvcmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8uZm9yaztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3NwYXduJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLnNwYXduO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnam9pbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby5qb2luO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FuY2VsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLmNhbmNlbDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3NlbGVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby5zZWxlY3Q7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdhY3Rpb25DaGFubmVsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLmFjdGlvbkNoYW5uZWw7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjYW5jZWxsZWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8uY2FuY2VsbGVkO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZmx1c2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8uZmx1c2g7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLmdldENvbnRleHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lvLnNldENvbnRleHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd0YWtlRXZlcnknLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8udGFrZUV2ZXJ5O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGFrZUxhdGVzdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pby50YWtlTGF0ZXN0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndGhyb3R0bGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW8udGhyb3R0bGU7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3JlZHV4LXNhZ2EvbGliL2VmZmVjdHMuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5hc0VmZmVjdCA9IGV4cG9ydHMudGFrZW0gPSB1bmRlZmluZWQ7XG5leHBvcnRzLnRha2UgPSB0YWtlO1xuZXhwb3J0cy5wdXQgPSBwdXQ7XG5leHBvcnRzLmFsbCA9IGFsbDtcbmV4cG9ydHMucmFjZSA9IHJhY2U7XG5leHBvcnRzLmNhbGwgPSBjYWxsO1xuZXhwb3J0cy5hcHBseSA9IGFwcGx5O1xuZXhwb3J0cy5jcHMgPSBjcHM7XG5leHBvcnRzLmZvcmsgPSBmb3JrO1xuZXhwb3J0cy5zcGF3biA9IHNwYXduO1xuZXhwb3J0cy5qb2luID0gam9pbjtcbmV4cG9ydHMuY2FuY2VsID0gY2FuY2VsO1xuZXhwb3J0cy5zZWxlY3QgPSBzZWxlY3Q7XG5leHBvcnRzLmFjdGlvbkNoYW5uZWwgPSBhY3Rpb25DaGFubmVsO1xuZXhwb3J0cy5jYW5jZWxsZWQgPSBjYW5jZWxsZWQ7XG5leHBvcnRzLmZsdXNoID0gZmx1c2g7XG5leHBvcnRzLmdldENvbnRleHQgPSBnZXRDb250ZXh0O1xuZXhwb3J0cy5zZXRDb250ZXh0ID0gc2V0Q29udGV4dDtcbmV4cG9ydHMudGFrZUV2ZXJ5ID0gdGFrZUV2ZXJ5O1xuZXhwb3J0cy50YWtlTGF0ZXN0ID0gdGFrZUxhdGVzdDtcbmV4cG9ydHMudGhyb3R0bGUgPSB0aHJvdHRsZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIF9zYWdhSGVscGVycyA9IHJlcXVpcmUoJy4vc2FnYUhlbHBlcnMnKTtcblxudmFyIElPID0gKDAsIF91dGlscy5zeW0pKCdJTycpO1xudmFyIFRBS0UgPSAnVEFLRSc7XG52YXIgUFVUID0gJ1BVVCc7XG52YXIgQUxMID0gJ0FMTCc7XG52YXIgUkFDRSA9ICdSQUNFJztcbnZhciBDQUxMID0gJ0NBTEwnO1xudmFyIENQUyA9ICdDUFMnO1xudmFyIEZPUksgPSAnRk9SSyc7XG52YXIgSk9JTiA9ICdKT0lOJztcbnZhciBDQU5DRUwgPSAnQ0FOQ0VMJztcbnZhciBTRUxFQ1QgPSAnU0VMRUNUJztcbnZhciBBQ1RJT05fQ0hBTk5FTCA9ICdBQ1RJT05fQ0hBTk5FTCc7XG52YXIgQ0FOQ0VMTEVEID0gJ0NBTkNFTExFRCc7XG52YXIgRkxVU0ggPSAnRkxVU0gnO1xudmFyIEdFVF9DT05URVhUID0gJ0dFVF9DT05URVhUJztcbnZhciBTRVRfQ09OVEVYVCA9ICdTRVRfQ09OVEVYVCc7XG5cbnZhciBURVNUX0hJTlQgPSAnXFxuKEhJTlQ6IGlmIHlvdSBhcmUgZ2V0dGluZyB0aGlzIGVycm9ycyBpbiB0ZXN0cywgY29uc2lkZXIgdXNpbmcgY3JlYXRlTW9ja1Rhc2sgZnJvbSByZWR1eC1zYWdhL3V0aWxzKSc7XG5cbnZhciBlZmZlY3QgPSBmdW5jdGlvbiBlZmZlY3QodHlwZSwgcGF5bG9hZCkge1xuICB2YXIgX3JlZjtcblxuICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW0lPXSA9IHRydWUsIF9yZWZbdHlwZV0gPSBwYXlsb2FkLCBfcmVmO1xufTtcblxuZnVuY3Rpb24gdGFrZSgpIHtcbiAgdmFyIHBhdHRlcm5PckNoYW5uZWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcqJztcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICgwLCBfdXRpbHMuY2hlY2spKGFyZ3VtZW50c1swXSwgX3V0aWxzLmlzLm5vdFVuZGVmLCAndGFrZShwYXR0ZXJuT3JDaGFubmVsKTogcGF0dGVybk9yQ2hhbm5lbCBpcyB1bmRlZmluZWQnKTtcbiAgfVxuICBpZiAoX3V0aWxzLmlzLnBhdHRlcm4ocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gZWZmZWN0KFRBS0UsIHsgcGF0dGVybjogcGF0dGVybk9yQ2hhbm5lbCB9KTtcbiAgfVxuICBpZiAoX3V0aWxzLmlzLmNoYW5uZWwocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gZWZmZWN0KFRBS0UsIHsgY2hhbm5lbDogcGF0dGVybk9yQ2hhbm5lbCB9KTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ3Rha2UocGF0dGVybk9yQ2hhbm5lbCk6IGFyZ3VtZW50ICcgKyBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbCkgKyAnIGlzIG5vdCB2YWxpZCBjaGFubmVsIG9yIGEgdmFsaWQgcGF0dGVybicpO1xufVxuXG50YWtlLm1heWJlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWZmID0gdGFrZS5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIGVmZltUQUtFXS5tYXliZSA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59O1xuXG52YXIgdGFrZW0gPSAvKiNfX1BVUkVfXyovZXhwb3J0cy50YWtlbSA9ICgwLCBfdXRpbHMuZGVwcmVjYXRlKSh0YWtlLm1heWJlLCAvKiNfX1BVUkVfXyovKDAsIF91dGlscy51cGRhdGVJbmNlbnRpdmUpKCd0YWtlbScsICd0YWtlLm1heWJlJykpO1xuXG5mdW5jdGlvbiBwdXQoY2hhbm5lbCwgYWN0aW9uKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICgwLCBfdXRpbHMuY2hlY2spKGNoYW5uZWwsIF91dGlscy5pcy5ub3RVbmRlZiwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCBjaGFubmVsIGlzIHVuZGVmaW5lZCcpO1xuICAgICgwLCBfdXRpbHMuY2hlY2spKGNoYW5uZWwsIF91dGlscy5pcy5jaGFubmVsLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50ICcgKyBjaGFubmVsICsgJyBpcyBub3QgYSB2YWxpZCBjaGFubmVsJyk7XG4gICAgKDAsIF91dGlscy5jaGVjaykoYWN0aW9uLCBfdXRpbHMuaXMubm90VW5kZWYsICdwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgYWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xuICB9IGVsc2Uge1xuICAgICgwLCBfdXRpbHMuY2hlY2spKGNoYW5uZWwsIF91dGlscy5pcy5ub3RVbmRlZiwgJ3B1dChhY3Rpb24pOiBhcmd1bWVudCBhY3Rpb24gaXMgdW5kZWZpbmVkJyk7XG4gICAgYWN0aW9uID0gY2hhbm5lbDtcbiAgICBjaGFubmVsID0gbnVsbDtcbiAgfVxuICByZXR1cm4gZWZmZWN0KFBVVCwgeyBjaGFubmVsOiBjaGFubmVsLCBhY3Rpb246IGFjdGlvbiB9KTtcbn1cblxucHV0LnJlc29sdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZmYgPSBwdXQuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICBlZmZbUFVUXS5yZXNvbHZlID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn07XG5cbnB1dC5zeW5jID0gKDAsIF91dGlscy5kZXByZWNhdGUpKHB1dC5yZXNvbHZlLCAoMCwgX3V0aWxzLnVwZGF0ZUluY2VudGl2ZSkoJ3B1dC5zeW5jJywgJ3B1dC5yZXNvbHZlJykpO1xuXG5mdW5jdGlvbiBhbGwoZWZmZWN0cykge1xuICByZXR1cm4gZWZmZWN0KEFMTCwgZWZmZWN0cyk7XG59XG5cbmZ1bmN0aW9uIHJhY2UoZWZmZWN0cykge1xuICByZXR1cm4gZWZmZWN0KFJBQ0UsIGVmZmVjdHMpO1xufVxuXG5mdW5jdGlvbiBnZXRGbkNhbGxEZXNjKG1ldGgsIGZuLCBhcmdzKSB7XG4gICgwLCBfdXRpbHMuY2hlY2spKGZuLCBfdXRpbHMuaXMubm90VW5kZWYsIG1ldGggKyAnOiBhcmd1bWVudCBmbiBpcyB1bmRlZmluZWQnKTtcblxuICB2YXIgY29udGV4dCA9IG51bGw7XG4gIGlmIChfdXRpbHMuaXMuYXJyYXkoZm4pKSB7XG4gICAgdmFyIF9mbiA9IGZuO1xuICAgIGNvbnRleHQgPSBfZm5bMF07XG4gICAgZm4gPSBfZm5bMV07XG4gIH0gZWxzZSBpZiAoZm4uZm4pIHtcbiAgICB2YXIgX2ZuMiA9IGZuO1xuICAgIGNvbnRleHQgPSBfZm4yLmNvbnRleHQ7XG4gICAgZm4gPSBfZm4yLmZuO1xuICB9XG4gIGlmIChjb250ZXh0ICYmIF91dGlscy5pcy5zdHJpbmcoZm4pICYmIF91dGlscy5pcy5mdW5jKGNvbnRleHRbZm5dKSkge1xuICAgIGZuID0gY29udGV4dFtmbl07XG4gIH1cbiAgKDAsIF91dGlscy5jaGVjaykoZm4sIF91dGlscy5pcy5mdW5jLCBtZXRoICsgJzogYXJndW1lbnQgJyArIGZuICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuXG4gIHJldHVybiB7IGNvbnRleHQ6IGNvbnRleHQsIGZuOiBmbiwgYXJnczogYXJncyB9O1xufVxuXG5mdW5jdGlvbiBjYWxsKGZuKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGVmZmVjdChDQUxMLCBnZXRGbkNhbGxEZXNjKCdjYWxsJywgZm4sIGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gYXBwbHkoY29udGV4dCwgZm4pIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuXG4gIHJldHVybiBlZmZlY3QoQ0FMTCwgZ2V0Rm5DYWxsRGVzYygnYXBwbHknLCB7IGNvbnRleHQ6IGNvbnRleHQsIGZuOiBmbiB9LCBhcmdzKSk7XG59XG5cbmZ1bmN0aW9uIGNwcyhmbikge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBlZmZlY3QoQ1BTLCBnZXRGbkNhbGxEZXNjKCdjcHMnLCBmbiwgYXJncykpO1xufVxuXG5mdW5jdGlvbiBmb3JrKGZuKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIGVmZmVjdChGT1JLLCBnZXRGbkNhbGxEZXNjKCdmb3JrJywgZm4sIGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gc3Bhd24oZm4pIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjQgPiAxID8gX2xlbjQgLSAxIDogMCksIF9rZXk0ID0gMTsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgIGFyZ3NbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICB2YXIgZWZmID0gZm9yay5hcHBseSh1bmRlZmluZWQsIFtmbl0uY29uY2F0KGFyZ3MpKTtcbiAgZWZmW0ZPUktdLmRldGFjaGVkID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn1cblxuZnVuY3Rpb24gam9pbigpIHtcbiAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCB0YXNrcyA9IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgdGFza3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgfVxuXG4gIGlmICh0YXNrcy5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIGFsbCh0YXNrcy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBqb2luKHQpO1xuICAgIH0pKTtcbiAgfVxuICB2YXIgdGFzayA9IHRhc2tzWzBdO1xuICAoMCwgX3V0aWxzLmNoZWNrKSh0YXNrLCBfdXRpbHMuaXMubm90VW5kZWYsICdqb2luKHRhc2spOiBhcmd1bWVudCB0YXNrIGlzIHVuZGVmaW5lZCcpO1xuICAoMCwgX3V0aWxzLmNoZWNrKSh0YXNrLCBfdXRpbHMuaXMudGFzaywgJ2pvaW4odGFzayk6IGFyZ3VtZW50ICcgKyB0YXNrICsgJyBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCAnICsgVEVTVF9ISU5UKTtcbiAgcmV0dXJuIGVmZmVjdChKT0lOLCB0YXNrKTtcbn1cblxuZnVuY3Rpb24gY2FuY2VsKCkge1xuICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIHRhc2tzID0gQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICB0YXNrc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICB9XG5cbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gYWxsKHRhc2tzLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGNhbmNlbCh0KTtcbiAgICB9KSk7XG4gIH1cbiAgdmFyIHRhc2sgPSB0YXNrc1swXTtcbiAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICgwLCBfdXRpbHMuY2hlY2spKHRhc2ssIF91dGlscy5pcy5ub3RVbmRlZiwgJ2NhbmNlbCh0YXNrKTogYXJndW1lbnQgdGFzayBpcyB1bmRlZmluZWQnKTtcbiAgICAoMCwgX3V0aWxzLmNoZWNrKSh0YXNrLCBfdXRpbHMuaXMudGFzaywgJ2NhbmNlbCh0YXNrKTogYXJndW1lbnQgJyArIHRhc2sgKyAnIGlzIG5vdCBhIHZhbGlkIFRhc2sgb2JqZWN0ICcgKyBURVNUX0hJTlQpO1xuICB9XG4gIHJldHVybiBlZmZlY3QoQ0FOQ0VMLCB0YXNrIHx8IF91dGlscy5TRUxGX0NBTkNFTExBVElPTik7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdChzZWxlY3Rvcikge1xuICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuNyA+IDEgPyBfbGVuNyAtIDEgOiAwKSwgX2tleTcgPSAxOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgYXJnc1tfa2V5NyAtIDFdID0gYXJndW1lbnRzW19rZXk3XTtcbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgc2VsZWN0b3IgPSBfdXRpbHMuaWRlbnQ7XG4gIH0gZWxzZSB7XG4gICAgKDAsIF91dGlscy5jaGVjaykoc2VsZWN0b3IsIF91dGlscy5pcy5ub3RVbmRlZiwgJ3NlbGVjdChzZWxlY3RvcixbLi4uXSk6IGFyZ3VtZW50IHNlbGVjdG9yIGlzIHVuZGVmaW5lZCcpO1xuICAgICgwLCBfdXRpbHMuY2hlY2spKHNlbGVjdG9yLCBfdXRpbHMuaXMuZnVuYywgJ3NlbGVjdChzZWxlY3RvcixbLi4uXSk6IGFyZ3VtZW50ICcgKyBzZWxlY3RvciArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0KFNFTEVDVCwgeyBzZWxlY3Rvcjogc2VsZWN0b3IsIGFyZ3M6IGFyZ3MgfSk7XG59XG5cbi8qKlxuICBjaGFubmVsKHBhdHRlcm4sIFtidWZmZXJdKSAgICA9PiBjcmVhdGVzIGFuIGV2ZW50IGNoYW5uZWwgZm9yIHN0b3JlIGFjdGlvbnNcbioqL1xuZnVuY3Rpb24gYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpIHtcbiAgKDAsIF91dGlscy5jaGVjaykocGF0dGVybiwgX3V0aWxzLmlzLm5vdFVuZGVmLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLC4uLik6IGFyZ3VtZW50IHBhdHRlcm4gaXMgdW5kZWZpbmVkJyk7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICgwLCBfdXRpbHMuY2hlY2spKGJ1ZmZlciwgX3V0aWxzLmlzLm5vdFVuZGVmLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpOiBhcmd1bWVudCBidWZmZXIgaXMgdW5kZWZpbmVkJyk7XG4gICAgKDAsIF91dGlscy5jaGVjaykoYnVmZmVyLCBfdXRpbHMuaXMuYnVmZmVyLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpOiBhcmd1bWVudCAnICsgYnVmZmVyICsgJyBpcyBub3QgYSB2YWxpZCBidWZmZXInKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0KEFDVElPTl9DSEFOTkVMLCB7IHBhdHRlcm46IHBhdHRlcm4sIGJ1ZmZlcjogYnVmZmVyIH0pO1xufVxuXG5mdW5jdGlvbiBjYW5jZWxsZWQoKSB7XG4gIHJldHVybiBlZmZlY3QoQ0FOQ0VMTEVELCB7fSk7XG59XG5cbmZ1bmN0aW9uIGZsdXNoKGNoYW5uZWwpIHtcbiAgKDAsIF91dGlscy5jaGVjaykoY2hhbm5lbCwgX3V0aWxzLmlzLmNoYW5uZWwsICdmbHVzaChjaGFubmVsKTogYXJndW1lbnQgJyArIGNoYW5uZWwgKyAnIGlzIG5vdCB2YWxpZCBjaGFubmVsJyk7XG4gIHJldHVybiBlZmZlY3QoRkxVU0gsIGNoYW5uZWwpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KHByb3ApIHtcbiAgKDAsIF91dGlscy5jaGVjaykocHJvcCwgX3V0aWxzLmlzLnN0cmluZywgJ2dldENvbnRleHQocHJvcCk6IGFyZ3VtZW50ICcgKyBwcm9wICsgJyBpcyBub3QgYSBzdHJpbmcnKTtcbiAgcmV0dXJuIGVmZmVjdChHRVRfQ09OVEVYVCwgcHJvcCk7XG59XG5cbmZ1bmN0aW9uIHNldENvbnRleHQocHJvcHMpIHtcbiAgKDAsIF91dGlscy5jaGVjaykocHJvcHMsIF91dGlscy5pcy5vYmplY3QsICgwLCBfdXRpbHMuY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcpKG51bGwsIHByb3BzKSk7XG4gIHJldHVybiBlZmZlY3QoU0VUX0NPTlRFWFQsIHByb3BzKTtcbn1cblxuZnVuY3Rpb24gdGFrZUV2ZXJ5KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuOCA+IDIgPyBfbGVuOCAtIDIgOiAwKSwgX2tleTggPSAyOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgYXJnc1tfa2V5OCAtIDJdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW19zYWdhSGVscGVycy50YWtlRXZlcnlIZWxwZXIsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gdGFrZUxhdGVzdChwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbjkgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjkgPiAyID8gX2xlbjkgLSAyIDogMCksIF9rZXk5ID0gMjsgX2tleTkgPCBfbGVuOTsgX2tleTkrKykge1xuICAgIGFyZ3NbX2tleTkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5OV07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh1bmRlZmluZWQsIFtfc2FnYUhlbHBlcnMudGFrZUxhdGVzdEhlbHBlciwgcGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG5mdW5jdGlvbiB0aHJvdHRsZShtcywgcGF0dGVybiwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW4xMCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMTAgPiAzID8gX2xlbjEwIC0gMyA6IDApLCBfa2V5MTAgPSAzOyBfa2V5MTAgPCBfbGVuMTA7IF9rZXkxMCsrKSB7XG4gICAgYXJnc1tfa2V5MTAgLSAzXSA9IGFyZ3VtZW50c1tfa2V5MTBdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbX3NhZ2FIZWxwZXJzLnRocm90dGxlSGVscGVyLCBtcywgcGF0dGVybiwgd29ya2VyXS5jb25jYXQoYXJncykpO1xufVxuXG52YXIgY3JlYXRlQXNFZmZlY3RUeXBlID0gZnVuY3Rpb24gY3JlYXRlQXNFZmZlY3RUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlZmZlY3QpIHtcbiAgICByZXR1cm4gZWZmZWN0ICYmIGVmZmVjdFtJT10gJiYgZWZmZWN0W3R5cGVdO1xuICB9O1xufTtcblxudmFyIGFzRWZmZWN0ID0gZXhwb3J0cy5hc0VmZmVjdCA9IHtcbiAgdGFrZTogY3JlYXRlQXNFZmZlY3RUeXBlKFRBS0UpLFxuICBwdXQ6IGNyZWF0ZUFzRWZmZWN0VHlwZShQVVQpLFxuICBhbGw6IGNyZWF0ZUFzRWZmZWN0VHlwZShBTEwpLFxuICByYWNlOiBjcmVhdGVBc0VmZmVjdFR5cGUoUkFDRSksXG4gIGNhbGw6IGNyZWF0ZUFzRWZmZWN0VHlwZShDQUxMKSxcbiAgY3BzOiBjcmVhdGVBc0VmZmVjdFR5cGUoQ1BTKSxcbiAgZm9yazogY3JlYXRlQXNFZmZlY3RUeXBlKEZPUkspLFxuICBqb2luOiBjcmVhdGVBc0VmZmVjdFR5cGUoSk9JTiksXG4gIGNhbmNlbDogY3JlYXRlQXNFZmZlY3RUeXBlKENBTkNFTCksXG4gIHNlbGVjdDogY3JlYXRlQXNFZmZlY3RUeXBlKFNFTEVDVCksXG4gIGFjdGlvbkNoYW5uZWw6IGNyZWF0ZUFzRWZmZWN0VHlwZShBQ1RJT05fQ0hBTk5FTCksXG4gIGNhbmNlbGxlZDogY3JlYXRlQXNFZmZlY3RUeXBlKENBTkNFTExFRCksXG4gIGZsdXNoOiBjcmVhdGVBc0VmZmVjdFR5cGUoRkxVU0gpLFxuICBnZXRDb250ZXh0OiBjcmVhdGVBc0VmZmVjdFR5cGUoR0VUX0NPTlRFWFQpLFxuICBzZXRDb250ZXh0OiBjcmVhdGVBc0VmZmVjdFR5cGUoU0VUX0NPTlRFWFQpXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL2lvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5jaGVjayA9IGNoZWNrO1xuZXhwb3J0cy5oYXNPd24gPSBoYXNPd247XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbmV4cG9ydHMuZGVmZXJyZWQgPSBkZWZlcnJlZDtcbmV4cG9ydHMuYXJyYXlPZkRlZmZlcmVkID0gYXJyYXlPZkRlZmZlcmVkO1xuZXhwb3J0cy5kZWxheSA9IGRlbGF5O1xuZXhwb3J0cy5jcmVhdGVNb2NrVGFzayA9IGNyZWF0ZU1vY2tUYXNrO1xuZXhwb3J0cy5hdXRvSW5jID0gYXV0b0luYztcbmV4cG9ydHMubWFrZUl0ZXJhdG9yID0gbWFrZUl0ZXJhdG9yO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmRlcHJlY2F0ZSA9IGRlcHJlY2F0ZTtcbnZhciBzeW0gPSBleHBvcnRzLnN5bSA9IGZ1bmN0aW9uIHN5bShpZCkge1xuICByZXR1cm4gJ0BAcmVkdXgtc2FnYS8nICsgaWQ7XG59O1xuXG52YXIgVEFTSyA9IGV4cG9ydHMuVEFTSyA9IHN5bSgnVEFTSycpO1xudmFyIEhFTFBFUiA9IGV4cG9ydHMuSEVMUEVSID0gc3ltKCdIRUxQRVInKTtcbnZhciBNQVRDSCA9IGV4cG9ydHMuTUFUQ0ggPSBzeW0oJ01BVENIJyk7XG52YXIgQ0FOQ0VMID0gZXhwb3J0cy5DQU5DRUwgPSBzeW0oJ0NBTkNFTF9QUk9NSVNFJyk7XG52YXIgU0FHQV9BQ1RJT04gPSBleHBvcnRzLlNBR0FfQUNUSU9OID0gc3ltKCdTQUdBX0FDVElPTicpO1xudmFyIFNFTEZfQ0FOQ0VMTEFUSU9OID0gZXhwb3J0cy5TRUxGX0NBTkNFTExBVElPTiA9IHN5bSgnU0VMRl9DQU5DRUxMQVRJT04nKTtcbnZhciBrb25zdCA9IGV4cG9ydHMua29uc3QgPSBmdW5jdGlvbiBrb25zdCh2KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHY7XG4gIH07XG59O1xudmFyIGtUcnVlID0gZXhwb3J0cy5rVHJ1ZSA9IGtvbnN0KHRydWUpO1xudmFyIGtGYWxzZSA9IGV4cG9ydHMua0ZhbHNlID0ga29uc3QoZmFsc2UpO1xudmFyIG5vb3AgPSBleHBvcnRzLm5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG52YXIgaWRlbnQgPSBleHBvcnRzLmlkZW50ID0gZnVuY3Rpb24gaWRlbnQodikge1xuICByZXR1cm4gdjtcbn07XG5cbmZ1bmN0aW9uIGNoZWNrKHZhbHVlLCBwcmVkaWNhdGUsIGVycm9yKSB7XG4gIGlmICghcHJlZGljYXRlKHZhbHVlKSkge1xuICAgIGxvZygnZXJyb3InLCAndW5jYXVnaHQgYXQgY2hlY2snLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfVxufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzT3duKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgcmV0dXJuIGlzLm5vdFVuZGVmKG9iamVjdCkgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbn1cblxudmFyIGlzID0gZXhwb3J0cy5pcyA9IHtcbiAgdW5kZWY6IGZ1bmN0aW9uIHVuZGVmKHYpIHtcbiAgICByZXR1cm4gdiA9PT0gbnVsbCB8fCB2ID09PSB1bmRlZmluZWQ7XG4gIH0sXG4gIG5vdFVuZGVmOiBmdW5jdGlvbiBub3RVbmRlZih2KSB7XG4gICAgcmV0dXJuIHYgIT09IG51bGwgJiYgdiAhPT0gdW5kZWZpbmVkO1xuICB9LFxuICBmdW5jOiBmdW5jdGlvbiBmdW5jKGYpIHtcbiAgICByZXR1cm4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbic7XG4gIH0sXG4gIG51bWJlcjogZnVuY3Rpb24gbnVtYmVyKG4pIHtcbiAgICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInO1xuICB9LFxuICBzdHJpbmc6IGZ1bmN0aW9uIHN0cmluZyhzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJztcbiAgfSxcbiAgYXJyYXk6IEFycmF5LmlzQXJyYXksXG4gIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgIWlzLmFycmF5KG9iaikgJiYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iaikpID09PSAnb2JqZWN0JztcbiAgfSxcbiAgcHJvbWlzZTogZnVuY3Rpb24gcHJvbWlzZShwKSB7XG4gICAgcmV0dXJuIHAgJiYgaXMuZnVuYyhwLnRoZW4pO1xuICB9LFxuICBpdGVyYXRvcjogZnVuY3Rpb24gaXRlcmF0b3IoaXQpIHtcbiAgICByZXR1cm4gaXQgJiYgaXMuZnVuYyhpdC5uZXh0KSAmJiBpcy5mdW5jKGl0LnRocm93KTtcbiAgfSxcbiAgaXRlcmFibGU6IGZ1bmN0aW9uIGl0ZXJhYmxlKGl0KSB7XG4gICAgcmV0dXJuIGl0ICYmIGlzLmZ1bmMoU3ltYm9sKSA/IGlzLmZ1bmMoaXRbU3ltYm9sLml0ZXJhdG9yXSkgOiBpcy5hcnJheShpdCk7XG4gIH0sXG4gIHRhc2s6IGZ1bmN0aW9uIHRhc2sodCkge1xuICAgIHJldHVybiB0ICYmIHRbVEFTS107XG4gIH0sXG4gIG9ic2VydmFibGU6IGZ1bmN0aW9uIG9ic2VydmFibGUob2IpIHtcbiAgICByZXR1cm4gb2IgJiYgaXMuZnVuYyhvYi5zdWJzY3JpYmUpO1xuICB9LFxuICBidWZmZXI6IGZ1bmN0aW9uIGJ1ZmZlcihidWYpIHtcbiAgICByZXR1cm4gYnVmICYmIGlzLmZ1bmMoYnVmLmlzRW1wdHkpICYmIGlzLmZ1bmMoYnVmLnRha2UpICYmIGlzLmZ1bmMoYnVmLnB1dCk7XG4gIH0sXG4gIHBhdHRlcm46IGZ1bmN0aW9uIHBhdHRlcm4ocGF0KSB7XG4gICAgcmV0dXJuIHBhdCAmJiAoaXMuc3RyaW5nKHBhdCkgfHwgKHR5cGVvZiBwYXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdCkpID09PSAnc3ltYm9sJyB8fCBpcy5mdW5jKHBhdCkgfHwgaXMuYXJyYXkocGF0KSk7XG4gIH0sXG4gIGNoYW5uZWw6IGZ1bmN0aW9uIGNoYW5uZWwoY2gpIHtcbiAgICByZXR1cm4gY2ggJiYgaXMuZnVuYyhjaC50YWtlKSAmJiBpcy5mdW5jKGNoLmNsb3NlKTtcbiAgfSxcbiAgaGVscGVyOiBmdW5jdGlvbiBoZWxwZXIoaXQpIHtcbiAgICByZXR1cm4gaXQgJiYgaXRbSEVMUEVSXTtcbiAgfSxcbiAgc3RyaW5nYWJsZUZ1bmM6IGZ1bmN0aW9uIHN0cmluZ2FibGVGdW5jKGYpIHtcbiAgICByZXR1cm4gaXMuZnVuYyhmKSAmJiBoYXNPd24oZiwgJ3RvU3RyaW5nJyk7XG4gIH1cbn07XG5cbnZhciBvYmplY3QgPSBleHBvcnRzLm9iamVjdCA9IHtcbiAgYXNzaWduOiBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBpIGluIHNvdXJjZSkge1xuICAgICAgaWYgKGhhc093bihzb3VyY2UsIGkpKSB7XG4gICAgICAgIHRhcmdldFtpXSA9IHNvdXJjZVtpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSkge1xuICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cblxudmFyIGFycmF5ID0gZXhwb3J0cy5hcnJheSA9IHtcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShvYmopIHtcbiAgICB2YXIgYXJyID0gQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgIGlmIChoYXNPd24ob2JqLCBpKSkge1xuICAgICAgICBhcnJbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGRlZmVycmVkKCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gIHZhciBkZWYgPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBkZWYucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgZGVmLnJlamVjdCA9IHJlamVjdDtcbiAgfSk7XG4gIGRlZi5wcm9taXNlID0gcHJvbWlzZTtcbiAgcmV0dXJuIGRlZjtcbn1cblxuZnVuY3Rpb24gYXJyYXlPZkRlZmZlcmVkKGxlbmd0aCkge1xuICB2YXIgYXJyID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnIucHVzaChkZWZlcnJlZCgpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBkZWxheShtcykge1xuICB2YXIgdmFsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gIHZhciB0aW1lb3V0SWQgPSB2b2lkIDA7XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXNvbHZlKHZhbCk7XG4gICAgfSwgbXMpO1xuICB9KTtcblxuICBwcm9taXNlW0NBTkNFTF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9O1xuXG4gIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2NrVGFzaygpIHtcbiAgdmFyIF9yZWY7XG5cbiAgdmFyIHJ1bm5pbmcgPSB0cnVlO1xuICB2YXIgX3Jlc3VsdCA9IHZvaWQgMCxcbiAgICAgIF9lcnJvciA9IHZvaWQgMDtcblxuICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW1RBU0tdID0gdHJ1ZSwgX3JlZi5pc1J1bm5pbmcgPSBmdW5jdGlvbiBpc1J1bm5pbmcoKSB7XG4gICAgcmV0dXJuIHJ1bm5pbmc7XG4gIH0sIF9yZWYucmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgIHJldHVybiBfcmVzdWx0O1xuICB9LCBfcmVmLmVycm9yID0gZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgcmV0dXJuIF9lcnJvcjtcbiAgfSwgX3JlZi5zZXRSdW5uaW5nID0gZnVuY3Rpb24gc2V0UnVubmluZyhiKSB7XG4gICAgcmV0dXJuIHJ1bm5pbmcgPSBiO1xuICB9LCBfcmVmLnNldFJlc3VsdCA9IGZ1bmN0aW9uIHNldFJlc3VsdChyKSB7XG4gICAgcmV0dXJuIF9yZXN1bHQgPSByO1xuICB9LCBfcmVmLnNldEVycm9yID0gZnVuY3Rpb24gc2V0RXJyb3IoZSkge1xuICAgIHJldHVybiBfZXJyb3IgPSBlO1xuICB9LCBfcmVmO1xufVxuXG5mdW5jdGlvbiBhdXRvSW5jKCkge1xuICB2YXIgc2VlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiArK3NlZWQ7XG4gIH07XG59XG5cbnZhciB1aWQgPSBleHBvcnRzLnVpZCA9IGF1dG9JbmMoKTtcblxudmFyIGtUaHJvdyA9IGZ1bmN0aW9uIGtUaHJvdyhlcnIpIHtcbiAgdGhyb3cgZXJyO1xufTtcbnZhciBrUmV0dXJuID0gZnVuY3Rpb24ga1JldHVybih2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcbn07XG5mdW5jdGlvbiBtYWtlSXRlcmF0b3IobmV4dCkge1xuICB2YXIgdGhybyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoga1Rocm93O1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJyc7XG4gIHZhciBpc0hlbHBlciA9IGFyZ3VtZW50c1szXTtcblxuICB2YXIgaXRlcmF0b3IgPSB7IG5hbWU6IG5hbWUsIG5leHQ6IG5leHQsIHRocm93OiB0aHJvLCByZXR1cm46IGtSZXR1cm4gfTtcblxuICBpZiAoaXNIZWxwZXIpIHtcbiAgICBpdGVyYXRvcltIRUxQRVJdID0gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuXG4vKipcbiAgUHJpbnQgZXJyb3IgaW4gYSB1c2VmdWwgd2F5IHdoZXRoZXIgaW4gYSBicm93c2VyIGVudmlyb25tZW50XG4gICh3aXRoIGV4cGFuZGFibGUgZXJyb3Igc3RhY2sgdHJhY2VzKSwgb3IgaW4gYSBub2RlLmpzIGVudmlyb25tZW50XG4gICh0ZXh0LW9ubHkgbG9nIG91dHB1dClcbiAqKi9cbmZ1bmN0aW9uIGxvZyhsZXZlbCwgbWVzc2FnZSkge1xuICB2YXIgZXJyb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICcnO1xuXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSovXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUubG9nKCdyZWR1eC1zYWdhICcgKyBsZXZlbCArICc6ICcgKyBtZXNzYWdlICsgJ1xcbicgKyAoZXJyb3IgJiYgZXJyb3Iuc3RhY2sgfHwgZXJyb3IpKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlW2xldmVsXShtZXNzYWdlLCBlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVwcmVjYXRlKGZuLCBkZXByZWNhdGlvbldhcm5pbmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIGxvZygnd2FybicsIGRlcHJlY2F0aW9uV2FybmluZyk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxudmFyIHVwZGF0ZUluY2VudGl2ZSA9IGV4cG9ydHMudXBkYXRlSW5jZW50aXZlID0gZnVuY3Rpb24gdXBkYXRlSW5jZW50aXZlKGRlcHJlY2F0ZWQsIHByZWZlcnJlZCkge1xuICByZXR1cm4gZGVwcmVjYXRlZCArICcgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiAnICsgcHJlZmVycmVkICsgJywgcGxlYXNlIHVwZGF0ZSB5b3VyIGNvZGUnO1xufTtcblxudmFyIGludGVybmFsRXJyID0gZXhwb3J0cy5pbnRlcm5hbEVyciA9IGZ1bmN0aW9uIGludGVybmFsRXJyKGVycikge1xuICByZXR1cm4gbmV3IEVycm9yKCdcXG4gIHJlZHV4LXNhZ2E6IEVycm9yIGNoZWNraW5nIGhvb2tzIGRldGVjdGVkIGFuIGluY29uc2lzdGVudCBzdGF0ZS4gVGhpcyBpcyBsaWtlbHkgYSBidWdcXG4gIGluIHJlZHV4LXNhZ2EgY29kZSBhbmQgbm90IHlvdXJzLiBUaGFua3MgZm9yIHJlcG9ydGluZyB0aGlzIGluIHRoZSBwcm9qZWN0XFwncyBnaXRodWIgcmVwby5cXG4gIEVycm9yOiAnICsgZXJyICsgJ1xcbicpO1xufTtcblxudmFyIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nID0gZXhwb3J0cy5jcmVhdGVTZXRDb250ZXh0V2FybmluZyA9IGZ1bmN0aW9uIGNyZWF0ZVNldENvbnRleHRXYXJuaW5nKGN0eCwgcHJvcHMpIHtcbiAgcmV0dXJuIChjdHggPyBjdHggKyAnLicgOiAnJykgKyAnc2V0Q29udGV4dChwcm9wcyk6IGFyZ3VtZW50ICcgKyBwcm9wcyArICcgaXMgbm90IGEgcGxhaW4gb2JqZWN0Jztcbn07XG5cbnZhciB3cmFwU2FnYURpc3BhdGNoID0gZXhwb3J0cy53cmFwU2FnYURpc3BhdGNoID0gZnVuY3Rpb24gd3JhcFNhZ2FEaXNwYXRjaChkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBkaXNwYXRjaChPYmplY3QuZGVmaW5lUHJvcGVydHkoYWN0aW9uLCBTQUdBX0FDVElPTiwgeyB2YWx1ZTogdHJ1ZSB9KSk7XG4gIH07XG59O1xuXG52YXIgY2xvbmVhYmxlR2VuZXJhdG9yID0gZXhwb3J0cy5jbG9uZWFibGVHZW5lcmF0b3IgPSBmdW5jdGlvbiBjbG9uZWFibGVHZW5lcmF0b3IoZ2VuZXJhdG9yRnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBoaXN0b3J5ID0gW107XG4gICAgdmFyIGdlbiA9IGdlbmVyYXRvckZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dChhcmcpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKGFyZyk7XG4gICAgICAgIHJldHVybiBnZW4ubmV4dChhcmcpO1xuICAgICAgfSxcbiAgICAgIGNsb25lOiBmdW5jdGlvbiBjbG9uZSgpIHtcbiAgICAgICAgdmFyIGNsb25lZEdlbiA9IGNsb25lYWJsZUdlbmVyYXRvcihnZW5lcmF0b3JGdW5jKS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICBoaXN0b3J5LmZvckVhY2goZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgIHJldHVybiBjbG9uZWRHZW4ubmV4dChhcmcpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb25lZEdlbjtcbiAgICAgIH0sXG4gICAgICByZXR1cm46IGZ1bmN0aW9uIF9yZXR1cm4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdlbi5yZXR1cm4odmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHRocm93OiBmdW5jdGlvbiBfdGhyb3coZXhjZXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBnZW4udGhyb3coZXhjZXB0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnRocm90dGxlSGVscGVyID0gZXhwb3J0cy50YWtlTGF0ZXN0SGVscGVyID0gZXhwb3J0cy50YWtlRXZlcnlIZWxwZXIgPSBleHBvcnRzLnRocm90dGxlID0gZXhwb3J0cy50YWtlTGF0ZXN0ID0gZXhwb3J0cy50YWtlRXZlcnkgPSB1bmRlZmluZWQ7XG5cbnZhciBfdGFrZUV2ZXJ5ID0gcmVxdWlyZSgnLi90YWtlRXZlcnknKTtcblxudmFyIF90YWtlRXZlcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGFrZUV2ZXJ5KTtcblxudmFyIF90YWtlTGF0ZXN0ID0gcmVxdWlyZSgnLi90YWtlTGF0ZXN0Jyk7XG5cbnZhciBfdGFrZUxhdGVzdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90YWtlTGF0ZXN0KTtcblxudmFyIF90aHJvdHRsZSA9IHJlcXVpcmUoJy4vdGhyb3R0bGUnKTtcblxudmFyIF90aHJvdHRsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aHJvdHRsZSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gZGVwcmVjYXRpb25XYXJuaW5nKGhlbHBlck5hbWUpIHtcbiAgcmV0dXJuICdpbXBvcnQgeyAnICsgaGVscGVyTmFtZSArICcgfSBmcm9tIFxcJ3JlZHV4LXNhZ2FcXCcgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBpbXBvcnQgeyAnICsgaGVscGVyTmFtZSArICcgfSBmcm9tIFxcJ3JlZHV4LXNhZ2EvZWZmZWN0c1xcJy5cXG5UaGUgbGF0dGVyIHdpbGwgbm90IHdvcmsgd2l0aCB5aWVsZCosIGFzIGhlbHBlciBlZmZlY3RzIGFyZSB3cmFwcGVkIGF1dG9tYXRpY2FsbHkgZm9yIHlvdSBpbiBmb3JrIGVmZmVjdC5cXG5UaGVyZWZvcmUgeWllbGQgJyArIGhlbHBlck5hbWUgKyAnIHdpbGwgcmV0dXJuIHRhc2sgZGVzY3JpcHRvciB0byB5b3VyIHNhZ2EgYW5kIGV4ZWN1dGUgbmV4dCBsaW5lcyBvZiBjb2RlLic7XG59O1xuXG52YXIgdGFrZUV2ZXJ5ID0gLyojX19QVVJFX18qLygwLCBfdXRpbHMuZGVwcmVjYXRlKShfdGFrZUV2ZXJ5Mi5kZWZhdWx0LCAvKiNfX1BVUkVfXyovZGVwcmVjYXRpb25XYXJuaW5nKCd0YWtlRXZlcnknKSk7XG52YXIgdGFrZUxhdGVzdCA9IC8qI19fUFVSRV9fKi8oMCwgX3V0aWxzLmRlcHJlY2F0ZSkoX3Rha2VMYXRlc3QyLmRlZmF1bHQsIC8qI19fUFVSRV9fKi9kZXByZWNhdGlvbldhcm5pbmcoJ3Rha2VMYXRlc3QnKSk7XG52YXIgdGhyb3R0bGUgPSAvKiNfX1BVUkVfXyovKDAsIF91dGlscy5kZXByZWNhdGUpKF90aHJvdHRsZTIuZGVmYXVsdCwgLyojX19QVVJFX18qL2RlcHJlY2F0aW9uV2FybmluZygndGhyb3R0bGUnKSk7XG5cbmV4cG9ydHMudGFrZUV2ZXJ5ID0gdGFrZUV2ZXJ5O1xuZXhwb3J0cy50YWtlTGF0ZXN0ID0gdGFrZUxhdGVzdDtcbmV4cG9ydHMudGhyb3R0bGUgPSB0aHJvdHRsZTtcbmV4cG9ydHMudGFrZUV2ZXJ5SGVscGVyID0gX3Rha2VFdmVyeTIuZGVmYXVsdDtcbmV4cG9ydHMudGFrZUxhdGVzdEhlbHBlciA9IF90YWtlTGF0ZXN0Mi5kZWZhdWx0O1xuZXhwb3J0cy50aHJvdHRsZUhlbHBlciA9IF90aHJvdHRsZTIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9zYWdhSGVscGVycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdGFrZUV2ZXJ5O1xuXG52YXIgX2ZzbUl0ZXJhdG9yID0gcmVxdWlyZSgnLi9mc21JdGVyYXRvcicpO1xuXG52YXIgX2ZzbUl0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZzbUl0ZXJhdG9yKTtcblxudmFyIF9pbyA9IHJlcXVpcmUoJy4uL2lvJyk7XG5cbnZhciBfY2hhbm5lbCA9IHJlcXVpcmUoJy4uL2NoYW5uZWwnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdGFrZUV2ZXJ5KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5VGFrZSA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiAoMCwgX2lvLnRha2UpKHBhdHRlcm5PckNoYW5uZWwpIH07XG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBfaW8uZm9yay5hcHBseSh1bmRlZmluZWQsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSkgfTtcbiAgfTtcblxuICB2YXIgYWN0aW9uID0gdm9pZCAwLFxuICAgICAgc2V0QWN0aW9uID0gZnVuY3Rpb24gc2V0QWN0aW9uKGFjKSB7XG4gICAgcmV0dXJuIGFjdGlvbiA9IGFjO1xuICB9O1xuXG4gIHJldHVybiAoMCwgX2ZzbUl0ZXJhdG9yMi5kZWZhdWx0KSh7XG4gICAgcTE6IGZ1bmN0aW9uIHExKCkge1xuICAgICAgcmV0dXJuIFsncTInLCB5VGFrZSwgc2V0QWN0aW9uXTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiBhY3Rpb24gPT09IF9jaGFubmVsLkVORCA/IFtfZnNtSXRlcmF0b3IucUVuZF0gOiBbJ3ExJywgeUZvcmsoYWN0aW9uKV07XG4gICAgfVxuICB9LCAncTEnLCAndGFrZUV2ZXJ5KCcgKyAoMCwgX2ZzbUl0ZXJhdG9yLnNhZmVOYW1lKShwYXR0ZXJuT3JDaGFubmVsKSArICcsICcgKyB3b3JrZXIubmFtZSArICcpJyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGFrZUV2ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnFFbmQgPSB1bmRlZmluZWQ7XG5leHBvcnRzLnNhZmVOYW1lID0gc2FmZU5hbWU7XG5leHBvcnRzLmRlZmF1bHQgPSBmc21JdGVyYXRvcjtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBkb25lID0geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH07XG52YXIgcUVuZCA9IGV4cG9ydHMucUVuZCA9IHt9O1xuXG5mdW5jdGlvbiBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSB7XG4gIGlmIChfdXRpbHMuaXMuY2hhbm5lbChwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiAnY2hhbm5lbCc7XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbC5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGVudHJ5KTtcbiAgICB9KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXR0ZXJuT3JDaGFubmVsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmc21JdGVyYXRvcihmc20sIHEwKSB7XG4gIHZhciBuYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnaXRlcmF0b3InO1xuXG4gIHZhciB1cGRhdGVTdGF0ZSA9IHZvaWQgMCxcbiAgICAgIHFOZXh0ID0gcTA7XG5cbiAgZnVuY3Rpb24gbmV4dChhcmcsIGVycm9yKSB7XG4gICAgaWYgKHFOZXh0ID09PSBxRW5kKSB7XG4gICAgICByZXR1cm4gZG9uZTtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHFOZXh0ID0gcUVuZDtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVTdGF0ZSAmJiB1cGRhdGVTdGF0ZShhcmcpO1xuXG4gICAgICB2YXIgX2ZzbSRxTmV4dCA9IGZzbVtxTmV4dF0oKSxcbiAgICAgICAgICBxID0gX2ZzbSRxTmV4dFswXSxcbiAgICAgICAgICBvdXRwdXQgPSBfZnNtJHFOZXh0WzFdLFxuICAgICAgICAgIF91cGRhdGVTdGF0ZSA9IF9mc20kcU5leHRbMl07XG5cbiAgICAgIHFOZXh0ID0gcTtcbiAgICAgIHVwZGF0ZVN0YXRlID0gX3VwZGF0ZVN0YXRlO1xuICAgICAgcmV0dXJuIHFOZXh0ID09PSBxRW5kID8gZG9uZSA6IG91dHB1dDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKDAsIF91dGlscy5tYWtlSXRlcmF0b3IpKG5leHQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KG51bGwsIGVycm9yKTtcbiAgfSwgbmFtZSwgdHJ1ZSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvc2FnYUhlbHBlcnMvZnNtSXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuVU5ERUZJTkVEX0lOUFVUX0VSUk9SID0gZXhwb3J0cy5JTlZBTElEX0JVRkZFUiA9IGV4cG9ydHMuaXNFbmQgPSBleHBvcnRzLkVORCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5lbWl0dGVyID0gZW1pdHRlcjtcbmV4cG9ydHMuY2hhbm5lbCA9IGNoYW5uZWw7XG5leHBvcnRzLmV2ZW50Q2hhbm5lbCA9IGV2ZW50Q2hhbm5lbDtcbmV4cG9ydHMuc3RkQ2hhbm5lbCA9IHN0ZENoYW5uZWw7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfYnVmZmVycyA9IHJlcXVpcmUoJy4vYnVmZmVycycpO1xuXG52YXIgX3NjaGVkdWxlciA9IHJlcXVpcmUoJy4vc2NoZWR1bGVyJyk7XG5cbnZhciBDSEFOTkVMX0VORF9UWVBFID0gJ0BAcmVkdXgtc2FnYS9DSEFOTkVMX0VORCc7XG52YXIgRU5EID0gZXhwb3J0cy5FTkQgPSB7IHR5cGU6IENIQU5ORUxfRU5EX1RZUEUgfTtcbnZhciBpc0VuZCA9IGV4cG9ydHMuaXNFbmQgPSBmdW5jdGlvbiBpc0VuZChhKSB7XG4gIHJldHVybiBhICYmIGEudHlwZSA9PT0gQ0hBTk5FTF9FTkRfVFlQRTtcbn07XG5cbmZ1bmN0aW9uIGVtaXR0ZXIoKSB7XG4gIHZhciBzdWJzY3JpYmVycyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShzdWIpIHtcbiAgICBzdWJzY3JpYmVycy5wdXNoKHN1Yik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoMCwgX3V0aWxzLnJlbW92ZSkoc3Vic2NyaWJlcnMsIHN1Yik7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQoaXRlbSkge1xuICAgIHZhciBhcnIgPSBzdWJzY3JpYmVycy5zbGljZSgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFycltpXShpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGVtaXQ6IGVtaXRcbiAgfTtcbn1cblxudmFyIElOVkFMSURfQlVGRkVSID0gZXhwb3J0cy5JTlZBTElEX0JVRkZFUiA9ICdpbnZhbGlkIGJ1ZmZlciBwYXNzZWQgdG8gY2hhbm5lbCBmYWN0b3J5IGZ1bmN0aW9uJztcbnZhciBVTkRFRklORURfSU5QVVRfRVJST1IgPSBleHBvcnRzLlVOREVGSU5FRF9JTlBVVF9FUlJPUiA9ICdTYWdhIHdhcyBwcm92aWRlZCB3aXRoIGFuIHVuZGVmaW5lZCBhY3Rpb24nO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBleHBvcnRzLlVOREVGSU5FRF9JTlBVVF9FUlJPUiA9IFVOREVGSU5FRF9JTlBVVF9FUlJPUiArPSAnXFxuSGludHM6XFxuICAgIC0gY2hlY2sgdGhhdCB5b3VyIEFjdGlvbiBDcmVhdG9yIHJldHVybnMgYSBub24tdW5kZWZpbmVkIHZhbHVlXFxuICAgIC0gaWYgdGhlIFNhZ2Egd2FzIHN0YXJ0ZWQgdXNpbmcgcnVuU2FnYSwgY2hlY2sgdGhhdCB5b3VyIHN1YnNjcmliZSBzb3VyY2UgcHJvdmlkZXMgdGhlIGFjdGlvbiB0byBpdHMgbGlzdGVuZXJzXFxuICAnO1xufVxuXG5mdW5jdGlvbiBjaGFubmVsKCkge1xuICB2YXIgYnVmZmVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBfYnVmZmVycy5idWZmZXJzLmZpeGVkKCk7XG5cbiAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICB2YXIgdGFrZXJzID0gW107XG5cbiAgKDAsIF91dGlscy5jaGVjaykoYnVmZmVyLCBfdXRpbHMuaXMuYnVmZmVyLCBJTlZBTElEX0JVRkZFUik7XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKSB7XG4gICAgaWYgKGNsb3NlZCAmJiB0YWtlcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyAoMCwgX3V0aWxzLmludGVybmFsRXJyKSgnQ2Fubm90IGhhdmUgYSBjbG9zZWQgY2hhbm5lbCB3aXRoIHBlbmRpbmcgdGFrZXJzJyk7XG4gICAgfVxuICAgIGlmICh0YWtlcnMubGVuZ3RoICYmICFidWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICB0aHJvdyAoMCwgX3V0aWxzLmludGVybmFsRXJyKSgnQ2Fubm90IGhhdmUgcGVuZGluZyB0YWtlcnMgd2l0aCBub24gZW1wdHkgYnVmZmVyJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHV0KGlucHV0KSB7XG4gICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICAoMCwgX3V0aWxzLmNoZWNrKShpbnB1dCwgX3V0aWxzLmlzLm5vdFVuZGVmLCBVTkRFRklORURfSU5QVVRfRVJST1IpO1xuICAgIGlmIChjbG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0YWtlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYnVmZmVyLnB1dChpbnB1dCk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2IgPSB0YWtlcnNbaV07XG4gICAgICBpZiAoIWNiW191dGlscy5NQVRDSF0gfHwgY2JbX3V0aWxzLk1BVENIXShpbnB1dCkpIHtcbiAgICAgICAgdGFrZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIGNiKGlucHV0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0YWtlKGNiKSB7XG4gICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICAoMCwgX3V0aWxzLmNoZWNrKShjYiwgX3V0aWxzLmlzLmZ1bmMsIFwiY2hhbm5lbC50YWtlJ3MgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuXG4gICAgaWYgKGNsb3NlZCAmJiBidWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICBjYihFTkQpO1xuICAgIH0gZWxzZSBpZiAoIWJ1ZmZlci5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKGJ1ZmZlci50YWtlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWtlcnMucHVzaChjYik7XG4gICAgICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLnJlbW92ZSkodGFrZXJzLCBjYik7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKGNiKSB7XG4gICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTsgLy8gVE9ETzogY2hlY2sgaWYgc29tZSBuZXcgc3RhdGUgc2hvdWxkIGJlIGZvcmJpZGRlbiBub3dcbiAgICAoMCwgX3V0aWxzLmNoZWNrKShjYiwgX3V0aWxzLmlzLmZ1bmMsIFwiY2hhbm5lbC5mbHVzaCcgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgIGlmIChjbG9zZWQgJiYgYnVmZmVyLmlzRW1wdHkoKSkge1xuICAgICAgY2IoRU5EKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2IoYnVmZmVyLmZsdXNoKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICBpZiAoIWNsb3NlZCkge1xuICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgIGlmICh0YWtlcnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBhcnIgPSB0YWtlcnM7XG4gICAgICAgIHRha2VycyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgYXJyW2ldKEVORCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRha2U6IHRha2UsXG4gICAgcHV0OiBwdXQsXG4gICAgZmx1c2g6IGZsdXNoLFxuICAgIGNsb3NlOiBjbG9zZSxcbiAgICBnZXQgX190YWtlcnNfXygpIHtcbiAgICAgIHJldHVybiB0YWtlcnM7XG4gICAgfSxcbiAgICBnZXQgX19jbG9zZWRfXygpIHtcbiAgICAgIHJldHVybiBjbG9zZWQ7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBldmVudENoYW5uZWwoc3Vic2NyaWJlKSB7XG4gIHZhciBidWZmZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IF9idWZmZXJzLmJ1ZmZlcnMubm9uZSgpO1xuICB2YXIgbWF0Y2hlciA9IGFyZ3VtZW50c1syXTtcblxuICAvKipcbiAgICBzaG91bGQgYmUgaWYodHlwZW9mIG1hdGNoZXIgIT09IHVuZGVmaW5lZCkgaW5zdGVhZD9cbiAgICBzZWUgUFIgIzI3MyBmb3IgYSBiYWNrZ3JvdW5kIGRpc2N1c3Npb25cbiAgKiovXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICgwLCBfdXRpbHMuY2hlY2spKG1hdGNoZXIsIF91dGlscy5pcy5mdW5jLCAnSW52YWxpZCBtYXRjaCBmdW5jdGlvbiBwYXNzZWQgdG8gZXZlbnRDaGFubmVsJyk7XG4gIH1cblxuICB2YXIgY2hhbiA9IGNoYW5uZWwoYnVmZmVyKTtcbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgaWYgKCFjaGFuLl9fY2xvc2VkX18pIHtcbiAgICAgIGlmICh1bnN1YnNjcmliZSkge1xuICAgICAgICB1bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgY2hhbi5jbG9zZSgpO1xuICAgIH1cbiAgfTtcbiAgdmFyIHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIGlmIChpc0VuZChpbnB1dCkpIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChtYXRjaGVyICYmICFtYXRjaGVyKGlucHV0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjaGFuLnB1dChpbnB1dCk7XG4gIH0pO1xuICBpZiAoY2hhbi5fX2Nsb3NlZF9fKSB7XG4gICAgdW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGlmICghX3V0aWxzLmlzLmZ1bmModW5zdWJzY3JpYmUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbiBldmVudENoYW5uZWw6IHN1YnNjcmliZSBzaG91bGQgcmV0dXJuIGEgZnVuY3Rpb24gdG8gdW5zdWJzY3JpYmUnKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGFrZTogY2hhbi50YWtlLFxuICAgIGZsdXNoOiBjaGFuLmZsdXNoLFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufVxuXG5mdW5jdGlvbiBzdGRDaGFubmVsKHN1YnNjcmliZSkge1xuICB2YXIgY2hhbiA9IGV2ZW50Q2hhbm5lbChmdW5jdGlvbiAoY2IpIHtcbiAgICByZXR1cm4gc3Vic2NyaWJlKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgaWYgKGlucHV0W191dGlscy5TQUdBX0FDVElPTl0pIHtcbiAgICAgICAgY2IoaW5wdXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAoMCwgX3NjaGVkdWxlci5hc2FwKShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYihpbnB1dCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBjaGFuLCB7XG4gICAgdGFrZTogZnVuY3Rpb24gdGFrZShjYiwgbWF0Y2hlcikge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICgwLCBfdXRpbHMuY2hlY2spKG1hdGNoZXIsIF91dGlscy5pcy5mdW5jLCBcImNoYW5uZWwudGFrZSdzIG1hdGNoZXIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICBjYltfdXRpbHMuTUFUQ0hdID0gbWF0Y2hlcjtcbiAgICAgIH1cbiAgICAgIGNoYW4udGFrZShjYik7XG4gICAgfVxuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9jaGFubmVsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYnVmZmVycyA9IGV4cG9ydHMuQlVGRkVSX09WRVJGTE9XID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbnZhciBCVUZGRVJfT1ZFUkZMT1cgPSBleHBvcnRzLkJVRkZFUl9PVkVSRkxPVyA9IFwiQ2hhbm5lbCdzIEJ1ZmZlciBvdmVyZmxvdyFcIjtcblxudmFyIE9OX09WRVJGTE9XX1RIUk9XID0gMTtcbnZhciBPTl9PVkVSRkxPV19EUk9QID0gMjtcbnZhciBPTl9PVkVSRkxPV19TTElERSA9IDM7XG52YXIgT05fT1ZFUkZMT1dfRVhQQU5EID0gNDtcblxudmFyIHplcm9CdWZmZXIgPSB7IGlzRW1wdHk6IF91dGlscy5rVHJ1ZSwgcHV0OiBfdXRpbHMubm9vcCwgdGFrZTogX3V0aWxzLm5vb3AgfTtcblxuZnVuY3Rpb24gcmluZ0J1ZmZlcigpIHtcbiAgdmFyIGxpbWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAxMDtcbiAgdmFyIG92ZXJmbG93QWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gIHZhciBhcnIgPSBuZXcgQXJyYXkobGltaXQpO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIHB1c2hJbmRleCA9IDA7XG4gIHZhciBwb3BJbmRleCA9IDA7XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKGl0KSB7XG4gICAgYXJyW3B1c2hJbmRleF0gPSBpdDtcbiAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICBsZW5ndGgrKztcbiAgfTtcblxuICB2YXIgdGFrZSA9IGZ1bmN0aW9uIHRha2UoKSB7XG4gICAgaWYgKGxlbmd0aCAhPSAwKSB7XG4gICAgICB2YXIgaXQgPSBhcnJbcG9wSW5kZXhdO1xuICAgICAgYXJyW3BvcEluZGV4XSA9IG51bGw7XG4gICAgICBsZW5ndGgtLTtcbiAgICAgIHBvcEluZGV4ID0gKHBvcEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgIHJldHVybiBpdDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgaXRlbXMucHVzaCh0YWtlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpc0VtcHR5OiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuIGxlbmd0aCA9PSAwO1xuICAgIH0sXG4gICAgcHV0OiBmdW5jdGlvbiBwdXQoaXQpIHtcbiAgICAgIGlmIChsZW5ndGggPCBsaW1pdCkge1xuICAgICAgICBwdXNoKGl0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBkb3VibGVkTGltaXQgPSB2b2lkIDA7XG4gICAgICAgIHN3aXRjaCAob3ZlcmZsb3dBY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX1RIUk9XOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEJVRkZFUl9PVkVSRkxPVyk7XG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19TTElERTpcbiAgICAgICAgICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gcHVzaEluZGV4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19FWFBBTkQ6XG4gICAgICAgICAgICBkb3VibGVkTGltaXQgPSAyICogbGltaXQ7XG5cbiAgICAgICAgICAgIGFyciA9IGZsdXNoKCk7XG5cbiAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgcG9wSW5kZXggPSAwO1xuXG4gICAgICAgICAgICBhcnIubGVuZ3RoID0gZG91YmxlZExpbWl0O1xuICAgICAgICAgICAgbGltaXQgPSBkb3VibGVkTGltaXQ7XG5cbiAgICAgICAgICAgIHB1c2goaXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBEUk9QXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRha2U6IHRha2UsXG4gICAgZmx1c2g6IGZsdXNoXG4gIH07XG59XG5cbnZhciBidWZmZXJzID0gZXhwb3J0cy5idWZmZXJzID0ge1xuICBub25lOiBmdW5jdGlvbiBub25lKCkge1xuICAgIHJldHVybiB6ZXJvQnVmZmVyO1xuICB9LFxuICBmaXhlZDogZnVuY3Rpb24gZml4ZWQobGltaXQpIHtcbiAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfVEhST1cpO1xuICB9LFxuICBkcm9wcGluZzogZnVuY3Rpb24gZHJvcHBpbmcobGltaXQpIHtcbiAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfRFJPUCk7XG4gIH0sXG4gIHNsaWRpbmc6IGZ1bmN0aW9uIHNsaWRpbmcobGltaXQpIHtcbiAgICByZXR1cm4gcmluZ0J1ZmZlcihsaW1pdCwgT05fT1ZFUkZMT1dfU0xJREUpO1xuICB9LFxuICBleHBhbmRpbmc6IGZ1bmN0aW9uIGV4cGFuZGluZyhpbml0aWFsU2l6ZSkge1xuICAgIHJldHVybiByaW5nQnVmZmVyKGluaXRpYWxTaXplLCBPTl9PVkVSRkxPV19FWFBBTkQpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3JlZHV4LXNhZ2EvbGliL2ludGVybmFsL2J1ZmZlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5hc2FwID0gYXNhcDtcbmV4cG9ydHMuc3VzcGVuZCA9IHN1c3BlbmQ7XG5leHBvcnRzLmZsdXNoID0gZmx1c2g7XG52YXIgcXVldWUgPSBbXTtcbi8qKlxuICBWYXJpYWJsZSB0byBob2xkIGEgY291bnRpbmcgc2VtYXBob3JlXG4gIC0gSW5jcmVtZW50aW5nIGFkZHMgYSBsb2NrIGFuZCBwdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZSAoaWYgaXQncyBub3RcbiAgICBhbHJlYWR5IHN1c3BlbmRlZClcbiAgLSBEZWNyZW1lbnRpbmcgcmVsZWFzZXMgYSBsb2NrLiBaZXJvIGxvY2tzIHB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGByZWxlYXNlZGAgc3RhdGUuIFRoaXNcbiAgICB0cmlnZ2VycyBmbHVzaGluZyB0aGUgcXVldWVkIHRhc2tzLlxuKiovXG52YXIgc2VtYXBob3JlID0gMDtcblxuLyoqXG4gIEV4ZWN1dGVzIGEgdGFzayAnYXRvbWljYWxseScuIFRhc2tzIHNjaGVkdWxlZCBkdXJpbmcgdGhpcyBleGVjdXRpb24gd2lsbCBiZSBxdWV1ZWRcbiAgYW5kIGZsdXNoZWQgYWZ0ZXIgdGhpcyB0YXNrIGhhcyBmaW5pc2hlZCAoYXNzdW1pbmcgdGhlIHNjaGVkdWxlciBlbmR1cCBpbiBhIHJlbGVhc2VkXG4gIHN0YXRlKS5cbioqL1xuZnVuY3Rpb24gZXhlYyh0YXNrKSB7XG4gIHRyeSB7XG4gICAgc3VzcGVuZCgpO1xuICAgIHRhc2soKTtcbiAgfSBmaW5hbGx5IHtcbiAgICByZWxlYXNlKCk7XG4gIH1cbn1cblxuLyoqXG4gIEV4ZWN1dGVzIG9yIHF1ZXVlcyBhIHRhc2sgZGVwZW5kaW5nIG9uIHRoZSBzdGF0ZSBvZiB0aGUgc2NoZWR1bGVyIChgc3VzcGVuZGVkYCBvciBgcmVsZWFzZWRgKVxuKiovXG5mdW5jdGlvbiBhc2FwKHRhc2spIHtcbiAgcXVldWUucHVzaCh0YXNrKTtcblxuICBpZiAoIXNlbWFwaG9yZSkge1xuICAgIHN1c3BlbmQoKTtcbiAgICBmbHVzaCgpO1xuICB9XG59XG5cbi8qKlxuICBQdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgc3VzcGVuZGVkYCBzdGF0ZS4gU2NoZWR1bGVkIHRhc2tzIHdpbGwgYmUgcXVldWVkIHVudGlsIHRoZVxuICBzY2hlZHVsZXIgaXMgcmVsZWFzZWQuXG4qKi9cbmZ1bmN0aW9uIHN1c3BlbmQoKSB7XG4gIHNlbWFwaG9yZSsrO1xufVxuXG4vKipcbiAgUHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHJlbGVhc2VkYCBzdGF0ZS5cbioqL1xuZnVuY3Rpb24gcmVsZWFzZSgpIHtcbiAgc2VtYXBob3JlLS07XG59XG5cbi8qKlxuICBSZWxlYXNlcyB0aGUgY3VycmVudCBsb2NrLiBFeGVjdXRlcyBhbGwgcXVldWVkIHRhc2tzIGlmIHRoZSBzY2hlZHVsZXIgaXMgaW4gdGhlIHJlbGVhc2VkIHN0YXRlLlxuKiovXG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgcmVsZWFzZSgpO1xuXG4gIHZhciB0YXNrID0gdm9pZCAwO1xuICB3aGlsZSAoIXNlbWFwaG9yZSAmJiAodGFzayA9IHF1ZXVlLnNoaWZ0KCkpICE9PSB1bmRlZmluZWQpIHtcbiAgICBleGVjKHRhc2spO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vcmVkdXgtc2FnYS9saWIvaW50ZXJuYWwvc2NoZWR1bGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB0YWtlTGF0ZXN0O1xuXG52YXIgX2ZzbUl0ZXJhdG9yID0gcmVxdWlyZSgnLi9mc21JdGVyYXRvcicpO1xuXG52YXIgX2ZzbUl0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZzbUl0ZXJhdG9yKTtcblxudmFyIF9pbyA9IHJlcXVpcmUoJy4uL2lvJyk7XG5cbnZhciBfY2hhbm5lbCA9IHJlcXVpcmUoJy4uL2NoYW5uZWwnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdGFrZUxhdGVzdChwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogKDAsIF9pby50YWtlKShwYXR0ZXJuT3JDaGFubmVsKSB9O1xuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogX2lvLmZvcmsuYXBwbHkodW5kZWZpbmVkLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpIH07XG4gIH07XG4gIHZhciB5Q2FuY2VsID0gZnVuY3Rpb24geUNhbmNlbCh0YXNrKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiAoMCwgX2lvLmNhbmNlbCkodGFzaykgfTtcbiAgfTtcblxuICB2YXIgdGFzayA9IHZvaWQgMCxcbiAgICAgIGFjdGlvbiA9IHZvaWQgMDtcbiAgdmFyIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRUYXNrKHQpIHtcbiAgICByZXR1cm4gdGFzayA9IHQ7XG4gIH07XG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgcmV0dXJuICgwLCBfZnNtSXRlcmF0b3IyLmRlZmF1bHQpKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlUYWtlLCBzZXRBY3Rpb25dO1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gX2NoYW5uZWwuRU5EID8gW19mc21JdGVyYXRvci5xRW5kXSA6IHRhc2sgPyBbJ3EzJywgeUNhbmNlbCh0YXNrKV0gOiBbJ3ExJywgeUZvcmsoYWN0aW9uKSwgc2V0VGFza107XG4gICAgfSxcbiAgICBxMzogZnVuY3Rpb24gcTMoKSB7XG4gICAgICByZXR1cm4gWydxMScsIHlGb3JrKGFjdGlvbiksIHNldFRhc2tdO1xuICAgIH1cbiAgfSwgJ3ExJywgJ3Rha2VMYXRlc3QoJyArICgwLCBfZnNtSXRlcmF0b3Iuc2FmZU5hbWUpKHBhdHRlcm5PckNoYW5uZWwpICsgJywgJyArIHdvcmtlci5uYW1lICsgJyknKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9zYWdhSGVscGVycy90YWtlTGF0ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB0aHJvdHRsZTtcblxudmFyIF9mc21JdGVyYXRvciA9IHJlcXVpcmUoJy4vZnNtSXRlcmF0b3InKTtcblxudmFyIF9mc21JdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mc21JdGVyYXRvcik7XG5cbnZhciBfaW8gPSByZXF1aXJlKCcuLi9pbycpO1xuXG52YXIgX2NoYW5uZWwgPSByZXF1aXJlKCcuLi9jaGFubmVsJyk7XG5cbnZhciBfYnVmZmVycyA9IHJlcXVpcmUoJy4uL2J1ZmZlcnMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHRocm90dGxlKGRlbGF5TGVuZ3RoLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMyA/IF9sZW4gLSAzIDogMCksIF9rZXkgPSAzOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gM10gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYWN0aW9uID0gdm9pZCAwLFxuICAgICAgY2hhbm5lbCA9IHZvaWQgMDtcblxuICB2YXIgeUFjdGlvbkNoYW5uZWwgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogKDAsIF9pby5hY3Rpb25DaGFubmVsKShwYXR0ZXJuLCBfYnVmZmVycy5idWZmZXJzLnNsaWRpbmcoMSkpIH07XG4gIHZhciB5VGFrZSA9IGZ1bmN0aW9uIHlUYWtlKCkge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogKDAsIF9pby50YWtlKShjaGFubmVsKSB9O1xuICB9O1xuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogX2lvLmZvcmsuYXBwbHkodW5kZWZpbmVkLCBbd29ya2VyXS5jb25jYXQoYXJncywgW2FjXSkpIH07XG4gIH07XG4gIHZhciB5RGVsYXkgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogKDAsIF9pby5jYWxsKShfdXRpbHMuZGVsYXksIGRlbGF5TGVuZ3RoKSB9O1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG4gIHZhciBzZXRDaGFubmVsID0gZnVuY3Rpb24gc2V0Q2hhbm5lbChjaCkge1xuICAgIHJldHVybiBjaGFubmVsID0gY2g7XG4gIH07XG5cbiAgcmV0dXJuICgwLCBfZnNtSXRlcmF0b3IyLmRlZmF1bHQpKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlBY3Rpb25DaGFubmVsLCBzZXRDaGFubmVsXTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiBbJ3EzJywgeVRha2UoKSwgc2V0QWN0aW9uXTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiBhY3Rpb24gPT09IF9jaGFubmVsLkVORCA/IFtfZnNtSXRlcmF0b3IucUVuZF0gOiBbJ3E0JywgeUZvcmsoYWN0aW9uKV07XG4gICAgfSxcbiAgICBxNDogZnVuY3Rpb24gcTQoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlEZWxheV07XG4gICAgfVxuICB9LCAncTEnLCAndGhyb3R0bGUoJyArICgwLCBfZnNtSXRlcmF0b3Iuc2FmZU5hbWUpKHBhdHRlcm4pICsgJywgJyArIHdvcmtlci5uYW1lICsgJyknKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9yZWR1eC1zYWdhL2xpYi9pbnRlcm5hbC9zYWdhSGVscGVycy90aHJvdHRsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRU5ELCBldmVudENoYW5uZWwgfSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlLCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuaW1wb3J0IHsgZ2V0QWNjb3VudEJhbGFuY2VzIH0gZnJvbSAnLi4vYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1NhZ2EnXG5cbi8qXG4gKiBGZXRjaCBBY2NvdW50cyBMaXN0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRBY2NvdW50cyhhY3Rpb24pIHtcbiAgY29uc3Qgd2ViMyA9IGFjdGlvbi53ZWIzXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBhY2NvdW50cyA9IHlpZWxkIGNhbGwod2ViMy5ldGguZ2V0QWNjb3VudHMpXG5cbiAgICBpZiAoIWFjY291bnRzKSB7XG4gICAgICB0aHJvdyAnTm8gYWNjb3VudHMgZm91bmQhJ1xuICAgIH1cblxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRTX0ZFVENIRUQnLCBhY2NvdW50c30pXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHt0eXBlOiAnQUNDT1VOVFNfRkFJTEVEJywgZXJyb3J9KVxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGFjY291bnRzOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgfVxufVxuXG4vKlxuICogUG9sbCBmb3IgQWNjb3VudCBDaGFuZ2VzXG4gKi9cblxuZnVuY3Rpb24qIGNyZWF0ZUFjY291bnRzUG9sbENoYW5uZWwoe2ludGVydmFsLCB3ZWIzfSkge1xuICByZXR1cm4gZXZlbnRDaGFubmVsKGVtaXQgPT4ge1xuICAgIGNvbnN0IHBlcnNpc3RlZFdlYjMgPSB3ZWIzXG5cbiAgICBjb25zdCBhY2NvdW50c1BvbGxlciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdTWU5DSU5HX0FDQ09VTlRTJywgcGVyc2lzdGVkV2ViM30pXG4gICAgfSwgaW50ZXJ2YWwpIC8vIG9wdGlvbnMucG9sbHMuYWNjb3VudHNcbiAgICBcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoYWNjb3VudHNQb2xsZXIpXG4gICAgfVxuXG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlXG4gIH0pXG59XG4gIFxuZnVuY3Rpb24qIGNhbGxDcmVhdGVBY2NvdW50c1BvbGxDaGFubmVsKHtpbnRlcnZhbCwgd2ViM30pIHtcbiAgY29uc3QgYWNjb3VudHNDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVBY2NvdW50c1BvbGxDaGFubmVsLCB7aW50ZXJ2YWwsIHdlYjN9KVxuICBcbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZShhY2NvdW50c0NoYW5uZWwpXG5cbiAgICAgIGlmIChldmVudC50eXBlID09PSAnU1lOQ0lOR19BQ0NPVU5UUycpIHsgICAgICBcbiAgICAgICAgeWllbGQgY2FsbChnZXRBY2NvdW50cywge3dlYjM6IGV2ZW50LnBlcnNpc3RlZFdlYjN9KVxuICAgICAgICB5aWVsZCBjYWxsKGdldEFjY291bnRCYWxhbmNlcywge3dlYjM6IGV2ZW50LnBlcnNpc3RlZFdlYjN9KSAgXG4gICAgICB9XG5cbiAgICAgIHlpZWxkIHB1dChldmVudClcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgYWNjb3VudHNDaGFubmVsLmNsb3NlKClcbiAgfVxufVxuXG5mdW5jdGlvbiogYWNjb3VudHNTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KCdBQ0NPVU5UU19GRVRDSElORycsIGdldEFjY291bnRzKVxuICB5aWVsZCB0YWtlTGF0ZXN0KCdBQ0NPVU5UU19QT0xMSU5HJywgY2FsbENyZWF0ZUFjY291bnRzUG9sbENoYW5uZWwpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnRzU2FnYTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY2NvdW50cy9hY2NvdW50c1NhZ2EuanMiLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRBY2NvdW50QmFsYW5jZXMoYWN0aW9uKSB7XG4gIGNvbnN0IGFjY291bnRzID0geWllbGQgc2VsZWN0KGdldEFjY291bnRzU3RhdGUpXG4gIGNvbnN0IHdlYjMgPSBhY3Rpb24ud2ViM1xuXG4gIGlmICghYWNjb3VudHMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBhY2NvdW50cyBmb3VuZCB3aGlsZSBhdHRlbXB0aW5nIHRvIGZldGNoIGJhbGFuY2VzIScpXG4gIH1cblxuICB0cnkge1xuICAgIGZvciAodmFyIGkgaW4gYWNjb3VudHMpIHtcbiAgICAgIHZhciBhY2NvdW50ID0gYWNjb3VudHNbaV1cbiAgICAgIHZhciBhY2NvdW50QmFsYW5jZSA9IHlpZWxkIGNhbGwod2ViMy5ldGguZ2V0QmFsYW5jZSwgYWNjb3VudClcblxuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQUNDT1VOVF9CQUxBTkNFX0ZFVENIRUQnLCBhY2NvdW50LCBhY2NvdW50QmFsYW5jZX0pXG4gICAgfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRfQkFMQU5DRV9GQUlMRUQnLCBlcnJvcn0pXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWNjb3VudCAnICsgYWNjb3VudCArICcgYmFsYW5jZTonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIH1cblxuICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UX0JBTEFOQ0VTX0ZFVENIRUQnfSlcbn1cblxuY29uc3QgZ2V0QWNjb3VudHNTdGF0ZSA9IChzdGF0ZSkgPT4gc3RhdGUuYWNjb3VudHNcblxuZnVuY3Rpb24qIGFjY291bnRCYWxhbmNlc1NhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoJ0FDQ09VTlRfQkFMQU5DRVNfRkVUQ0hJTkcnLCBnZXRBY2NvdW50QmFsYW5jZXMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnRCYWxhbmNlc1NhZ2E7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhLmpzIiwiaW1wb3J0IHsgRU5ELCBldmVudENoYW5uZWwgfSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHsgY2FsbCwgcHV0LCB0YWtlLCB0YWtlRXZlcnksIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5jb25zdCBCbG9ja1RyYWNrZXIgPSByZXF1aXJlKCdldGgtYmxvY2stdHJhY2tlcicpXG5cbi8qXG4gKiBMaXN0ZW4gZm9yIEJsb2Nrc1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrQ2hhbm5lbCh7ZHJpenpsZSwgd2ViMywgc3luY0Fsd2F5c30pIHtcbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcbiAgICBjb25zdCBibG9ja0V2ZW50cyA9IHdlYjMuZXRoLnN1YnNjcmliZSgnbmV3QmxvY2tIZWFkZXJzJywgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgIGlmIChlcnJvcilcbiAgICAgIHtcbiAgICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLU19GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYmxvY2sgaGVhZGVyIHN1YnNjcmlwdGlvbjonKVxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gICAgICAgIGVtaXQoRU5EKVxuICAgICAgfVxuICAgIH0pXG4gICAgLm9uKCdkYXRhJywgKGJsb2NrSGVhZGVyKSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnQkxPQ0tfUkVDRUlWRUQnLCBibG9ja0hlYWRlciwgZHJpenpsZSwgd2ViMywgc3luY0Fsd2F5c30pXG4gICAgfSlcbiAgICAub24oJ2Vycm9yJywgZXJyb3IgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLU19GQUlMRUQnLCBlcnJvcn0pXG4gICAgICBlbWl0KEVORClcbiAgICB9KVxuXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICBibG9ja0V2ZW50cy5vZmYoKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuXG5mdW5jdGlvbiogY2FsbENyZWF0ZUJsb2NrQ2hhbm5lbCh7ZHJpenpsZSwgd2ViMywgc3luY0Fsd2F5c30pIHtcbiAgY29uc3QgYmxvY2tDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVCbG9ja0NoYW5uZWwsIHtkcml6emxlLCB3ZWIzfSlcblxuICB0cnkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgZXZlbnQgPSB5aWVsZCB0YWtlKGJsb2NrQ2hhbm5lbClcbiAgICAgIHlpZWxkIHB1dChldmVudClcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgYmxvY2tDaGFubmVsLmNsb3NlKClcbiAgfVxufVxuXG4vKlxuICogUG9sbCBmb3IgQmxvY2tzXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQmxvY2tQb2xsQ2hhbm5lbCh7ZHJpenpsZSwgaW50ZXJ2YWwsIHdlYjMsIHN5bmNBbHdheXN9KSB7XG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XG4gICAgY29uc3QgYmxvY2tUcmFja2VyID0gbmV3IEJsb2NrVHJhY2tlcih7IHByb3ZpZGVyOiB3ZWIzLmN1cnJlbnRQcm92aWRlciwgcG9sbGluZ0ludGVydmFsOiBpbnRlcnZhbH0pXG5cbiAgICBibG9ja1RyYWNrZXIub24oJ2xhdGVzdCcsIChibG9jaykgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLX0ZPVU5EJywgYmxvY2ssIGRyaXp6bGUsIHdlYjMsIHN5bmNBbHdheXN9KVxuICAgIH0pXG5cbiAgICBibG9ja1RyYWNrZXJcbiAgICAuc3RhcnQoKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdCTE9DS1NfRkFJTEVEJywgZXJyb3J9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgYmxvY2tUcmFja2VyLnN0b3AoKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuXG5mdW5jdGlvbiogY2FsbENyZWF0ZUJsb2NrUG9sbENoYW5uZWwoe2RyaXp6bGUsIGludGVydmFsLCB3ZWIzLCBzeW5jQWx3YXlzfSkge1xuICBjb25zdCBibG9ja0NoYW5uZWwgPSB5aWVsZCBjYWxsKGNyZWF0ZUJsb2NrUG9sbENoYW5uZWwsIHtkcml6emxlLCBpbnRlcnZhbCwgd2ViM30pXG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZShibG9ja0NoYW5uZWwpXG4gICAgICB5aWVsZCBwdXQoZXZlbnQpXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGJsb2NrQ2hhbm5lbC5jbG9zZSgpXG4gIH1cbn1cblxuLypcbiAqIFByb2Nlc3MgQmxvY2tzXG4gKi9cblxuZnVuY3Rpb24qIHByb2Nlc3NCbG9ja0hlYWRlcih7YmxvY2tIZWFkZXIsIGRyaXp6bGUsIHdlYjMsIHN5bmNBbHdheXN9KSB7XG4gIGNvbnN0IGJsb2NrTnVtYmVyID0gYmxvY2tIZWFkZXIubnVtYmVyXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBibG9jayA9IHlpZWxkIGNhbGwod2ViMy5ldGguZ2V0QmxvY2ssIGJsb2NrTnVtYmVyLCB0cnVlKVxuXG4gICAgeWllbGQgY2FsbChwcm9jZXNzQmxvY2ssIHtibG9jaywgZHJpenpsZSwgd2ViMywgc3luY0Fsd2F5c30pXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYmxvY2sgcHJvY2Vzc2luZzonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS19GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICByZXR1cm5cbiAgfVxufVxuXG5mdW5jdGlvbiogcHJvY2Vzc0Jsb2NrKHtibG9jaywgZHJpenpsZSwgd2ViMywgc3luY0Fsd2F5c30pIHtcbiAgdHJ5IHtcbiAgICBpZiAoc3luY0Fsd2F5cylcbiAgICB7XG4gICAgICB5aWVsZCBhbGwoZHJpenpsZS5jb250cmFjdHMubWFwKGNvbnRyYWN0ID0+IHtcbiAgICAgICAgcHV0KHt0eXBlOiAnQ09OVFJBQ1RfU1lOQ0lORycsIGNvbnRyYWN0fSlcbiAgICAgIH0pKVxuICAgICAgXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgY29uc3QgdHhzID0gYmxvY2sudHJhbnNhY3Rpb25zXG5cbiAgICBpZiAodHhzLmxlbmd0aCA+IDApXG4gICAge1xuICAgICAgLy8gTG9vcCB0aHJvdWdoIHR4cyBsb29raW5nIGZvciBhbnkgY29udHJhY3QgYWRkcmVzcyBvZiBpbnRlcmVzdFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eHMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIHZhciBmcm9tID0gdHhzW2ldLmZyb20gfHwgJydcbiAgICAgICAgdmFyIGZyb21Db250cmFjdCA9IGRyaXp6bGUuZmluZENvbnRyYWN0QnlBZGRyZXNzKGZyb20udG9Mb3dlckNhc2UoKSlcbiAgICAgICAgaWYgKGZyb21Db250cmFjdCkge1xuICAgICAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0NPTlRSQUNUX1NZTkNJTkcnLCBjb250cmFjdDogZnJvbUNvbnRyYWN0fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0byA9IHR4c1tpXS50byB8fCAnJ1xuICAgICAgICB2YXIgdG9Db250cmFjdCA9IGRyaXp6bGUuZmluZENvbnRyYWN0QnlBZGRyZXNzKHRvLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGlmICh0b0NvbnRyYWN0KSB7XG4gICAgICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQ09OVFJBQ1RfU1lOQ0lORycsIGNvbnRyYWN0OiB0b0NvbnRyYWN0fSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBibG9jayBwcm9jZXNzaW5nOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0JMT0NLX0ZBSUxFRCcsIGVycm9yfSlcblxuICAgIHJldHVyblxuICB9XG59XG5cbmZ1bmN0aW9uKiBibG9ja3NTYWdhKCkge1xuICAvLyBCbG9jayBTdWJzY3JpcHRpb25zXG4gIHlpZWxkIHRha2VMYXRlc3QoJ0JMT0NLU19MSVNURU5JTkcnLCBjYWxsQ3JlYXRlQmxvY2tDaGFubmVsKVxuICB5aWVsZCB0YWtlRXZlcnkoJ0JMT0NLX1JFQ0VJVkVEJywgcHJvY2Vzc0Jsb2NrSGVhZGVyKVxuXG4gIC8vIEJsb2NrIFBvbGxpbmdcbiAgeWllbGQgdGFrZUxhdGVzdCgnQkxPQ0tTX1BPTExJTkcnLCBjYWxsQ3JlYXRlQmxvY2tQb2xsQ2hhbm5lbClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdCTE9DS19GT1VORCcsIHByb2Nlc3NCbG9jaylcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmxvY2tzU2FnYVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Jsb2Nrcy9ibG9ja3NTYWdhLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzI0X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldGgtYmxvY2stdHJhY2tlci1lczVcIlxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgRU5ELCBldmVudENoYW5uZWwgfSBmcm9tICdyZWR1eC1zYWdhJ1xuaW1wb3J0IHsgY2FsbCwgcHV0LCBzZWxlY3QsIHRha2UsIHRha2VMYXRlc3QsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCBEcml6emxlQ29udHJhY3QgZnJvbSAnLi4vRHJpenpsZUNvbnRyYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24qIGFkZENvbnRyYWN0KHtkcml6emxlLCBjb250cmFjdENvbmZpZywgZXZlbnRzLCB3ZWIzfSkge1xuICAvLyBQcmV2ZW50cyBkb3VibGUtYWRkaW5nIGNvbnRyYWN0c1xuICBpZiAoZHJpenpsZS5sb2FkaW5nQ29udHJhY3RbY29udHJhY3RDb25maWcuY29udHJhY3ROYW1lXSkgeyByZXR1cm4gZmFsc2UgfVxuICBcbiAgZHJpenpsZS5sb2FkaW5nQ29udHJhY3RbY29udHJhY3RDb25maWcuY29udHJhY3ROYW1lXSA9IHRydWVcbiAgXG4gIHlpZWxkIHB1dCh7dHlwZTogJ0NPTlRSQUNUX0lOSVRJQUxJWklORycsIGNvbnRyYWN0Q29uZmlnfSlcbiAgXG4gIGxldCBkcml6emxlQ29udHJhY3RcbiAgXG4gIGlmIChjb250cmFjdENvbmZpZy53ZWIzQ29udHJhY3QpIHtcbiAgICBkcml6emxlQ29udHJhY3QgPSB5aWVsZCBjYWxsKGluc3RhbnRpYXRlV2ViM0NvbnRyYWN0LCB7d2ViM0NvbnRyYWN0OiBjb250cmFjdENvbmZpZy53ZWIzQ29udHJhY3QsIG5hbWU6IGNvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZSwgZXZlbnRzLCBzdG9yZTogZHJpenpsZS5zdG9yZSwgd2ViM30pXG4gIH0gZWxzZSB7XG4gICAgZHJpenpsZUNvbnRyYWN0ID0geWllbGQgY2FsbChpbnN0YW50aWF0ZUNvbnRyYWN0LCB7Y29udHJhY3RBcnRpZmFjdDogY29udHJhY3RDb25maWcsIGV2ZW50cywgc3RvcmU6IGRyaXp6bGUuc3RvcmUsIHdlYjN9KVxuICB9XG5cbiAgZHJpenpsZS5fYWRkQ29udHJhY3QoZHJpenpsZUNvbnRyYWN0KVxuICBcblxuICB5aWVsZCBwdXQoe3R5cGU6ICdDT05UUkFDVF9JTklUSUFMSVpFRCcsIG5hbWU6IGNvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZX0pXG59XG5cbi8qXG4gKiBJbnN0YW50aWF0aW9uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uKiBpbnN0YW50aWF0ZVdlYjNDb250cmFjdCh7d2ViM0NvbnRyYWN0LCBuYW1lLCBldmVudHMsIHN0b3JlLCB3ZWIzfSkge1xuICByZXR1cm4gbmV3IERyaXp6bGVDb250cmFjdCh3ZWIzQ29udHJhY3QsIHdlYjMsIG5hbWUsIHN0b3JlLCBldmVudHMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiogaW5zdGFudGlhdGVDb250cmFjdCh7Y29udHJhY3RBcnRpZmFjdCwgZXZlbnRzLCBzdG9yZSwgd2ViM30pIHtcbiAgY29uc3QgbmV0d29ya0lkID0geWllbGQgc2VsZWN0KGdldE5ldHdvcmtJZClcblxuICAvLyBJbnN0YW50aWF0ZSB0aGUgY29udHJhY3QuXG4gIHZhciB3ZWIzQ29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgY29udHJhY3RBcnRpZmFjdC5hYmksXG4gICAgY29udHJhY3RBcnRpZmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdLmFkZHJlc3MsXG4gICAge1xuICAgICAgZnJvbTogc3RvcmUuZ2V0U3RhdGUoKS5hY2NvdW50c1swXSxcbiAgICAgIGRhdGE6IGNvbnRyYWN0QXJ0aWZhY3QuZGVwbG95ZWRCeXRlY29kZVxuICAgIH1cbiAgKVxuXG4gIHJldHVybiBuZXcgRHJpenpsZUNvbnRyYWN0KHdlYjNDb250cmFjdCwgd2ViMywgY29udHJhY3RBcnRpZmFjdC5jb250cmFjdE5hbWUsIHN0b3JlLCBldmVudHMsIGNvbnRyYWN0QXJ0aWZhY3QpXG59XG5cbi8qXG4gKiBFdmVudHNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVDb250cmFjdEV2ZW50Q2hhbm5lbCh7Y29udHJhY3QsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zfSkge1xuICBjb25zdCBuYW1lID0gY29udHJhY3QuY29udHJhY3ROYW1lXG5cbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gY29udHJhY3QuZXZlbnRzW2V2ZW50TmFtZV0oZXZlbnRPcHRpb25zKS5vbignZGF0YScsIGV2ZW50ID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdFVkVOVF9GSVJFRCcsIG5hbWUsIGV2ZW50fSlcbiAgICB9KVxuICAgIC5vbignY2hhbmdlZCcsIGV2ZW50ID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdFVkVOVF9DSEFOR0VEJywgbmFtZSwgZXZlbnR9KVxuICAgIH0pXG4gICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdFVkVOVF9FUlJPUicsIG5hbWUsIGVycm9yfSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIGV2ZW50TGlzdGVuZXIucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuXG5mdW5jdGlvbiogY2FsbExpc3RlbkZvckNvbnRyYWN0RXZlbnQoe2NvbnRyYWN0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9uc30pIHtcbiAgY29uc3QgY29udHJhY3RFdmVudENoYW5uZWwgPSB5aWVsZCBjYWxsKGNyZWF0ZUNvbnRyYWN0RXZlbnRDaGFubmVsLCB7Y29udHJhY3QsIGV2ZW50TmFtZSwgZXZlbnRPcHRpb25zfSlcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBldmVudCA9IHlpZWxkIHRha2UoY29udHJhY3RFdmVudENoYW5uZWwpXG4gICAgeWllbGQgcHV0KGV2ZW50KVxuICB9XG59XG5cbi8qXG4gKiBTZW5kIGFuZCBDYWNoZVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVR4Q2hhbm5lbCh7dHhPYmplY3QsIHN0YWNrSWQsIHNlbmRBcmdzID0ge30sIGNvbnRyYWN0TmFtZX0pIHtcbiAgdmFyIHBlcnNpc3RUeEhhc2hcblxuICByZXR1cm4gZXZlbnRDaGFubmVsKGVtaXQgPT4ge1xuICAgIGNvbnN0IHR4UHJvbWlFdmVudCA9IHR4T2JqZWN0LnNlbmQoc2VuZEFyZ3MpLm9uKCd0cmFuc2FjdGlvbkhhc2gnLCB0eEhhc2ggPT4ge1xuICAgICAgcGVyc2lzdFR4SGFzaCA9IHR4SGFzaFxuXG4gICAgICBlbWl0KHt0eXBlOiAnVFhfQlJPQURDQVNURUQnLCB0eEhhc2gsIHN0YWNrSWR9KVxuICAgICAgZW1pdCh7dHlwZTogJ0NPTlRSQUNUX1NZTkNfSU5EJywgY29udHJhY3ROYW1lfSlcbiAgICB9KVxuICAgIC5vbignY29uZmlybWF0aW9uJywgKGNvbmZpcm1hdGlvbk51bWJlciwgcmVjZWlwdCkgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1RYX0NPTkZJUk1BSVRPTicsIGNvbmZpcm1hdGlvblJlY2VpcHQ6IHJlY2VpcHQsIHR4SGFzaDogcGVyc2lzdFR4SGFzaH0pXG4gICAgfSlcbiAgICAub24oJ3JlY2VpcHQnLCByZWNlaXB0ID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdUWF9TVUNDRVNTRlVMJywgcmVjZWlwdDogcmVjZWlwdCwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG4gICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdUWF9FUlJPUicsIGVycm9yOiBlcnJvciwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIHR4UHJvbWlFdmVudC5vZmYoKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuXG5mdW5jdGlvbiogY2FsbFNlbmRDb250cmFjdFR4KHtjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBzdGFja0lkfSkge1xuICAvLyBDaGVjayBmb3IgdHlwZSBvZiBvYmplY3QgYW5kIHByb3BlcnRpZXMgaW5kaWNhdGl2ZSBvZiBjYWxsL3NlbmQgb3B0aW9ucy5cbiAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgY29uc3QgZmluYWxBcmcgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gOiBhcmdzWzBdXG4gICAgdmFyIHNlbmRBcmdzID0ge31cbiAgICB2YXIgZmluYWxBcmdUZXN0ID0gZmFsc2VcblxuICAgIGlmICh0eXBlb2YgZmluYWxBcmcgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZmluYWxBcmdUZXN0ID0gY2FsbChpc1NlbmRPckNhbGxPcHRpb25zLCBmaW5hbEFyZylcbiAgICB9XG5cbiAgICBpZiAoZmluYWxBcmdUZXN0KSB7XG4gICAgICBzZW5kQXJncyA9IGZpbmFsQXJnXG5cbiAgICAgIGFyZ3MubGVuZ3RoID4gMSA/IGRlbGV0ZSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gOiBkZWxldGUgYXJnc1swXVxuICAgICAgYXJncy5sZW5ndGggPSBhcmdzLmxlbmd0aCAtIDFcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgbmFtZSB0byBtYXJrIGFzIGRlc3luY2hyb25pemVkIG9uIHR4IGNyZWF0aW9uXG4gIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGNvbnRyYWN0LmNvbnRyYWN0TmFtZVxuXG4gIC8vIENyZWF0ZSB0aGUgdHJhbnNhY3Rpb24gb2JqZWN0IGFuZCBleGVjdXRlIHRoZSB0eC5cbiAgY29uc3QgdHhPYmplY3QgPSB5aWVsZCBjYWxsKGNvbnRyYWN0Lm1ldGhvZHNbZm5OYW1lXSwgLi4uYXJncylcbiAgY29uc3QgdHhDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVUeENoYW5uZWwsIHt0eE9iamVjdCwgc3RhY2tJZCwgc2VuZEFyZ3MsIGNvbnRyYWN0TmFtZX0pXG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZSh0eENoYW5uZWwpXG4gICAgICB5aWVsZCBwdXQoZXZlbnQpXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHR4Q2hhbm5lbC5jbG9zZSgpXG4gIH1cbn1cblxuLypcbiAqIENhbGwgYW5kIENhY2hlXG4gKi9cblxuZnVuY3Rpb24qIGNhbGxDYWxsQ29udHJhY3RGbih7Y29udHJhY3QsIGZuTmFtZSwgZm5JbmRleCwgYXJncywgYXJnc0hhc2gsIHN5bmMgPSBmYWxzZX0pIHtcbiAgLy8ga2VlcGluZyBmb3IgcHJlLXYxLjEuNSBjb21wYXRpYmlsaXR5IHdpdGggQ0FMTF9DT05UUkFDVF9GTiBldmVudC5cbiAgaWYgKHN5bmMpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIENoZWNrIGZvciB0eXBlIG9mIG9iamVjdCBhbmQgcHJvcGVydGllcyBpbmRpY2F0aXZlIG9mIGNhbGwvc2VuZCBvcHRpb25zLlxuICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICBjb25zdCBmaW5hbEFyZyA9IGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6IGFyZ3NbMF1cbiAgICB2YXIgY2FsbEFyZ3MgPSB7fVxuICAgIHZhciBmaW5hbEFyZ1Rlc3QgPSBmYWxzZVxuXG4gICAgaWYgKHR5cGVvZiBmaW5hbEFyZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBmaW5hbEFyZ1Rlc3QgPSBjYWxsKGlzU2VuZE9yQ2FsbE9wdGlvbnMsIGZpbmFsQXJnKVxuICAgIH1cblxuICAgIGlmIChmaW5hbEFyZ1Rlc3QpIHtcbiAgICAgIGNhbGxBcmdzID0gZmluYWxBcmdcblxuICAgICAgYXJncy5sZW5ndGggPiAxID8gZGVsZXRlIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6IGRlbGV0ZSBhcmdzWzBdXG4gICAgICBhcmdzLmxlbmd0aCA9IGFyZ3MubGVuZ3RoIC0gMVxuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgdHJhbnNhY3Rpb24gb2JqZWN0IGFuZCBleGVjdXRlIHRoZSBjYWxsLlxuICBjb25zdCB0eE9iamVjdCA9IHlpZWxkIGNhbGwoY29udHJhY3QubWV0aG9kc1tmbk5hbWVdLCAuLi5hcmdzKVxuXG4gIHRyeSB7XG4gICAgY29uc3QgY2FsbFJlc3VsdCA9IHlpZWxkIGNhbGwodHhPYmplY3QuY2FsbCwgY2FsbEFyZ3MpXG5cbiAgICB2YXIgZGlzcGF0Y2hBcmdzID0ge1xuICAgICAgbmFtZTogY29udHJhY3QuY29udHJhY3ROYW1lLFxuICAgICAgdmFyaWFibGU6IGNvbnRyYWN0LmFiaVtmbkluZGV4XS5uYW1lLFxuICAgICAgYXJnc0hhc2g6IGFyZ3NIYXNoLFxuICAgICAgYXJnczogYXJncyxcbiAgICAgIHZhbHVlOiBjYWxsUmVzdWx0LFxuICAgICAgZm5JbmRleDogZm5JbmRleFxuICAgIH1cblxuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0dPVF9DT05UUkFDVF9WQVInLCAuLi5kaXNwYXRjaEFyZ3N9KVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgICB2YXIgZXJyb3JBcmdzID0ge1xuICAgICAgbmFtZTogY29udHJhY3QuY29udHJhY3ROYW1lLFxuICAgICAgdmFyaWFibGU6IGNvbnRyYWN0LmFiaVtmbkluZGV4XS5uYW1lLFxuICAgICAgYXJnc0hhc2g6IGFyZ3NIYXNoLFxuICAgICAgYXJnczogYXJncyxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgIGZuSW5kZXg6IGZuSW5kZXhcbiAgICB9XG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdFUlJPUl9DT05UUkFDVF9WQVInLCAuLi5lcnJvckFyZ3N9KVxuICB9XG59XG5cbi8qXG4gKiBTeW5jIENvbnRyYWN0XG4gKi9cblxuZnVuY3Rpb24qIGNhbGxTeW5jQ29udHJhY3QoYWN0aW9uKSB7XG4gIC8vIEdldCBjb250cmFjdCBzdGF0ZSBmcm9tIHN0b3JlXG4gIGNvbnN0IGNvbnRyYWN0ID0gYWN0aW9uLmNvbnRyYWN0XG4gIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGNvbnRyYWN0LmNvbnRyYWN0TmFtZVxuXG4gIGNvbnN0IGNvbnRyYWN0c1N0YXRlID0geWllbGQgc2VsZWN0KGdldENvbnRyYWN0c1N0YXRlKVxuICB2YXIgY29udHJhY3RGbnNTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRyYWN0c1N0YXRlW2NvbnRyYWN0TmFtZV0pXG5cbiAgLy8gUmVtb3ZlIHVubmVjZXNzYXJ5IGtleXNcbiAgZGVsZXRlIGNvbnRyYWN0Rm5zU3RhdGUuaW5pdGlhbGl6ZWRcbiAgZGVsZXRlIGNvbnRyYWN0Rm5zU3RhdGUuc3luY2VkXG4gIGRlbGV0ZSBjb250cmFjdEZuc1N0YXRlLmV2ZW50c1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciBmdW5jdGlvbnMgYW5kIGhhc2hlc1xuICBmb3IgKHZhciBmbk5hbWUgaW4gY29udHJhY3RGbnNTdGF0ZSlcbiAge1xuICAgIGZvciAodmFyIGFyZ3NIYXNoIGluIGNvbnRyYWN0Rm5zU3RhdGVbZm5OYW1lXSlcbiAgICB7XG4gICAgICBjb25zdCBmbkluZGV4ID0gY29udHJhY3RGbnNTdGF0ZVtmbk5hbWVdW2FyZ3NIYXNoXS5mbkluZGV4XG4gICAgICBjb25zdCBhcmdzID0gY29udHJhY3RGbnNTdGF0ZVtmbk5hbWVdW2FyZ3NIYXNoXS5hcmdzXG5cbiAgICAgIC8vIFB1bGwgYXJncyBhbmQgY2FsbCBmbiBmb3IgZWFjaCBnaXZlbiBmdW5jdGlvblxuICAgICAgLy8ga2VlcGluZyBmb3IgcHJlLXYxLjEuNSBjb21wYXRpYmlsaXR5IHdpdGggQ0FMTF9DT05UUkFDVF9GTiBldmVudC5cbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0NBTExfQ09OVFJBQ1RfRk4nLCBjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBhcmdzSGFzaCwgc3luYzogdHJ1ZX0pXG4gICAgICB5aWVsZCBjYWxsKGNhbGxDYWxsQ29udHJhY3RGbiwge2NvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIGFyZ3NIYXNofSlcbiAgICB9XG4gIH1cblxuICAvLyBXaGVuIGNvbXBsZXRlLCBkaXNwYXRjaCBDT05UUkFDVF9TWU5DRURcbiAgeWllbGQgcHV0KHt0eXBlOiAnQ09OVFJBQ1RfU1lOQ0VEJywgY29udHJhY3ROYW1lfSlcbn1cblxuY29uc3QgZ2V0Q29udHJhY3RzU3RhdGUgPSAoc3RhdGUpID0+IHN0YXRlLmNvbnRyYWN0c1xuY29uc3QgZ2V0TmV0d29ya0lkID0gKHN0YXRlKSA9PiBzdGF0ZS53ZWIzLm5ldHdvcmtJZFxuXG5mdW5jdGlvbiBpc1NlbmRPckNhbGxPcHRpb25zKG9wdGlvbnMpIHtcbiAgaWYgKCdmcm9tJyBpbiBvcHRpb25zKSByZXR1cm4gdHJ1ZVxuICBpZiAoJ2dhcycgaW4gb3B0aW9ucykgcmV0dXJuIHRydWVcbiAgaWYgKCdnYXNQcmljZScgaW4gb3B0aW9ucykgcmV0dXJuIHRydWVcbiAgaWYgKCd2YWx1ZScgaW4gb3B0aW9ucykgcmV0dXJuIHRydWVcblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24qIGNvbnRyYWN0c1NhZ2EoKSB7XG4gIHlpZWxkIHRha2VFdmVyeSgnU0VORF9DT05UUkFDVF9UWCcsIGNhbGxTZW5kQ29udHJhY3RUeClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdDQUxMX0NPTlRSQUNUX0ZOJywgY2FsbENhbGxDb250cmFjdEZuKVxuICB5aWVsZCB0YWtlRXZlcnkoJ0NPTlRSQUNUX1NZTkNJTkcnLCBjYWxsU3luY0NvbnRyYWN0KVxuICB5aWVsZCB0YWtlRXZlcnkoJ0xJU1RFTl9GT1JfRVZFTlQnLCBjYWxsTGlzdGVuRm9yQ29udHJhY3RFdmVudClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdBRERfQ09OVFJBQ1QnLCBhZGRDb250cmFjdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJhY3RzU2FnYTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250cmFjdHMvY29udHJhY3RzU2FnYS5qcyIsImNsYXNzIERyaXp6bGVDb250cmFjdCB7XG4gIGNvbnN0cnVjdG9yKHdlYjNDb250cmFjdCwgd2ViMywgbmFtZSwgc3RvcmUsIGV2ZW50cyA9IFtdLCBjb250cmFjdEFydGlmYWN0ID0ge30pIHtcbiAgICB0aGlzLmFiaSA9IHdlYjNDb250cmFjdC5vcHRpb25zLmpzb25JbnRlcmZhY2VcbiAgICB0aGlzLmFkZHJlc3MgPSB3ZWIzQ29udHJhY3Qub3B0aW9ucy5hZGRyZXNzXG4gICAgdGhpcy53ZWIzID0gd2ViM1xuICAgIHRoaXMuY29udHJhY3ROYW1lID0gbmFtZVxuICAgIHRoaXMuY29udHJhY3RBcnRpZmFjdCA9IGNvbnRyYWN0QXJ0aWZhY3RcbiAgICB0aGlzLnN0b3JlID0gc3RvcmVcblxuICAgIC8vIE1lcmdlIHdlYjMgY29udHJhY3QgaW5zdGFuY2UgaW50byBEcml6emxlQ29udHJhY3QgaW5zdGFuY2UuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB3ZWIzQ29udHJhY3QpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuYWJpW2ldXG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT0gXCJmdW5jdGlvblwiICYmIGl0ZW0uY29uc3RhbnQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5tZXRob2RzW2l0ZW0ubmFtZV0uY2FjaGVDYWxsID0gdGhpcy5jYWNoZUNhbGxGdW5jdGlvbihpdGVtLm5hbWUsIGkpXG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT0gXCJmdW5jdGlvblwiICYmIGl0ZW0uY29uc3RhbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubWV0aG9kc1tpdGVtLm5hbWVdLmNhY2hlU2VuZCA9IHRoaXMuY2FjaGVTZW5kRnVuY3Rpb24oaXRlbS5uYW1lLCBpKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVycyBpZiBhbnkgZXZlbnRzLlxuICAgIGlmIChldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZXZlbnQgPSBldmVudHNbaV1cbiAgICAgICAgXG4gICAgICAgIGlmICggdHlwZW9mIGV2ZW50ID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0xJU1RFTl9GT1JfRVZFTlQnLCBjb250cmFjdDogdGhpcywgZXZlbnROYW1lOiBldmVudC5ldmVudE5hbWUsIGV2ZW50T3B0aW9uczogZXZlbnQuZXZlbnRPcHRpb25zfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0xJU1RFTl9GT1JfRVZFTlQnLCBjb250cmFjdDogdGhpcywgZXZlbnROYW1lOiBldmVudH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWNoZUNhbGxGdW5jdGlvbihmbk5hbWUsIGZuSW5kZXgsIGZuKSB7XG4gICAgdmFyIGNvbnRyYWN0ID0gdGhpc1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gQ29sbGVjdCBhcmdzIGFuZCBoYXNoIHRvIHVzZSBhcyBrZXksIDB4MCBpZiBubyBhcmdzXG4gICAgICB2YXIgYXJnc0hhc2ggPSAnMHgwJ1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHNcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBhcmdzSGFzaCA9IGNvbnRyYWN0LmdlbmVyYXRlQXJnc0hhc2goYXJncylcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGNvbnRyYWN0LmNvbnRyYWN0TmFtZVxuICAgICAgY29uc3QgZnVuY3Rpb25TdGF0ZSA9IGNvbnRyYWN0LnN0b3JlLmdldFN0YXRlKCkuY29udHJhY3RzW2NvbnRyYWN0TmFtZV1bZm5OYW1lXVxuXG4gICAgICAvLyBJZiBjYWxsIHJlc3VsdCBpcyBpbiBzdGF0ZSBhbmQgZnJlc2gsIHJldHVybiB2YWx1ZSBpbnN0ZWFkIG9mIGNhbGxpbmdcbiAgICAgIGlmIChhcmdzSGFzaCBpbiBmdW5jdGlvblN0YXRlKSB7XG4gICAgICAgIGlmIChjb250cmFjdC5zdG9yZS5nZXRTdGF0ZSgpLmNvbnRyYWN0c1tjb250cmFjdE5hbWVdLnN5bmNlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBhcmdzSGFzaFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgY2FsbCBmdW5jdGlvbiBhbmQgdXBkYXRlIHN0b3JlXG4gICAgICBjb250cmFjdC5zdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0NBTExfQ09OVFJBQ1RfRk4nLCBjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBhcmdzSGFzaH0pXG5cbiAgICAgIC8vIFJldHVybiBub3RoaW5nIGJlY2F1c2Ugc3RhdGUgaXMgY3VycmVudGx5IGVtcHR5LlxuICAgICAgcmV0dXJuIGFyZ3NIYXNoXG4gICAgfVxuICB9XG5cbiAgY2FjaGVTZW5kRnVuY3Rpb24oZm5OYW1lLCBmbkluZGV4LCBmbikge1xuICAgIC8vIE5PVEU6IE1heSBub3QgbmVlZCBmbiBpbmRleFxuICAgIHZhciBjb250cmFjdCA9IHRoaXNcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzXG5cbiAgICAgIC8vIEdlbmVyYXRlIHRlbXBvcmFyeSBJRFxuICAgICAgdmFyIHN0YWNrSWQgPSBjb250cmFjdC5zdG9yZS5nZXRTdGF0ZSgpLnRyYW5zYWN0aW9uU3RhY2subGVuZ3RoXG5cbiAgICAgIC8vIEFkZCBJRCB0byBcInRyYW5zYWN0aW9uU3RhY2tcIiB3aXRoIGVtcHR5IHZhbHVlXG4gICAgICBjb250cmFjdC5zdG9yZS5kaXNwYXRjaCh7dHlwZTogJ1BVU0hfVE9fU1RBQ0snfSlcblxuICAgICAgLy8gRGlzcGF0Y2ggdHggdG8gc2FnYVxuICAgICAgLy8gV2hlbiB0eGhhc2ggcmVjZWl2ZWQsIHdpbGwgYmUgdmFsdWUgb2Ygc3RhY2sgSURcbiAgICAgIGNvbnRyYWN0LnN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnU0VORF9DT05UUkFDVF9UWCcsIGNvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIHN0YWNrSWR9KVxuXG4gICAgICAvLyByZXR1cm4gc3RhY2sgSURcbiAgICAgIHJldHVybiBzdGFja0lkXG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVBcmdzSGFzaChhcmdzKSB7XG4gICAgdmFyIHdlYjMgPSB0aGlzLndlYjNcbiAgICB2YXIgaGFzaFN0cmluZyA9ICcnXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldICE9PSAnZnVuY3Rpb24nKVxuICAgICAge1xuICAgICAgICB2YXIgYXJnVG9IYXNoID0gYXJnc1tpXVxuXG4gICAgICAgIC8vIFN0cmluZ2lmeSBvYmplY3RzIHRvIGFsbG93IGhhc2hpbmdcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdUb0hhc2ggPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgYXJnVG9IYXNoID0gSlNPTi5zdHJpbmdpZnkoYXJnVG9IYXNoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udmVydCBudW1iZXIgdG8gc3Ryb25nIHRvIGFsbG93IGhhc2hpbmdcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdUb0hhc2ggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgYXJnVG9IYXNoID0gYXJnVG9IYXNoLnRvU3RyaW5nKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgaW4gcGxhY2UgZm9yIHdlYjMgdjAueFxuICAgICAgICBpZiAoJ3V0aWxzJyBpbiB3ZWIzKSB7XG4gICAgICAgICAgdmFyIGhhc2hQaWVjZSA9IHdlYjMudXRpbHMuc2hhMyhhcmdUb0hhc2gpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIGhhc2hQaWVjZSA9IHdlYjMuc2hhMyhhcmdUb0hhc2gpXG4gICAgICAgIH1cblxuICAgICAgICBoYXNoU3RyaW5nICs9IGhhc2hQaWVjZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB3ZWIzLnV0aWxzLnNoYTMoaGFzaFN0cmluZylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcml6emxlQ29udHJhY3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Ecml6emxlQ29udHJhY3QuanMiLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tICcuLi9kZWZhdWx0T3B0aW9ucydcbmltcG9ydCBtZXJnZSBmcm9tICcuLi9tZXJnZU9wdGlvbnMnXG5cbi8vIEluaXRpYWxpemF0aW9uIEZ1bmN0aW9uc1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVdlYjMsIGdldE5ldHdvcmtJZCB9IGZyb20gJy4uL3dlYjMvd2ViM1NhZ2EnXG5pbXBvcnQgeyBnZXRBY2NvdW50cyB9IGZyb20gJy4uL2FjY291bnRzL2FjY291bnRzU2FnYSdcbmltcG9ydCB7IGdldEFjY291bnRCYWxhbmNlcyB9IGZyb20gJy4uL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhJ1xuXG5mdW5jdGlvbiogaW5pdGlhbGl6ZURyaXp6bGUoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBhY3Rpb24ub3B0aW9ucylcbiAgICBjb25zdCB3ZWIzT3B0aW9ucyA9IG9wdGlvbnMud2ViM1xuICAgIGNvbnN0IGRyaXp6bGUgPSBhY3Rpb24uZHJpenpsZVxuXG4gICAgLy8gSW5pdGlhbGl6ZSB3ZWIzIGFuZCBnZXQgdGhlIGN1cnJlbnQgbmV0d29yayBJRC5cbiAgICB2YXIgd2ViMyA9IHlpZWxkIGNhbGwoaW5pdGlhbGl6ZVdlYjMsIHtvcHRpb25zOiB3ZWIzT3B0aW9uc30pXG4gICAgZHJpenpsZS53ZWIzID0gd2ViM1xuXG4gICAgeWllbGQgY2FsbChnZXROZXR3b3JrSWQsIHt3ZWIzfSlcblxuICAgIC8vIEdldCBpbml0aWFsIGFjY291bnRzIGxpc3QgYW5kIGJhbGFuY2VzLlxuICAgIHlpZWxkIGNhbGwoZ2V0QWNjb3VudHMsIHt3ZWIzfSlcbiAgICB5aWVsZCBjYWxsKGdldEFjY291bnRCYWxhbmNlcywge3dlYjN9KVxuXG4gICAgLy8gSW5zdGFudGlhdGUgY29udHJhY3RzIHBhc3NlZCB0aHJvdWdoIHZpYSBvcHRpb25zLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5jb250cmFjdHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIGNvbnRyYWN0Q29uZmlnID0gb3B0aW9ucy5jb250cmFjdHNbaV1cbiAgICAgIHZhciBldmVudHMgPSBbXVxuICAgICAgdmFyIGNvbnRyYWN0TmFtZSA9IGNvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZVxuXG4gICAgICBpZiAoY29udHJhY3ROYW1lIGluIG9wdGlvbnMuZXZlbnRzKSB7XG4gICAgICAgIGV2ZW50cyA9IG9wdGlvbnMuZXZlbnRzW2NvbnRyYWN0TmFtZV1cbiAgICAgIH1cblxuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQUREX0NPTlRSQUNUJywgZHJpenpsZSwgY29udHJhY3RDb25maWcsIGV2ZW50cywgd2ViM30pXG4gICAgfVxuXG4gICAgY29uc3Qgc3luY0Fsd2F5cyA9IG9wdGlvbnMuc3luY0Fsd2F5c1xuXG4gICAgaWYgKHdlYjMuY3VycmVudFByb3ZpZGVyLmlzTWV0YU1hc2spIHtcbiAgICAgIC8vIFVzaW5nIE1ldGFNYXNrLCBhdHRlbXB0IGJsb2NrIHBvbGxpbmcuXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IG9wdGlvbnMucG9sbHMuYmxvY2tzXG4gICAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS1NfUE9MTElORycsIGRyaXp6bGUsIGludGVydmFsLCB3ZWIzLCBzeW5jQWx3YXlzfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBOb3QgdXNpbmcgTWV0YU1hc2ssIGF0dGVtcHQgc3Vic2NyaXB0aW9uIGJsb2NrIGxpc3RlbmluZy5cbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0JMT0NLU19MSVNURU5JTkcnLCBkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSlcbiAgICB9XG5cbiAgICAvLyBBY2NvdW50cyBQb2xsaW5nXG4gICAgaWYgKCdhY2NvdW50cycgaW4gb3B0aW9ucy5wb2xscykge1xuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQUNDT1VOVFNfUE9MTElORycsIGludGVydmFsOiBvcHRpb25zLnBvbGxzLmFjY291bnRzLCB3ZWIzfSlcbiAgICB9XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHt0eXBlOiAnRFJJWlpMRV9GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgRHJpenpsZTonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIHlpZWxkIHB1dCh7dHlwZTogJ0RSSVpaTEVfSU5JVElBTElaRUQnfSlcblxuICByZXR1cm5cbn1cblxuZnVuY3Rpb24qIGRyaXp6bGVTdGF0dXNTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KCdEUklaWkxFX0lOSVRJQUxJWklORycsIGluaXRpYWxpemVEcml6emxlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBkcml6emxlU3RhdHVzU2FnYTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kcml6emxlU3RhdHVzL2RyaXp6bGVTdGF0dXNTYWdhLmpzIiwiY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHdlYjM6IHtcbiAgICAvLyBgYmxvY2tgIG5vIGxvbmdlciBuZWVkZWQ7XG4gICAgLy8ga2VlcGluZyBmb3IgcHJlLXYxLjEuMSBjb21wYXRpYmlsaXR5IHdpdGggZHJpenpsZS1yZWFjdC5cbiAgICBibG9jazogZmFsc2UsXG4gICAgZmFsbGJhY2s6IHtcbiAgICAgIHR5cGU6ICd3cycsXG4gICAgICB1cmw6ICd3czovLzEyNy4wLjAuMTo4NTQ1J1xuICAgIH1cbiAgfSxcbiAgY29udHJhY3RzOiBbXSxcbiAgZXZlbnRzOiB7fSxcbiAgcG9sbHM6IHtcbiAgICBibG9ja3M6IDMwMDBcbiAgfSxcbiAgc3luY0Fsd2F5czogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdE9wdGlvbnNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGVmYXVsdE9wdGlvbnMuanMiLCJpbXBvcnQgbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJ1xuY29uc3QgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2lzLXBsYWluLW9iamVjdCcpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkZWZhdWx0T3B0aW9ucywgbmV3T3B0aW9ucykge1xuICByZXR1cm4gbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG5ld09wdGlvbnMsIHtcbiAgICBpc01lcmdlYWJsZU9iamVjdDogaXNQbGFpbk9iamVjdFxuICB9KVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21lcmdlT3B0aW9ucy5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGVlcG1lcmdlXCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiaXMtcGxhaW4tb2JqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNhbGwsIHB1dCwgc2VsZWN0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbnZhciBXZWIzID0gcmVxdWlyZSgnd2ViMycpXG5cbi8qXG4gKiBJbml0aWFsaXphdGlvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogaW5pdGlhbGl6ZVdlYjMoe29wdGlvbnN9KSB7XG5cbiAgdHJ5IHtcbiAgICB2YXIgd2ViMyA9IHt9XG5cbiAgICAvLyBDaGVja2luZyBpZiBXZWIzIGhhcyBiZWVuIGluamVjdGVkIGJ5IHRoZSBicm93c2VyIChNaXN0L01ldGFNYXNrKVxuICAgIGlmICh0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBVc2UgTWlzdC9NZXRhTWFzaydzIHByb3ZpZGVyLlxuICAgICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcilcbiAgICAgIHdlYjMuZXRoLmNhY2hlU2VuZFRyYW5zYWN0aW9uID0gKHR4T2JqZWN0KSA9PiBwdXQoe3R5cGU6ICdTRU5EX1dFQjNfVFgnLCB0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pXG5cbiAgICAgIGNvbnNvbGUubG9nKCdJbmplY3RlZCB3ZWIzIGRldGVjdGVkLicpXG5cbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ1dFQjNfSU5JVElBTElaRUQnfSlcbiAgICAgIFxuICAgICAgcmV0dXJuIHdlYjNcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuZmFsbGJhY2spIHtcbiAgICAgICAgLy8gQXR0ZW1wdCBmYWxsYmFjayBpZiBubyB3ZWIzIGluamVjdGlvbi5cbiAgICAgICAgY29uc29sZS5sb2coJ05vIHdlYjMgaW5zdGFuY2UgaW5qZWN0ZWQsIHVzaW5nIGZhbGxiYWNrLicpXG5cbiAgICAgICAgc3dpdGNoIChvcHRpb25zLmZhbGxiYWNrLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICd3cyc6XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuV2Vic29ja2V0UHJvdmlkZXIob3B0aW9ucy5mYWxsYmFjay51cmwpXG4gICAgICAgICAgICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpXG5cbiAgICAgICAgICAgIC8vIEF0dGFjaCBkcml6emxlIGZ1bmN0aW9uc1xuICAgICAgICAgICAgd2ViMy5ldGhbJ2NhY2hlU2VuZFRyYW5zYWN0aW9uJ10gPSAodHhPYmplY3QpID0+IHB1dCh7dHlwZTogJ1NFTkRfV0VCM19UWCcsIHR4T2JqZWN0LCBzdGFja0lkLCB3ZWIzfSlcblxuICAgICAgICAgICAgeWllbGQgcHV0KHt0eXBlOiAnV0VCM19JTklUSUFMSVpFRCd9KVxuXG4gICAgICAgICAgICByZXR1cm4gd2ViM1xuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBJbnZhbGlkIG9wdGlvbnM7IHRocm93LlxuICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkIHdlYjMgZmFsbGJhY2sgcHJvdmlkZWQuXCJcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPdXQgb2Ygd2ViMyBvcHRpb25zOyB0aHJvdy5cbiAgICAgIHRocm93IFwiQ2Fubm90IGZpbmQgaW5qZWN0ZWQgd2ViMyBvciB2YWxpZCBmYWxsYmFjay5cIlxuICAgIH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdXRUIzX0ZBSUxFRCcsIGVycm9yfSlcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbnRpYWxpemluZyB3ZWIzOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgfVxufVxuXG4vKlxuICogTmV0d29yayBJRFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0TmV0d29ya0lkKHt3ZWIzfSkge1xuICB0cnkge1xuICAgIGNvbnN0IG5ldHdvcmtJZCA9IHlpZWxkIGNhbGwod2ViMy5ldGgubmV0LmdldElkKVxuXG4gICAgeWllbGQgcHV0KHt0eXBlOiAnTkVUV09SS19JRF9GRVRDSEVEJywgbmV0d29ya0lkfSlcblxuICAgIHJldHVybiBuZXR3b3JrSWRcbiAgfVxuICBjYXRjaChlcnJvcil7XG4gICAgeWllbGQgcHV0KHt0eXBlOiAnTkVUV09SS19JRF9GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBuZXR3b3JrIElEOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICAgIHJldHVyblxuICB9XG59XG5cbi8qXG4gKiBTZW5kIFRyYW5zYWN0aW9uXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlVHhDaGFubmVsKHt0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pIHtcbiAgdmFyIHBlcnNpc3RUeEhhc2hcblxuICByZXR1cm4gZXZlbnRDaGFubmVsKGVtaXQgPT4ge1xuICAgIGNvbnN0IHR4UHJvbWlFdmVudCA9IHdlYjMuZXRoLnNlbmRUcmFuc2FjdGlvbih0eE9iamVjdCkub24oJ3RyYW5zYWN0aW9uSGFzaCcsIHR4SGFzaCA9PiB7XG4gICAgICBwZXJzaXN0VHhIYXNoID0gdHhIYXNoXG5cbiAgICAgIGVtaXQoe3R5cGU6ICdXM1RYX0JST0FEQ0FTVEVEJywgdHhIYXNoLCBzdGFja0lkfSlcbiAgICB9KVxuICAgIC5vbignY29uZmlybWF0aW9uJywgKGNvbmZpcm1hdGlvbk51bWJlciwgcmVjZWlwdCkgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1czVFhfQ09ORklSTUFJVE9OJywgY29uZmlybWF0aW9uUmVjZWlwdDogcmVjZWlwdCwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICB9KVxuICAgIC5vbigncmVjZWlwdCcsIHJlY2VpcHQgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1czVFhfU1VDQ0VTU0ZVTCcsIHJlY2VpcHQ6IHJlY2VpcHQsIHR4SGFzaDogcGVyc2lzdFR4SGFzaH0pXG4gICAgICBlbWl0KEVORClcbiAgICB9KVxuICAgIC5vbignZXJyb3InLCBlcnJvciA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnVzNUWF9FUlJPUicsIGVycm9yOiBlcnJvciwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIHR4UHJvbWlFdmVudC5vZmYoKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuXG5mdW5jdGlvbiogY2FsbFNlbmRUeCh7dHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KSB7XG4gIGNvbnN0IHR4Q2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlVHhDaGFubmVsLCB7dHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KVxuXG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBldmVudCA9IHlpZWxkIHRha2UodHhDaGFubmVsKVxuICAgICAgeWllbGQgcHV0KGV2ZW50KVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICB0eENoYW5uZWwuY2xvc2UoKVxuICB9XG59XG5cbmZ1bmN0aW9uKiB3ZWIzU2FnYSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdCgnTkVUV09SS19JRF9GRVRDSElORycsIGdldE5ldHdvcmtJZClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdTRU5EX1dFQjNfVFgnLCBjYWxsU2VuZFR4KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzU2FnYVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dlYjMvd2ViM1NhZ2EuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIndlYjNcIlxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBhY2NvdW50c1JlZHVjZXIgZnJvbSAnLi9hY2NvdW50cy9hY2NvdW50c1JlZHVjZXInXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzUmVkdWNlciBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyJ1xuaW1wb3J0IGNvbnRyYWN0c1JlZHVjZXIgZnJvbSAnLi9jb250cmFjdHMvY29udHJhY3RzUmVkdWNlcidcbmltcG9ydCBkcml6emxlU3RhdHVzUmVkdWNlciBmcm9tICcuL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXInXG5pbXBvcnQgdHJhbnNhY3Rpb25zUmVkdWNlciBmcm9tICcuL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyIGZyb20gJy4vdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyJ1xuaW1wb3J0IHdlYjNSZWR1Y2VyIGZyb20gJy4vd2ViMy93ZWIzUmVkdWNlcidcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFjY291bnRzOiBhY2NvdW50c1JlZHVjZXIsXG4gIGFjY291bnRCYWxhbmNlczogYWNjb3VudEJhbGFuY2VzUmVkdWNlcixcbiAgY29udHJhY3RzOiBjb250cmFjdHNSZWR1Y2VyLFxuICBkcml6emxlU3RhdHVzOiBkcml6emxlU3RhdHVzUmVkdWNlcixcbiAgdHJhbnNhY3Rpb25zOiB0cmFuc2FjdGlvbnNSZWR1Y2VyLFxuICB0cmFuc2FjdGlvblN0YWNrOiB0cmFuc2FjdGlvblN0YWNrUmVkdWNlcixcbiAgd2ViMzogd2ViM1JlZHVjZXJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2VyLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge31cblxuY29uc3QgYWNjb3VudHNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQUNDT1VOVFNfRkVUQ0hJTkcnKVxuICB7XG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBQ0NPVU5UU19GRVRDSEVEJylcbiAge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmFjY291bnRzKVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnRzUmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjY291bnRzL2FjY291bnRzUmVkdWNlci5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IGFjY291bnRCYWxhbmNlc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBQ0NPVU5UX0JBTEFOQ0VfRkVUQ0hFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLmFjY291bnRdOiBhY3Rpb24uYWNjb3VudEJhbGFuY2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudEJhbGFuY2VzUmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL2dlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IGNvbnRyYWN0c1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAvKlxuICAgKiBDb250cmFjdCBTdGF0dXNcbiAgICovXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ09OVFJBQ1RfSU5JVElBTElaSU5HJykge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFthY3Rpb24uY29udHJhY3RDb25maWcuY29udHJhY3ROYW1lXTogZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZShhY3Rpb24uY29udHJhY3RDb25maWcpXG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ09OVFJBQ1RfSU5JVElBTElaRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5uYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0sXG4gICAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgICBzeW5jZWQ6IHRydWUsXG4gICAgICAgIGV2ZW50czogW11cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9TWU5DSU5HJylcbiAge1xuICAgIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGFjdGlvbi5jb250cmFjdC5jb250cmFjdE5hbWVcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFtjb250cmFjdE5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2NvbnRyYWN0TmFtZV0sXG4gICAgICAgIHN5bmNlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9TWU5DRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5jb250cmFjdE5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5jb250cmFjdE5hbWVdLFxuICAgICAgICBzeW5jZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9TWU5DX0lORCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLmNvbnRyYWN0TmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGVbYWN0aW9uLmNvbnRyYWN0TmFtZV0sXG4gICAgICAgIHN5bmNlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBDb250cmFjdCBGdW5jdGlvbnNcbiAgICovXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnR09UX0NPTlRSQUNUX1ZBUicpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLm5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXSxcbiAgICAgICAgW2FjdGlvbi52YXJpYWJsZV06IHtcbiAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV1bYWN0aW9uLnZhcmlhYmxlXSxcbiAgICAgICAgICBbYWN0aW9uLmFyZ3NIYXNoXToge1xuICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdW2FjdGlvbi52YXJpYWJsZV1bYWN0aW9uLmFyZ3NIYXNoXSxcbiAgICAgICAgICAgIGFyZ3M6IGFjdGlvbi5hcmdzLFxuICAgICAgICAgICAgZm5JbmRleDogYWN0aW9uLmZuSW5kZXgsXG4gICAgICAgICAgICB2YWx1ZTogYWN0aW9uLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnRVJST1JfQ09OVFJBQ1RfVkFSJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFthY3Rpb24ubmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdLFxuICAgICAgICBbYWN0aW9uLnZhcmlhYmxlXToge1xuICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXVthY3Rpb24udmFyaWFibGVdLFxuICAgICAgICAgIFthY3Rpb24uYXJnc0hhc2hdOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV1bYWN0aW9uLnZhcmlhYmxlXVthY3Rpb24uYXJnc0hhc2hdLFxuICAgICAgICAgICAgYXJnczogYWN0aW9uLmFyZ3MsXG4gICAgICAgICAgICBmbkluZGV4OiBhY3Rpb24uZm5JbmRleCxcbiAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBDb250cmFjdCBFdmVudHNcbiAgICovXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnRVZFTlRfRklSRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5uYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0sXG4gICAgICAgIGV2ZW50czogW1xuICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXS5ldmVudHMsXG4gICAgICAgICAgYWN0aW9uLmV2ZW50XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJhY3RzUmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRyYWN0cy9jb250cmFjdHNSZWR1Y2VyLmpzIiwiaW1wb3J0IGdldEFiaSBmcm9tICcuL2dldEFiaSdcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUgKGNvbnRyYWN0Q29uZmlnKSB7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgc3luY2VkOiBmYWxzZVxuICB9XG5cbiAgLy8gQ29uc3RhbnQgZ2V0dGVyc1xuICB2YXIgYWJpID0gZ2V0QWJpKGNvbnRyYWN0Q29uZmlnKVxuICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgYWJpLmxlbmd0aDsgaTIrKykge1xuICAgIHZhciBpdGVtID0gYWJpW2kyXTtcblxuICAgIGlmIChpdGVtLnR5cGUgPT0gXCJmdW5jdGlvblwiICYmIGl0ZW0uY29uc3RhbnQgPT09IHRydWUpIHtcbiAgICAgIHN0YXRlW2l0ZW0ubmFtZV0gPSB7fVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBYmkoY29udHJhY3RFbnRyeSkge1xuICBpZiAoY29udHJhY3RFbnRyeS53ZWIzQ29udHJhY3QpIHtcbiAgICByZXR1cm4gY29udHJhY3RFbnRyeS53ZWIzQ29udHJhY3Qub3B0aW9ucy5qc29uSW50ZXJmYWNlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvbnRyYWN0RW50cnkuYWJpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZXRBYmkuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGluaXRpYWxpemVkOiBmYWxzZVxufVxuXG5jb25zdCBkcml6emxlU3RhdHVzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8qXG4gICAqIERyaXp6bGUgU3RhdHVzXG4gICAqL1xuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0RSSVpaTEVfSU5JVElBTElaRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgaW5pdGlhbGl6ZWQ6IHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyaXp6bGVTdGF0dXNSZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzUmVkdWNlci5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG4gIFxuY29uc3QgdHJhbnNhY3Rpb25zUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfQlJPQURDQVNURUQnKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgICAgICAgICAgICAgY29uZmlybWF0aW9uczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RYX0NPTkZJUk1BSVRPTicpXG4gICAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBbYWN0aW9uLnR4SGFzaF06IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXSxcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi50eEhhc2hdLmNvbmZpcm1hdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jb25maXJtYXRpb25SZWNlaXB0XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfU1VDQ0VTU0ZVTCcpXG4gICAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBbYWN0aW9uLnR4SGFzaF06IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICByZWNlaXB0OiBhY3Rpb24ucmVjZWlwdFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdUWF9FUlJPUicpXG4gICAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBbYWN0aW9uLnR4SGFzaF06IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zYWN0aW9uc1JlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zUmVkdWNlci5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdXG4gIFxuY29uc3QgdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1BVU0hfVE9fVFhTVEFDSycpXG4gICAge1xuICAgICAgICBzdGF0ZS5wdXNoKCcnKVxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUE9QX0ZST01fVFhTVEFDSycpXG4gICAge1xuICAgICAgICBzdGF0ZS5wb3AoKVxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfQlJPQURDQVNURUQnKVxuICAgIHtcbiAgICAgICAgc3RhdGVbYWN0aW9uLnN0YWNrSWRdID0gYWN0aW9uLnR4SGFzaFxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzdGF0dXM6ICcnXG59XG5cbmNvbnN0IHdlYjNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnV0VCM19JTklUSUFMSVpJTkcnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3RhdHVzOiAnaW5pdGlhbGl6aW5nJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1dFQjNfSU5JVElBTElaRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3RhdHVzOiAnaW5pdGlhbGl6ZWQnXG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnV0VCM19GQUlMRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3RhdHVzOiAnZmFpbGVkJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ05FVFdPUktfSURfRkVUQ0hFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBuZXR3b3JrSWQ6IGFjdGlvbi5uZXR3b3JrSWRcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdORVRXT1JLX0lEX0ZBSUxFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBuZXR3b3JrSWQ6IGFjdGlvbi5uZXR3b3JrSWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2ViM1JlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93ZWIzL3dlYjNSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSB9IGZyb20gJy4vZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlKG9wdGlvbnMpIHtcbiAgLy8gUHJlbG9hZGVkIHN0YXRlXG4gIHZhciBjb250cmFjdHNJbml0aWFsU3RhdGUgPSB7fVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5jb250cmFjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBJbml0aWFsIGNvbnRyYWN0IGRldGFpbHNcbiAgICB2YXIgY29udHJhY3ROYW1lID0gb3B0aW9ucy5jb250cmFjdHNbaV0uY29udHJhY3ROYW1lXG4gICAgY29udHJhY3RzSW5pdGlhbFN0YXRlW2NvbnRyYWN0TmFtZV0gPSBnZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlKG9wdGlvbnMuY29udHJhY3RzW2ldKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRyYWN0c0luaXRpYWxTdGF0ZVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=