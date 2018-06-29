(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("redux-saga"), require("redux"), require("eth-block-tracker-es5"), require("deepmerge"), require("is-plain-object"), require("web3"));
	else if(typeof define === 'function' && define.amd)
		define(["redux-saga", "redux", "eth-block-tracker-es5", "deepmerge", "is-plain-object", "web3"], factory);
	else if(typeof exports === 'object')
		exports["drizzle"] = factory(require("redux-saga"), require("redux"), require("eth-block-tracker-es5"), require("deepmerge"), require("is-plain-object"), require("web3"));
	else
		root["drizzle"] = factory(root["redux-saga"], root["redux"], root["eth-block-tracker-es5"], root["deepmerge"], root["is-plain-object"], root["web3"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_71__, __WEBPACK_EXTERNAL_MODULE_122__, __WEBPACK_EXTERNAL_MODULE_147__, __WEBPACK_EXTERNAL_MODULE_148__, __WEBPACK_EXTERNAL_MODULE_149__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(38)('wks');
var uid = __webpack_require__(23);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(53);
var toPrimitive = __webpack_require__(32);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(15);
var hide = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(115);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_io__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takem", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["t"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "put", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cps", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fork", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "spawn", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cancel", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "actionChannel", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cancelled", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flush", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setContext", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeEvery", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["r"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "takeLatest", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return __WEBPACK_IMPORTED_MODULE_0__internal_io__["u"]; });


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(59);
var defined = __webpack_require__(35);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return sym; });
/* unused harmony export TASK */
/* unused harmony export HELPER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MATCH; });
/* unused harmony export CANCEL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SAGA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SELF_CANCELLATION; });
/* unused harmony export konst */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return kTrue; });
/* unused harmony export kFalse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ident; });
/* harmony export (immutable) */ __webpack_exports__["d"] = check;
/* unused harmony export hasOwn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return is; });
/* unused harmony export object */
/* harmony export (immutable) */ __webpack_exports__["n"] = remove;
/* unused harmony export array */
/* unused harmony export deferred */
/* unused harmony export arrayOfDeffered */
/* harmony export (immutable) */ __webpack_exports__["f"] = delay;
/* unused harmony export createMockTask */
/* unused harmony export autoInc */
/* unused harmony export uid */
/* harmony export (immutable) */ __webpack_exports__["l"] = makeIterator;
/* unused harmony export log */
/* harmony export (immutable) */ __webpack_exports__["g"] = deprecate;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return updateIncentive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return internalErr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createSetContextWarning; });
/* unused harmony export wrapSagaDispatch */
/* unused harmony export cloneableGenerator */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var sym = function sym(id) {
  return '@@redux-saga/' + id;
};

var TASK = sym('TASK');
var HELPER = sym('HELPER');
var MATCH = sym('MATCH');
var CANCEL = sym('CANCEL_PROMISE');
var SAGA_ACTION = sym('SAGA_ACTION');
var SELF_CANCELLATION = sym('SELF_CANCELLATION');
var konst = function konst(v) {
  return function () {
    return v;
  };
};
var kTrue = konst(true);
var kFalse = konst(false);
var noop = function noop() {};
var ident = function ident(v) {
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

var is = {
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

var object = {
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

var array = {
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

var uid = autoInc();

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

var updateIncentive = function updateIncentive(deprecated, preferred) {
  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
};

var internalErr = function internalErr(err) {
  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
};

var createSetContextWarning = function createSetContextWarning(ctx, props) {
  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
};

var wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
  return function (action) {
    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
  };
};

var cloneableGenerator = function cloneableGenerator(generatorFunc) {
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(72)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(28);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(20);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(58);
var enumBugKeys = __webpack_require__(39);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["q"] = take;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return takem; });
/* harmony export (immutable) */ __webpack_exports__["l"] = put;
/* harmony export (immutable) */ __webpack_exports__["b"] = all;
/* harmony export (immutable) */ __webpack_exports__["m"] = race;
/* harmony export (immutable) */ __webpack_exports__["d"] = call;
/* harmony export (immutable) */ __webpack_exports__["c"] = apply;
/* harmony export (immutable) */ __webpack_exports__["g"] = cps;
/* harmony export (immutable) */ __webpack_exports__["i"] = fork;
/* harmony export (immutable) */ __webpack_exports__["p"] = spawn;
/* harmony export (immutable) */ __webpack_exports__["k"] = join;
/* harmony export (immutable) */ __webpack_exports__["e"] = cancel;
/* harmony export (immutable) */ __webpack_exports__["n"] = select;
/* harmony export (immutable) */ __webpack_exports__["a"] = actionChannel;
/* harmony export (immutable) */ __webpack_exports__["f"] = cancelled;
/* harmony export (immutable) */ __webpack_exports__["h"] = flush;
/* harmony export (immutable) */ __webpack_exports__["j"] = getContext;
/* harmony export (immutable) */ __webpack_exports__["o"] = setContext;
/* harmony export (immutable) */ __webpack_exports__["r"] = takeEvery;
/* harmony export (immutable) */ __webpack_exports__["s"] = takeLatest;
/* harmony export (immutable) */ __webpack_exports__["u"] = throttle;
/* unused harmony export asEffect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sagaHelpers__ = __webpack_require__(117);



var IO = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["o" /* sym */])('IO');
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
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(arguments[0], __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
  }
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].pattern(patternOrChannel)) {
    return effect(TAKE, { pattern: patternOrChannel });
  }
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel(patternOrChannel)) {
    return effect(TAKE, { channel: patternOrChannel });
  }
  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
}

take.maybe = function () {
  var eff = take.apply(undefined, arguments);
  eff[TAKE].maybe = true;
  return eff;
};

var takem = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* deprecate */])(take.maybe, /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_0__utils__["p" /* updateIncentive */])('takem', 'take.maybe'));

function put(channel, action) {
  if (arguments.length > 1) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'put(channel, action): argument channel is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(action, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'put(channel, action): argument action is undefined');
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'put(action): argument action is undefined');
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

put.sync = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* deprecate */])(put.resolve, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["p" /* updateIncentive */])('put.sync', 'put.resolve'));

function all(effects) {
  return effect(ALL, effects);
}

function race(effects) {
  return effect(RACE, effects);
}

function getFnCallDesc(meth, fn, args) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(fn, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, meth + ': argument fn is undefined');

  var context = null;
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].array(fn)) {
    var _fn = fn;
    context = _fn[0];
    fn = _fn[1];
  } else if (fn.fn) {
    var _fn2 = fn;
    context = _fn2.context;
    fn = _fn2.fn;
  }
  if (context && __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].string(fn) && __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func(context[fn])) {
    fn = context[fn];
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(fn, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, meth + ': argument ' + fn + ' is not a function');

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
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'join(task): argument task is undefined');
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'cancel(task): argument task is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(task, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
  }
  return effect(CANCEL, task || __WEBPACK_IMPORTED_MODULE_0__utils__["c" /* SELF_CANCELLATION */]);
}

function select(selector) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  if (arguments.length === 0) {
    selector = __WEBPACK_IMPORTED_MODULE_0__utils__["h" /* ident */];
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(selector, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'select(selector,[...]): argument selector is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(selector, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, 'select(selector,[...]): argument ' + selector + ' is not a function');
  }
  return effect(SELECT, { selector: selector, args: args });
}

/**
  channel(pattern, [buffer])    => creates an event channel for store actions
**/
function actionChannel(pattern, buffer) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(pattern, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
  if (arguments.length > 1) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
  }
  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
}

function cancelled() {
  return effect(CANCELLED, {});
}

function flush(channel) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(channel, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel, 'flush(channel): argument ' + channel + ' is not valid channel');
  return effect(FLUSH, channel);
}

function getContext(prop) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(prop, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].string, 'getContext(prop): argument ' + prop + ' is not a string');
  return effect(GET_CONTEXT, prop);
}

function setContext(props) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(props, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].object, Object(__WEBPACK_IMPORTED_MODULE_0__utils__["e" /* createSetContextWarning */])(null, props));
  return effect(SET_CONTEXT, props);
}

function takeEvery(patternOrChannel, worker) {
  for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
    args[_key8 - 2] = arguments[_key8];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["a" /* takeEveryHelper */], patternOrChannel, worker].concat(args));
}

function takeLatest(patternOrChannel, worker) {
  for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
    args[_key9 - 2] = arguments[_key9];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["b" /* takeLatestHelper */], patternOrChannel, worker].concat(args));
}

function throttle(ms, pattern, worker) {
  for (var _len10 = arguments.length, args = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
    args[_key10 - 3] = arguments[_key10];
  }

  return fork.apply(undefined, [__WEBPACK_IMPORTED_MODULE_1__sagaHelpers__["c" /* throttleHelper */], ms, pattern, worker].concat(args));
}

var createAsEffectType = function createAsEffectType(type) {
  return function (effect) {
    return effect && effect[IO] && effect[type];
  };
};

var asEffect = {
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

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.getAccountBalances = getAccountBalances;

var _effects = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(getAccountBalances),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(accountBalancesSaga);

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
  }, _marked, this, [[5, 19]]);
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
  }, _marked2, this);
}

exports.default = accountBalancesSaga;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 29 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(126);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(95)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(34);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38)('keys');
var uid = __webpack_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(35);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(20);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return qEnd; });
/* harmony export (immutable) */ __webpack_exports__["c"] = safeName;
/* harmony export (immutable) */ __webpack_exports__["a"] = fsmIterator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(13);


var done = { done: true, value: undefined };
var qEnd = {};

function safeName(patternOrChannel) {
  if (__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].channel(patternOrChannel)) {
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

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* makeIterator */])(next, function (error) {
    return next(null, error);
  }, name, true);
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return END; });
/* unused harmony export isEnd */
/* unused harmony export emitter */
/* unused harmony export INVALID_BUFFER */
/* unused harmony export UNDEFINED_INPUT_ERROR */
/* unused harmony export channel */
/* unused harmony export eventChannel */
/* unused harmony export stdChannel */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffers__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduler__ = __webpack_require__(119);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
var END = { type: CHANNEL_END_TYPE };
var isEnd = function isEnd(a) {
  return a && a.type === CHANNEL_END_TYPE;
};

function emitter() {
  var subscribers = [];

  function subscribe(sub) {
    subscribers.push(sub);
    return function () {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["n" /* remove */])(subscribers, sub);
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

var INVALID_BUFFER = 'invalid buffer passed to channel factory function';
var UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';

if (process.env.NODE_ENV !== 'production') {
  UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
}

function channel() {
  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_1__buffers__["a" /* buffers */].fixed();

  var closed = false;
  var takers = [];

  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(buffer, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].buffer, INVALID_BUFFER);

  function checkForbiddenStates() {
    if (closed && takers.length) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__utils__["i" /* internalErr */])('Cannot have a closed channel with pending takers');
    }
    if (takers.length && !buffer.isEmpty()) {
      throw Object(__WEBPACK_IMPORTED_MODULE_0__utils__["i" /* internalErr */])('Cannot have pending takers with non empty buffer');
    }
  }

  function put(input) {
    checkForbiddenStates();
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(input, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].notUndef, UNDEFINED_INPUT_ERROR);
    if (closed) {
      return;
    }
    if (!takers.length) {
      return buffer.put(input);
    }
    for (var i = 0; i < takers.length; i++) {
      var cb = takers[i];
      if (!cb[__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* MATCH */]] || cb[__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* MATCH */]](input)) {
        takers.splice(i, 1);
        return cb(input);
      }
    }
  }

  function take(cb) {
    checkForbiddenStates();
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(cb, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, "channel.take's callback must be a function");

    if (closed && buffer.isEmpty()) {
      cb(END);
    } else if (!buffer.isEmpty()) {
      cb(buffer.take());
    } else {
      takers.push(cb);
      cb.cancel = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["n" /* remove */])(takers, cb);
      };
    }
  }

  function flush(cb) {
    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(cb, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, "channel.flush' callback must be a function");
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
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_1__buffers__["a" /* buffers */].none();
  var matcher = arguments[2];

  /**
    should be if(typeof matcher !== undefined) instead?
    see PR #273 for a background discussion
  **/
  if (arguments.length > 2) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(matcher, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, 'Invalid match function passed to eventChannel');
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

  if (!__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func(unsubscribe)) {
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
      if (input[__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* SAGA_ACTION */]]) {
        cb(input);
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_2__scheduler__["a" /* asap */])(function () {
        return cb(input);
      });
    });
  });

  return _extends({}, chan, {
    take: function take(cb, matcher) {
      if (arguments.length > 1) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* check */])(matcher, __WEBPACK_IMPORTED_MODULE_0__utils__["j" /* is */].func, "channel.take's matcher argument must be a function");
        cb[__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* MATCH */]] = matcher;
      }
      chan.take(cb);
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(72)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.getAccounts = getAccounts;

var _reduxSaga = __webpack_require__(25);

var _effects = __webpack_require__(11);

var _accountBalancesSaga = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(getAccounts),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(createAccountsPollChannel),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(callCreateAccountsPollChannel),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(accountsSaga);

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
  }, _marked, this, [[1, 11]]);
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
  }, _marked2, this);
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
  }, _marked3, this, [[3,, 17, 20]]);
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
  }, _marked4, this);
}

exports.default = accountsSaga;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(21);
var wksExt = __webpack_require__(46);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.initializeWeb3 = initializeWeb3;
exports.getNetworkId = getNetworkId;

var _effects = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(initializeWeb3),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(getNetworkId),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(callSendTx),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(web3Saga);

var Web3 = __webpack_require__(149);

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
  }, _marked, this, [[0, 27]]);
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
  }, _marked2, this, [[0, 9]]);
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
  }, _marked3, this, [[3,, 12, 15]]);
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
  }, _marked4, this);
}

exports.default = web3Saga;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(52);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(52);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(31)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(21);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(56);
var hide = __webpack_require__(7);
var has = __webpack_require__(9);
var Iterators = __webpack_require__(18);
var $iterCreate = __webpack_require__(96);
var setToStringTag = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(100);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(97);
var enumBugKeys = __webpack_require__(39);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(31)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(60).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(98)(false);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
var global = __webpack_require__(0);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(18);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(19);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(18);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(62);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(18);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(20);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);
var invoke = __webpack_require__(107);
var html = __webpack_require__(60);
var cel = __webpack_require__(31);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(19)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(41);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_71__;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

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


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BUFFER_OVERFLOW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buffers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(13);


var BUFFER_OVERFLOW = "Channel's Buffer overflow!";

var ON_OVERFLOW_THROW = 1;
var ON_OVERFLOW_DROP = 2;
var ON_OVERFLOW_SLIDE = 3;
var ON_OVERFLOW_EXPAND = 4;

var zeroBuffer = { isEmpty: __WEBPACK_IMPORTED_MODULE_0__utils__["k" /* kTrue */], put: __WEBPACK_IMPORTED_MODULE_0__utils__["m" /* noop */], take: __WEBPACK_IMPORTED_MODULE_0__utils__["m" /* noop */] };

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

var buffers = {
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

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _reduxSaga = __webpack_require__(25);

var _effects = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(callCreateBlockChannel),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(callCreateBlockPollChannel),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(processBlockHeader),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(processBlock),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(blocksSaga);

var BlockTracker = __webpack_require__(122);

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
  }, _marked, this, [[3,, 12, 15]]);
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
  }, _marked2, this, [[3,, 12, 15]]);
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
  }, _marked3, this, [[1, 9]]);
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
  }, _marked4, this, [[0, 24]]);
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
  }, _marked5, this);
}

exports.default = blocksSaga;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(28);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(14);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(76);

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.addContract = addContract;
exports.instantiateWeb3Contract = instantiateWeb3Contract;
exports.instantiateContract = instantiateContract;

var _reduxSaga = __webpack_require__(25);

var _effects = __webpack_require__(11);

var _DrizzleContract = __webpack_require__(142);

var _DrizzleContract2 = _interopRequireDefault(_DrizzleContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(addContract),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(instantiateWeb3Contract),
    _marked3 = /*#__PURE__*/_regenerator2.default.mark(instantiateContract),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(callListenForContractEvent),
    _marked5 = /*#__PURE__*/_regenerator2.default.mark(callSendContractTx),
    _marked6 = /*#__PURE__*/_regenerator2.default.mark(callCallContractFn),
    _marked7 = /*#__PURE__*/_regenerator2.default.mark(callSyncContract),
    _marked8 = /*#__PURE__*/_regenerator2.default.mark(contractsSaga);

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
  }, _marked, this);
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
  }, _marked2, this);
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
  }, _marked3, this);
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
  }, _marked4, this);
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


            if ((typeof finalArg === 'undefined' ? 'undefined' : (0, _typeof3.default)(finalArg)) === 'object') {
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
          return _effects.call.apply(undefined, [contract.methods[fnName]].concat((0, _toConsumableArray3.default)(args)));

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
  }, _marked5, this, [[8,, 17, 20]]);
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


            if ((typeof finalArg === 'undefined' ? 'undefined' : (0, _typeof3.default)(finalArg)) === 'object') {
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
          return _effects.call.apply(undefined, [contract.methods[fnName]].concat((0, _toConsumableArray3.default)(args)));

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
          return (0, _effects.put)((0, _extends3.default)({ type: 'GOT_CONTRACT_VAR' }, dispatchArgs));

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
          return (0, _effects.put)((0, _extends3.default)({ type: 'ERROR_CONTRACT_VAR' }, errorArgs));

        case 21:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this, [[6, 15]]);
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
          contractFnsState = (0, _assign2.default)({}, contractsState[contractName]);

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
  }, _marked7, this);
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
  }, _marked8, this);
}

exports.default = contractsSaga;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(130);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(132);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(58);
var hiddenKeys = __webpack_require__(39).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__(11);

var _defaultOptions = __webpack_require__(145);

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

var _mergeOptions = __webpack_require__(146);

var _mergeOptions2 = _interopRequireDefault(_mergeOptions);

var _web3Saga = __webpack_require__(48);

var _accountsSaga = __webpack_require__(44);

var _accountBalancesSaga = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(initializeDrizzle),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(drizzleStatusSaga);

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
  }, _marked, this, [[0, 39]]);
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
  }, _marked2, this);
}

exports.default = drizzleStatusSaga;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(28);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var accountsReducer = function accountsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === 'ACCOUNTS_FETCHING') {
    return state;
  }

  if (action.type === 'ACCOUNTS_FETCHED') {
    return (0, _assign2.default)({}, state, action.accounts);
  }

  return state;
};

exports.default = accountsReducer;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(49);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(14);

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var accountBalancesReducer = function accountBalancesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === 'ACCOUNT_BALANCE_FETCHED') {
    return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, action.account, action.accountBalance));
  }

  return state;
};

exports.default = accountBalancesReducer;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(49);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends14 = __webpack_require__(14);

var _extends15 = _interopRequireDefault(_extends14);

var _generateContractInitialState = __webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var contractsReducer = function contractsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  /*
   * Contract Status
   */

  if (action.type === 'CONTRACT_INITIALIZING') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.contractConfig.contractName, (0, _generateContractInitialState.generateContractInitialState)(action.contractConfig)));
  }

  if (action.type === 'CONTRACT_INITIALIZED') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], {
      initialized: true,
      synced: true,
      events: []
    })));
  }

  if (action.type === 'CONTRACT_SYNCING') {
    var contractName = action.contract.contractName;

    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, contractName, (0, _extends15.default)({}, state[contractName], {
      synced: false
    })));
  }

  if (action.type === 'CONTRACT_SYNCED') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.contractName, (0, _extends15.default)({}, state[action.contractName], {
      synced: true
    })));
  }

  if (action.type === 'CONTRACT_SYNC_IND') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.contractName, (0, _extends15.default)({}, state[action.contractName], {
      synced: false
    })));
  }

  /*
   * Contract Functions
   */

  if (action.type === 'GOT_CONTRACT_VAR') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], (0, _defineProperty3.default)({}, action.variable, (0, _extends15.default)({}, state[action.name][action.variable], (0, _defineProperty3.default)({}, action.argsHash, (0, _extends15.default)({}, state[action.name][action.variable][action.argsHash], {
      args: action.args,
      fnIndex: action.fnIndex,
      value: action.value
    })))))));
  }

  if (action.type === 'ERROR_CONTRACT_VAR') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], (0, _defineProperty3.default)({}, action.variable, (0, _extends15.default)({}, state[action.name][action.variable], (0, _defineProperty3.default)({}, action.argsHash, (0, _extends15.default)({}, state[action.name][action.variable][action.argsHash], {
      args: action.args,
      fnIndex: action.fnIndex,
      error: action.error
    })))))));
  }

  /*
   * Contract Events
   */

  if (action.type === 'EVENT_FIRED') {
    return (0, _extends15.default)({}, state, (0, _defineProperty3.default)({}, action.name, (0, _extends15.default)({}, state[action.name], {
      events: [].concat((0, _toConsumableArray3.default)(state[action.name].events), [action.event])
    })));
  }

  return state;
};

exports.default = contractsReducer;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateContractInitialState = generateContractInitialState;

var _getAbi = __webpack_require__(83);

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

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(14);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    return (0, _extends3.default)({}, state, {
      initialized: true
    });
  }
  return state;
};

exports.default = drizzleStatusReducer;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__(49);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends6 = __webpack_require__(14);

var _extends7 = _interopRequireDefault(_extends6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

var transactionsReducer = function transactionsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (action.type === 'TX_BROADCASTED') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, {
            status: 'pending',
            confirmations: []
        }));
    }

    if (action.type === 'TX_CONFIRMAITON') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, (0, _extends7.default)({}, state[action.txHash], {
            confirmations: [].concat((0, _toConsumableArray3.default)(state[action.txHash].confirmations), [action.confirmationReceipt])
        })));
    }

    if (action.type === 'TX_SUCCESSFUL') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, (0, _extends7.default)({}, state[action.txHash], {
            status: 'success',
            receipt: action.receipt
        })));
    }

    if (action.type === 'TX_ERROR') {
        return (0, _extends7.default)({}, state, (0, _defineProperty3.default)({}, action.txHash, (0, _extends7.default)({}, state[action.txHash], {
            status: 'error',
            error: action.error
        })));
    }

    return state;
};

exports.default = transactionsReducer;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(30);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [];

var transactionStackReducer = function transactionStackReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (action.type === 'PUSH_TO_TXSTACK') {
        state.push('');

        return [].concat((0, _toConsumableArray3.default)(state));
    }

    if (action.type === 'POP_FROM_TXSTACK') {
        state.pop();

        return [].concat((0, _toConsumableArray3.default)(state));
    }

    if (action.type === 'TX_BROADCASTED') {
        state[action.stackId] = action.txHash;

        return [].concat((0, _toConsumableArray3.default)(state));
    }

    return state;
};

exports.default = transactionStackReducer;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(14);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  status: ''
};

var web3Reducer = function web3Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === 'WEB3_INITIALIZING') {
    return (0, _extends3.default)({}, state, {
      status: 'initializing'
    });
  }

  if (action.type === 'WEB3_INITIALIZED') {
    return (0, _extends3.default)({}, state, {
      status: 'initialized'
    });
  }

  if (action.type === 'WEB3_FAILED') {
    return (0, _extends3.default)({}, state, {
      status: 'failed'
    });
  }

  if (action.type === 'NETWORK_ID_FETCHED') {
    return (0, _extends3.default)({}, state, {
      networkId: action.networkId
    });
  }

  if (action.type === 'NETWORK_ID_FAILED') {
    return (0, _extends3.default)({}, state, {
      networkId: action.networkId
    });
  }

  return state;
};

exports.default = web3Reducer;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateContractsInitialState;

var _generateContractInitialState = __webpack_require__(82);

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

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drizzleSagas = exports.drizzleReducers = exports.generateStore = exports.generateContractsInitialState = exports.Drizzle = undefined;

var _Drizzle = __webpack_require__(90);

var _Drizzle2 = _interopRequireDefault(_Drizzle);

var _generateStore = __webpack_require__(113);

var _generateStore2 = _interopRequireDefault(_generateStore);

var _generateContractsInitialState = __webpack_require__(88);

var _generateContractsInitialState2 = _interopRequireDefault(_generateContractsInitialState);

var _accountsReducer = __webpack_require__(79);

var _accountsReducer2 = _interopRequireDefault(_accountsReducer);

var _accountBalancesReducer = __webpack_require__(80);

var _accountBalancesReducer2 = _interopRequireDefault(_accountBalancesReducer);

var _contractsReducer = __webpack_require__(81);

var _contractsReducer2 = _interopRequireDefault(_contractsReducer);

var _drizzleStatusReducer = __webpack_require__(84);

var _drizzleStatusReducer2 = _interopRequireDefault(_drizzleStatusReducer);

var _transactionsReducer = __webpack_require__(85);

var _transactionsReducer2 = _interopRequireDefault(_transactionsReducer);

var _transactionStackReducer = __webpack_require__(86);

var _transactionStackReducer2 = _interopRequireDefault(_transactionStackReducer);

var _web3Reducer = __webpack_require__(87);

var _web3Reducer2 = _interopRequireDefault(_web3Reducer);

var _accountsSaga = __webpack_require__(44);

var _accountsSaga2 = _interopRequireDefault(_accountsSaga);

var _accountBalancesSaga = __webpack_require__(27);

var _accountBalancesSaga2 = _interopRequireDefault(_accountBalancesSaga);

var _blocksSaga = __webpack_require__(74);

var _blocksSaga2 = _interopRequireDefault(_blocksSaga);

var _contractsSaga = __webpack_require__(75);

var _contractsSaga2 = _interopRequireDefault(_contractsSaga);

var _drizzleStatusSaga = __webpack_require__(78);

var _drizzleStatusSaga2 = _interopRequireDefault(_drizzleStatusSaga);

var _web3Saga = __webpack_require__(48);

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
exports.generateContractsInitialState = _generateContractsInitialState2.default;
exports.generateStore = _generateStore2.default;
exports.drizzleReducers = drizzleReducers;
exports.drizzleSagas = drizzleSagas;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(50);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(51);

var _createClass3 = _interopRequireDefault(_createClass2);

var _promise = __webpack_require__(93);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load as promise so that async Drizzle initialization can still resolve
var windowPromise = new _promise2.default(function (resolve, reject) {
  window.addEventListener('load', resolve);
});

var Drizzle = function () {
  function Drizzle(options, store) {
    var _this = this;

    (0, _classCallCheck3.default)(this, Drizzle);

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

  (0, _createClass3.default)(Drizzle, [{
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

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(92);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(4);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(3).f });


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(33);
__webpack_require__(61);
__webpack_require__(104);
__webpack_require__(111);
__webpack_require__(112);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var defined = __webpack_require__(35);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(57);
var descriptor = __webpack_require__(17);
var setToStringTag = __webpack_require__(24);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(22);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(99);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(34);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(40);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(102);
var step = __webpack_require__(103);
var Iterators = __webpack_require__(18);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(21);
var global = __webpack_require__(0);
var ctx = __webpack_require__(15);
var classof = __webpack_require__(62);
var $export = __webpack_require__(4);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(20);
var anInstance = __webpack_require__(105);
var forOf = __webpack_require__(106);
var speciesConstructor = __webpack_require__(66);
var task = __webpack_require__(67).set;
var microtask = __webpack_require__(108)();
var newPromiseCapabilityModule = __webpack_require__(41);
var perform = __webpack_require__(68);
var promiseResolve = __webpack_require__(69);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(109)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(24)($Promise, PROMISE);
__webpack_require__(110)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(70)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);
var call = __webpack_require__(63);
var isArrayIter = __webpack_require__(64);
var anObject = __webpack_require__(5);
var toLength = __webpack_require__(36);
var getIterFn = __webpack_require__(65);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(67).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(19)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(6);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(4);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(66);
var promiseResolve = __webpack_require__(69);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(41);
var perform = __webpack_require__(68);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateStore;

var _redux = __webpack_require__(71);

var _reduxSaga = __webpack_require__(25);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _rootSaga = __webpack_require__(114);

var _rootSaga2 = _interopRequireDefault(_rootSaga);

var _reducer = __webpack_require__(150);

var _reducer2 = _interopRequireDefault(_reducer);

var _generateContractsInitialState = __webpack_require__(88);

var _getAbi = __webpack_require__(83);

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

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(10);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = root;

var _effects = __webpack_require__(11);

var _accountsSaga = __webpack_require__(44);

var _accountsSaga2 = _interopRequireDefault(_accountsSaga);

var _accountBalancesSaga = __webpack_require__(27);

var _accountBalancesSaga2 = _interopRequireDefault(_accountBalancesSaga);

var _blocksSaga = __webpack_require__(74);

var _blocksSaga2 = _interopRequireDefault(_blocksSaga);

var _contractsSaga = __webpack_require__(75);

var _contractsSaga2 = _interopRequireDefault(_contractsSaga);

var _drizzleStatusSaga = __webpack_require__(78);

var _drizzleStatusSaga2 = _interopRequireDefault(_drizzleStatusSaga);

var _web3Saga = __webpack_require__(48);

var _web3Saga2 = _interopRequireDefault(_web3Saga);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(root);

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
  }, _marked, this);
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(116);

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


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export takeEvery */
/* unused harmony export takeLatest */
/* unused harmony export throttle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__takeEvery__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__takeLatest__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__throttle__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__takeEvery__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__takeLatest__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__throttle__["a"]; });






var deprecationWarning = function deprecationWarning(helperName) {
  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
};

var takeEvery = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* deprecate */])(__WEBPACK_IMPORTED_MODULE_0__takeEvery__["a" /* default */], /*#__PURE__*/deprecationWarning('takeEvery'));
var takeLatest = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* deprecate */])(__WEBPACK_IMPORTED_MODULE_1__takeLatest__["a" /* default */], /*#__PURE__*/deprecationWarning('takeLatest'));
var throttle = /*#__PURE__*/Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* deprecate */])(__WEBPACK_IMPORTED_MODULE_2__throttle__["a" /* default */], /*#__PURE__*/deprecationWarning('throttle'));



/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeEvery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(43);




function takeEvery(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["q" /* take */])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["i" /* fork */].apply(undefined, [worker].concat(args, [ac])) };
  };

  var action = void 0,
      setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["a" /* default */])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["a" /* END */] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["b" /* qEnd */]] : ['q1', yFork(action)];
    }
  }, 'q1', 'takeEvery(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["c" /* safeName */])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = asap;
/* unused harmony export suspend */
/* unused harmony export flush */
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

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = takeLatest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(43);




function takeLatest(patternOrChannel, worker) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var yTake = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["q" /* take */])(patternOrChannel) };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["i" /* fork */].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yCancel = function yCancel(task) {
    return { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["e" /* cancel */])(task) };
  };

  var task = void 0,
      action = void 0;
  var setTask = function setTask(t) {
    return task = t;
  };
  var setAction = function setAction(ac) {
    return action = ac;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["a" /* default */])({
    q1: function q1() {
      return ['q2', yTake, setAction];
    },
    q2: function q2() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["a" /* END */] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["b" /* qEnd */]] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
    },
    q3: function q3() {
      return ['q1', yFork(action), setTask];
    }
  }, 'q1', 'takeLatest(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["c" /* safeName */])(patternOrChannel) + ', ' + worker.name + ')');
}

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fsmIterator__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buffers__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(13);






function throttle(delayLength, pattern, worker) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var action = void 0,
      channel = void 0;

  var yActionChannel = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["a" /* actionChannel */])(pattern, __WEBPACK_IMPORTED_MODULE_3__buffers__["a" /* buffers */].sliding(1)) };
  var yTake = function yTake() {
    return { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["q" /* take */])(channel) };
  };
  var yFork = function yFork(ac) {
    return { done: false, value: __WEBPACK_IMPORTED_MODULE_1__io__["i" /* fork */].apply(undefined, [worker].concat(args, [ac])) };
  };
  var yDelay = { done: false, value: Object(__WEBPACK_IMPORTED_MODULE_1__io__["d" /* call */])(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* delay */], delayLength) };

  var setAction = function setAction(ac) {
    return action = ac;
  };
  var setChannel = function setChannel(ch) {
    return channel = ch;
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["a" /* default */])({
    q1: function q1() {
      return ['q2', yActionChannel, setChannel];
    },
    q2: function q2() {
      return ['q3', yTake(), setAction];
    },
    q3: function q3() {
      return action === __WEBPACK_IMPORTED_MODULE_2__channel__["a" /* END */] ? [__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["b" /* qEnd */]] : ['q4', yFork(action)];
    },
    q4: function q4() {
      return ['q2', yDelay];
    }
  }, 'q1', 'throttle(' + Object(__WEBPACK_IMPORTED_MODULE_0__fsmIterator__["c" /* safeName */])(pattern) + ', ' + worker.name + ')');
}

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_122__;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(125) });


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(29);
var toObject = __webpack_require__(40);
var IObject = __webpack_require__(59);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(16)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(128);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(15);
var $export = __webpack_require__(4);
var toObject = __webpack_require__(40);
var call = __webpack_require__(63);
var isArrayIter = __webpack_require__(64);
var toLength = __webpack_require__(36);
var createProperty = __webpack_require__(129);
var getIterFn = __webpack_require__(65);

$export($export.S + $export.F * !__webpack_require__(70)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3);
var createDesc = __webpack_require__(17);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(61);
module.exports = __webpack_require__(46).f('iterator');


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
__webpack_require__(54);
__webpack_require__(140);
__webpack_require__(141);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(0);
var has = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(56);
var META = __webpack_require__(135).KEY;
var $fails = __webpack_require__(16);
var shared = __webpack_require__(38);
var setToStringTag = __webpack_require__(24);
var uid = __webpack_require__(23);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(46);
var wksDefine = __webpack_require__(47);
var enumKeys = __webpack_require__(136);
var isArray = __webpack_require__(137);
var anObject = __webpack_require__(5);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(32);
var createDesc = __webpack_require__(17);
var _create = __webpack_require__(57);
var gOPNExt = __webpack_require__(138);
var $GOPD = __webpack_require__(139);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(22);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(77).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(29).f = $propertyIsEnumerable;
  __webpack_require__(45).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(21)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(23)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(9);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(22);
var gOPS = __webpack_require__(45);
var pIE = __webpack_require__(29);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(19);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);
var gOPN = __webpack_require__(77).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(29);
var createDesc = __webpack_require__(17);
var toIObject = __webpack_require__(12);
var toPrimitive = __webpack_require__(32);
var has = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(53);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('asyncIterator');


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47)('observable');


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(143);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(76);

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = __webpack_require__(28);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(50);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(51);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrizzleContract = function () {
  function DrizzleContract(web3Contract, web3, name, store) {
    var events = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var contractArtifact = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    (0, _classCallCheck3.default)(this, DrizzleContract);

    this.abi = web3Contract.options.jsonInterface;
    this.address = web3Contract.options.address;
    this.web3 = web3;
    this.contractName = name;
    this.contractArtifact = contractArtifact;
    this.store = store;

    // Merge web3 contract instance into DrizzleContract instance.
    (0, _assign2.default)(this, web3Contract);

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

        if ((typeof event === "undefined" ? "undefined" : (0, _typeof3.default)(event)) === 'object') {
          store.dispatch({ type: 'LISTEN_FOR_EVENT', contract: this, eventName: event.eventName, eventOptions: event.eventOptions });
        } else {
          store.dispatch({ type: 'LISTEN_FOR_EVENT', contract: this, eventName: event });
        }
      }
    }
  }

  (0, _createClass3.default)(DrizzleContract, [{
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
          if ((typeof argToHash === "undefined" ? "undefined" : (0, _typeof3.default)(argToHash)) === 'object') {
            argToHash = (0, _stringify2.default)(argToHash);
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

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (defaultOptions, newOptions) {
  return (0, _deepmerge2.default)(defaultOptions, newOptions, {
    isMergeableObject: isPlainObject
  });
};

var _deepmerge = __webpack_require__(147);

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isPlainObject = __webpack_require__(148);

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_147__;

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_148__;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_149__;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(71);

var _accountsReducer = __webpack_require__(79);

var _accountsReducer2 = _interopRequireDefault(_accountsReducer);

var _accountBalancesReducer = __webpack_require__(80);

var _accountBalancesReducer2 = _interopRequireDefault(_accountBalancesReducer);

var _contractsReducer = __webpack_require__(81);

var _contractsReducer2 = _interopRequireDefault(_contractsReducer);

var _drizzleStatusReducer = __webpack_require__(84);

var _drizzleStatusReducer2 = _interopRequireDefault(_drizzleStatusReducer);

var _transactionsReducer = __webpack_require__(85);

var _transactionsReducer2 = _interopRequireDefault(_transactionsReducer);

var _transactionStackReducer = __webpack_require__(86);

var _transactionStackReducer2 = _interopRequireDefault(_transactionStackReducer);

var _web3Reducer = __webpack_require__(87);

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkNjM5OTY4ODcwODMwZTcyOGU1YSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvaW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9zYWdhSGVscGVycy9mc21JdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9jaGFubmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9hY2NvdW50cy9hY2NvdW50c1NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy93ZWIzL3dlYjNTYWdhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25vZGUtbGlicy1icm93c2VyL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Jsb2Nrc1NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyYWN0cy9jb250cmFjdHNTYWdhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjY291bnRzL2FjY291bnRzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyYWN0cy9jb250cmFjdHNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZXRBYmkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYjMvd2ViM1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRHJpenpsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9vdFNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9zYWdhSGVscGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9zYWdhSGVscGVycy90YWtlRXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2NoZWR1bGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL3NhZ2FIZWxwZXJzL3Rha2VMYXRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXRoLWJsb2NrLXRyYWNrZXItZXM1XCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9Ecml6emxlQ29udHJhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL3NyYy9kZWZhdWx0T3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVyZ2VPcHRpb25zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRlZXBtZXJnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzLXBsYWluLW9iamVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJnZXRBY2NvdW50QmFsYW5jZXMiLCJhY2NvdW50QmFsYW5jZXNTYWdhIiwiYWN0aW9uIiwiZ2V0QWNjb3VudHNTdGF0ZSIsImFjY291bnRzIiwid2ViMyIsImNvbnNvbGUiLCJlcnJvciIsImkiLCJhY2NvdW50IiwiZXRoIiwiZ2V0QmFsYW5jZSIsImFjY291bnRCYWxhbmNlIiwidHlwZSIsInN0YXRlIiwiZ2V0QWNjb3VudHMiLCJjcmVhdGVBY2NvdW50c1BvbGxDaGFubmVsIiwiY2FsbENyZWF0ZUFjY291bnRzUG9sbENoYW5uZWwiLCJhY2NvdW50c1NhZ2EiLCJpbnRlcnZhbCIsInBlcnNpc3RlZFdlYjMiLCJhY2NvdW50c1BvbGxlciIsInNldEludGVydmFsIiwiZW1pdCIsInVuc3Vic2NyaWJlIiwiY2xlYXJJbnRlcnZhbCIsImFjY291bnRzQ2hhbm5lbCIsImV2ZW50IiwiY2xvc2UiLCJpbml0aWFsaXplV2ViMyIsImdldE5ldHdvcmtJZCIsImNhbGxTZW5kVHgiLCJ3ZWIzU2FnYSIsIldlYjMiLCJyZXF1aXJlIiwib3B0aW9ucyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsImNhY2hlU2VuZFRyYW5zYWN0aW9uIiwidHhPYmplY3QiLCJzdGFja0lkIiwibG9nIiwiZmFsbGJhY2siLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYnNvY2tldFByb3ZpZGVyIiwidXJsIiwibmV0IiwiZ2V0SWQiLCJuZXR3b3JrSWQiLCJjcmVhdGVUeENoYW5uZWwiLCJwZXJzaXN0VHhIYXNoIiwiZXZlbnRDaGFubmVsIiwidHhQcm9taUV2ZW50Iiwic2VuZFRyYW5zYWN0aW9uIiwib24iLCJ0eEhhc2giLCJjb25maXJtYXRpb25OdW1iZXIiLCJyZWNlaXB0IiwiY29uZmlybWF0aW9uUmVjZWlwdCIsIkVORCIsIm9mZiIsInR4Q2hhbm5lbCIsInRha2UiLCJjYWxsQ3JlYXRlQmxvY2tDaGFubmVsIiwiY2FsbENyZWF0ZUJsb2NrUG9sbENoYW5uZWwiLCJwcm9jZXNzQmxvY2tIZWFkZXIiLCJwcm9jZXNzQmxvY2siLCJibG9ja3NTYWdhIiwiQmxvY2tUcmFja2VyIiwiY3JlYXRlQmxvY2tDaGFubmVsIiwiZHJpenpsZSIsInN5bmNBbHdheXMiLCJibG9ja0V2ZW50cyIsInN1YnNjcmliZSIsInJlc3VsdCIsImJsb2NrSGVhZGVyIiwiYmxvY2tDaGFubmVsIiwiY3JlYXRlQmxvY2tQb2xsQ2hhbm5lbCIsImJsb2NrVHJhY2tlciIsInBvbGxpbmdJbnRlcnZhbCIsImJsb2NrIiwic3RhcnQiLCJjYXRjaCIsInN0b3AiLCJibG9ja051bWJlciIsIm51bWJlciIsImdldEJsb2NrIiwiYWxsIiwiY29udHJhY3RzIiwibWFwIiwiY29udHJhY3QiLCJ0eHMiLCJ0cmFuc2FjdGlvbnMiLCJsZW5ndGgiLCJmcm9tIiwiZnJvbUNvbnRyYWN0IiwiZmluZENvbnRyYWN0QnlBZGRyZXNzIiwidG9Mb3dlckNhc2UiLCJ0byIsInRvQ29udHJhY3QiLCJhZGRDb250cmFjdCIsImluc3RhbnRpYXRlV2ViM0NvbnRyYWN0IiwiaW5zdGFudGlhdGVDb250cmFjdCIsImNhbGxMaXN0ZW5Gb3JDb250cmFjdEV2ZW50IiwiY2FsbFNlbmRDb250cmFjdFR4IiwiY2FsbENhbGxDb250cmFjdEZuIiwiY2FsbFN5bmNDb250cmFjdCIsImNvbnRyYWN0c1NhZ2EiLCJjb250cmFjdENvbmZpZyIsImV2ZW50cyIsImxvYWRpbmdDb250cmFjdCIsImNvbnRyYWN0TmFtZSIsImRyaXp6bGVDb250cmFjdCIsIndlYjNDb250cmFjdCIsIm5hbWUiLCJzdG9yZSIsImNvbnRyYWN0QXJ0aWZhY3QiLCJfYWRkQ29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsIm5ldHdvcmtzIiwiYWRkcmVzcyIsImdldFN0YXRlIiwiZGF0YSIsImRlcGxveWVkQnl0ZWNvZGUiLCJjcmVhdGVDb250cmFjdEV2ZW50Q2hhbm5lbCIsImV2ZW50TmFtZSIsImV2ZW50T3B0aW9ucyIsImV2ZW50TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImNvbnRyYWN0RXZlbnRDaGFubmVsIiwic2VuZEFyZ3MiLCJzZW5kIiwiZm5OYW1lIiwiZm5JbmRleCIsImFyZ3MiLCJmaW5hbEFyZyIsImZpbmFsQXJnVGVzdCIsImlzU2VuZE9yQ2FsbE9wdGlvbnMiLCJtZXRob2RzIiwiYXJnc0hhc2giLCJzeW5jIiwiY2FsbEFyZ3MiLCJjYWxsIiwiY2FsbFJlc3VsdCIsImRpc3BhdGNoQXJncyIsInZhcmlhYmxlIiwidmFsdWUiLCJlcnJvckFyZ3MiLCJnZXRDb250cmFjdHNTdGF0ZSIsImNvbnRyYWN0c1N0YXRlIiwiY29udHJhY3RGbnNTdGF0ZSIsImluaXRpYWxpemVkIiwic3luY2VkIiwiaW5pdGlhbGl6ZURyaXp6bGUiLCJkcml6emxlU3RhdHVzU2FnYSIsIndlYjNPcHRpb25zIiwiaXNNZXRhTWFzayIsInBvbGxzIiwiYmxvY2tzIiwiaW5pdGlhbFN0YXRlIiwiYWNjb3VudHNSZWR1Y2VyIiwiYWNjb3VudEJhbGFuY2VzUmVkdWNlciIsImNvbnRyYWN0c1JlZHVjZXIiLCJnZW5lcmF0ZUNvbnRyYWN0SW5pdGlhbFN0YXRlIiwiaTIiLCJpdGVtIiwiY29uc3RhbnQiLCJnZXRBYmkiLCJjb250cmFjdEVudHJ5IiwianNvbkludGVyZmFjZSIsImRyaXp6bGVTdGF0dXNSZWR1Y2VyIiwidHJhbnNhY3Rpb25zUmVkdWNlciIsInN0YXR1cyIsImNvbmZpcm1hdGlvbnMiLCJ0cmFuc2FjdGlvblN0YWNrUmVkdWNlciIsInB1c2giLCJwb3AiLCJ3ZWIzUmVkdWNlciIsImdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlIiwiY29udHJhY3RzSW5pdGlhbFN0YXRlIiwiZHJpenpsZVJlZHVjZXJzIiwiYWNjb3VudEJhbGFuY2VzIiwiZHJpenpsZVN0YXR1cyIsInRyYW5zYWN0aW9uU3RhY2siLCJkcml6emxlU2FnYXMiLCJEcml6emxlIiwiZ2VuZXJhdGVTdG9yZSIsIndpbmRvd1Byb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRyYWN0TGlzdCIsInRoZW4iLCJkaXNwYXRjaCIsImZpbmQiLCJjb21wb3NlRW5oYW5jZXJzIiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwicHJlbG9hZGVkU3RhdGUiLCJzYWdhTWlkZGxld2FyZSIsInJ1biIsInJvb3QiLCJEcml6emxlQ29udHJhY3QiLCJjYWNoZUNhbGwiLCJjYWNoZUNhbGxGdW5jdGlvbiIsImNhY2hlU2VuZCIsImNhY2hlU2VuZEZ1bmN0aW9uIiwiZm4iLCJhcmd1bWVudHMiLCJnZW5lcmF0ZUFyZ3NIYXNoIiwiZnVuY3Rpb25TdGF0ZSIsImhhc2hTdHJpbmciLCJhcmdUb0hhc2giLCJ0b1N0cmluZyIsImhhc2hQaWVjZSIsInV0aWxzIiwic2hhMyIsImRlZmF1bHRPcHRpb25zIiwibmV3T3B0aW9ucyIsImlzTWVyZ2VhYmxlT2JqZWN0IiwiaXNQbGFpbk9iamVjdCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxP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QUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7QUN2TGhCOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FB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RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEs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QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELE9BQU8sUUFBUSxpQ0FBaUM7QUFDcEcsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsQ0FBQztBQUNEO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsU0FBUztBQUNULEdBQUcsRUFBRTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBWTtBQUNmO0FBQ0E7Ozs7Ozs7QUNmQTs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QWdCLG1CQUFBM0wsQ0FBUSxHQUFSLENBQXRCLEM7Ozs7OztBQ0RBLGlEOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTTRMLFVBQVUsNEJBQWdCO0FBQzlCMU4scUNBRDhCO0FBRTlCbUwsbURBRjhCO0FBRzlCOUYsdUNBSDhCO0FBSTlCK0YsK0NBSjhCO0FBSzlCM0YsNkNBTDhCO0FBTTlCNEYscURBTjhCO0FBTzlCcEw7QUFQOEIsQ0FBaEIsQ0FBaEI7O2tCQVVleU4sTyIsImZpbGUiOiJkcml6emxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVkdXgtc2FnYVwiKSwgcmVxdWlyZShcInJlZHV4XCIpLCByZXF1aXJlKFwiZXRoLWJsb2NrLXRyYWNrZXItZXM1XCIpLCByZXF1aXJlKFwiZGVlcG1lcmdlXCIpLCByZXF1aXJlKFwiaXMtcGxhaW4tb2JqZWN0XCIpLCByZXF1aXJlKFwid2ViM1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWR1eC1zYWdhXCIsIFwicmVkdXhcIiwgXCJldGgtYmxvY2stdHJhY2tlci1lczVcIiwgXCJkZWVwbWVyZ2VcIiwgXCJpcy1wbGFpbi1vYmplY3RcIiwgXCJ3ZWIzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRyaXp6bGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpLCByZXF1aXJlKFwicmVkdXhcIiksIHJlcXVpcmUoXCJldGgtYmxvY2stdHJhY2tlci1lczVcIiksIHJlcXVpcmUoXCJkZWVwbWVyZ2VcIiksIHJlcXVpcmUoXCJpcy1wbGFpbi1vYmplY3RcIiksIHJlcXVpcmUoXCJ3ZWIzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkcml6emxlXCJdID0gZmFjdG9yeShyb290W1wicmVkdXgtc2FnYVwiXSwgcm9vdFtcInJlZHV4XCJdLCByb290W1wiZXRoLWJsb2NrLXRyYWNrZXItZXM1XCJdLCByb290W1wiZGVlcG1lcmdlXCJdLCByb290W1wiaXMtcGxhaW4tb2JqZWN0XCJdLCByb290W1wid2ViM1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzcxX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTIyX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTQ3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTQ4X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTQ5X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gODkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ2Mzk5Njg4NzA4MzBlNzI4ZTVhIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuMycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgSVNfV1JBUCA9IHR5cGUgJiAkZXhwb3J0Llc7XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXTtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBrZXksIG93biwgb3V0O1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChvd24gJiYga2V5IGluIGV4cG9ydHMpIGNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24gKEMpIHtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBDKSB7XG4gICAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQygpO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZiAoSVNfUFJPVE8pIHtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZiAodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSkgaGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnQgdmFyIHN5bSA9IGZ1bmN0aW9uIHN5bShpZCkge1xuICByZXR1cm4gJ0BAcmVkdXgtc2FnYS8nICsgaWQ7XG59O1xuXG5leHBvcnQgdmFyIFRBU0sgPSBzeW0oJ1RBU0snKTtcbmV4cG9ydCB2YXIgSEVMUEVSID0gc3ltKCdIRUxQRVInKTtcbmV4cG9ydCB2YXIgTUFUQ0ggPSBzeW0oJ01BVENIJyk7XG5leHBvcnQgdmFyIENBTkNFTCA9IHN5bSgnQ0FOQ0VMX1BST01JU0UnKTtcbmV4cG9ydCB2YXIgU0FHQV9BQ1RJT04gPSBzeW0oJ1NBR0FfQUNUSU9OJyk7XG5leHBvcnQgdmFyIFNFTEZfQ0FOQ0VMTEFUSU9OID0gc3ltKCdTRUxGX0NBTkNFTExBVElPTicpO1xuZXhwb3J0IHZhciBrb25zdCA9IGZ1bmN0aW9uIGtvbnN0KHYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG5leHBvcnQgdmFyIGtUcnVlID0ga29uc3QodHJ1ZSk7XG5leHBvcnQgdmFyIGtGYWxzZSA9IGtvbnN0KGZhbHNlKTtcbmV4cG9ydCB2YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbmV4cG9ydCB2YXIgaWRlbnQgPSBmdW5jdGlvbiBpZGVudCh2KSB7XG4gIHJldHVybiB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrKHZhbHVlLCBwcmVkaWNhdGUsIGVycm9yKSB7XG4gIGlmICghcHJlZGljYXRlKHZhbHVlKSkge1xuICAgIGxvZygnZXJyb3InLCAndW5jYXVnaHQgYXQgY2hlY2snLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgfVxufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZXhwb3J0IGZ1bmN0aW9uIGhhc093bihvYmplY3QsIHByb3BlcnR5KSB7XG4gIHJldHVybiBpcy5ub3RVbmRlZihvYmplY3QpICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG59XG5cbmV4cG9ydCB2YXIgaXMgPSB7XG4gIHVuZGVmOiBmdW5jdGlvbiB1bmRlZih2KSB7XG4gICAgcmV0dXJuIHYgPT09IG51bGwgfHwgdiA9PT0gdW5kZWZpbmVkO1xuICB9LFxuICBub3RVbmRlZjogZnVuY3Rpb24gbm90VW5kZWYodikge1xuICAgIHJldHVybiB2ICE9PSBudWxsICYmIHYgIT09IHVuZGVmaW5lZDtcbiAgfSxcbiAgZnVuYzogZnVuY3Rpb24gZnVuYyhmKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBmID09PSAnZnVuY3Rpb24nO1xuICB9LFxuICBudW1iZXI6IGZ1bmN0aW9uIG51bWJlcihuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJztcbiAgfSxcbiAgc3RyaW5nOiBmdW5jdGlvbiBzdHJpbmcocykge1xuICAgIHJldHVybiB0eXBlb2YgcyA9PT0gJ3N0cmluZyc7XG4gIH0sXG4gIGFycmF5OiBBcnJheS5pc0FycmF5LFxuICBvYmplY3Q6IGZ1bmN0aW9uIG9iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmICFpcy5hcnJheShvYmopICYmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmopKSA9PT0gJ29iamVjdCc7XG4gIH0sXG4gIHByb21pc2U6IGZ1bmN0aW9uIHByb21pc2UocCkge1xuICAgIHJldHVybiBwICYmIGlzLmZ1bmMocC50aGVuKTtcbiAgfSxcbiAgaXRlcmF0b3I6IGZ1bmN0aW9uIGl0ZXJhdG9yKGl0KSB7XG4gICAgcmV0dXJuIGl0ICYmIGlzLmZ1bmMoaXQubmV4dCkgJiYgaXMuZnVuYyhpdC50aHJvdyk7XG4gIH0sXG4gIGl0ZXJhYmxlOiBmdW5jdGlvbiBpdGVyYWJsZShpdCkge1xuICAgIHJldHVybiBpdCAmJiBpcy5mdW5jKFN5bWJvbCkgPyBpcy5mdW5jKGl0W1N5bWJvbC5pdGVyYXRvcl0pIDogaXMuYXJyYXkoaXQpO1xuICB9LFxuICB0YXNrOiBmdW5jdGlvbiB0YXNrKHQpIHtcbiAgICByZXR1cm4gdCAmJiB0W1RBU0tdO1xuICB9LFxuICBvYnNlcnZhYmxlOiBmdW5jdGlvbiBvYnNlcnZhYmxlKG9iKSB7XG4gICAgcmV0dXJuIG9iICYmIGlzLmZ1bmMob2Iuc3Vic2NyaWJlKTtcbiAgfSxcbiAgYnVmZmVyOiBmdW5jdGlvbiBidWZmZXIoYnVmKSB7XG4gICAgcmV0dXJuIGJ1ZiAmJiBpcy5mdW5jKGJ1Zi5pc0VtcHR5KSAmJiBpcy5mdW5jKGJ1Zi50YWtlKSAmJiBpcy5mdW5jKGJ1Zi5wdXQpO1xuICB9LFxuICBwYXR0ZXJuOiBmdW5jdGlvbiBwYXR0ZXJuKHBhdCkge1xuICAgIHJldHVybiBwYXQgJiYgKGlzLnN0cmluZyhwYXQpIHx8ICh0eXBlb2YgcGF0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihwYXQpKSA9PT0gJ3N5bWJvbCcgfHwgaXMuZnVuYyhwYXQpIHx8IGlzLmFycmF5KHBhdCkpO1xuICB9LFxuICBjaGFubmVsOiBmdW5jdGlvbiBjaGFubmVsKGNoKSB7XG4gICAgcmV0dXJuIGNoICYmIGlzLmZ1bmMoY2gudGFrZSkgJiYgaXMuZnVuYyhjaC5jbG9zZSk7XG4gIH0sXG4gIGhlbHBlcjogZnVuY3Rpb24gaGVscGVyKGl0KSB7XG4gICAgcmV0dXJuIGl0ICYmIGl0W0hFTFBFUl07XG4gIH0sXG4gIHN0cmluZ2FibGVGdW5jOiBmdW5jdGlvbiBzdHJpbmdhYmxlRnVuYyhmKSB7XG4gICAgcmV0dXJuIGlzLmZ1bmMoZikgJiYgaGFzT3duKGYsICd0b1N0cmluZycpO1xuICB9XG59O1xuXG5leHBvcnQgdmFyIG9iamVjdCA9IHtcbiAgYXNzaWduOiBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3IgKHZhciBpIGluIHNvdXJjZSkge1xuICAgICAgaWYgKGhhc093bihzb3VyY2UsIGkpKSB7XG4gICAgICAgIHRhcmdldFtpXSA9IHNvdXJjZVtpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoYXJyYXksIGl0ZW0pIHtcbiAgdmFyIGluZGV4ID0gYXJyYXkuaW5kZXhPZihpdGVtKTtcbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG5cbmV4cG9ydCB2YXIgYXJyYXkgPSB7XG4gIGZyb206IGZ1bmN0aW9uIGZyb20ob2JqKSB7XG4gICAgdmFyIGFyciA9IEFycmF5KG9iai5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICBpZiAoaGFzT3duKG9iaiwgaSkpIHtcbiAgICAgICAgYXJyW2ldID0gb2JqW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmZXJyZWQoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgdmFyIGRlZiA9IF9leHRlbmRzKHt9LCBwcm9wcyk7XG4gIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGRlZi5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICBkZWYucmVqZWN0ID0gcmVqZWN0O1xuICB9KTtcbiAgZGVmLnByb21pc2UgPSBwcm9taXNlO1xuICByZXR1cm4gZGVmO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlPZkRlZmZlcmVkKGxlbmd0aCkge1xuICB2YXIgYXJyID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBhcnIucHVzaChkZWZlcnJlZCgpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgdmFyIHZhbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcblxuICB2YXIgdGltZW91dElkID0gdm9pZCAwO1xuICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZSh2YWwpO1xuICAgIH0sIG1zKTtcbiAgfSk7XG5cbiAgcHJvbWlzZVtDQU5DRUxdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgfTtcblxuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vY2tUYXNrKCkge1xuICB2YXIgX3JlZjtcblxuICB2YXIgcnVubmluZyA9IHRydWU7XG4gIHZhciBfcmVzdWx0ID0gdm9pZCAwLFxuICAgICAgX2Vycm9yID0gdm9pZCAwO1xuXG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbVEFTS10gPSB0cnVlLCBfcmVmLmlzUnVubmluZyA9IGZ1bmN0aW9uIGlzUnVubmluZygpIHtcbiAgICByZXR1cm4gcnVubmluZztcbiAgfSwgX3JlZi5yZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoKSB7XG4gICAgcmV0dXJuIF9yZXN1bHQ7XG4gIH0sIF9yZWYuZXJyb3IgPSBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICByZXR1cm4gX2Vycm9yO1xuICB9LCBfcmVmLnNldFJ1bm5pbmcgPSBmdW5jdGlvbiBzZXRSdW5uaW5nKGIpIHtcbiAgICByZXR1cm4gcnVubmluZyA9IGI7XG4gIH0sIF9yZWYuc2V0UmVzdWx0ID0gZnVuY3Rpb24gc2V0UmVzdWx0KHIpIHtcbiAgICByZXR1cm4gX3Jlc3VsdCA9IHI7XG4gIH0sIF9yZWYuc2V0RXJyb3IgPSBmdW5jdGlvbiBzZXRFcnJvcihlKSB7XG4gICAgcmV0dXJuIF9lcnJvciA9IGU7XG4gIH0sIF9yZWY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvSW5jKCkge1xuICB2YXIgc2VlZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiArK3NlZWQ7XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgdWlkID0gYXV0b0luYygpO1xuXG52YXIga1Rocm93ID0gZnVuY3Rpb24ga1Rocm93KGVycikge1xuICB0aHJvdyBlcnI7XG59O1xudmFyIGtSZXR1cm4gPSBmdW5jdGlvbiBrUmV0dXJuKHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogdHJ1ZSB9O1xufTtcbmV4cG9ydCBmdW5jdGlvbiBtYWtlSXRlcmF0b3IobmV4dCkge1xuICB2YXIgdGhybyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoga1Rocm93O1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJyc7XG4gIHZhciBpc0hlbHBlciA9IGFyZ3VtZW50c1szXTtcblxuICB2YXIgaXRlcmF0b3IgPSB7IG5hbWU6IG5hbWUsIG5leHQ6IG5leHQsIHRocm93OiB0aHJvLCByZXR1cm46IGtSZXR1cm4gfTtcblxuICBpZiAoaXNIZWxwZXIpIHtcbiAgICBpdGVyYXRvcltIRUxQRVJdID0gdHJ1ZTtcbiAgfVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuXG4vKipcbiAgUHJpbnQgZXJyb3IgaW4gYSB1c2VmdWwgd2F5IHdoZXRoZXIgaW4gYSBicm93c2VyIGVudmlyb25tZW50XG4gICh3aXRoIGV4cGFuZGFibGUgZXJyb3Igc3RhY2sgdHJhY2VzKSwgb3IgaW4gYSBub2RlLmpzIGVudmlyb25tZW50XG4gICh0ZXh0LW9ubHkgbG9nIG91dHB1dClcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2cobGV2ZWwsIG1lc3NhZ2UpIHtcbiAgdmFyIGVycm9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnJztcblxuICAvKmVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUqL1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmxvZygncmVkdXgtc2FnYSAnICsgbGV2ZWwgKyAnOiAnICsgbWVzc2FnZSArICdcXG4nICsgKGVycm9yICYmIGVycm9yLnN0YWNrIHx8IGVycm9yKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZVtsZXZlbF0obWVzc2FnZSwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGUoZm4sIGRlcHJlY2F0aW9uV2FybmluZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JykgbG9nKCd3YXJuJywgZGVwcmVjYXRpb25XYXJuaW5nKTtcbiAgICByZXR1cm4gZm4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5leHBvcnQgdmFyIHVwZGF0ZUluY2VudGl2ZSA9IGZ1bmN0aW9uIHVwZGF0ZUluY2VudGl2ZShkZXByZWNhdGVkLCBwcmVmZXJyZWQpIHtcbiAgcmV0dXJuIGRlcHJlY2F0ZWQgKyAnIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgJyArIHByZWZlcnJlZCArICcsIHBsZWFzZSB1cGRhdGUgeW91ciBjb2RlJztcbn07XG5cbmV4cG9ydCB2YXIgaW50ZXJuYWxFcnIgPSBmdW5jdGlvbiBpbnRlcm5hbEVycihlcnIpIHtcbiAgcmV0dXJuIG5ldyBFcnJvcignXFxuICByZWR1eC1zYWdhOiBFcnJvciBjaGVja2luZyBob29rcyBkZXRlY3RlZCBhbiBpbmNvbnNpc3RlbnQgc3RhdGUuIFRoaXMgaXMgbGlrZWx5IGEgYnVnXFxuICBpbiByZWR1eC1zYWdhIGNvZGUgYW5kIG5vdCB5b3Vycy4gVGhhbmtzIGZvciByZXBvcnRpbmcgdGhpcyBpbiB0aGUgcHJvamVjdFxcJ3MgZ2l0aHViIHJlcG8uXFxuICBFcnJvcjogJyArIGVyciArICdcXG4nKTtcbn07XG5cbmV4cG9ydCB2YXIgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcgPSBmdW5jdGlvbiBjcmVhdGVTZXRDb250ZXh0V2FybmluZyhjdHgsIHByb3BzKSB7XG4gIHJldHVybiAoY3R4ID8gY3R4ICsgJy4nIDogJycpICsgJ3NldENvbnRleHQocHJvcHMpOiBhcmd1bWVudCAnICsgcHJvcHMgKyAnIGlzIG5vdCBhIHBsYWluIG9iamVjdCc7XG59O1xuXG5leHBvcnQgdmFyIHdyYXBTYWdhRGlzcGF0Y2ggPSBmdW5jdGlvbiB3cmFwU2FnYURpc3BhdGNoKGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhY3Rpb24sIFNBR0FfQUNUSU9OLCB7IHZhbHVlOiB0cnVlIH0pKTtcbiAgfTtcbn07XG5cbmV4cG9ydCB2YXIgY2xvbmVhYmxlR2VuZXJhdG9yID0gZnVuY3Rpb24gY2xvbmVhYmxlR2VuZXJhdG9yKGdlbmVyYXRvckZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgaGlzdG9yeSA9IFtdO1xuICAgIHZhciBnZW4gPSBnZW5lcmF0b3JGdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uIG5leHQoYXJnKSB7XG4gICAgICAgIGhpc3RvcnkucHVzaChhcmcpO1xuICAgICAgICByZXR1cm4gZ2VuLm5leHQoYXJnKTtcbiAgICAgIH0sXG4gICAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICAgIHZhciBjbG9uZWRHZW4gPSBjbG9uZWFibGVHZW5lcmF0b3IoZ2VuZXJhdG9yRnVuYykuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgaGlzdG9yeS5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICByZXR1cm4gY2xvbmVkR2VuLm5leHQoYXJnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbG9uZWRHZW47XG4gICAgICB9LFxuICAgICAgcmV0dXJuOiBmdW5jdGlvbiBfcmV0dXJuKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZW4ucmV0dXJuKHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICB0aHJvdzogZnVuY3Rpb24gX3Rocm93KGV4Y2VwdGlvbikge1xuICAgICAgICByZXR1cm4gZ2VuLnRocm93KGV4Y2VwdGlvbik7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjVfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXNhZ2FcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgc3ltLCBpcywgaWRlbnQsIGNoZWNrLCBkZXByZWNhdGUsIHVwZGF0ZUluY2VudGl2ZSwgY3JlYXRlU2V0Q29udGV4dFdhcm5pbmcsIFNFTEZfQ0FOQ0VMTEFUSU9OIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyB0YWtlRXZlcnlIZWxwZXIsIHRha2VMYXRlc3RIZWxwZXIsIHRocm90dGxlSGVscGVyIH0gZnJvbSAnLi9zYWdhSGVscGVycyc7XG5cbnZhciBJTyA9IHN5bSgnSU8nKTtcbnZhciBUQUtFID0gJ1RBS0UnO1xudmFyIFBVVCA9ICdQVVQnO1xudmFyIEFMTCA9ICdBTEwnO1xudmFyIFJBQ0UgPSAnUkFDRSc7XG52YXIgQ0FMTCA9ICdDQUxMJztcbnZhciBDUFMgPSAnQ1BTJztcbnZhciBGT1JLID0gJ0ZPUksnO1xudmFyIEpPSU4gPSAnSk9JTic7XG52YXIgQ0FOQ0VMID0gJ0NBTkNFTCc7XG52YXIgU0VMRUNUID0gJ1NFTEVDVCc7XG52YXIgQUNUSU9OX0NIQU5ORUwgPSAnQUNUSU9OX0NIQU5ORUwnO1xudmFyIENBTkNFTExFRCA9ICdDQU5DRUxMRUQnO1xudmFyIEZMVVNIID0gJ0ZMVVNIJztcbnZhciBHRVRfQ09OVEVYVCA9ICdHRVRfQ09OVEVYVCc7XG52YXIgU0VUX0NPTlRFWFQgPSAnU0VUX0NPTlRFWFQnO1xuXG52YXIgVEVTVF9ISU5UID0gJ1xcbihISU5UOiBpZiB5b3UgYXJlIGdldHRpbmcgdGhpcyBlcnJvcnMgaW4gdGVzdHMsIGNvbnNpZGVyIHVzaW5nIGNyZWF0ZU1vY2tUYXNrIGZyb20gcmVkdXgtc2FnYS91dGlscyknO1xuXG52YXIgZWZmZWN0ID0gZnVuY3Rpb24gZWZmZWN0KHR5cGUsIHBheWxvYWQpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltJT10gPSB0cnVlLCBfcmVmW3R5cGVdID0gcGF5bG9hZCwgX3JlZjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWtlKCkge1xuICB2YXIgcGF0dGVybk9yQ2hhbm5lbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyonO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2hlY2soYXJndW1lbnRzWzBdLCBpcy5ub3RVbmRlZiwgJ3Rha2UocGF0dGVybk9yQ2hhbm5lbCk6IHBhdHRlcm5PckNoYW5uZWwgaXMgdW5kZWZpbmVkJyk7XG4gIH1cbiAgaWYgKGlzLnBhdHRlcm4ocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gZWZmZWN0KFRBS0UsIHsgcGF0dGVybjogcGF0dGVybk9yQ2hhbm5lbCB9KTtcbiAgfVxuICBpZiAoaXMuY2hhbm5lbChwYXR0ZXJuT3JDaGFubmVsKSkge1xuICAgIHJldHVybiBlZmZlY3QoVEFLRSwgeyBjaGFubmVsOiBwYXR0ZXJuT3JDaGFubmVsIH0pO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcigndGFrZShwYXR0ZXJuT3JDaGFubmVsKTogYXJndW1lbnQgJyArIFN0cmluZyhwYXR0ZXJuT3JDaGFubmVsKSArICcgaXMgbm90IHZhbGlkIGNoYW5uZWwgb3IgYSB2YWxpZCBwYXR0ZXJuJyk7XG59XG5cbnRha2UubWF5YmUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZmYgPSB0YWtlLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgZWZmW1RBS0VdLm1heWJlID0gdHJ1ZTtcbiAgcmV0dXJuIGVmZjtcbn07XG5cbmV4cG9ydCB2YXIgdGFrZW0gPSAvKiNfX1BVUkVfXyovZGVwcmVjYXRlKHRha2UubWF5YmUsIC8qI19fUFVSRV9fKi91cGRhdGVJbmNlbnRpdmUoJ3Rha2VtJywgJ3Rha2UubWF5YmUnKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXQoY2hhbm5lbCwgYWN0aW9uKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGNoZWNrKGNoYW5uZWwsIGlzLm5vdFVuZGVmLCAncHV0KGNoYW5uZWwsIGFjdGlvbik6IGFyZ3VtZW50IGNoYW5uZWwgaXMgdW5kZWZpbmVkJyk7XG4gICAgY2hlY2soY2hhbm5lbCwgaXMuY2hhbm5lbCwgJ3B1dChjaGFubmVsLCBhY3Rpb24pOiBhcmd1bWVudCAnICsgY2hhbm5lbCArICcgaXMgbm90IGEgdmFsaWQgY2hhbm5lbCcpO1xuICAgIGNoZWNrKGFjdGlvbiwgaXMubm90VW5kZWYsICdwdXQoY2hhbm5lbCwgYWN0aW9uKTogYXJndW1lbnQgYWN0aW9uIGlzIHVuZGVmaW5lZCcpO1xuICB9IGVsc2Uge1xuICAgIGNoZWNrKGNoYW5uZWwsIGlzLm5vdFVuZGVmLCAncHV0KGFjdGlvbik6IGFyZ3VtZW50IGFjdGlvbiBpcyB1bmRlZmluZWQnKTtcbiAgICBhY3Rpb24gPSBjaGFubmVsO1xuICAgIGNoYW5uZWwgPSBudWxsO1xuICB9XG4gIHJldHVybiBlZmZlY3QoUFVULCB7IGNoYW5uZWw6IGNoYW5uZWwsIGFjdGlvbjogYWN0aW9uIH0pO1xufVxuXG5wdXQucmVzb2x2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVmZiA9IHB1dC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIGVmZltQVVRdLnJlc29sdmUgPSB0cnVlO1xuICByZXR1cm4gZWZmO1xufTtcblxucHV0LnN5bmMgPSBkZXByZWNhdGUocHV0LnJlc29sdmUsIHVwZGF0ZUluY2VudGl2ZSgncHV0LnN5bmMnLCAncHV0LnJlc29sdmUnKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGwoZWZmZWN0cykge1xuICByZXR1cm4gZWZmZWN0KEFMTCwgZWZmZWN0cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYWNlKGVmZmVjdHMpIHtcbiAgcmV0dXJuIGVmZmVjdChSQUNFLCBlZmZlY3RzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rm5DYWxsRGVzYyhtZXRoLCBmbiwgYXJncykge1xuICBjaGVjayhmbiwgaXMubm90VW5kZWYsIG1ldGggKyAnOiBhcmd1bWVudCBmbiBpcyB1bmRlZmluZWQnKTtcblxuICB2YXIgY29udGV4dCA9IG51bGw7XG4gIGlmIChpcy5hcnJheShmbikpIHtcbiAgICB2YXIgX2ZuID0gZm47XG4gICAgY29udGV4dCA9IF9mblswXTtcbiAgICBmbiA9IF9mblsxXTtcbiAgfSBlbHNlIGlmIChmbi5mbikge1xuICAgIHZhciBfZm4yID0gZm47XG4gICAgY29udGV4dCA9IF9mbjIuY29udGV4dDtcbiAgICBmbiA9IF9mbjIuZm47XG4gIH1cbiAgaWYgKGNvbnRleHQgJiYgaXMuc3RyaW5nKGZuKSAmJiBpcy5mdW5jKGNvbnRleHRbZm5dKSkge1xuICAgIGZuID0gY29udGV4dFtmbl07XG4gIH1cbiAgY2hlY2soZm4sIGlzLmZ1bmMsIG1ldGggKyAnOiBhcmd1bWVudCAnICsgZm4gKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cbiAgcmV0dXJuIHsgY29udGV4dDogY29udGV4dCwgZm46IGZuLCBhcmdzOiBhcmdzIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsKGZuKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGVmZmVjdChDQUxMLCBnZXRGbkNhbGxEZXNjKCdjYWxsJywgZm4sIGFyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KGNvbnRleHQsIGZuKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBbXTtcblxuICByZXR1cm4gZWZmZWN0KENBTEwsIGdldEZuQ2FsbERlc2MoJ2FwcGx5JywgeyBjb250ZXh0OiBjb250ZXh0LCBmbjogZm4gfSwgYXJncykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3BzKGZuKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIGVmZmVjdChDUFMsIGdldEZuQ2FsbERlc2MoJ2NwcycsIGZuLCBhcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JrKGZuKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zID4gMSA/IF9sZW4zIC0gMSA6IDApLCBfa2V5MyA9IDE7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIGVmZmVjdChGT1JLLCBnZXRGbkNhbGxEZXNjKCdmb3JrJywgZm4sIGFyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwYXduKGZuKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0IC0gMV0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgdmFyIGVmZiA9IGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbZm5dLmNvbmNhdChhcmdzKSk7XG4gIGVmZltGT1JLXS5kZXRhY2hlZCA9IHRydWU7XG4gIHJldHVybiBlZmY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBqb2luKCkge1xuICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIHRhc2tzID0gQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICB0YXNrc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICB9XG5cbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gYWxsKHRhc2tzLm1hcChmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGpvaW4odCk7XG4gICAgfSkpO1xuICB9XG4gIHZhciB0YXNrID0gdGFza3NbMF07XG4gIGNoZWNrKHRhc2ssIGlzLm5vdFVuZGVmLCAnam9pbih0YXNrKTogYXJndW1lbnQgdGFzayBpcyB1bmRlZmluZWQnKTtcbiAgY2hlY2sodGFzaywgaXMudGFzaywgJ2pvaW4odGFzayk6IGFyZ3VtZW50ICcgKyB0YXNrICsgJyBpcyBub3QgYSB2YWxpZCBUYXNrIG9iamVjdCAnICsgVEVTVF9ISU5UKTtcbiAgcmV0dXJuIGVmZmVjdChKT0lOLCB0YXNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCB0YXNrcyA9IEFycmF5KF9sZW42KSwgX2tleTYgPSAwOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgdGFza3NbX2tleTZdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgfVxuXG4gIGlmICh0YXNrcy5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIGFsbCh0YXNrcy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBjYW5jZWwodCk7XG4gICAgfSkpO1xuICB9XG4gIHZhciB0YXNrID0gdGFza3NbMF07XG4gIGlmICh0YXNrcy5sZW5ndGggPT09IDEpIHtcbiAgICBjaGVjayh0YXNrLCBpcy5ub3RVbmRlZiwgJ2NhbmNlbCh0YXNrKTogYXJndW1lbnQgdGFzayBpcyB1bmRlZmluZWQnKTtcbiAgICBjaGVjayh0YXNrLCBpcy50YXNrLCAnY2FuY2VsKHRhc2spOiBhcmd1bWVudCAnICsgdGFzayArICcgaXMgbm90IGEgdmFsaWQgVGFzayBvYmplY3QgJyArIFRFU1RfSElOVCk7XG4gIH1cbiAgcmV0dXJuIGVmZmVjdChDQU5DRUwsIHRhc2sgfHwgU0VMRl9DQU5DRUxMQVRJT04pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0KHNlbGVjdG9yKSB7XG4gIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW43ID4gMSA/IF9sZW43IC0gMSA6IDApLCBfa2V5NyA9IDE7IF9rZXk3IDwgX2xlbjc7IF9rZXk3KyspIHtcbiAgICBhcmdzW19rZXk3IC0gMV0gPSBhcmd1bWVudHNbX2tleTddO1xuICB9XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBzZWxlY3RvciA9IGlkZW50O1xuICB9IGVsc2Uge1xuICAgIGNoZWNrKHNlbGVjdG9yLCBpcy5ub3RVbmRlZiwgJ3NlbGVjdChzZWxlY3RvcixbLi4uXSk6IGFyZ3VtZW50IHNlbGVjdG9yIGlzIHVuZGVmaW5lZCcpO1xuICAgIGNoZWNrKHNlbGVjdG9yLCBpcy5mdW5jLCAnc2VsZWN0KHNlbGVjdG9yLFsuLi5dKTogYXJndW1lbnQgJyArIHNlbGVjdG9yICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9XG4gIHJldHVybiBlZmZlY3QoU0VMRUNULCB7IHNlbGVjdG9yOiBzZWxlY3RvciwgYXJnczogYXJncyB9KTtcbn1cblxuLyoqXG4gIGNoYW5uZWwocGF0dGVybiwgW2J1ZmZlcl0pICAgID0+IGNyZWF0ZXMgYW4gZXZlbnQgY2hhbm5lbCBmb3Igc3RvcmUgYWN0aW9uc1xuKiovXG5leHBvcnQgZnVuY3Rpb24gYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpIHtcbiAgY2hlY2socGF0dGVybiwgaXMubm90VW5kZWYsICdhY3Rpb25DaGFubmVsKHBhdHRlcm4sLi4uKTogYXJndW1lbnQgcGF0dGVybiBpcyB1bmRlZmluZWQnKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgY2hlY2soYnVmZmVyLCBpcy5ub3RVbmRlZiwgJ2FjdGlvbkNoYW5uZWwocGF0dGVybiwgYnVmZmVyKTogYXJndW1lbnQgYnVmZmVyIGlzIHVuZGVmaW5lZCcpO1xuICAgIGNoZWNrKGJ1ZmZlciwgaXMuYnVmZmVyLCAnYWN0aW9uQ2hhbm5lbChwYXR0ZXJuLCBidWZmZXIpOiBhcmd1bWVudCAnICsgYnVmZmVyICsgJyBpcyBub3QgYSB2YWxpZCBidWZmZXInKTtcbiAgfVxuICByZXR1cm4gZWZmZWN0KEFDVElPTl9DSEFOTkVMLCB7IHBhdHRlcm46IHBhdHRlcm4sIGJ1ZmZlcjogYnVmZmVyIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsbGVkKCkge1xuICByZXR1cm4gZWZmZWN0KENBTkNFTExFRCwge30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmx1c2goY2hhbm5lbCkge1xuICBjaGVjayhjaGFubmVsLCBpcy5jaGFubmVsLCAnZmx1c2goY2hhbm5lbCk6IGFyZ3VtZW50ICcgKyBjaGFubmVsICsgJyBpcyBub3QgdmFsaWQgY2hhbm5lbCcpO1xuICByZXR1cm4gZWZmZWN0KEZMVVNILCBjaGFubmVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHQocHJvcCkge1xuICBjaGVjayhwcm9wLCBpcy5zdHJpbmcsICdnZXRDb250ZXh0KHByb3ApOiBhcmd1bWVudCAnICsgcHJvcCArICcgaXMgbm90IGEgc3RyaW5nJyk7XG4gIHJldHVybiBlZmZlY3QoR0VUX0NPTlRFWFQsIHByb3ApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29udGV4dChwcm9wcykge1xuICBjaGVjayhwcm9wcywgaXMub2JqZWN0LCBjcmVhdGVTZXRDb250ZXh0V2FybmluZyhudWxsLCBwcm9wcykpO1xuICByZXR1cm4gZWZmZWN0KFNFVF9DT05URVhULCBwcm9wcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWtlRXZlcnkocGF0dGVybk9yQ2hhbm5lbCwgd29ya2VyKSB7XG4gIGZvciAodmFyIF9sZW44ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW44ID4gMiA/IF9sZW44IC0gMiA6IDApLCBfa2V5OCA9IDI7IF9rZXk4IDwgX2xlbjg7IF9rZXk4KyspIHtcbiAgICBhcmdzW19rZXk4IC0gMl0gPSBhcmd1bWVudHNbX2tleThdO1xuICB9XG5cbiAgcmV0dXJuIGZvcmsuYXBwbHkodW5kZWZpbmVkLCBbdGFrZUV2ZXJ5SGVscGVyLCBwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXJdLmNvbmNhdChhcmdzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWtlTGF0ZXN0KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuOSA+IDIgPyBfbGVuOSAtIDIgOiAwKSwgX2tleTkgPSAyOyBfa2V5OSA8IF9sZW45OyBfa2V5OSsrKSB7XG4gICAgYXJnc1tfa2V5OSAtIDJdID0gYXJndW1lbnRzW19rZXk5XTtcbiAgfVxuXG4gIHJldHVybiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3Rha2VMYXRlc3RIZWxwZXIsIHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlKG1zLCBwYXR0ZXJuLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbjEwID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4xMCA+IDMgPyBfbGVuMTAgLSAzIDogMCksIF9rZXkxMCA9IDM7IF9rZXkxMCA8IF9sZW4xMDsgX2tleTEwKyspIHtcbiAgICBhcmdzW19rZXkxMCAtIDNdID0gYXJndW1lbnRzW19rZXkxMF07XG4gIH1cblxuICByZXR1cm4gZm9yay5hcHBseSh1bmRlZmluZWQsIFt0aHJvdHRsZUhlbHBlciwgbXMsIHBhdHRlcm4sIHdvcmtlcl0uY29uY2F0KGFyZ3MpKTtcbn1cblxudmFyIGNyZWF0ZUFzRWZmZWN0VHlwZSA9IGZ1bmN0aW9uIGNyZWF0ZUFzRWZmZWN0VHlwZSh0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZWZmZWN0KSB7XG4gICAgcmV0dXJuIGVmZmVjdCAmJiBlZmZlY3RbSU9dICYmIGVmZmVjdFt0eXBlXTtcbiAgfTtcbn07XG5cbmV4cG9ydCB2YXIgYXNFZmZlY3QgPSB7XG4gIHRha2U6IGNyZWF0ZUFzRWZmZWN0VHlwZShUQUtFKSxcbiAgcHV0OiBjcmVhdGVBc0VmZmVjdFR5cGUoUFVUKSxcbiAgYWxsOiBjcmVhdGVBc0VmZmVjdFR5cGUoQUxMKSxcbiAgcmFjZTogY3JlYXRlQXNFZmZlY3RUeXBlKFJBQ0UpLFxuICBjYWxsOiBjcmVhdGVBc0VmZmVjdFR5cGUoQ0FMTCksXG4gIGNwczogY3JlYXRlQXNFZmZlY3RUeXBlKENQUyksXG4gIGZvcms6IGNyZWF0ZUFzRWZmZWN0VHlwZShGT1JLKSxcbiAgam9pbjogY3JlYXRlQXNFZmZlY3RUeXBlKEpPSU4pLFxuICBjYW5jZWw6IGNyZWF0ZUFzRWZmZWN0VHlwZShDQU5DRUwpLFxuICBzZWxlY3Q6IGNyZWF0ZUFzRWZmZWN0VHlwZShTRUxFQ1QpLFxuICBhY3Rpb25DaGFubmVsOiBjcmVhdGVBc0VmZmVjdFR5cGUoQUNUSU9OX0NIQU5ORUwpLFxuICBjYW5jZWxsZWQ6IGNyZWF0ZUFzRWZmZWN0VHlwZShDQU5DRUxMRUQpLFxuICBmbHVzaDogY3JlYXRlQXNFZmZlY3RUeXBlKEZMVVNIKSxcbiAgZ2V0Q29udGV4dDogY3JlYXRlQXNFZmZlY3RUeXBlKEdFVF9DT05URVhUKSxcbiAgc2V0Q29udGV4dDogY3JlYXRlQXNFZmZlY3RUeXBlKFNFVF9DT05URVhUKVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL2lvLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRBY2NvdW50QmFsYW5jZXMoYWN0aW9uKSB7XG4gIGNvbnN0IGFjY291bnRzID0geWllbGQgc2VsZWN0KGdldEFjY291bnRzU3RhdGUpXG4gIGNvbnN0IHdlYjMgPSBhY3Rpb24ud2ViM1xuXG4gIGlmICghYWNjb3VudHMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBhY2NvdW50cyBmb3VuZCB3aGlsZSBhdHRlbXB0aW5nIHRvIGZldGNoIGJhbGFuY2VzIScpXG4gIH1cblxuICB0cnkge1xuICAgIGZvciAodmFyIGkgaW4gYWNjb3VudHMpIHtcbiAgICAgIHZhciBhY2NvdW50ID0gYWNjb3VudHNbaV1cbiAgICAgIHZhciBhY2NvdW50QmFsYW5jZSA9IHlpZWxkIGNhbGwod2ViMy5ldGguZ2V0QmFsYW5jZSwgYWNjb3VudClcblxuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQUNDT1VOVF9CQUxBTkNFX0ZFVENIRUQnLCBhY2NvdW50LCBhY2NvdW50QmFsYW5jZX0pXG4gICAgfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRfQkFMQU5DRV9GQUlMRUQnLCBlcnJvcn0pXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYWNjb3VudCAnICsgYWNjb3VudCArICcgYmFsYW5jZTonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIH1cblxuICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UX0JBTEFOQ0VTX0ZFVENIRUQnfSlcbn1cblxuY29uc3QgZ2V0QWNjb3VudHNTdGF0ZSA9IChzdGF0ZSkgPT4gc3RhdGUuYWNjb3VudHNcblxuZnVuY3Rpb24qIGFjY291bnRCYWxhbmNlc1NhZ2EoKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoJ0FDQ09VTlRfQkFMQU5DRVNfRkVUQ0hJTkcnLCBnZXRBY2NvdW50QmFsYW5jZXMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnRCYWxhbmNlc1NhZ2E7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzLCBtYWtlSXRlcmF0b3IgfSBmcm9tICcuLi91dGlscyc7XG5cbnZhciBkb25lID0geyBkb25lOiB0cnVlLCB2YWx1ZTogdW5kZWZpbmVkIH07XG5leHBvcnQgdmFyIHFFbmQgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVOYW1lKHBhdHRlcm5PckNoYW5uZWwpIHtcbiAgaWYgKGlzLmNoYW5uZWwocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gJ2NoYW5uZWwnO1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybk9yQ2hhbm5lbCkpIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhdHRlcm5PckNoYW5uZWwubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhlbnRyeSk7XG4gICAgfSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBTdHJpbmcocGF0dGVybk9yQ2hhbm5lbCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnNtSXRlcmF0b3IoZnNtLCBxMCkge1xuICB2YXIgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ2l0ZXJhdG9yJztcblxuICB2YXIgdXBkYXRlU3RhdGUgPSB2b2lkIDAsXG4gICAgICBxTmV4dCA9IHEwO1xuXG4gIGZ1bmN0aW9uIG5leHQoYXJnLCBlcnJvcikge1xuICAgIGlmIChxTmV4dCA9PT0gcUVuZCkge1xuICAgICAgcmV0dXJuIGRvbmU7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBxTmV4dCA9IHFFbmQ7XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlU3RhdGUgJiYgdXBkYXRlU3RhdGUoYXJnKTtcblxuICAgICAgdmFyIF9mc20kcU5leHQgPSBmc21bcU5leHRdKCksXG4gICAgICAgICAgcSA9IF9mc20kcU5leHRbMF0sXG4gICAgICAgICAgb3V0cHV0ID0gX2ZzbSRxTmV4dFsxXSxcbiAgICAgICAgICBfdXBkYXRlU3RhdGUgPSBfZnNtJHFOZXh0WzJdO1xuXG4gICAgICBxTmV4dCA9IHE7XG4gICAgICB1cGRhdGVTdGF0ZSA9IF91cGRhdGVTdGF0ZTtcbiAgICAgIHJldHVybiBxTmV4dCA9PT0gcUVuZCA/IGRvbmUgOiBvdXRwdXQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ha2VJdGVyYXRvcihuZXh0LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChudWxsLCBlcnJvcik7XG4gIH0sIG5hbWUsIHRydWUpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvZnNtSXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCB7IGlzLCBjaGVjaywgcmVtb3ZlLCBNQVRDSCwgaW50ZXJuYWxFcnIsIFNBR0FfQUNUSU9OIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBidWZmZXJzIH0gZnJvbSAnLi9idWZmZXJzJztcbmltcG9ydCB7IGFzYXAgfSBmcm9tICcuL3NjaGVkdWxlcic7XG5cbnZhciBDSEFOTkVMX0VORF9UWVBFID0gJ0BAcmVkdXgtc2FnYS9DSEFOTkVMX0VORCc7XG5leHBvcnQgdmFyIEVORCA9IHsgdHlwZTogQ0hBTk5FTF9FTkRfVFlQRSB9O1xuZXhwb3J0IHZhciBpc0VuZCA9IGZ1bmN0aW9uIGlzRW5kKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS50eXBlID09PSBDSEFOTkVMX0VORF9UWVBFO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXR0ZXIoKSB7XG4gIHZhciBzdWJzY3JpYmVycyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShzdWIpIHtcbiAgICBzdWJzY3JpYmVycy5wdXNoKHN1Yik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZW1vdmUoc3Vic2NyaWJlcnMsIHN1Yik7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQoaXRlbSkge1xuICAgIHZhciBhcnIgPSBzdWJzY3JpYmVycy5zbGljZSgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGFycltpXShpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGVtaXQ6IGVtaXRcbiAgfTtcbn1cblxuZXhwb3J0IHZhciBJTlZBTElEX0JVRkZFUiA9ICdpbnZhbGlkIGJ1ZmZlciBwYXNzZWQgdG8gY2hhbm5lbCBmYWN0b3J5IGZ1bmN0aW9uJztcbmV4cG9ydCB2YXIgVU5ERUZJTkVEX0lOUFVUX0VSUk9SID0gJ1NhZ2Egd2FzIHByb3ZpZGVkIHdpdGggYW4gdW5kZWZpbmVkIGFjdGlvbic7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFVOREVGSU5FRF9JTlBVVF9FUlJPUiArPSAnXFxuSGludHM6XFxuICAgIC0gY2hlY2sgdGhhdCB5b3VyIEFjdGlvbiBDcmVhdG9yIHJldHVybnMgYSBub24tdW5kZWZpbmVkIHZhbHVlXFxuICAgIC0gaWYgdGhlIFNhZ2Egd2FzIHN0YXJ0ZWQgdXNpbmcgcnVuU2FnYSwgY2hlY2sgdGhhdCB5b3VyIHN1YnNjcmliZSBzb3VyY2UgcHJvdmlkZXMgdGhlIGFjdGlvbiB0byBpdHMgbGlzdGVuZXJzXFxuICAnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbm5lbCgpIHtcbiAgdmFyIGJ1ZmZlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogYnVmZmVycy5maXhlZCgpO1xuXG4gIHZhciBjbG9zZWQgPSBmYWxzZTtcbiAgdmFyIHRha2VycyA9IFtdO1xuXG4gIGNoZWNrKGJ1ZmZlciwgaXMuYnVmZmVyLCBJTlZBTElEX0JVRkZFUik7XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKSB7XG4gICAgaWYgKGNsb3NlZCAmJiB0YWtlcnMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycignQ2Fubm90IGhhdmUgYSBjbG9zZWQgY2hhbm5lbCB3aXRoIHBlbmRpbmcgdGFrZXJzJyk7XG4gICAgfVxuICAgIGlmICh0YWtlcnMubGVuZ3RoICYmICFidWZmZXIuaXNFbXB0eSgpKSB7XG4gICAgICB0aHJvdyBpbnRlcm5hbEVycignQ2Fubm90IGhhdmUgcGVuZGluZyB0YWtlcnMgd2l0aCBub24gZW1wdHkgYnVmZmVyJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHV0KGlucHV0KSB7XG4gICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICBjaGVjayhpbnB1dCwgaXMubm90VW5kZWYsIFVOREVGSU5FRF9JTlBVVF9FUlJPUik7XG4gICAgaWYgKGNsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRha2Vycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBidWZmZXIucHV0KGlucHV0KTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjYiA9IHRha2Vyc1tpXTtcbiAgICAgIGlmICghY2JbTUFUQ0hdIHx8IGNiW01BVENIXShpbnB1dCkpIHtcbiAgICAgICAgdGFrZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIGNiKGlucHV0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0YWtlKGNiKSB7XG4gICAgY2hlY2tGb3JiaWRkZW5TdGF0ZXMoKTtcbiAgICBjaGVjayhjYiwgaXMuZnVuYywgXCJjaGFubmVsLnRha2UncyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XG5cbiAgICBpZiAoY2xvc2VkICYmIGJ1ZmZlci5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKEVORCk7XG4gICAgfSBlbHNlIGlmICghYnVmZmVyLmlzRW1wdHkoKSkge1xuICAgICAgY2IoYnVmZmVyLnRha2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRha2Vycy5wdXNoKGNiKTtcbiAgICAgIGNiLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZSh0YWtlcnMsIGNiKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goY2IpIHtcbiAgICBjaGVja0ZvcmJpZGRlblN0YXRlcygpOyAvLyBUT0RPOiBjaGVjayBpZiBzb21lIG5ldyBzdGF0ZSBzaG91bGQgYmUgZm9yYmlkZGVuIG5vd1xuICAgIGNoZWNrKGNiLCBpcy5mdW5jLCBcImNoYW5uZWwuZmx1c2gnIGNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICBpZiAoY2xvc2VkICYmIGJ1ZmZlci5pc0VtcHR5KCkpIHtcbiAgICAgIGNiKEVORCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNiKGJ1ZmZlci5mbHVzaCgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGNoZWNrRm9yYmlkZGVuU3RhdGVzKCk7XG4gICAgaWYgKCFjbG9zZWQpIHtcbiAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICBpZiAodGFrZXJzLmxlbmd0aCkge1xuICAgICAgICB2YXIgYXJyID0gdGFrZXJzO1xuICAgICAgICB0YWtlcnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGFycltpXShFTkQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YWtlOiB0YWtlLFxuICAgIHB1dDogcHV0LFxuICAgIGZsdXNoOiBmbHVzaCxcbiAgICBjbG9zZTogY2xvc2UsXG4gICAgZ2V0IF9fdGFrZXJzX18oKSB7XG4gICAgICByZXR1cm4gdGFrZXJzO1xuICAgIH0sXG4gICAgZ2V0IF9fY2xvc2VkX18oKSB7XG4gICAgICByZXR1cm4gY2xvc2VkO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50Q2hhbm5lbChzdWJzY3JpYmUpIHtcbiAgdmFyIGJ1ZmZlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogYnVmZmVycy5ub25lKCk7XG4gIHZhciBtYXRjaGVyID0gYXJndW1lbnRzWzJdO1xuXG4gIC8qKlxuICAgIHNob3VsZCBiZSBpZih0eXBlb2YgbWF0Y2hlciAhPT0gdW5kZWZpbmVkKSBpbnN0ZWFkP1xuICAgIHNlZSBQUiAjMjczIGZvciBhIGJhY2tncm91bmQgZGlzY3Vzc2lvblxuICAqKi9cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgY2hlY2sobWF0Y2hlciwgaXMuZnVuYywgJ0ludmFsaWQgbWF0Y2ggZnVuY3Rpb24gcGFzc2VkIHRvIGV2ZW50Q2hhbm5lbCcpO1xuICB9XG5cbiAgdmFyIGNoYW4gPSBjaGFubmVsKGJ1ZmZlcik7XG4gIHZhciBjbG9zZSA9IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGlmICghY2hhbi5fX2Nsb3NlZF9fKSB7XG4gICAgICBpZiAodW5zdWJzY3JpYmUpIHtcbiAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIGNoYW4uY2xvc2UoKTtcbiAgICB9XG4gIH07XG4gIHZhciB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaXNFbmQoaW5wdXQpKSB7XG4gICAgICBjbG9zZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobWF0Y2hlciAmJiAhbWF0Y2hlcihpbnB1dCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2hhbi5wdXQoaW5wdXQpO1xuICB9KTtcbiAgaWYgKGNoYW4uX19jbG9zZWRfXykge1xuICAgIHVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBpZiAoIWlzLmZ1bmModW5zdWJzY3JpYmUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbiBldmVudENoYW5uZWw6IHN1YnNjcmliZSBzaG91bGQgcmV0dXJuIGEgZnVuY3Rpb24gdG8gdW5zdWJzY3JpYmUnKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGFrZTogY2hhbi50YWtlLFxuICAgIGZsdXNoOiBjaGFuLmZsdXNoLFxuICAgIGNsb3NlOiBjbG9zZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RkQ2hhbm5lbChzdWJzY3JpYmUpIHtcbiAgdmFyIGNoYW4gPSBldmVudENoYW5uZWwoZnVuY3Rpb24gKGNiKSB7XG4gICAgcmV0dXJuIHN1YnNjcmliZShmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIGlmIChpbnB1dFtTQUdBX0FDVElPTl0pIHtcbiAgICAgICAgY2IoaW5wdXQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhc2FwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNiKGlucHV0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGNoYW4sIHtcbiAgICB0YWtlOiBmdW5jdGlvbiB0YWtlKGNiLCBtYXRjaGVyKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY2hlY2sobWF0Y2hlciwgaXMuZnVuYywgXCJjaGFubmVsLnRha2UncyBtYXRjaGVyIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgY2JbTUFUQ0hdID0gbWF0Y2hlcjtcbiAgICAgIH1cbiAgICAgIGNoYW4udGFrZShjYik7XG4gICAgfVxuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL2NoYW5uZWwuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEVORCwgZXZlbnRDaGFubmVsIH0gZnJvbSAncmVkdXgtc2FnYSdcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZSwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCB7IGdldEFjY291bnRCYWxhbmNlcyB9IGZyb20gJy4uL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhJ1xuXG4vKlxuICogRmV0Y2ggQWNjb3VudHMgTGlzdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0QWNjb3VudHMoYWN0aW9uKSB7XG4gIGNvbnN0IHdlYjMgPSBhY3Rpb24ud2ViM1xuXG4gIHRyeSB7XG4gICAgY29uc3QgYWNjb3VudHMgPSB5aWVsZCBjYWxsKHdlYjMuZXRoLmdldEFjY291bnRzKVxuXG4gICAgaWYgKCFhY2NvdW50cykge1xuICAgICAgdGhyb3cgJ05vIGFjY291bnRzIGZvdW5kISdcbiAgICB9XG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdBQ0NPVU5UU19GRVRDSEVEJywgYWNjb3VudHN9KVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIHlpZWxkIHB1dCh7dHlwZTogJ0FDQ09VTlRTX0ZBSUxFRCcsIGVycm9yfSlcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhY2NvdW50czonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIH1cbn1cblxuLypcbiAqIFBvbGwgZm9yIEFjY291bnQgQ2hhbmdlc1xuICovXG5cbmZ1bmN0aW9uKiBjcmVhdGVBY2NvdW50c1BvbGxDaGFubmVsKHtpbnRlcnZhbCwgd2ViM30pIHtcbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcbiAgICBjb25zdCBwZXJzaXN0ZWRXZWIzID0gd2ViM1xuXG4gICAgY29uc3QgYWNjb3VudHNQb2xsZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnU1lOQ0lOR19BQ0NPVU5UUycsIHBlcnNpc3RlZFdlYjN9KVxuICAgIH0sIGludGVydmFsKSAvLyBvcHRpb25zLnBvbGxzLmFjY291bnRzXG4gICAgXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGFjY291bnRzUG9sbGVyKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuICBcbmZ1bmN0aW9uKiBjYWxsQ3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbCh7aW50ZXJ2YWwsIHdlYjN9KSB7XG4gIGNvbnN0IGFjY291bnRzQ2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlQWNjb3VudHNQb2xsQ2hhbm5lbCwge2ludGVydmFsLCB3ZWIzfSlcbiAgXG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBldmVudCA9IHlpZWxkIHRha2UoYWNjb3VudHNDaGFubmVsKVxuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ1NZTkNJTkdfQUNDT1VOVFMnKSB7ICAgICAgXG4gICAgICAgIHlpZWxkIGNhbGwoZ2V0QWNjb3VudHMsIHt3ZWIzOiBldmVudC5wZXJzaXN0ZWRXZWIzfSlcbiAgICAgICAgeWllbGQgY2FsbChnZXRBY2NvdW50QmFsYW5jZXMsIHt3ZWIzOiBldmVudC5wZXJzaXN0ZWRXZWIzfSkgIFxuICAgICAgfVxuXG4gICAgICB5aWVsZCBwdXQoZXZlbnQpXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGFjY291bnRzQ2hhbm5lbC5jbG9zZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24qIGFjY291bnRzU2FnYSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdCgnQUNDT1VOVFNfRkVUQ0hJTkcnLCBnZXRBY2NvdW50cylcbiAgeWllbGQgdGFrZUxhdGVzdCgnQUNDT1VOVFNfUE9MTElORycsIGNhbGxDcmVhdGVBY2NvdW50c1BvbGxDaGFubmVsKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY2NvdW50c1NhZ2E7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWNjb3VudHMvYWNjb3VudHNTYWdhLmpzIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNhbGwsIHB1dCwgc2VsZWN0LCB0YWtlRXZlcnksIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5cbnZhciBXZWIzID0gcmVxdWlyZSgnd2ViMycpXG5cbi8qXG4gKiBJbml0aWFsaXphdGlvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogaW5pdGlhbGl6ZVdlYjMoe29wdGlvbnN9KSB7XG5cbiAgdHJ5IHtcbiAgICB2YXIgd2ViMyA9IHt9XG5cbiAgICAvLyBDaGVja2luZyBpZiBXZWIzIGhhcyBiZWVuIGluamVjdGVkIGJ5IHRoZSBicm93c2VyIChNaXN0L01ldGFNYXNrKVxuICAgIGlmICh0eXBlb2Ygd2luZG93LndlYjMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBVc2UgTWlzdC9NZXRhTWFzaydzIHByb3ZpZGVyLlxuICAgICAgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcilcbiAgICAgIHdlYjMuZXRoLmNhY2hlU2VuZFRyYW5zYWN0aW9uID0gKHR4T2JqZWN0KSA9PiBwdXQoe3R5cGU6ICdTRU5EX1dFQjNfVFgnLCB0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pXG5cbiAgICAgIGNvbnNvbGUubG9nKCdJbmplY3RlZCB3ZWIzIGRldGVjdGVkLicpXG5cbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ1dFQjNfSU5JVElBTElaRUQnfSlcbiAgICAgIFxuICAgICAgcmV0dXJuIHdlYjNcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG9wdGlvbnMuZmFsbGJhY2spIHtcbiAgICAgICAgLy8gQXR0ZW1wdCBmYWxsYmFjayBpZiBubyB3ZWIzIGluamVjdGlvbi5cbiAgICAgICAgY29uc29sZS5sb2coJ05vIHdlYjMgaW5zdGFuY2UgaW5qZWN0ZWQsIHVzaW5nIGZhbGxiYWNrLicpXG5cbiAgICAgICAgc3dpdGNoIChvcHRpb25zLmZhbGxiYWNrLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICd3cyc6XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuV2Vic29ja2V0UHJvdmlkZXIob3B0aW9ucy5mYWxsYmFjay51cmwpXG4gICAgICAgICAgICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpXG5cbiAgICAgICAgICAgIC8vIEF0dGFjaCBkcml6emxlIGZ1bmN0aW9uc1xuICAgICAgICAgICAgd2ViMy5ldGhbJ2NhY2hlU2VuZFRyYW5zYWN0aW9uJ10gPSAodHhPYmplY3QpID0+IHB1dCh7dHlwZTogJ1NFTkRfV0VCM19UWCcsIHR4T2JqZWN0LCBzdGFja0lkLCB3ZWIzfSlcblxuICAgICAgICAgICAgeWllbGQgcHV0KHt0eXBlOiAnV0VCM19JTklUSUFMSVpFRCd9KVxuXG4gICAgICAgICAgICByZXR1cm4gd2ViM1xuXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBJbnZhbGlkIG9wdGlvbnM7IHRocm93LlxuICAgICAgICAgICAgdGhyb3cgXCJJbnZhbGlkIHdlYjMgZmFsbGJhY2sgcHJvdmlkZWQuXCJcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBPdXQgb2Ygd2ViMyBvcHRpb25zOyB0aHJvdy5cbiAgICAgIHRocm93IFwiQ2Fubm90IGZpbmQgaW5qZWN0ZWQgd2ViMyBvciB2YWxpZCBmYWxsYmFjay5cIlxuICAgIH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdXRUIzX0ZBSUxFRCcsIGVycm9yfSlcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbnRpYWxpemluZyB3ZWIzOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgfVxufVxuXG4vKlxuICogTmV0d29yayBJRFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0TmV0d29ya0lkKHt3ZWIzfSkge1xuICB0cnkge1xuICAgIGNvbnN0IG5ldHdvcmtJZCA9IHlpZWxkIGNhbGwod2ViMy5ldGgubmV0LmdldElkKVxuXG4gICAgeWllbGQgcHV0KHt0eXBlOiAnTkVUV09SS19JRF9GRVRDSEVEJywgbmV0d29ya0lkfSlcblxuICAgIHJldHVybiBuZXR3b3JrSWRcbiAgfVxuICBjYXRjaChlcnJvcil7XG4gICAgeWllbGQgcHV0KHt0eXBlOiAnTkVUV09SS19JRF9GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBuZXR3b3JrIElEOicpXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICAgIHJldHVyblxuICB9XG59XG5cbi8qXG4gKiBTZW5kIFRyYW5zYWN0aW9uXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlVHhDaGFubmVsKHt0eE9iamVjdCwgc3RhY2tJZCwgd2ViM30pIHtcbiAgdmFyIHBlcnNpc3RUeEhhc2hcblxuICByZXR1cm4gZXZlbnRDaGFubmVsKGVtaXQgPT4ge1xuICAgIGNvbnN0IHR4UHJvbWlFdmVudCA9IHdlYjMuZXRoLnNlbmRUcmFuc2FjdGlvbih0eE9iamVjdCkub24oJ3RyYW5zYWN0aW9uSGFzaCcsIHR4SGFzaCA9PiB7XG4gICAgICBwZXJzaXN0VHhIYXNoID0gdHhIYXNoXG5cbiAgICAgIGVtaXQoe3R5cGU6ICdXM1RYX0JST0FEQ0FTVEVEJywgdHhIYXNoLCBzdGFja0lkfSlcbiAgICB9KVxuICAgIC5vbignY29uZmlybWF0aW9uJywgKGNvbmZpcm1hdGlvbk51bWJlciwgcmVjZWlwdCkgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1czVFhfQ09ORklSTUFJVE9OJywgY29uZmlybWF0aW9uUmVjZWlwdDogcmVjZWlwdCwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICB9KVxuICAgIC5vbigncmVjZWlwdCcsIHJlY2VpcHQgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ1czVFhfU1VDQ0VTU0ZVTCcsIHJlY2VpcHQ6IHJlY2VpcHQsIHR4SGFzaDogcGVyc2lzdFR4SGFzaH0pXG4gICAgICBlbWl0KEVORClcbiAgICB9KVxuICAgIC5vbignZXJyb3InLCBlcnJvciA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnVzNUWF9FUlJPUicsIGVycm9yOiBlcnJvciwgdHhIYXNoOiBwZXJzaXN0VHhIYXNofSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIHR4UHJvbWlFdmVudC5vZmYoKVxuICAgIH1cblxuICAgIHJldHVybiB1bnN1YnNjcmliZVxuICB9KVxufVxuXG5mdW5jdGlvbiogY2FsbFNlbmRUeCh7dHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KSB7XG4gIGNvbnN0IHR4Q2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlVHhDaGFubmVsLCB7dHhPYmplY3QsIHN0YWNrSWQsIHdlYjN9KVxuXG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBldmVudCA9IHlpZWxkIHRha2UodHhDaGFubmVsKVxuICAgICAgeWllbGQgcHV0KGV2ZW50KVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICB0eENoYW5uZWwuY2xvc2UoKVxuICB9XG59XG5cbmZ1bmN0aW9uKiB3ZWIzU2FnYSgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdCgnTkVUV09SS19JRF9GRVRDSElORycsIGdldE5ldHdvcmtJZClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdTRU5EX1dFQjNfVFgnLCBjYWxsU2VuZFR4KVxufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzU2FnYVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dlYjMvd2ViM1NhZ2EuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAoIUJVR0dZICYmICRuYXRpdmUpIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbnZhciBET01JdGVyYWJsZXMgPSAoJ0NTU1J1bGVMaXN0LENTU1N0eWxlRGVjbGFyYXRpb24sQ1NTVmFsdWVMaXN0LENsaWVudFJlY3RMaXN0LERPTVJlY3RMaXN0LERPTVN0cmluZ0xpc3QsJyArXG4gICdET01Ub2tlbkxpc3QsRGF0YVRyYW5zZmVySXRlbUxpc3QsRmlsZUxpc3QsSFRNTEFsbENvbGxlY3Rpb24sSFRNTENvbGxlY3Rpb24sSFRNTEZvcm1FbGVtZW50LEhUTUxTZWxlY3RFbGVtZW50LCcgK1xuICAnTWVkaWFMaXN0LE1pbWVUeXBlQXJyYXksTmFtZWROb2RlTWFwLE5vZGVMaXN0LFBhaW50UmVxdWVzdExpc3QsUGx1Z2luLFBsdWdpbkFycmF5LFNWR0xlbmd0aExpc3QsU1ZHTnVtYmVyTGlzdCwnICtcbiAgJ1NWR1BhdGhTZWdMaXN0LFNWR1BvaW50TGlzdCxTVkdTdHJpbmdMaXN0LFNWR1RyYW5zZm9ybUxpc3QsU291cmNlQnVmZmVyTGlzdCxTdHlsZVNoZWV0TGlzdCxUZXh0VHJhY2tDdWVMaXN0LCcgK1xuICAnVGV4dFRyYWNrTGlzdCxUb3VjaExpc3QnKS5zcGxpdCgnLCcpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IERPTUl0ZXJhYmxlcy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IERPTUl0ZXJhYmxlc1tpXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4XCJcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9ub2RlLWxpYnMtYnJvd3Nlci9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBrVHJ1ZSwgbm9vcCB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgdmFyIEJVRkZFUl9PVkVSRkxPVyA9IFwiQ2hhbm5lbCdzIEJ1ZmZlciBvdmVyZmxvdyFcIjtcblxudmFyIE9OX09WRVJGTE9XX1RIUk9XID0gMTtcbnZhciBPTl9PVkVSRkxPV19EUk9QID0gMjtcbnZhciBPTl9PVkVSRkxPV19TTElERSA9IDM7XG52YXIgT05fT1ZFUkZMT1dfRVhQQU5EID0gNDtcblxudmFyIHplcm9CdWZmZXIgPSB7IGlzRW1wdHk6IGtUcnVlLCBwdXQ6IG5vb3AsIHRha2U6IG5vb3AgfTtcblxuZnVuY3Rpb24gcmluZ0J1ZmZlcigpIHtcbiAgdmFyIGxpbWl0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAxMDtcbiAgdmFyIG92ZXJmbG93QWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gIHZhciBhcnIgPSBuZXcgQXJyYXkobGltaXQpO1xuICB2YXIgbGVuZ3RoID0gMDtcbiAgdmFyIHB1c2hJbmRleCA9IDA7XG4gIHZhciBwb3BJbmRleCA9IDA7XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKGl0KSB7XG4gICAgYXJyW3B1c2hJbmRleF0gPSBpdDtcbiAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICBsZW5ndGgrKztcbiAgfTtcblxuICB2YXIgdGFrZSA9IGZ1bmN0aW9uIHRha2UoKSB7XG4gICAgaWYgKGxlbmd0aCAhPSAwKSB7XG4gICAgICB2YXIgaXQgPSBhcnJbcG9wSW5kZXhdO1xuICAgICAgYXJyW3BvcEluZGV4XSA9IG51bGw7XG4gICAgICBsZW5ndGgtLTtcbiAgICAgIHBvcEluZGV4ID0gKHBvcEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgIHJldHVybiBpdDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgd2hpbGUgKGxlbmd0aCkge1xuICAgICAgaXRlbXMucHVzaCh0YWtlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpc0VtcHR5OiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgICAgcmV0dXJuIGxlbmd0aCA9PSAwO1xuICAgIH0sXG4gICAgcHV0OiBmdW5jdGlvbiBwdXQoaXQpIHtcbiAgICAgIGlmIChsZW5ndGggPCBsaW1pdCkge1xuICAgICAgICBwdXNoKGl0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBkb3VibGVkTGltaXQgPSB2b2lkIDA7XG4gICAgICAgIHN3aXRjaCAob3ZlcmZsb3dBY3Rpb24pIHtcbiAgICAgICAgICBjYXNlIE9OX09WRVJGTE9XX1RIUk9XOlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEJVRkZFUl9PVkVSRkxPVyk7XG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19TTElERTpcbiAgICAgICAgICAgIGFycltwdXNoSW5kZXhdID0gaXQ7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSAocHVzaEluZGV4ICsgMSkgJSBsaW1pdDtcbiAgICAgICAgICAgIHBvcEluZGV4ID0gcHVzaEluZGV4O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBPTl9PVkVSRkxPV19FWFBBTkQ6XG4gICAgICAgICAgICBkb3VibGVkTGltaXQgPSAyICogbGltaXQ7XG5cbiAgICAgICAgICAgIGFyciA9IGZsdXNoKCk7XG5cbiAgICAgICAgICAgIGxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgICAgICBwdXNoSW5kZXggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgcG9wSW5kZXggPSAwO1xuXG4gICAgICAgICAgICBhcnIubGVuZ3RoID0gZG91YmxlZExpbWl0O1xuICAgICAgICAgICAgbGltaXQgPSBkb3VibGVkTGltaXQ7XG5cbiAgICAgICAgICAgIHB1c2goaXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBEUk9QXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRha2U6IHRha2UsXG4gICAgZmx1c2g6IGZsdXNoXG4gIH07XG59XG5cbmV4cG9ydCB2YXIgYnVmZmVycyA9IHtcbiAgbm9uZTogZnVuY3Rpb24gbm9uZSgpIHtcbiAgICByZXR1cm4gemVyb0J1ZmZlcjtcbiAgfSxcbiAgZml4ZWQ6IGZ1bmN0aW9uIGZpeGVkKGxpbWl0KSB7XG4gICAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX1RIUk9XKTtcbiAgfSxcbiAgZHJvcHBpbmc6IGZ1bmN0aW9uIGRyb3BwaW5nKGxpbWl0KSB7XG4gICAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX0RST1ApO1xuICB9LFxuICBzbGlkaW5nOiBmdW5jdGlvbiBzbGlkaW5nKGxpbWl0KSB7XG4gICAgcmV0dXJuIHJpbmdCdWZmZXIobGltaXQsIE9OX09WRVJGTE9XX1NMSURFKTtcbiAgfSxcbiAgZXhwYW5kaW5nOiBmdW5jdGlvbiBleHBhbmRpbmcoaW5pdGlhbFNpemUpIHtcbiAgICByZXR1cm4gcmluZ0J1ZmZlcihpbml0aWFsU2l6ZSwgT05fT1ZFUkZMT1dfRVhQQU5EKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yZWR1eC1zYWdhL2VzL2ludGVybmFsL2J1ZmZlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEVORCwgZXZlbnRDaGFubmVsIH0gZnJvbSAncmVkdXgtc2FnYSdcbmltcG9ydCB7IGNhbGwsIHB1dCwgdGFrZSwgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xuY29uc3QgQmxvY2tUcmFja2VyID0gcmVxdWlyZSgnZXRoLWJsb2NrLXRyYWNrZXInKVxuXG4vKlxuICogTGlzdGVuIGZvciBCbG9ja3NcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVCbG9ja0NoYW5uZWwoe2RyaXp6bGUsIHdlYjMsIHN5bmNBbHdheXN9KSB7XG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XG4gICAgY29uc3QgYmxvY2tFdmVudHMgPSB3ZWIzLmV0aC5zdWJzY3JpYmUoJ25ld0Jsb2NrSGVhZGVycycsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICBpZiAoZXJyb3IpXG4gICAgICB7XG4gICAgICAgIGVtaXQoe3R5cGU6ICdCTE9DS1NfRkFJTEVEJywgZXJyb3J9KVxuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGJsb2NrIGhlYWRlciBzdWJzY3JpcHRpb246JylcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcblxuICAgICAgICBlbWl0KEVORClcbiAgICAgIH1cbiAgICB9KVxuICAgIC5vbignZGF0YScsIChibG9ja0hlYWRlcikgPT4ge1xuICAgICAgZW1pdCh7dHlwZTogJ0JMT0NLX1JFQ0VJVkVEJywgYmxvY2tIZWFkZXIsIGRyaXp6bGUsIHdlYjMsIHN5bmNBbHdheXN9KVxuICAgIH0pXG4gICAgLm9uKCdlcnJvcicsIGVycm9yID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdCTE9DS1NfRkFJTEVEJywgZXJyb3J9KVxuICAgICAgZW1pdChFTkQpXG4gICAgfSlcblxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gKCkgPT4ge1xuICAgICAgYmxvY2tFdmVudHMub2ZmKClcbiAgICB9XG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcbiAgfSlcbn1cblxuZnVuY3Rpb24qIGNhbGxDcmVhdGVCbG9ja0NoYW5uZWwoe2RyaXp6bGUsIHdlYjMsIHN5bmNBbHdheXN9KSB7XG4gIGNvbnN0IGJsb2NrQ2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlQmxvY2tDaGFubmVsLCB7ZHJpenpsZSwgd2ViM30pXG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGV2ZW50ID0geWllbGQgdGFrZShibG9ja0NoYW5uZWwpXG4gICAgICB5aWVsZCBwdXQoZXZlbnQpXG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIGJsb2NrQ2hhbm5lbC5jbG9zZSgpXG4gIH1cbn1cblxuLypcbiAqIFBvbGwgZm9yIEJsb2Nrc1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrUG9sbENoYW5uZWwoe2RyaXp6bGUsIGludGVydmFsLCB3ZWIzLCBzeW5jQWx3YXlzfSkge1xuICByZXR1cm4gZXZlbnRDaGFubmVsKGVtaXQgPT4ge1xuICAgIGNvbnN0IGJsb2NrVHJhY2tlciA9IG5ldyBCbG9ja1RyYWNrZXIoeyBwcm92aWRlcjogd2ViMy5jdXJyZW50UHJvdmlkZXIsIHBvbGxpbmdJbnRlcnZhbDogaW50ZXJ2YWx9KVxuXG4gICAgYmxvY2tUcmFja2VyLm9uKCdsYXRlc3QnLCAoYmxvY2spID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdCTE9DS19GT1VORCcsIGJsb2NrLCBkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSlcbiAgICB9KVxuXG4gICAgYmxvY2tUcmFja2VyXG4gICAgLnN0YXJ0KClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnQkxPQ0tTX0ZBSUxFRCcsIGVycm9yfSlcbiAgICAgIGVtaXQoRU5EKVxuICAgIH0pXG5cbiAgICBjb25zdCB1bnN1YnNjcmliZSA9ICgpID0+IHtcbiAgICAgIGJsb2NrVHJhY2tlci5zdG9wKClcbiAgICB9XG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcbiAgfSlcbn1cblxuZnVuY3Rpb24qIGNhbGxDcmVhdGVCbG9ja1BvbGxDaGFubmVsKHtkcml6emxlLCBpbnRlcnZhbCwgd2ViMywgc3luY0Fsd2F5c30pIHtcbiAgY29uc3QgYmxvY2tDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVCbG9ja1BvbGxDaGFubmVsLCB7ZHJpenpsZSwgaW50ZXJ2YWwsIHdlYjN9KVxuXG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBldmVudCA9IHlpZWxkIHRha2UoYmxvY2tDaGFubmVsKVxuICAgICAgeWllbGQgcHV0KGV2ZW50KVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBibG9ja0NoYW5uZWwuY2xvc2UoKVxuICB9XG59XG5cbi8qXG4gKiBQcm9jZXNzIEJsb2Nrc1xuICovXG5cbmZ1bmN0aW9uKiBwcm9jZXNzQmxvY2tIZWFkZXIoe2Jsb2NrSGVhZGVyLCBkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSkge1xuICBjb25zdCBibG9ja051bWJlciA9IGJsb2NrSGVhZGVyLm51bWJlclxuXG4gIHRyeSB7XG4gICAgY29uc3QgYmxvY2sgPSB5aWVsZCBjYWxsKHdlYjMuZXRoLmdldEJsb2NrLCBibG9ja051bWJlciwgdHJ1ZSlcblxuICAgIHlpZWxkIGNhbGwocHJvY2Vzc0Jsb2NrLCB7YmxvY2ssIGRyaXp6bGUsIHdlYjMsIHN5bmNBbHdheXN9KVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGJsb2NrIHByb2Nlc3Npbmc6JylcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gICAgeWllbGQgcHV0KHt0eXBlOiAnQkxPQ0tfRkFJTEVEJywgZXJyb3J9KVxuXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuZnVuY3Rpb24qIHByb2Nlc3NCbG9jayh7YmxvY2ssIGRyaXp6bGUsIHdlYjMsIHN5bmNBbHdheXN9KSB7XG4gIHRyeSB7XG4gICAgaWYgKHN5bmNBbHdheXMpXG4gICAge1xuICAgICAgeWllbGQgYWxsKGRyaXp6bGUuY29udHJhY3RzLm1hcChjb250cmFjdCA9PiB7XG4gICAgICAgIHB1dCh7dHlwZTogJ0NPTlRSQUNUX1NZTkNJTkcnLCBjb250cmFjdH0pXG4gICAgICB9KSlcbiAgICAgIFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHR4cyA9IGJsb2NrLnRyYW5zYWN0aW9uc1xuXG4gICAgaWYgKHR4cy5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgIC8vIExvb3AgdGhyb3VnaCB0eHMgbG9va2luZyBmb3IgYW55IGNvbnRyYWN0IGFkZHJlc3Mgb2YgaW50ZXJlc3RcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHhzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICB2YXIgZnJvbSA9IHR4c1tpXS5mcm9tIHx8ICcnXG4gICAgICAgIHZhciBmcm9tQ29udHJhY3QgPSBkcml6emxlLmZpbmRDb250cmFjdEJ5QWRkcmVzcyhmcm9tLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGlmIChmcm9tQ29udHJhY3QpIHtcbiAgICAgICAgICB5aWVsZCBwdXQoe3R5cGU6ICdDT05UUkFDVF9TWU5DSU5HJywgY29udHJhY3Q6IGZyb21Db250cmFjdH0pXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG8gPSB0eHNbaV0udG8gfHwgJydcbiAgICAgICAgdmFyIHRvQ29udHJhY3QgPSBkcml6emxlLmZpbmRDb250cmFjdEJ5QWRkcmVzcyh0by50b0xvd2VyQ2FzZSgpKVxuICAgICAgICBpZiAodG9Db250cmFjdCkge1xuICAgICAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0NPTlRSQUNUX1NZTkNJTkcnLCBjb250cmFjdDogdG9Db250cmFjdH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gYmxvY2sgcHJvY2Vzc2luZzonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS19GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICByZXR1cm5cbiAgfVxufVxuXG5mdW5jdGlvbiogYmxvY2tzU2FnYSgpIHtcbiAgLy8gQmxvY2sgU3Vic2NyaXB0aW9uc1xuICB5aWVsZCB0YWtlTGF0ZXN0KCdCTE9DS1NfTElTVEVOSU5HJywgY2FsbENyZWF0ZUJsb2NrQ2hhbm5lbClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdCTE9DS19SRUNFSVZFRCcsIHByb2Nlc3NCbG9ja0hlYWRlcilcblxuICAvLyBCbG9jayBQb2xsaW5nXG4gIHlpZWxkIHRha2VMYXRlc3QoJ0JMT0NLU19QT0xMSU5HJywgY2FsbENyZWF0ZUJsb2NrUG9sbENoYW5uZWwpXG4gIHlpZWxkIHRha2VFdmVyeSgnQkxPQ0tfRk9VTkQnLCBwcm9jZXNzQmxvY2spXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJsb2Nrc1NhZ2FcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ibG9ja3MvYmxvY2tzU2FnYS5qcyIsImltcG9ydCB7IEVORCwgZXZlbnRDaGFubmVsIH0gZnJvbSAncmVkdXgtc2FnYSdcbmltcG9ydCB7IGNhbGwsIHB1dCwgc2VsZWN0LCB0YWtlLCB0YWtlTGF0ZXN0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXG5pbXBvcnQgRHJpenpsZUNvbnRyYWN0IGZyb20gJy4uL0RyaXp6bGVDb250cmFjdCdcblxuZXhwb3J0IGZ1bmN0aW9uKiBhZGRDb250cmFjdCh7ZHJpenpsZSwgY29udHJhY3RDb25maWcsIGV2ZW50cywgd2ViM30pIHtcbiAgLy8gUHJldmVudHMgZG91YmxlLWFkZGluZyBjb250cmFjdHNcbiAgaWYgKGRyaXp6bGUubG9hZGluZ0NvbnRyYWN0W2NvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZV0pIHsgcmV0dXJuIGZhbHNlIH1cbiAgXG4gIGRyaXp6bGUubG9hZGluZ0NvbnRyYWN0W2NvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZV0gPSB0cnVlXG4gIFxuICB5aWVsZCBwdXQoe3R5cGU6ICdDT05UUkFDVF9JTklUSUFMSVpJTkcnLCBjb250cmFjdENvbmZpZ30pXG4gIFxuICBsZXQgZHJpenpsZUNvbnRyYWN0XG4gIFxuICBpZiAoY29udHJhY3RDb25maWcud2ViM0NvbnRyYWN0KSB7XG4gICAgZHJpenpsZUNvbnRyYWN0ID0geWllbGQgY2FsbChpbnN0YW50aWF0ZVdlYjNDb250cmFjdCwge3dlYjNDb250cmFjdDogY29udHJhY3RDb25maWcud2ViM0NvbnRyYWN0LCBuYW1lOiBjb250cmFjdENvbmZpZy5jb250cmFjdE5hbWUsIGV2ZW50cywgc3RvcmU6IGRyaXp6bGUuc3RvcmUsIHdlYjN9KVxuICB9IGVsc2Uge1xuICAgIGRyaXp6bGVDb250cmFjdCA9IHlpZWxkIGNhbGwoaW5zdGFudGlhdGVDb250cmFjdCwge2NvbnRyYWN0QXJ0aWZhY3Q6IGNvbnRyYWN0Q29uZmlnLCBldmVudHMsIHN0b3JlOiBkcml6emxlLnN0b3JlLCB3ZWIzfSlcbiAgfVxuXG4gIGRyaXp6bGUuX2FkZENvbnRyYWN0KGRyaXp6bGVDb250cmFjdClcbiAgXG5cbiAgeWllbGQgcHV0KHt0eXBlOiAnQ09OVFJBQ1RfSU5JVElBTElaRUQnLCBuYW1lOiBjb250cmFjdENvbmZpZy5jb250cmFjdE5hbWV9KVxufVxuXG4vKlxuICogSW5zdGFudGlhdGlvblxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiogaW5zdGFudGlhdGVXZWIzQ29udHJhY3Qoe3dlYjNDb250cmFjdCwgbmFtZSwgZXZlbnRzLCBzdG9yZSwgd2ViM30pIHtcbiAgcmV0dXJuIG5ldyBEcml6emxlQ29udHJhY3Qod2ViM0NvbnRyYWN0LCB3ZWIzLCBuYW1lLCBzdG9yZSwgZXZlbnRzKVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGluc3RhbnRpYXRlQ29udHJhY3Qoe2NvbnRyYWN0QXJ0aWZhY3QsIGV2ZW50cywgc3RvcmUsIHdlYjN9KSB7XG4gIGNvbnN0IG5ldHdvcmtJZCA9IHlpZWxkIHNlbGVjdChnZXROZXR3b3JrSWQpXG5cbiAgLy8gSW5zdGFudGlhdGUgdGhlIGNvbnRyYWN0LlxuICB2YXIgd2ViM0NvbnRyYWN0ID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgIGNvbnRyYWN0QXJ0aWZhY3QuYWJpLFxuICAgIGNvbnRyYWN0QXJ0aWZhY3QubmV0d29ya3NbbmV0d29ya0lkXS5hZGRyZXNzLFxuICAgIHtcbiAgICAgIGZyb206IHN0b3JlLmdldFN0YXRlKCkuYWNjb3VudHNbMF0sXG4gICAgICBkYXRhOiBjb250cmFjdEFydGlmYWN0LmRlcGxveWVkQnl0ZWNvZGVcbiAgICB9XG4gIClcblxuICByZXR1cm4gbmV3IERyaXp6bGVDb250cmFjdCh3ZWIzQ29udHJhY3QsIHdlYjMsIGNvbnRyYWN0QXJ0aWZhY3QuY29udHJhY3ROYW1lLCBzdG9yZSwgZXZlbnRzLCBjb250cmFjdEFydGlmYWN0KVxufVxuXG4vKlxuICogRXZlbnRzXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQ29udHJhY3RFdmVudENoYW5uZWwoe2NvbnRyYWN0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9uc30pIHtcbiAgY29uc3QgbmFtZSA9IGNvbnRyYWN0LmNvbnRyYWN0TmFtZVxuXG4gIHJldHVybiBldmVudENoYW5uZWwoZW1pdCA9PiB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGNvbnRyYWN0LmV2ZW50c1tldmVudE5hbWVdKGV2ZW50T3B0aW9ucykub24oJ2RhdGEnLCBldmVudCA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnRVZFTlRfRklSRUQnLCBuYW1lLCBldmVudH0pXG4gICAgfSlcbiAgICAub24oJ2NoYW5nZWQnLCBldmVudCA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnRVZFTlRfQ0hBTkdFRCcsIG5hbWUsIGV2ZW50fSlcbiAgICB9KVxuICAgIC5vbignZXJyb3InLCBlcnJvciA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnRVZFTlRfRVJST1InLCBuYW1lLCBlcnJvcn0pXG4gICAgICBlbWl0KEVORClcbiAgICB9KVxuXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICBldmVudExpc3RlbmVyLnJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcbiAgfSlcbn1cblxuZnVuY3Rpb24qIGNhbGxMaXN0ZW5Gb3JDb250cmFjdEV2ZW50KHtjb250cmFjdCwgZXZlbnROYW1lLCBldmVudE9wdGlvbnN9KSB7XG4gIGNvbnN0IGNvbnRyYWN0RXZlbnRDaGFubmVsID0geWllbGQgY2FsbChjcmVhdGVDb250cmFjdEV2ZW50Q2hhbm5lbCwge2NvbnRyYWN0LCBldmVudE5hbWUsIGV2ZW50T3B0aW9uc30pXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgZXZlbnQgPSB5aWVsZCB0YWtlKGNvbnRyYWN0RXZlbnRDaGFubmVsKVxuICAgIHlpZWxkIHB1dChldmVudClcbiAgfVxufVxuXG4vKlxuICogU2VuZCBhbmQgQ2FjaGVcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVUeENoYW5uZWwoe3R4T2JqZWN0LCBzdGFja0lkLCBzZW5kQXJncyA9IHt9LCBjb250cmFjdE5hbWV9KSB7XG4gIHZhciBwZXJzaXN0VHhIYXNoXG5cbiAgcmV0dXJuIGV2ZW50Q2hhbm5lbChlbWl0ID0+IHtcbiAgICBjb25zdCB0eFByb21pRXZlbnQgPSB0eE9iamVjdC5zZW5kKHNlbmRBcmdzKS5vbigndHJhbnNhY3Rpb25IYXNoJywgdHhIYXNoID0+IHtcbiAgICAgIHBlcnNpc3RUeEhhc2ggPSB0eEhhc2hcblxuICAgICAgZW1pdCh7dHlwZTogJ1RYX0JST0FEQ0FTVEVEJywgdHhIYXNoLCBzdGFja0lkfSlcbiAgICAgIGVtaXQoe3R5cGU6ICdDT05UUkFDVF9TWU5DX0lORCcsIGNvbnRyYWN0TmFtZX0pXG4gICAgfSlcbiAgICAub24oJ2NvbmZpcm1hdGlvbicsIChjb25maXJtYXRpb25OdW1iZXIsIHJlY2VpcHQpID0+IHtcbiAgICAgIGVtaXQoe3R5cGU6ICdUWF9DT05GSVJNQUlUT04nLCBjb25maXJtYXRpb25SZWNlaXB0OiByZWNlaXB0LCB0eEhhc2g6IHBlcnNpc3RUeEhhc2h9KVxuICAgIH0pXG4gICAgLm9uKCdyZWNlaXB0JywgcmVjZWlwdCA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnVFhfU1VDQ0VTU0ZVTCcsIHJlY2VpcHQ6IHJlY2VpcHQsIHR4SGFzaDogcGVyc2lzdFR4SGFzaH0pXG4gICAgICBlbWl0KEVORClcbiAgICB9KVxuICAgIC5vbignZXJyb3InLCBlcnJvciA9PiB7XG4gICAgICBlbWl0KHt0eXBlOiAnVFhfRVJST1InLCBlcnJvcjogZXJyb3IsIHR4SGFzaDogcGVyc2lzdFR4SGFzaH0pXG4gICAgICBlbWl0KEVORClcbiAgICB9KVxuXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG4gICAgICB0eFByb21pRXZlbnQub2ZmKClcbiAgICB9XG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcbiAgfSlcbn1cblxuZnVuY3Rpb24qIGNhbGxTZW5kQ29udHJhY3RUeCh7Y29udHJhY3QsIGZuTmFtZSwgZm5JbmRleCwgYXJncywgc3RhY2tJZH0pIHtcbiAgLy8gQ2hlY2sgZm9yIHR5cGUgb2Ygb2JqZWN0IGFuZCBwcm9wZXJ0aWVzIGluZGljYXRpdmUgb2YgY2FsbC9zZW5kIG9wdGlvbnMuXG4gIGlmIChhcmdzLmxlbmd0aCkge1xuICAgIGNvbnN0IGZpbmFsQXJnID0gYXJncy5sZW5ndGggPiAxID8gYXJnc1thcmdzLmxlbmd0aCAtIDFdIDogYXJnc1swXVxuICAgIHZhciBzZW5kQXJncyA9IHt9XG4gICAgdmFyIGZpbmFsQXJnVGVzdCA9IGZhbHNlXG5cbiAgICBpZiAodHlwZW9mIGZpbmFsQXJnID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGZpbmFsQXJnVGVzdCA9IGNhbGwoaXNTZW5kT3JDYWxsT3B0aW9ucywgZmluYWxBcmcpXG4gICAgfVxuXG4gICAgaWYgKGZpbmFsQXJnVGVzdCkge1xuICAgICAgc2VuZEFyZ3MgPSBmaW5hbEFyZ1xuXG4gICAgICBhcmdzLmxlbmd0aCA+IDEgPyBkZWxldGUgYXJnc1thcmdzLmxlbmd0aCAtIDFdIDogZGVsZXRlIGFyZ3NbMF1cbiAgICAgIGFyZ3MubGVuZ3RoID0gYXJncy5sZW5ndGggLSAxXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IG5hbWUgdG8gbWFyayBhcyBkZXN5bmNocm9uaXplZCBvbiB0eCBjcmVhdGlvblxuICBjb25zdCBjb250cmFjdE5hbWUgPSBjb250cmFjdC5jb250cmFjdE5hbWVcblxuICAvLyBDcmVhdGUgdGhlIHRyYW5zYWN0aW9uIG9iamVjdCBhbmQgZXhlY3V0ZSB0aGUgdHguXG4gIGNvbnN0IHR4T2JqZWN0ID0geWllbGQgY2FsbChjb250cmFjdC5tZXRob2RzW2ZuTmFtZV0sIC4uLmFyZ3MpXG4gIGNvbnN0IHR4Q2hhbm5lbCA9IHlpZWxkIGNhbGwoY3JlYXRlVHhDaGFubmVsLCB7dHhPYmplY3QsIHN0YWNrSWQsIHNlbmRBcmdzLCBjb250cmFjdE5hbWV9KVxuXG4gIHRyeSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBldmVudCA9IHlpZWxkIHRha2UodHhDaGFubmVsKVxuICAgICAgeWllbGQgcHV0KGV2ZW50KVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICB0eENoYW5uZWwuY2xvc2UoKVxuICB9XG59XG5cbi8qXG4gKiBDYWxsIGFuZCBDYWNoZVxuICovXG5cbmZ1bmN0aW9uKiBjYWxsQ2FsbENvbnRyYWN0Rm4oe2NvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIGFyZ3NIYXNoLCBzeW5jID0gZmFsc2V9KSB7XG4gIC8vIGtlZXBpbmcgZm9yIHByZS12MS4xLjUgY29tcGF0aWJpbGl0eSB3aXRoIENBTExfQ09OVFJBQ1RfRk4gZXZlbnQuXG4gIGlmIChzeW5jKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBDaGVjayBmb3IgdHlwZSBvZiBvYmplY3QgYW5kIHByb3BlcnRpZXMgaW5kaWNhdGl2ZSBvZiBjYWxsL3NlbmQgb3B0aW9ucy5cbiAgaWYgKGFyZ3MubGVuZ3RoKSB7XG4gICAgY29uc3QgZmluYWxBcmcgPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gOiBhcmdzWzBdXG4gICAgdmFyIGNhbGxBcmdzID0ge31cbiAgICB2YXIgZmluYWxBcmdUZXN0ID0gZmFsc2VcblxuICAgIGlmICh0eXBlb2YgZmluYWxBcmcgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgZmluYWxBcmdUZXN0ID0gY2FsbChpc1NlbmRPckNhbGxPcHRpb25zLCBmaW5hbEFyZylcbiAgICB9XG5cbiAgICBpZiAoZmluYWxBcmdUZXN0KSB7XG4gICAgICBjYWxsQXJncyA9IGZpbmFsQXJnXG5cbiAgICAgIGFyZ3MubGVuZ3RoID4gMSA/IGRlbGV0ZSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gOiBkZWxldGUgYXJnc1swXVxuICAgICAgYXJncy5sZW5ndGggPSBhcmdzLmxlbmd0aCAtIDFcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgdGhlIHRyYW5zYWN0aW9uIG9iamVjdCBhbmQgZXhlY3V0ZSB0aGUgY2FsbC5cbiAgY29uc3QgdHhPYmplY3QgPSB5aWVsZCBjYWxsKGNvbnRyYWN0Lm1ldGhvZHNbZm5OYW1lXSwgLi4uYXJncylcblxuICB0cnkge1xuICAgIGNvbnN0IGNhbGxSZXN1bHQgPSB5aWVsZCBjYWxsKHR4T2JqZWN0LmNhbGwsIGNhbGxBcmdzKVxuXG4gICAgdmFyIGRpc3BhdGNoQXJncyA9IHtcbiAgICAgIG5hbWU6IGNvbnRyYWN0LmNvbnRyYWN0TmFtZSxcbiAgICAgIHZhcmlhYmxlOiBjb250cmFjdC5hYmlbZm5JbmRleF0ubmFtZSxcbiAgICAgIGFyZ3NIYXNoOiBhcmdzSGFzaCxcbiAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICB2YWx1ZTogY2FsbFJlc3VsdCxcbiAgICAgIGZuSW5kZXg6IGZuSW5kZXhcbiAgICB9XG5cbiAgICB5aWVsZCBwdXQoe3R5cGU6ICdHT1RfQ09OVFJBQ1RfVkFSJywgLi4uZGlzcGF0Y2hBcmdzfSlcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuXG4gICAgdmFyIGVycm9yQXJncyA9IHtcbiAgICAgIG5hbWU6IGNvbnRyYWN0LmNvbnRyYWN0TmFtZSxcbiAgICAgIHZhcmlhYmxlOiBjb250cmFjdC5hYmlbZm5JbmRleF0ubmFtZSxcbiAgICAgIGFyZ3NIYXNoOiBhcmdzSGFzaCxcbiAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBmbkluZGV4OiBmbkluZGV4XG4gICAgfVxuXG4gICAgeWllbGQgcHV0KHt0eXBlOiAnRVJST1JfQ09OVFJBQ1RfVkFSJywgLi4uZXJyb3JBcmdzfSlcbiAgfVxufVxuXG4vKlxuICogU3luYyBDb250cmFjdFxuICovXG5cbmZ1bmN0aW9uKiBjYWxsU3luY0NvbnRyYWN0KGFjdGlvbikge1xuICAvLyBHZXQgY29udHJhY3Qgc3RhdGUgZnJvbSBzdG9yZVxuICBjb25zdCBjb250cmFjdCA9IGFjdGlvbi5jb250cmFjdFxuICBjb25zdCBjb250cmFjdE5hbWUgPSBjb250cmFjdC5jb250cmFjdE5hbWVcblxuICBjb25zdCBjb250cmFjdHNTdGF0ZSA9IHlpZWxkIHNlbGVjdChnZXRDb250cmFjdHNTdGF0ZSlcbiAgdmFyIGNvbnRyYWN0Rm5zU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBjb250cmFjdHNTdGF0ZVtjb250cmFjdE5hbWVdKVxuXG4gIC8vIFJlbW92ZSB1bm5lY2Vzc2FyeSBrZXlzXG4gIGRlbGV0ZSBjb250cmFjdEZuc1N0YXRlLmluaXRpYWxpemVkXG4gIGRlbGV0ZSBjb250cmFjdEZuc1N0YXRlLnN5bmNlZFxuICBkZWxldGUgY29udHJhY3RGbnNTdGF0ZS5ldmVudHNcblxuICAvLyBJdGVyYXRlIG92ZXIgZnVuY3Rpb25zIGFuZCBoYXNoZXNcbiAgZm9yICh2YXIgZm5OYW1lIGluIGNvbnRyYWN0Rm5zU3RhdGUpXG4gIHtcbiAgICBmb3IgKHZhciBhcmdzSGFzaCBpbiBjb250cmFjdEZuc1N0YXRlW2ZuTmFtZV0pXG4gICAge1xuICAgICAgY29uc3QgZm5JbmRleCA9IGNvbnRyYWN0Rm5zU3RhdGVbZm5OYW1lXVthcmdzSGFzaF0uZm5JbmRleFxuICAgICAgY29uc3QgYXJncyA9IGNvbnRyYWN0Rm5zU3RhdGVbZm5OYW1lXVthcmdzSGFzaF0uYXJnc1xuXG4gICAgICAvLyBQdWxsIGFyZ3MgYW5kIGNhbGwgZm4gZm9yIGVhY2ggZ2l2ZW4gZnVuY3Rpb25cbiAgICAgIC8vIGtlZXBpbmcgZm9yIHByZS12MS4xLjUgY29tcGF0aWJpbGl0eSB3aXRoIENBTExfQ09OVFJBQ1RfRk4gZXZlbnQuXG4gICAgICB5aWVsZCBwdXQoe3R5cGU6ICdDQUxMX0NPTlRSQUNUX0ZOJywgY29udHJhY3QsIGZuTmFtZSwgZm5JbmRleCwgYXJncywgYXJnc0hhc2gsIHN5bmM6IHRydWV9KVxuICAgICAgeWllbGQgY2FsbChjYWxsQ2FsbENvbnRyYWN0Rm4sIHtjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBhcmdzSGFzaH0pXG4gICAgfVxuICB9XG5cbiAgLy8gV2hlbiBjb21wbGV0ZSwgZGlzcGF0Y2ggQ09OVFJBQ1RfU1lOQ0VEXG4gIHlpZWxkIHB1dCh7dHlwZTogJ0NPTlRSQUNUX1NZTkNFRCcsIGNvbnRyYWN0TmFtZX0pXG59XG5cbmNvbnN0IGdldENvbnRyYWN0c1N0YXRlID0gKHN0YXRlKSA9PiBzdGF0ZS5jb250cmFjdHNcbmNvbnN0IGdldE5ldHdvcmtJZCA9IChzdGF0ZSkgPT4gc3RhdGUud2ViMy5uZXR3b3JrSWRcblxuZnVuY3Rpb24gaXNTZW5kT3JDYWxsT3B0aW9ucyhvcHRpb25zKSB7XG4gIGlmICgnZnJvbScgaW4gb3B0aW9ucykgcmV0dXJuIHRydWVcbiAgaWYgKCdnYXMnIGluIG9wdGlvbnMpIHJldHVybiB0cnVlXG4gIGlmICgnZ2FzUHJpY2UnIGluIG9wdGlvbnMpIHJldHVybiB0cnVlXG4gIGlmICgndmFsdWUnIGluIG9wdGlvbnMpIHJldHVybiB0cnVlXG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uKiBjb250cmFjdHNTYWdhKCkge1xuICB5aWVsZCB0YWtlRXZlcnkoJ1NFTkRfQ09OVFJBQ1RfVFgnLCBjYWxsU2VuZENvbnRyYWN0VHgpXG4gIHlpZWxkIHRha2VFdmVyeSgnQ0FMTF9DT05UUkFDVF9GTicsIGNhbGxDYWxsQ29udHJhY3RGbilcbiAgeWllbGQgdGFrZUV2ZXJ5KCdDT05UUkFDVF9TWU5DSU5HJywgY2FsbFN5bmNDb250cmFjdClcbiAgeWllbGQgdGFrZUV2ZXJ5KCdMSVNURU5fRk9SX0VWRU5UJywgY2FsbExpc3RlbkZvckNvbnRyYWN0RXZlbnQpXG4gIHlpZWxkIHRha2VFdmVyeSgnQUREX0NPTlRSQUNUJywgYWRkQ29udHJhY3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyYWN0c1NhZ2E7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udHJhY3RzL2NvbnRyYWN0c1NhZ2EuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjYWxsLCBwdXQsIHNlbGVjdCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tICcuLi9kZWZhdWx0T3B0aW9ucydcbmltcG9ydCBtZXJnZSBmcm9tICcuLi9tZXJnZU9wdGlvbnMnXG5cbi8vIEluaXRpYWxpemF0aW9uIEZ1bmN0aW9uc1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVdlYjMsIGdldE5ldHdvcmtJZCB9IGZyb20gJy4uL3dlYjMvd2ViM1NhZ2EnXG5pbXBvcnQgeyBnZXRBY2NvdW50cyB9IGZyb20gJy4uL2FjY291bnRzL2FjY291bnRzU2FnYSdcbmltcG9ydCB7IGdldEFjY291bnRCYWxhbmNlcyB9IGZyb20gJy4uL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNTYWdhJ1xuXG5mdW5jdGlvbiogaW5pdGlhbGl6ZURyaXp6bGUoYWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG1lcmdlKGRlZmF1bHRPcHRpb25zLCBhY3Rpb24ub3B0aW9ucylcbiAgICBjb25zdCB3ZWIzT3B0aW9ucyA9IG9wdGlvbnMud2ViM1xuICAgIGNvbnN0IGRyaXp6bGUgPSBhY3Rpb24uZHJpenpsZVxuXG4gICAgLy8gSW5pdGlhbGl6ZSB3ZWIzIGFuZCBnZXQgdGhlIGN1cnJlbnQgbmV0d29yayBJRC5cbiAgICB2YXIgd2ViMyA9IHlpZWxkIGNhbGwoaW5pdGlhbGl6ZVdlYjMsIHtvcHRpb25zOiB3ZWIzT3B0aW9uc30pXG4gICAgZHJpenpsZS53ZWIzID0gd2ViM1xuXG4gICAgeWllbGQgY2FsbChnZXROZXR3b3JrSWQsIHt3ZWIzfSlcblxuICAgIC8vIEdldCBpbml0aWFsIGFjY291bnRzIGxpc3QgYW5kIGJhbGFuY2VzLlxuICAgIHlpZWxkIGNhbGwoZ2V0QWNjb3VudHMsIHt3ZWIzfSlcbiAgICB5aWVsZCBjYWxsKGdldEFjY291bnRCYWxhbmNlcywge3dlYjN9KVxuXG4gICAgLy8gSW5zdGFudGlhdGUgY29udHJhY3RzIHBhc3NlZCB0aHJvdWdoIHZpYSBvcHRpb25zLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5jb250cmFjdHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIGNvbnRyYWN0Q29uZmlnID0gb3B0aW9ucy5jb250cmFjdHNbaV1cbiAgICAgIHZhciBldmVudHMgPSBbXVxuICAgICAgdmFyIGNvbnRyYWN0TmFtZSA9IGNvbnRyYWN0Q29uZmlnLmNvbnRyYWN0TmFtZVxuXG4gICAgICBpZiAoY29udHJhY3ROYW1lIGluIG9wdGlvbnMuZXZlbnRzKSB7XG4gICAgICAgIGV2ZW50cyA9IG9wdGlvbnMuZXZlbnRzW2NvbnRyYWN0TmFtZV1cbiAgICAgIH1cblxuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQUREX0NPTlRSQUNUJywgZHJpenpsZSwgY29udHJhY3RDb25maWcsIGV2ZW50cywgd2ViM30pXG4gICAgfVxuXG4gICAgY29uc3Qgc3luY0Fsd2F5cyA9IG9wdGlvbnMuc3luY0Fsd2F5c1xuXG4gICAgaWYgKHdlYjMuY3VycmVudFByb3ZpZGVyLmlzTWV0YU1hc2spIHtcbiAgICAgIC8vIFVzaW5nIE1ldGFNYXNrLCBhdHRlbXB0IGJsb2NrIHBvbGxpbmcuXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IG9wdGlvbnMucG9sbHMuYmxvY2tzXG4gICAgICB5aWVsZCBwdXQoe3R5cGU6ICdCTE9DS1NfUE9MTElORycsIGRyaXp6bGUsIGludGVydmFsLCB3ZWIzLCBzeW5jQWx3YXlzfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBOb3QgdXNpbmcgTWV0YU1hc2ssIGF0dGVtcHQgc3Vic2NyaXB0aW9uIGJsb2NrIGxpc3RlbmluZy5cbiAgICAgIHlpZWxkIHB1dCh7dHlwZTogJ0JMT0NLU19MSVNURU5JTkcnLCBkcml6emxlLCB3ZWIzLCBzeW5jQWx3YXlzfSlcbiAgICB9XG5cbiAgICAvLyBBY2NvdW50cyBQb2xsaW5nXG4gICAgaWYgKCdhY2NvdW50cycgaW4gb3B0aW9ucy5wb2xscykge1xuICAgICAgeWllbGQgcHV0KHt0eXBlOiAnQUNDT1VOVFNfUE9MTElORycsIGludGVydmFsOiBvcHRpb25zLnBvbGxzLmFjY291bnRzLCB3ZWIzfSlcbiAgICB9XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgeWllbGQgcHV0KHt0eXBlOiAnRFJJWlpMRV9GQUlMRUQnLCBlcnJvcn0pXG5cbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbml0aWFsaXppbmcgRHJpenpsZTonKVxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG5cbiAgICByZXR1cm5cbiAgfVxuXG4gIHlpZWxkIHB1dCh7dHlwZTogJ0RSSVpaTEVfSU5JVElBTElaRUQnfSlcblxuICByZXR1cm5cbn1cblxuZnVuY3Rpb24qIGRyaXp6bGVTdGF0dXNTYWdhKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KCdEUklaWkxFX0lOSVRJQUxJWklORycsIGluaXRpYWxpemVEcml6emxlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBkcml6emxlU3RhdHVzU2FnYTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kcml6emxlU3RhdHVzL2RyaXp6bGVTdGF0dXNTYWdhLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge31cblxuY29uc3QgYWNjb3VudHNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQUNDT1VOVFNfRkVUQ0hJTkcnKVxuICB7XG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBQ0NPVU5UU19GRVRDSEVEJylcbiAge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgYWN0aW9uLmFjY291bnRzKVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjY291bnRzUmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjY291bnRzL2FjY291bnRzUmVkdWNlci5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IGFjY291bnRCYWxhbmNlc1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBQ0NPVU5UX0JBTEFOQ0VfRkVUQ0hFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLmFjY291bnRdOiBhY3Rpb24uYWNjb3VudEJhbGFuY2VcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWNjb3VudEJhbGFuY2VzUmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSB9IGZyb20gJy4uL2dlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IGNvbnRyYWN0c1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAvKlxuICAgKiBDb250cmFjdCBTdGF0dXNcbiAgICovXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ09OVFJBQ1RfSU5JVElBTElaSU5HJykge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFthY3Rpb24uY29udHJhY3RDb25maWcuY29udHJhY3ROYW1lXTogZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZShhY3Rpb24uY29udHJhY3RDb25maWcpXG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnQ09OVFJBQ1RfSU5JVElBTElaRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5uYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0sXG4gICAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgICBzeW5jZWQ6IHRydWUsXG4gICAgICAgIGV2ZW50czogW11cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9TWU5DSU5HJylcbiAge1xuICAgIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGFjdGlvbi5jb250cmFjdC5jb250cmFjdE5hbWVcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFtjb250cmFjdE5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2NvbnRyYWN0TmFtZV0sXG4gICAgICAgIHN5bmNlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9TWU5DRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5jb250cmFjdE5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5jb250cmFjdE5hbWVdLFxuICAgICAgICBzeW5jZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDT05UUkFDVF9TWU5DX0lORCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLmNvbnRyYWN0TmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGVbYWN0aW9uLmNvbnRyYWN0TmFtZV0sXG4gICAgICAgIHN5bmNlZDogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBDb250cmFjdCBGdW5jdGlvbnNcbiAgICovXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnR09UX0NPTlRSQUNUX1ZBUicpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbYWN0aW9uLm5hbWVdOiB7XG4gICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXSxcbiAgICAgICAgW2FjdGlvbi52YXJpYWJsZV06IHtcbiAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV1bYWN0aW9uLnZhcmlhYmxlXSxcbiAgICAgICAgICBbYWN0aW9uLmFyZ3NIYXNoXToge1xuICAgICAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdW2FjdGlvbi52YXJpYWJsZV1bYWN0aW9uLmFyZ3NIYXNoXSxcbiAgICAgICAgICAgIGFyZ3M6IGFjdGlvbi5hcmdzLFxuICAgICAgICAgICAgZm5JbmRleDogYWN0aW9uLmZuSW5kZXgsXG4gICAgICAgICAgICB2YWx1ZTogYWN0aW9uLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnRVJST1JfQ09OVFJBQ1RfVkFSJylcbiAge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIFthY3Rpb24ubmFtZV06IHtcbiAgICAgICAgLi4uc3RhdGVbYWN0aW9uLm5hbWVdLFxuICAgICAgICBbYWN0aW9uLnZhcmlhYmxlXToge1xuICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXVthY3Rpb24udmFyaWFibGVdLFxuICAgICAgICAgIFthY3Rpb24uYXJnc0hhc2hdOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV1bYWN0aW9uLnZhcmlhYmxlXVthY3Rpb24uYXJnc0hhc2hdLFxuICAgICAgICAgICAgYXJnczogYWN0aW9uLmFyZ3MsXG4gICAgICAgICAgICBmbkluZGV4OiBhY3Rpb24uZm5JbmRleCxcbiAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3JcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBDb250cmFjdCBFdmVudHNcbiAgICovXG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnRVZFTlRfRklSRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2FjdGlvbi5uYW1lXToge1xuICAgICAgICAuLi5zdGF0ZVthY3Rpb24ubmFtZV0sXG4gICAgICAgIGV2ZW50czogW1xuICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi5uYW1lXS5ldmVudHMsXG4gICAgICAgICAgYWN0aW9uLmV2ZW50XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJhY3RzUmVkdWNlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRyYWN0cy9jb250cmFjdHNSZWR1Y2VyLmpzIiwiaW1wb3J0IGdldEFiaSBmcm9tICcuL2dldEFiaSdcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUgKGNvbnRyYWN0Q29uZmlnKSB7XG4gIHZhciBzdGF0ZSA9IHtcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgc3luY2VkOiBmYWxzZVxuICB9XG5cbiAgLy8gQ29uc3RhbnQgZ2V0dGVyc1xuICB2YXIgYWJpID0gZ2V0QWJpKGNvbnRyYWN0Q29uZmlnKVxuICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgYWJpLmxlbmd0aDsgaTIrKykge1xuICAgIHZhciBpdGVtID0gYWJpW2kyXTtcblxuICAgIGlmIChpdGVtLnR5cGUgPT0gXCJmdW5jdGlvblwiICYmIGl0ZW0uY29uc3RhbnQgPT09IHRydWUpIHtcbiAgICAgIHN0YXRlW2l0ZW0ubmFtZV0gPSB7fVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBYmkoY29udHJhY3RFbnRyeSkge1xuICBpZiAoY29udHJhY3RFbnRyeS53ZWIzQ29udHJhY3QpIHtcbiAgICByZXR1cm4gY29udHJhY3RFbnRyeS53ZWIzQ29udHJhY3Qub3B0aW9ucy5qc29uSW50ZXJmYWNlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvbnRyYWN0RW50cnkuYWJpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZXRBYmkuanMiLCJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGluaXRpYWxpemVkOiBmYWxzZVxufVxuXG5jb25zdCBkcml6emxlU3RhdHVzUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8qXG4gICAqIERyaXp6bGUgU3RhdHVzXG4gICAqL1xuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ0RSSVpaTEVfSU5JVElBTElaRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgaW5pdGlhbGl6ZWQ6IHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRyaXp6bGVTdGF0dXNSZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZHJpenpsZVN0YXR1cy9kcml6emxlU3RhdHVzUmVkdWNlci5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG4gIFxuY29uc3QgdHJhbnNhY3Rpb25zUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfQlJPQURDQVNURUQnKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgW2FjdGlvbi50eEhhc2hdOiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgICAgICAgICAgICAgY29uZmlybWF0aW9uczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1RYX0NPTkZJUk1BSVRPTicpXG4gICAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBbYWN0aW9uLnR4SGFzaF06IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXSxcbiAgICAgICAgICAgICAgICBjb25maXJtYXRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlW2FjdGlvbi50eEhhc2hdLmNvbmZpcm1hdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5jb25maXJtYXRpb25SZWNlaXB0XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfU1VDQ0VTU0ZVTCcpXG4gICAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBbYWN0aW9uLnR4SGFzaF06IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICByZWNlaXB0OiBhY3Rpb24ucmVjZWlwdFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdUWF9FUlJPUicpXG4gICAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBbYWN0aW9uLnR4SGFzaF06IHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZVthY3Rpb24udHhIYXNoXSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zYWN0aW9uc1JlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zUmVkdWNlci5qcyIsImNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdXG4gIFxuY29uc3QgdHJhbnNhY3Rpb25TdGFja1JlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1BVU0hfVE9fVFhTVEFDSycpXG4gICAge1xuICAgICAgICBzdGF0ZS5wdXNoKCcnKVxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUE9QX0ZST01fVFhTVEFDSycpXG4gICAge1xuICAgICAgICBzdGF0ZS5wb3AoKVxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVFhfQlJPQURDQVNURUQnKVxuICAgIHtcbiAgICAgICAgc3RhdGVbYWN0aW9uLnN0YWNrSWRdID0gYWN0aW9uLnR4SGFzaFxuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyLmpzIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzdGF0dXM6ICcnXG59XG5cbmNvbnN0IHdlYjNSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnV0VCM19JTklUSUFMSVpJTkcnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3RhdHVzOiAnaW5pdGlhbGl6aW5nJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1dFQjNfSU5JVElBTElaRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3RhdHVzOiAnaW5pdGlhbGl6ZWQnXG4gICAgfVxuICB9XG5cbiAgaWYgKGFjdGlvbi50eXBlID09PSAnV0VCM19GQUlMRUQnKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3RhdHVzOiAnZmFpbGVkJ1xuICAgIH1cbiAgfVxuXG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ05FVFdPUktfSURfRkVUQ0hFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBuZXR3b3JrSWQ6IGFjdGlvbi5uZXR3b3JrSWRcbiAgICB9XG4gIH1cblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdORVRXT1JLX0lEX0ZBSUxFRCcpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBuZXR3b3JrSWQ6IGFjdGlvbi5uZXR3b3JrSWRcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2ViM1JlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93ZWIzL3dlYjNSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSB9IGZyb20gJy4vZ2VuZXJhdGVDb250cmFjdEluaXRpYWxTdGF0ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUob3B0aW9ucykge1xuICAvLyBQcmVsb2FkZWQgc3RhdGVcbiAgdmFyIGNvbnRyYWN0c0luaXRpYWxTdGF0ZSA9IHt9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcHRpb25zLmNvbnRyYWN0cy5sZW5ndGg7IGkrKykge1xuICAgIC8vIEluaXRpYWwgY29udHJhY3QgZGV0YWlsc1xuICAgIHZhciBjb250cmFjdE5hbWUgPSBvcHRpb25zLmNvbnRyYWN0c1tpXS5jb250cmFjdE5hbWVcbiAgICBjb250cmFjdHNJbml0aWFsU3RhdGVbY29udHJhY3ROYW1lXSA9IGdlbmVyYXRlQ29udHJhY3RJbml0aWFsU3RhdGUob3B0aW9ucy5jb250cmFjdHNbaV0pXG4gIH1cblxuICByZXR1cm4gY29udHJhY3RzSW5pdGlhbFN0YXRlXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlLmpzIiwiaW1wb3J0IERyaXp6bGUgZnJvbSAnLi9Ecml6emxlLmpzJ1xuaW1wb3J0IGdlbmVyYXRlU3RvcmUgZnJvbSAnLi9nZW5lcmF0ZVN0b3JlJ1xuaW1wb3J0IGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlIGZyb20gJy4vZ2VuZXJhdGVDb250cmFjdHNJbml0aWFsU3RhdGUnXG5cbi8vIFJlZHVjZXJzXG5pbXBvcnQgYWNjb3VudHNSZWR1Y2VyIGZyb20gJy4vYWNjb3VudHMvYWNjb3VudHNSZWR1Y2VyJ1xuaW1wb3J0IGFjY291bnRCYWxhbmNlc1JlZHVjZXIgZnJvbSAnLi9hY2NvdW50QmFsYW5jZXMvYWNjb3VudEJhbGFuY2VzUmVkdWNlcidcbmltcG9ydCBjb250cmFjdHNSZWR1Y2VyIGZyb20gJy4vY29udHJhY3RzL2NvbnRyYWN0c1JlZHVjZXInXG5pbXBvcnQgZHJpenpsZVN0YXR1c1JlZHVjZXIgZnJvbSAnLi9kcml6emxlU3RhdHVzL2RyaXp6bGVTdGF0dXNSZWR1Y2VyJ1xuaW1wb3J0IHRyYW5zYWN0aW9uc1JlZHVjZXIgZnJvbSAnLi90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zUmVkdWNlcidcbmltcG9ydCB0cmFuc2FjdGlvblN0YWNrUmVkdWNlciBmcm9tICcuL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvblN0YWNrUmVkdWNlcidcbmltcG9ydCB3ZWIzUmVkdWNlciBmcm9tICcuL3dlYjMvd2ViM1JlZHVjZXInXG5cbmNvbnN0IGRyaXp6bGVSZWR1Y2VycyA9IHtcbiAgYWNjb3VudHM6IGFjY291bnRzUmVkdWNlcixcbiAgYWNjb3VudEJhbGFuY2VzOiBhY2NvdW50QmFsYW5jZXNSZWR1Y2VyLFxuICBjb250cmFjdHM6IGNvbnRyYWN0c1JlZHVjZXIsXG4gIGRyaXp6bGVTdGF0dXM6IGRyaXp6bGVTdGF0dXNSZWR1Y2VyLFxuICB0cmFuc2FjdGlvbnM6IHRyYW5zYWN0aW9uc1JlZHVjZXIsXG4gIHRyYW5zYWN0aW9uU3RhY2s6IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyLFxuICB3ZWIzOiB3ZWIzUmVkdWNlclxufVxuXG4vLyBTYWdhc1xuaW1wb3J0IGFjY291bnRzU2FnYSBmcm9tICcuL2FjY291bnRzL2FjY291bnRzU2FnYSdcbmltcG9ydCBhY2NvdW50QmFsYW5jZXNTYWdhIGZyb20gJy4vYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1NhZ2EnXG5pbXBvcnQgYmxvY2tzU2FnYSBmcm9tICcuL2Jsb2Nrcy9ibG9ja3NTYWdhJ1xuaW1wb3J0IGNvbnRyYWN0c1NhZ2EgZnJvbSAnLi9jb250cmFjdHMvY29udHJhY3RzU2FnYSdcbmltcG9ydCBkcml6emxlU3RhdHVzU2FnYSBmcm9tICcuL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1NhZ2EnXG5pbXBvcnQgd2ViM1NhZ2EgZnJvbSAnLi93ZWIzL3dlYjNTYWdhJ1xuXG5jb25zdCBkcml6emxlU2FnYXMgPSBbXG4gIGFjY291bnRzU2FnYSxcbiAgYWNjb3VudEJhbGFuY2VzU2FnYSxcbiAgYmxvY2tzU2FnYSxcbiAgY29udHJhY3RzU2FnYSxcbiAgZHJpenpsZVN0YXR1c1NhZ2EsXG4gIHdlYjNTYWdhXG5dXG5cbmV4cG9ydCB7XG4gIERyaXp6bGUsXG4gIGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlLFxuICBnZW5lcmF0ZVN0b3JlLFxuICBkcml6emxlUmVkdWNlcnMsXG4gIGRyaXp6bGVTYWdhc1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8vIExvYWQgYXMgcHJvbWlzZSBzbyB0aGF0IGFzeW5jIERyaXp6bGUgaW5pdGlhbGl6YXRpb24gY2FuIHN0aWxsIHJlc29sdmVcbnZhciB3aW5kb3dQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJlc29sdmUpXG59KVxuXG5jbGFzcyBEcml6emxlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucywgc3RvcmUpIHtcbiAgICAvLyBWYXJpYWJsZXNcbiAgICB0aGlzLmNvbnRyYWN0cyA9IHt9XG4gICAgdGhpcy5jb250cmFjdExpc3QgPSBbXVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLnN0b3JlID0gc3RvcmVcbiAgICB0aGlzLndlYjMgPSB7fVxuXG4gICAgdGhpcy5sb2FkaW5nQ29udHJhY3QgPSB7fVxuXG4gICAgLy8gV2FpdCBmb3Igd2luZG93IGxvYWQgZXZlbnQgaW4gY2FzZSBvZiBpbmplY3RlZCB3ZWIzLlxuICAgIHdpbmRvd1Byb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAvLyBCZWdpbiBEcml6emxlIGluaXRpYWxpemF0aW9uLlxuICAgICAgc3RvcmUuZGlzcGF0Y2goe3R5cGU6ICdEUklaWkxFX0lOSVRJQUxJWklORycsIGRyaXp6bGU6IHRoaXMsIG9wdGlvbnN9KVxuICAgIH0pXG4gIH1cblxuICBhZGRDb250cmFjdCAoY29udHJhY3RDb25maWcsIGV2ZW50cyA9IFtdKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0FERF9DT05UUkFDVCcsIGRyaXp6bGU6IHRoaXMsIGNvbnRyYWN0Q29uZmlnLCBldmVudHMsIHdlYjM6IHRoaXMud2ViM30pXG4gIH1cblxuICBfYWRkQ29udHJhY3QgKGRyaXp6bGVDb250cmFjdCkge1xuICAgIGlmICh0aGlzLmNvbnRyYWN0c1tkcml6emxlQ29udHJhY3QuY29udHJhY3ROYW1lXSkgeyB0aHJvdyBgQ29udHJhY3QgYWxyZWFkeSBleGlzdHM6ICR7ZHJpenpsZUNvbnRyYWN0LmNvbnRyYWN0TmFtZX1gIH1cbiAgICB0aGlzLmNvbnRyYWN0c1tkcml6emxlQ29udHJhY3QuY29udHJhY3ROYW1lXSA9IGRyaXp6bGVDb250cmFjdFxuICAgIHRoaXMuY29udHJhY3RMaXN0LnB1c2goZHJpenpsZUNvbnRyYWN0KVxuICB9XG5cbiAgZmluZENvbnRyYWN0QnlBZGRyZXNzIChhZGRyZXNzKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJhY3RMaXN0LmZpbmQoKGNvbnRyYWN0KSA9PiB7XG4gICAgICByZXR1cm4gY29udHJhY3QuYWRkcmVzcy50b0xvd2VyQ2FzZSgpID09PSBhZGRyZXNzLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERyaXp6bGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Ecml6emxlLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgaWYgKHNhZmUgJiYgdGFyZ2V0W2tleV0pIHRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9yb290U2FnYSdcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCB7IGdlbmVyYXRlQ29udHJhY3RzSW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9nZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZSdcbmltcG9ydCBnZXRBYmkgZnJvbSAnLi9nZXRBYmknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlU3RvcmUob3B0aW9ucykge1xuICAvLyBSZWR1eCBEZXZUb29sc1xuICBjb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG4gIC8vIFByZWxvYWRlZCBzdGF0ZVxuICB2YXIgcHJlbG9hZGVkU3RhdGUgPSB7XG4gICAgY29udHJhY3RzOiBnZW5lcmF0ZUNvbnRyYWN0c0luaXRpYWxTdGF0ZShvcHRpb25zKVxuICB9XG5cbiAgLy8gY3JlYXRlIHRoZSBzYWdhIG1pZGRsZXdhcmVcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXG5cbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VyLFxuICAgIHByZWxvYWRlZFN0YXRlLFxuICAgIGNvbXBvc2VFbmhhbmNlcnMoXG4gICAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICAgIHNhZ2FNaWRkbGV3YXJlXG4gICAgICApXG4gICAgKVxuICApXG5cbiAgc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKVxuXG4gIHJldHVybiBzdG9yZVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VuZXJhdGVTdG9yZS5qcyIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcblxuaW1wb3J0IGFjY291bnRzU2FnYSBmcm9tICcuL2FjY291bnRzL2FjY291bnRzU2FnYSdcbmltcG9ydCBhY2NvdW50QmFsYW5jZXNTYWdhIGZyb20gJy4vYWNjb3VudEJhbGFuY2VzL2FjY291bnRCYWxhbmNlc1NhZ2EnXG5pbXBvcnQgYmxvY2tzU2FnYSBmcm9tICcuL2Jsb2Nrcy9ibG9ja3NTYWdhJ1xuaW1wb3J0IGNvbnRyYWN0c1NhZ2EgZnJvbSAnLi9jb250cmFjdHMvY29udHJhY3RzU2FnYSdcbmltcG9ydCBkcml6emxlU3RhdHVzU2FnYSBmcm9tICcuL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1NhZ2EnXG5pbXBvcnQgd2ViM1NhZ2EgZnJvbSAnLi93ZWIzL3dlYjNTYWdhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdCgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKGFjY291bnRzU2FnYSksXG4gICAgZm9yayhhY2NvdW50QmFsYW5jZXNTYWdhKSxcbiAgICBmb3JrKGJsb2Nrc1NhZ2EpLFxuICAgIGZvcmsoY29udHJhY3RzU2FnYSksXG4gICAgZm9yayhkcml6emxlU3RhdHVzU2FnYSksXG4gICAgZm9yayh3ZWIzU2FnYSlcbiAgXSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb290U2FnYS5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHRha2VFdmVyeUhlbHBlciBmcm9tICcuL3Rha2VFdmVyeSc7XG5pbXBvcnQgdGFrZUxhdGVzdEhlbHBlciBmcm9tICcuL3Rha2VMYXRlc3QnO1xuaW1wb3J0IHRocm90dGxlSGVscGVyIGZyb20gJy4vdGhyb3R0bGUnO1xuXG5pbXBvcnQgeyBkZXByZWNhdGUgfSBmcm9tICcuLi91dGlscyc7XG5cbnZhciBkZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiBkZXByZWNhdGlvbldhcm5pbmcoaGVscGVyTmFtZSkge1xuICByZXR1cm4gJ2ltcG9ydCB7ICcgKyBoZWxwZXJOYW1lICsgJyB9IGZyb20gXFwncmVkdXgtc2FnYVxcJyBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mIGltcG9ydCB7ICcgKyBoZWxwZXJOYW1lICsgJyB9IGZyb20gXFwncmVkdXgtc2FnYS9lZmZlY3RzXFwnLlxcblRoZSBsYXR0ZXIgd2lsbCBub3Qgd29yayB3aXRoIHlpZWxkKiwgYXMgaGVscGVyIGVmZmVjdHMgYXJlIHdyYXBwZWQgYXV0b21hdGljYWxseSBmb3IgeW91IGluIGZvcmsgZWZmZWN0LlxcblRoZXJlZm9yZSB5aWVsZCAnICsgaGVscGVyTmFtZSArICcgd2lsbCByZXR1cm4gdGFzayBkZXNjcmlwdG9yIHRvIHlvdXIgc2FnYSBhbmQgZXhlY3V0ZSBuZXh0IGxpbmVzIG9mIGNvZGUuJztcbn07XG5cbnZhciB0YWtlRXZlcnkgPSAvKiNfX1BVUkVfXyovZGVwcmVjYXRlKHRha2VFdmVyeUhlbHBlciwgLyojX19QVVJFX18qL2RlcHJlY2F0aW9uV2FybmluZygndGFrZUV2ZXJ5JykpO1xudmFyIHRha2VMYXRlc3QgPSAvKiNfX1BVUkVfXyovZGVwcmVjYXRlKHRha2VMYXRlc3RIZWxwZXIsIC8qI19fUFVSRV9fKi9kZXByZWNhdGlvbldhcm5pbmcoJ3Rha2VMYXRlc3QnKSk7XG52YXIgdGhyb3R0bGUgPSAvKiNfX1BVUkVfXyovZGVwcmVjYXRlKHRocm90dGxlSGVscGVyLCAvKiNfX1BVUkVfXyovZGVwcmVjYXRpb25XYXJuaW5nKCd0aHJvdHRsZScpKTtcblxuZXhwb3J0IHsgdGFrZUV2ZXJ5LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgdGFrZUV2ZXJ5SGVscGVyLCB0YWtlTGF0ZXN0SGVscGVyLCB0aHJvdHRsZUhlbHBlciB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgZnNtSXRlcmF0b3IsIHsgcUVuZCwgc2FmZU5hbWUgfSBmcm9tICcuL2ZzbUl0ZXJhdG9yJztcbmltcG9ydCB7IHRha2UsIGZvcmsgfSBmcm9tICcuLi9pbyc7XG5pbXBvcnQgeyBFTkQgfSBmcm9tICcuLi9jaGFubmVsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFrZUV2ZXJ5KHBhdHRlcm5PckNoYW5uZWwsIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciB5VGFrZSA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiB0YWtlKHBhdHRlcm5PckNoYW5uZWwpIH07XG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKSB9O1xuICB9O1xuXG4gIHZhciBhY3Rpb24gPSB2b2lkIDAsXG4gICAgICBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlUYWtlLCBzZXRBY3Rpb25dO1xuICAgIH0sXG4gICAgcTI6IGZ1bmN0aW9uIHEyKCkge1xuICAgICAgcmV0dXJuIGFjdGlvbiA9PT0gRU5EID8gW3FFbmRdIDogWydxMScsIHlGb3JrKGFjdGlvbildO1xuICAgIH1cbiAgfSwgJ3ExJywgJ3Rha2VFdmVyeSgnICsgc2FmZU5hbWUocGF0dGVybk9yQ2hhbm5lbCkgKyAnLCAnICsgd29ya2VyLm5hbWUgKyAnKScpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGFrZUV2ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHF1ZXVlID0gW107XG4vKipcbiAgVmFyaWFibGUgdG8gaG9sZCBhIGNvdW50aW5nIHNlbWFwaG9yZVxuICAtIEluY3JlbWVudGluZyBhZGRzIGEgbG9jayBhbmQgcHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHN1c3BlbmRlZGAgc3RhdGUgKGlmIGl0J3Mgbm90XG4gICAgYWxyZWFkeSBzdXNwZW5kZWQpXG4gIC0gRGVjcmVtZW50aW5nIHJlbGVhc2VzIGEgbG9jay4gWmVybyBsb2NrcyBwdXRzIHRoZSBzY2hlZHVsZXIgaW4gYSBgcmVsZWFzZWRgIHN0YXRlLiBUaGlzXG4gICAgdHJpZ2dlcnMgZmx1c2hpbmcgdGhlIHF1ZXVlZCB0YXNrcy5cbioqL1xudmFyIHNlbWFwaG9yZSA9IDA7XG5cbi8qKlxuICBFeGVjdXRlcyBhIHRhc2sgJ2F0b21pY2FsbHknLiBUYXNrcyBzY2hlZHVsZWQgZHVyaW5nIHRoaXMgZXhlY3V0aW9uIHdpbGwgYmUgcXVldWVkXG4gIGFuZCBmbHVzaGVkIGFmdGVyIHRoaXMgdGFzayBoYXMgZmluaXNoZWQgKGFzc3VtaW5nIHRoZSBzY2hlZHVsZXIgZW5kdXAgaW4gYSByZWxlYXNlZFxuICBzdGF0ZSkuXG4qKi9cbmZ1bmN0aW9uIGV4ZWModGFzaykge1xuICB0cnkge1xuICAgIHN1c3BlbmQoKTtcbiAgICB0YXNrKCk7XG4gIH0gZmluYWxseSB7XG4gICAgcmVsZWFzZSgpO1xuICB9XG59XG5cbi8qKlxuICBFeGVjdXRlcyBvciBxdWV1ZXMgYSB0YXNrIGRlcGVuZGluZyBvbiB0aGUgc3RhdGUgb2YgdGhlIHNjaGVkdWxlciAoYHN1c3BlbmRlZGAgb3IgYHJlbGVhc2VkYClcbioqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzYXAodGFzaykge1xuICBxdWV1ZS5wdXNoKHRhc2spO1xuXG4gIGlmICghc2VtYXBob3JlKSB7XG4gICAgc3VzcGVuZCgpO1xuICAgIGZsdXNoKCk7XG4gIH1cbn1cblxuLyoqXG4gIFB1dHMgdGhlIHNjaGVkdWxlciBpbiBhIGBzdXNwZW5kZWRgIHN0YXRlLiBTY2hlZHVsZWQgdGFza3Mgd2lsbCBiZSBxdWV1ZWQgdW50aWwgdGhlXG4gIHNjaGVkdWxlciBpcyByZWxlYXNlZC5cbioqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1c3BlbmQoKSB7XG4gIHNlbWFwaG9yZSsrO1xufVxuXG4vKipcbiAgUHV0cyB0aGUgc2NoZWR1bGVyIGluIGEgYHJlbGVhc2VkYCBzdGF0ZS5cbioqL1xuZnVuY3Rpb24gcmVsZWFzZSgpIHtcbiAgc2VtYXBob3JlLS07XG59XG5cbi8qKlxuICBSZWxlYXNlcyB0aGUgY3VycmVudCBsb2NrLiBFeGVjdXRlcyBhbGwgcXVldWVkIHRhc2tzIGlmIHRoZSBzY2hlZHVsZXIgaXMgaW4gdGhlIHJlbGVhc2VkIHN0YXRlLlxuKiovXG5leHBvcnQgZnVuY3Rpb24gZmx1c2goKSB7XG4gIHJlbGVhc2UoKTtcblxuICB2YXIgdGFzayA9IHZvaWQgMDtcbiAgd2hpbGUgKCFzZW1hcGhvcmUgJiYgKHRhc2sgPSBxdWV1ZS5zaGlmdCgpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZXhlYyh0YXNrKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2NoZWR1bGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZzbUl0ZXJhdG9yLCB7IHFFbmQsIHNhZmVOYW1lIH0gZnJvbSAnLi9mc21JdGVyYXRvcic7XG5pbXBvcnQgeyBjYW5jZWwsIHRha2UsIGZvcmsgfSBmcm9tICcuLi9pbyc7XG5pbXBvcnQgeyBFTkQgfSBmcm9tICcuLi9jaGFubmVsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFrZUxhdGVzdChwYXR0ZXJuT3JDaGFubmVsLCB3b3JrZXIpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgeVRha2UgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogdGFrZShwYXR0ZXJuT3JDaGFubmVsKSB9O1xuICB2YXIgeUZvcmsgPSBmdW5jdGlvbiB5Rm9yayhhYykge1xuICAgIHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogZm9yay5hcHBseSh1bmRlZmluZWQsIFt3b3JrZXJdLmNvbmNhdChhcmdzLCBbYWNdKSkgfTtcbiAgfTtcbiAgdmFyIHlDYW5jZWwgPSBmdW5jdGlvbiB5Q2FuY2VsKHRhc2spIHtcbiAgICByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IGNhbmNlbCh0YXNrKSB9O1xuICB9O1xuXG4gIHZhciB0YXNrID0gdm9pZCAwLFxuICAgICAgYWN0aW9uID0gdm9pZCAwO1xuICB2YXIgc2V0VGFzayA9IGZ1bmN0aW9uIHNldFRhc2sodCkge1xuICAgIHJldHVybiB0YXNrID0gdDtcbiAgfTtcbiAgdmFyIHNldEFjdGlvbiA9IGZ1bmN0aW9uIHNldEFjdGlvbihhYykge1xuICAgIHJldHVybiBhY3Rpb24gPSBhYztcbiAgfTtcblxuICByZXR1cm4gZnNtSXRlcmF0b3Ioe1xuICAgIHExOiBmdW5jdGlvbiBxMSgpIHtcbiAgICAgIHJldHVybiBbJ3EyJywgeVRha2UsIHNldEFjdGlvbl07XG4gICAgfSxcbiAgICBxMjogZnVuY3Rpb24gcTIoKSB7XG4gICAgICByZXR1cm4gYWN0aW9uID09PSBFTkQgPyBbcUVuZF0gOiB0YXNrID8gWydxMycsIHlDYW5jZWwodGFzayldIDogWydxMScsIHlGb3JrKGFjdGlvbiksIHNldFRhc2tdO1xuICAgIH0sXG4gICAgcTM6IGZ1bmN0aW9uIHEzKCkge1xuICAgICAgcmV0dXJuIFsncTEnLCB5Rm9yayhhY3Rpb24pLCBzZXRUYXNrXTtcbiAgICB9XG4gIH0sICdxMScsICd0YWtlTGF0ZXN0KCcgKyBzYWZlTmFtZShwYXR0ZXJuT3JDaGFubmVsKSArICcsICcgKyB3b3JrZXIubmFtZSArICcpJyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVkdXgtc2FnYS9lcy9pbnRlcm5hbC9zYWdhSGVscGVycy90YWtlTGF0ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZzbUl0ZXJhdG9yLCB7IHFFbmQsIHNhZmVOYW1lIH0gZnJvbSAnLi9mc21JdGVyYXRvcic7XG5pbXBvcnQgeyB0YWtlLCBmb3JrLCBhY3Rpb25DaGFubmVsLCBjYWxsIH0gZnJvbSAnLi4vaW8nO1xuaW1wb3J0IHsgRU5EIH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5pbXBvcnQgeyBidWZmZXJzIH0gZnJvbSAnLi4vYnVmZmVycyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoZGVsYXlMZW5ndGgsIHBhdHRlcm4sIHdvcmtlcikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAzID8gX2xlbiAtIDMgOiAwKSwgX2tleSA9IDM7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAzXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBhY3Rpb24gPSB2b2lkIDAsXG4gICAgICBjaGFubmVsID0gdm9pZCAwO1xuXG4gIHZhciB5QWN0aW9uQ2hhbm5lbCA9IHsgZG9uZTogZmFsc2UsIHZhbHVlOiBhY3Rpb25DaGFubmVsKHBhdHRlcm4sIGJ1ZmZlcnMuc2xpZGluZygxKSkgfTtcbiAgdmFyIHlUYWtlID0gZnVuY3Rpb24geVRha2UoKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiB0YWtlKGNoYW5uZWwpIH07XG4gIH07XG4gIHZhciB5Rm9yayA9IGZ1bmN0aW9uIHlGb3JrKGFjKSB7XG4gICAgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBmb3JrLmFwcGx5KHVuZGVmaW5lZCwgW3dvcmtlcl0uY29uY2F0KGFyZ3MsIFthY10pKSB9O1xuICB9O1xuICB2YXIgeURlbGF5ID0geyBkb25lOiBmYWxzZSwgdmFsdWU6IGNhbGwoZGVsYXksIGRlbGF5TGVuZ3RoKSB9O1xuXG4gIHZhciBzZXRBY3Rpb24gPSBmdW5jdGlvbiBzZXRBY3Rpb24oYWMpIHtcbiAgICByZXR1cm4gYWN0aW9uID0gYWM7XG4gIH07XG4gIHZhciBzZXRDaGFubmVsID0gZnVuY3Rpb24gc2V0Q2hhbm5lbChjaCkge1xuICAgIHJldHVybiBjaGFubmVsID0gY2g7XG4gIH07XG5cbiAgcmV0dXJuIGZzbUl0ZXJhdG9yKHtcbiAgICBxMTogZnVuY3Rpb24gcTEoKSB7XG4gICAgICByZXR1cm4gWydxMicsIHlBY3Rpb25DaGFubmVsLCBzZXRDaGFubmVsXTtcbiAgICB9LFxuICAgIHEyOiBmdW5jdGlvbiBxMigpIHtcbiAgICAgIHJldHVybiBbJ3EzJywgeVRha2UoKSwgc2V0QWN0aW9uXTtcbiAgICB9LFxuICAgIHEzOiBmdW5jdGlvbiBxMygpIHtcbiAgICAgIHJldHVybiBhY3Rpb24gPT09IEVORCA/IFtxRW5kXSA6IFsncTQnLCB5Rm9yayhhY3Rpb24pXTtcbiAgICB9LFxuICAgIHE0OiBmdW5jdGlvbiBxNCgpIHtcbiAgICAgIHJldHVybiBbJ3EyJywgeURlbGF5XTtcbiAgICB9XG4gIH0sICdxMScsICd0aHJvdHRsZSgnICsgc2FmZU5hbWUocGF0dGVybikgKyAnLCAnICsgd29ya2VyLm5hbWUgKyAnKScpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZHV4LXNhZ2EvZXMvaW50ZXJuYWwvc2FnYUhlbHBlcnMvdGhyb3R0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTIyX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJldGgtYmxvY2stdHJhY2tlci1lczVcIlxuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIERyaXp6bGVDb250cmFjdCB7XG4gIGNvbnN0cnVjdG9yKHdlYjNDb250cmFjdCwgd2ViMywgbmFtZSwgc3RvcmUsIGV2ZW50cyA9IFtdLCBjb250cmFjdEFydGlmYWN0ID0ge30pIHtcbiAgICB0aGlzLmFiaSA9IHdlYjNDb250cmFjdC5vcHRpb25zLmpzb25JbnRlcmZhY2VcbiAgICB0aGlzLmFkZHJlc3MgPSB3ZWIzQ29udHJhY3Qub3B0aW9ucy5hZGRyZXNzXG4gICAgdGhpcy53ZWIzID0gd2ViM1xuICAgIHRoaXMuY29udHJhY3ROYW1lID0gbmFtZVxuICAgIHRoaXMuY29udHJhY3RBcnRpZmFjdCA9IGNvbnRyYWN0QXJ0aWZhY3RcbiAgICB0aGlzLnN0b3JlID0gc3RvcmVcblxuICAgIC8vIE1lcmdlIHdlYjMgY29udHJhY3QgaW5zdGFuY2UgaW50byBEcml6emxlQ29udHJhY3QgaW5zdGFuY2UuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB3ZWIzQ29udHJhY3QpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYWJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuYWJpW2ldXG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT0gXCJmdW5jdGlvblwiICYmIGl0ZW0uY29uc3RhbnQgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5tZXRob2RzW2l0ZW0ubmFtZV0uY2FjaGVDYWxsID0gdGhpcy5jYWNoZUNhbGxGdW5jdGlvbihpdGVtLm5hbWUsIGkpXG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT0gXCJmdW5jdGlvblwiICYmIGl0ZW0uY29uc3RhbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubWV0aG9kc1tpdGVtLm5hbWVdLmNhY2hlU2VuZCA9IHRoaXMuY2FjaGVTZW5kRnVuY3Rpb24oaXRlbS5uYW1lLCBpKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVycyBpZiBhbnkgZXZlbnRzLlxuICAgIGlmIChldmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZXZlbnQgPSBldmVudHNbaV1cbiAgICAgICAgXG4gICAgICAgIGlmICggdHlwZW9mIGV2ZW50ID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0xJU1RFTl9GT1JfRVZFTlQnLCBjb250cmFjdDogdGhpcywgZXZlbnROYW1lOiBldmVudC5ldmVudE5hbWUsIGV2ZW50T3B0aW9uczogZXZlbnQuZXZlbnRPcHRpb25zfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0xJU1RFTl9GT1JfRVZFTlQnLCBjb250cmFjdDogdGhpcywgZXZlbnROYW1lOiBldmVudH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjYWNoZUNhbGxGdW5jdGlvbihmbk5hbWUsIGZuSW5kZXgsIGZuKSB7XG4gICAgdmFyIGNvbnRyYWN0ID0gdGhpc1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gQ29sbGVjdCBhcmdzIGFuZCBoYXNoIHRvIHVzZSBhcyBrZXksIDB4MCBpZiBubyBhcmdzXG4gICAgICB2YXIgYXJnc0hhc2ggPSAnMHgwJ1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHNcblxuICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBhcmdzSGFzaCA9IGNvbnRyYWN0LmdlbmVyYXRlQXJnc0hhc2goYXJncylcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvbnRyYWN0TmFtZSA9IGNvbnRyYWN0LmNvbnRyYWN0TmFtZVxuICAgICAgY29uc3QgZnVuY3Rpb25TdGF0ZSA9IGNvbnRyYWN0LnN0b3JlLmdldFN0YXRlKCkuY29udHJhY3RzW2NvbnRyYWN0TmFtZV1bZm5OYW1lXVxuXG4gICAgICAvLyBJZiBjYWxsIHJlc3VsdCBpcyBpbiBzdGF0ZSBhbmQgZnJlc2gsIHJldHVybiB2YWx1ZSBpbnN0ZWFkIG9mIGNhbGxpbmdcbiAgICAgIGlmIChhcmdzSGFzaCBpbiBmdW5jdGlvblN0YXRlKSB7XG4gICAgICAgIGlmIChjb250cmFjdC5zdG9yZS5nZXRTdGF0ZSgpLmNvbnRyYWN0c1tjb250cmFjdE5hbWVdLnN5bmNlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBhcmdzSGFzaFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgY2FsbCBmdW5jdGlvbiBhbmQgdXBkYXRlIHN0b3JlXG4gICAgICBjb250cmFjdC5zdG9yZS5kaXNwYXRjaCh7dHlwZTogJ0NBTExfQ09OVFJBQ1RfRk4nLCBjb250cmFjdCwgZm5OYW1lLCBmbkluZGV4LCBhcmdzLCBhcmdzSGFzaH0pXG5cbiAgICAgIC8vIFJldHVybiBub3RoaW5nIGJlY2F1c2Ugc3RhdGUgaXMgY3VycmVudGx5IGVtcHR5LlxuICAgICAgcmV0dXJuIGFyZ3NIYXNoXG4gICAgfVxuICB9XG5cbiAgY2FjaGVTZW5kRnVuY3Rpb24oZm5OYW1lLCBmbkluZGV4LCBmbikge1xuICAgIC8vIE5PVEU6IE1heSBub3QgbmVlZCBmbiBpbmRleFxuICAgIHZhciBjb250cmFjdCA9IHRoaXNcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzXG5cbiAgICAgIC8vIEdlbmVyYXRlIHRlbXBvcmFyeSBJRFxuICAgICAgdmFyIHN0YWNrSWQgPSBjb250cmFjdC5zdG9yZS5nZXRTdGF0ZSgpLnRyYW5zYWN0aW9uU3RhY2subGVuZ3RoXG5cbiAgICAgIC8vIEFkZCBJRCB0byBcInRyYW5zYWN0aW9uU3RhY2tcIiB3aXRoIGVtcHR5IHZhbHVlXG4gICAgICBjb250cmFjdC5zdG9yZS5kaXNwYXRjaCh7dHlwZTogJ1BVU0hfVE9fU1RBQ0snfSlcblxuICAgICAgLy8gRGlzcGF0Y2ggdHggdG8gc2FnYVxuICAgICAgLy8gV2hlbiB0eGhhc2ggcmVjZWl2ZWQsIHdpbGwgYmUgdmFsdWUgb2Ygc3RhY2sgSURcbiAgICAgIGNvbnRyYWN0LnN0b3JlLmRpc3BhdGNoKHt0eXBlOiAnU0VORF9DT05UUkFDVF9UWCcsIGNvbnRyYWN0LCBmbk5hbWUsIGZuSW5kZXgsIGFyZ3MsIHN0YWNrSWR9KVxuXG4gICAgICAvLyByZXR1cm4gc3RhY2sgSURcbiAgICAgIHJldHVybiBzdGFja0lkXG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVBcmdzSGFzaChhcmdzKSB7XG4gICAgdmFyIHdlYjMgPSB0aGlzLndlYjNcbiAgICB2YXIgaGFzaFN0cmluZyA9ICcnXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzW2ldICE9PSAnZnVuY3Rpb24nKVxuICAgICAge1xuICAgICAgICB2YXIgYXJnVG9IYXNoID0gYXJnc1tpXVxuXG4gICAgICAgIC8vIFN0cmluZ2lmeSBvYmplY3RzIHRvIGFsbG93IGhhc2hpbmdcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdUb0hhc2ggPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgYXJnVG9IYXNoID0gSlNPTi5zdHJpbmdpZnkoYXJnVG9IYXNoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29udmVydCBudW1iZXIgdG8gc3Ryb25nIHRvIGFsbG93IGhhc2hpbmdcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdUb0hhc2ggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgYXJnVG9IYXNoID0gYXJnVG9IYXNoLnRvU3RyaW5nKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgaW4gcGxhY2UgZm9yIHdlYjMgdjAueFxuICAgICAgICBpZiAoJ3V0aWxzJyBpbiB3ZWIzKSB7XG4gICAgICAgICAgdmFyIGhhc2hQaWVjZSA9IHdlYjMudXRpbHMuc2hhMyhhcmdUb0hhc2gpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIGhhc2hQaWVjZSA9IHdlYjMuc2hhMyhhcmdUb0hhc2gpXG4gICAgICAgIH1cblxuICAgICAgICBoYXNoU3RyaW5nICs9IGhhc2hQaWVjZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB3ZWIzLnV0aWxzLnNoYTMoaGFzaFN0cmluZylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEcml6emxlQ29udHJhY3RcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Ecml6emxlQ29udHJhY3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICB3ZWIzOiB7XG4gICAgLy8gYGJsb2NrYCBubyBsb25nZXIgbmVlZGVkO1xuICAgIC8vIGtlZXBpbmcgZm9yIHByZS12MS4xLjEgY29tcGF0aWJpbGl0eSB3aXRoIGRyaXp6bGUtcmVhY3QuXG4gICAgYmxvY2s6IGZhbHNlLFxuICAgIGZhbGxiYWNrOiB7XG4gICAgICB0eXBlOiAnd3MnLFxuICAgICAgdXJsOiAnd3M6Ly8xMjcuMC4wLjE6ODU0NSdcbiAgICB9XG4gIH0sXG4gIGNvbnRyYWN0czogW10sXG4gIGV2ZW50czoge30sXG4gIHBvbGxzOiB7XG4gICAgYmxvY2tzOiAzMDAwXG4gIH0sXG4gIHN5bmNBbHdheXM6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRPcHRpb25zXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RlZmF1bHRPcHRpb25zLmpzIiwiaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSdcbmNvbnN0IGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdpcy1wbGFpbi1vYmplY3QnKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGVmYXVsdE9wdGlvbnMsIG5ld09wdGlvbnMpIHtcbiAgcmV0dXJuIG1lcmdlKGRlZmF1bHRPcHRpb25zLCBuZXdPcHRpb25zLCB7XG4gICAgaXNNZXJnZWFibGVPYmplY3Q6IGlzUGxhaW5PYmplY3RcbiAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tZXJnZU9wdGlvbnMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTQ3X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJkZWVwbWVyZ2VcIlxuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xNDhfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImlzLXBsYWluLW9iamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE0OV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwid2ViM1wiXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cbmltcG9ydCBhY2NvdW50c1JlZHVjZXIgZnJvbSAnLi9hY2NvdW50cy9hY2NvdW50c1JlZHVjZXInXG5pbXBvcnQgYWNjb3VudEJhbGFuY2VzUmVkdWNlciBmcm9tICcuL2FjY291bnRCYWxhbmNlcy9hY2NvdW50QmFsYW5jZXNSZWR1Y2VyJ1xuaW1wb3J0IGNvbnRyYWN0c1JlZHVjZXIgZnJvbSAnLi9jb250cmFjdHMvY29udHJhY3RzUmVkdWNlcidcbmltcG9ydCBkcml6emxlU3RhdHVzUmVkdWNlciBmcm9tICcuL2RyaXp6bGVTdGF0dXMvZHJpenpsZVN0YXR1c1JlZHVjZXInXG5pbXBvcnQgdHJhbnNhY3Rpb25zUmVkdWNlciBmcm9tICcuL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IHRyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyIGZyb20gJy4vdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uU3RhY2tSZWR1Y2VyJ1xuaW1wb3J0IHdlYjNSZWR1Y2VyIGZyb20gJy4vd2ViMy93ZWIzUmVkdWNlcidcblxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFjY291bnRzOiBhY2NvdW50c1JlZHVjZXIsXG4gIGFjY291bnRCYWxhbmNlczogYWNjb3VudEJhbGFuY2VzUmVkdWNlcixcbiAgY29udHJhY3RzOiBjb250cmFjdHNSZWR1Y2VyLFxuICBkcml6emxlU3RhdHVzOiBkcml6emxlU3RhdHVzUmVkdWNlcixcbiAgdHJhbnNhY3Rpb25zOiB0cmFuc2FjdGlvbnNSZWR1Y2VyLFxuICB0cmFuc2FjdGlvblN0YWNrOiB0cmFuc2FjdGlvblN0YWNrUmVkdWNlcixcbiAgd2ViMzogd2ViM1JlZHVjZXJcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZWR1Y2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==