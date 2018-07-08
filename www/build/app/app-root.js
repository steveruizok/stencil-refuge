/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as commonjsGlobal, b as unwrapExports, c as createCommonjsModule, d as TypeKeys, e as setResults, f as setMarkers, g as setUserLocation, h as setFocusedResult, i as setSelectedResult, j as setLoading, k as classnames, l as setResultsFilter } from './chunk-0ccbf0d2.js';

var global$1 = (typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {});

if (typeof global$1.setTimeout === 'function') ;
if (typeof global$1.clearTimeout === 'function') ;

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance$1 = global$1.performance || {};
var performanceNow =
  performance$1.now        ||
  performance$1.mozNow     ||
  performance$1.msNow      ||
  performance$1.oNow       ||
  performance$1.webkitNow  ||
  function(){ return (new Date()).getTime() };

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global$1 !== 'undefined') {
  root = global$1;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
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

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning("You are currently using minified code outside of NODE_ENV === 'production'. " + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

var reduxLogger = createCommonjsModule(function (module, exports) {
!function(e,t){t(exports);}(commonjsGlobal,function(e){function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}});}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0});}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0});}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0});}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0});}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0});}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return "object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1]);}}}g.push(d);}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])));}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p);}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p);});}p.length=p.length-1;}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)));}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e);},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs;}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs;}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs;}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]];}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t);}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]];}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n);};l(e,t,n);}}function y(e){return "color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return [r.join("."),n,"→",o];case"N":return [r.join("."),o];case"D":return [r.join(".")];case"A":return [r.join(".")+"["+i+"]",a];default:return []}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff");}catch(e){r.log("diff");}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)));}):r.log("—— no diff ——");try{r.groupEnd();}catch(e){r.log("—— diff end —— ");}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return "function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O);}catch(e){r.log(O);}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h);}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S);}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y);}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w);}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd();}catch(e){r.log("—— log end ——");}});}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l);}catch(e){c.error=o(e);}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof commonjsGlobal?"undefined":N(commonjsGlobal))&&commonjsGlobal?commonjsGlobal:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0);}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return "undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e();}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return "inherit"},prevState:function(){return "#9E9E9E"},action:function(){return "#03A9F4"},nextState:function(){return "#4CAF50"},error:function(){return "#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return "function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0});});
});

var logger = unwrapExports(reduxLogger);

const getInitialState = () => {
    return {
        service: undefined,
        map: undefined,
        filter: {
            accessible: false,
            unisex: false,
            changing_table: false
        },
        results: [],
        markers: [],
        predictions: [],
        location: undefined,
        focused: undefined,
        selected: undefined,
        loading: false
    };
};
const app = (state = getInitialState(), action) => {
    switch (action.type) {
        case TypeKeys.SET_GOOGLE_SERVICES: {
            return Object.assign({}, state, { map: action.map, service: action.service });
        }
        case TypeKeys.SET_RESULTS_FILTER: {
            let newFilter = Object.assign({}, state.filter, action.change);
            return Object.assign({}, state, { filter: newFilter });
        }
        case TypeKeys.SET_RESULTS: {
            if (!state.loading) {
                return state;
            }
            return Object.assign({}, state, { results: action.results });
        }
        case TypeKeys.SET_MARKERS: {
            if (!state.loading) {
                return state;
            }
            return Object.assign({}, state, { markers: action.markers });
        }
        case TypeKeys.SET_PREDICTIONS: {
            return Object.assign({}, state, { predictions: action.predictions });
        }
        case TypeKeys.SET_USER_LOCATION: {
            return Object.assign({}, state, { location: action.location });
        }
        case TypeKeys.SET_FOCUSED_RESULT: {
            return Object.assign({}, state, { focused: action.focused, selected: undefined });
        }
        case TypeKeys.SET_SELECTED_RESULT: {
            return Object.assign({}, state, { selected: action.selected });
        }
        case TypeKeys.SET_LOADING: {
            return Object.assign({}, state, { loading: action.loading });
        }
        case TypeKeys.RESET_ALL: {
            state.markers.forEach(function (marker) {
                marker.setMap(null);
            });
            return Object.assign({}, state, { loading: false, results: [], focused: undefined, selected: undefined, predictions: [], markers: [] });
        }
    }
    return state;
};

const rootReducer = combineReducers({
    app
});

const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, applyMiddleware(logger));

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class AppRoot {
    constructor() {
        this.loading = true;
        // Update the user location on the map
        this.setUserPosition = position => {
            this.setUserLocation(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            if (this.userLocationMarker === null) {
                this.setLoading(false);
                return;
            }
            this.userLocationMarker = new google.maps.Marker({
                position: this.location,
                map: this.map,
                icon: "/assets/icons/marker-location.png"
            });
            this.map.panTo(this.location);
            this.setLoading(false);
            this.updateUserPosition();
            // testing
            this.searchByUserLocation();
        };
        this.updateUserPosition = () => {
            // this.userLocationMarker.icon.rotation = position.heading;
            this.userLocationMarker.position = this.location;
        };
        // Make a search using the user location
        this.searchByUserLocation = () => {
            if (!this.location) {
                return;
            }
            this.getRefugeRestroomResults(this.location);
            let input = document.getElementById("search-input");
            input.value = "My Location";
        };
        // Get geography from an autocomplete prediction and search
        this.searchByPrediction = prediction => {
            if (prediction === undefined) {
                this.searchByUserLocation();
                return;
            }
            this.service.getDetails({
                placeId: prediction.place_id
            }, details => {
                this.getRefugeRestroomResults(details.geometry.location);
            });
        };
        // Get results from refuge API
        this.getRefugeRestroomResults = (latlng) => {
            this.clearMarkers();
            this.setResults([]);
            this.setLoading(true);
            // this.map.panTo(latlng);
            let url = "https://cors-anywhere.herokuapp.com/" +
                "https://www.refugerestrooms.org/api/v1/restrooms/by_location.json?" +
                `lat=${latlng.lat()}&lng=${latlng.lng()}`;
            fetch(url, {
                method: "GET"
            }).then(res => {
                if (!res.ok) {
                    throw res.statusText;
                }
                res.json().then(results => {
                    this.setResults(results);
                    this.getMarkers();
                    this.setBounds();
                });
            });
        };
        // Get a new set of markers from the refuge results
        this.getMarkers = () => {
            let markers;
            markers = this.results.map(result => {
                let marker = new google.maps.Marker({
                    map: this.map,
                    position: new google.maps.LatLng(result.latitude, result.longitude),
                    title: result.name
                    // icon: "assets/icons/marker-default.svg"
                });
                marker.addListener("click", () => {
                    if (this.selected === result) {
                        this.setSelectedResult(undefined);
                        return;
                    }
                    if (this.focused === result) {
                        this.setSelectedResult(result);
                        return;
                    }
                    this.setFocusedResult(result);
                });
                return marker;
            });
            this.setMarkers(markers);
        };
        // Set map bounds to current markers
        this.setBounds = () => {
            let bounds = new google.maps.LatLngBounds();
            this.markers.forEach(marker => {
                bounds.extend(marker.getPosition());
            });
            this.map.fitBounds(bounds);
            this.setLoading(false);
        };
        // Update which markers are visible
        this.updateMarkers = () => {
            this.results.forEach((res, i) => {
                let ok = true;
                for (let key in this.filter) {
                    if (this.filter[key] === true && ok) {
                        ok = res[key] === this.filter[key];
                    }
                }
                let image = "marker-default-a";
                if (res === this.focused) {
                    image = "marker-focused-a";
                }
                this.markers[i].setIcon(`/assets/icons/${image}.svg`);
                this.markers[i].setVisible(ok);
            });
        };
        this.clearMarkers = () => {
            this.markers.forEach(function (marker) {
                marker.setMap(null);
            });
            this.setFocusedResult(undefined);
            this.setLoading(false);
        };
    }
    loadScript() {
        return new Promise(resolve => {
            this.script = document.createElement("script");
            this.script.src =
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyBn5_4mxpPCKRVuLL1TlL_P62lNXInDXHA&libraries=places";
            document.body.appendChild(this.script);
            resolve();
        });
    }
    componentWillLoad() {
        this.store.setStore(configureStore(undefined));
        this.store.mapStateToProps(this, state => {
            const { app: { filter, results, markers, location, focused, selected } } = state;
            return { filter, results, markers, location, focused, selected };
        });
        this.store.mapDispatchToProps(this, {
            setResults,
            setMarkers,
            setUserLocation,
            setFocusedResult,
            setSelectedResult,
            setLoading
        });
    }
    componentDidLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadScript();
            this.script.addEventListener("load", () => __awaiter(this, void 0, void 0, function* () {
                console.log("ok...");
                this.map = new google.maps.Map(document.getElementById("refuge-map"), {
                    center: { lat: -33.8688, lng: 151.2195 },
                    zoom: 13,
                    disableDefaultUI: true
                });
                this.service = new google.maps.places.PlacesService(this.map);
                this.autocomplete = new google.maps.places.AutocompleteService();
                if ("geolocation" in navigator) {
                    console.log("ok...");
                    navigator.geolocation.getCurrentPosition(this.setUserPosition, () => {
                        this.setLoading(false);
                    });
                    navigator.geolocation.watchPosition(this.updateUserPosition);
                }
            }));
        });
    }
    render() {
        this.updateMarkers();
        return [
            h("refuge-header", { handleSearch: this.searchByPrediction, autocomplete: this.autocomplete }),
            h("refuge-map", { id: "refuge-map" }),
            h("refuge-results", { results: this.results }),
            h("refuge-predictions", null),
            h("refuge-detail", null)
            // <div class={overlayClasses}>
            //   <button class={buttonClasses} onClick={this.searchByUserLocation}>
            //     find a restroom near you
            //     <span class="inline-icon material-icons">my_location</span>
            //   </button>
            //   <p class="copyright">
            //     <a class="shy-link" href="http://twitter.com/steveruizok">
            //       @steveruizok
            //     </a>{" "}
            //     2018
            //   </p>
            // </div>
        ];
    }
    static get is() { return "app-root"; }
    static get properties() { return {
        "autocomplete": {
            "state": true
        },
        "filter": {
            "state": true
        },
        "focused": {
            "state": true
        },
        "loading": {
            "state": true
        },
        "location": {
            "state": true
        },
        "map": {
            "state": true
        },
        "markers": {
            "state": true
        },
        "results": {
            "state": true
        },
        "selected": {
            "state": true
        },
        "service": {
            "state": true
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return "app-root {\n  display: grid;\n  grid-auto-columns: 100vw;\n  grid-template-rows: 60px auto -webkit-min-content;\n  grid-template-rows: 60px auto min-content;\n  z-index: 10;\n  height: 100%;\n}\n/* \n.location-container {\n  position: absolute;\n  display: grid;\n  grid-template-columns: 8px auto 8px;\n  width: 100%;\n  bottom: 10%;\n  z-index: 50;\n}\n\n.location-search {\n  grid-column: 2;\n}\n\n.copyright,\n.copyright a {\n  display: block;\n  grid-column: 2;\n  width: 100%;\n  bottom: 16px;\n  text-align: center;\n  font-size: 12px;\n  color: var(--blue-med);\n  z-index: 50;\n}\n\n.loading {\n  -webkit-filter: brightness(0.85);\n  filter: brightness(0.95);\n} */"; }
}

class RefugeDetail {
    constructor() {
        this.getVisible = (prop) => {
            return classnames({
                icon: true,
                padded: true,
                inactive: !this.selected[prop]
            });
        };
        this.getInfo = (prop, icon) => {
            if (!this.selected[prop]) {
                return;
            }
            if (this.selected[prop].length <= 0) {
                return;
            }
            return (h("div", { class: "detail-row" },
                h("div", { class: "detail-left" },
                    h("ref-icon", { icon: icon })),
                h("div", { class: "detail-comment" },
                    h("p", null, this.selected[prop]))));
        };
    }
    componentDidLoad() {
        this.store.mapStateToProps(this, state => {
            const { app: { selected } } = state;
            return { selected };
        });
        this.store.mapDispatchToProps(this, {
            setSelectedResult
        });
    }
    componentDidUpdate() { }
    render() {
        let classes = classnames({
            "detail-container": true,
            "detail-open": this.selected
        });
        if (!this.selected) {
            return h("div", { class: classes });
        }
        return (h("div", { class: classes, onClick: () => {
                this.setSelectedResult(undefined);
            } },
            h("div", { class: "handle" }),
            h("div", { class: "detail-row" },
                h("div", { class: "detail-left" },
                    h("ref-icon", { icon: "marker-focused" })),
                h("div", { class: "detail-center" },
                    h("p", { class: "detail-name" }, this.selected.name),
                    h("p", { class: "detail-address" }, this.selected.street)),
                h("div", { class: "right" },
                    h("ref-icon", { classes: this.getVisible("accessible"), icon: "accessible" }),
                    h("ref-icon", { classes: this.getVisible("unisex"), icon: "unisex" }),
                    h("ref-icon", { classes: this.getVisible("accessible"), icon: "changing_table" }))),
            this.getInfo("directions", "info"),
            this.getInfo("comment", "comment")));
    }
    static get is() { return "refuge-detail"; }
    static get properties() { return {
        "elm": {
            "elementRef": true
        },
        "selected": {
            "state": true
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return "refuge-detail {\n  position: absolute;\n  height: auto;\n  width: 100%;\n  bottom: 0;\n  z-index: 999;\n  background: var(--white);\n  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);\n  border-top: 1px solid var(--med-grey);\n  border-radius: 12px 12px 0 0px;\n}\n\n.detail-container {\n  width: 100%;\n  overflow-y: scroll;\n  height: 0px;\n  -webkit-transition: height 0.15s;\n  transition: height 0.15s;\n}\n\n.handle {\n  position: absolute;\n  top: 8px;\n  height: 4px;\n  width: 24px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 4px;\n  background: var(--med-grey);\n}\n\n.detail-row {\n  position: relative;\n  display: grid;\n  width: 100%;\n  grid-template-columns: 48px auto 120px;\n  -ms-flex-line-pack: center;\n  align-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 22px 16px 22px 0;\n}\n\n.detail-row::after {\n  content: \"\";\n  position: absolute;\n  width: auto;\n  height: 1px;\n  left: 48px;\n  right: 24px;\n  background-color: var(--light-grey);\n  bottom: 1px;\n}\n\n.detail-name {\n  display: block;\n  padding: 0;\n  margin: 0;\n}\n\n.detail-address {\n  display: block;\n  padding: 0;\n  margin: 0;\n  color: var(--dark-grey);\n}\n\n.detail-left {\n  grid-column: 1;\n  text-align: center;\n}\n\n.detail-center {\n  grid-column: 2;\n  text-align: left;\n  padding-right: 16px;\n}\n\n.detail-right {\n  grid-column: 3;\n}\n\n.detail-comment {\n  grid-column: 2 / 4;\n  text-align: left;\n  font-size: 14px;\n}\n\n.detail-open {\n  height: 50vh;\n  -webkit-transition: height 0.25s;\n  transition: height 0.25s;\n}"; }
}

class RefugeFilter {
    constructor() {
        this.clearResults = () => {
            this.clearMarkers();
            this.setResults([]);
        };
        this.clearMarkers = () => {
            this.markers.forEach(function (marker) {
                marker.setMap(null);
            });
            this.setMarkers([]);
        };
        this.getActive = (bool) => {
            return classnames({
                icon: true,
                padded: true,
                inactive: !bool,
                link: true
            });
        };
    }
    componentWillLoad() {
        this.store.mapDispatchToProps(this, {
            setResultsFilter,
            setResults,
            setMarkers
        });
        this.store.mapStateToProps(this, state => {
            const { app: { filter, markers, results } } = state;
            return { filter, markers, results };
        });
    }
    render() {
        let classes = classnames({
            "refuge-filter": true,
            hidden: this.markers.length <= 0
        });
        let results = "";
        if (this.markers.length > 0) {
            results = `(${this.markers.length})`;
        }
        return (h("div", { class: classes },
            h("div", { class: "left" },
                h("span", { class: "filter label" },
                    "Restrooms ",
                    results)),
            h("div", { class: "right" },
                h("ref-icon", { classes: this.getActive(this.filter.accessible), icon: "accessible", onClick: e => {
                        e.preventDefault();
                        this.setResultsFilter({ accessible: !this.filter.accessible });
                    } }),
                h("ref-icon", { classes: this.getActive(this.filter.unisex), icon: "unisex", onClick: e => {
                        e.preventDefault();
                        this.setResultsFilter({ unisex: !this.filter.unisex });
                    } }),
                h("ref-icon", { classes: this.getActive(this.filter.changing_table), icon: "changing_table", onClick: e => {
                        e.preventDefault();
                        this.setResultsFilter({
                            changing_table: !this.filter.changing_table
                        });
                    } }))));
    }
    static get is() { return "refuge-filter"; }
    static get properties() { return {
        "filter": {
            "state": true
        },
        "markers": {
            "state": true
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return "refuge-filter {\n  display: block;\n  background: var(--blue-med);\n  border-top: 1px solid var(--blue-dark);\n  z-index: 100;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  /* Component styles go here */\n}\n\n.refuge-filter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 12px 0 12px 16px;\n}\n\n.filter-icon {\n  cursor: pointer;\n  display: inline;\n  color: var(--white);\n  -ms-flex-item-align: center;\n  align-self: center;\n}\n\n.inactive {\n  color: var(--dark-blue);\n}\n\n.filter {\n  color: var(--white);\n}\n\n.left {\n  text-align: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.right {\n  margin-right: 12px;\n  text-align: right;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.hidden {\n  height: 0;\n  padding: 0 0 0 0;\n  -webkit-transition: all 0.25s;\n  transition: all 0.25s;\n  overflow: hidden;\n}"; }
}

class RefugeMap {
    render() {
        return h("div", { id: "refuge-map" });
    }
    static get is() { return "refuge-map"; }
    static get style() { return "refuge-map {\n  grid-row: 2;\n}\n\n#refuge-map {\n}"; }
}

class RefugePredictions {
    constructor() {
        this.predictions = [];
    }
    componentDidLoad() {
        this.store.mapStateToProps(this, state => {
            const { app: { predictions } } = state;
            return { predictions };
        });
    }
    render() {
        this.elem.classList.toggle("open", this.predictions.length > 0);
        return this.predictions;
    }
    static get is() { return "refuge-predictions"; }
    static get properties() { return {
        "elem": {
            "elementRef": true
        },
        "predictions": {
            "state": true
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return "refuge-predictions {\n  position: absolute;\n  top: 60px;\n  width: 100%;\n  overflow: scroll;\n  list-style-type: none;\n  margin: none;\n  background: none;\n  border-bottom: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-transition: height 0.25s;\n  transition: height 0.25s;\n  z-index: 200;\n}\n\n.open {\n  -webkit-transition: height 0.25s;\n  transition: height 0.25s;\n  background: var(--pale-grey);\n  border-bottom: 1px solid var(--med-grey);\n  -webkit-box-shadow: var(--shadow);\n  box-shadow: var(--shadow);\n  min-height: 80vh;\n}"; }
}

class RefugeResult {
    constructor() {
        this.getVisible = (prop) => {
            return classnames({
                icon: true,
                padded: true,
                inactive: !this.result[prop]
            });
        };
    }
    render() {
        let markerIcon = this.focused ? "marker-focused-a" : "marker-default-a";
        return [
            h("div", { class: "result-left" },
                h("ref-icon", { classes: "icon marker", icon: markerIcon })),
            h("div", { class: "center" },
                h("p", { class: "result-name" }, this.result.name),
                h("p", { class: "result-address" }, this.result.street)),
            h("div", { class: "right" },
                h("ref-icon", { classes: this.getVisible("accessible"), icon: "accessible" }),
                h("ref-icon", { classes: this.getVisible("unisex"), icon: "unisex" }),
                h("ref-icon", { classes: this.getVisible("accessible"), icon: "changing_table" }))
        ];
    }
    static get is() { return "refuge-result"; }
    static get properties() { return {
        "focused": {
            "type": Boolean,
            "attr": "focused"
        },
        "result": {
            "type": "Any",
            "attr": "result"
        }
    }; }
    static get style() { return "refuge-result {\n  display: grid;\n  grid-template-columns: 48px auto 120px;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  /* padding: 16px 24px 16px 16px; */\n  /* Component styles go here */\n}\n\n.result-name {\n  display: block;\n  padding: 0;\n  margin: 0;\n}\n\n.result-address {\n  display: block;\n  padding: 0;\n  margin: 0;\n  color: var(--dark-grey);\n}\n\n.result-left {\n  grid-column: 1;\n  text-align: center;\n}\n\n.center {\n  grid-column: 2;\n  text-align: left;\n  padding-right: 16px;\n  padding: 20px 16px 20px 0;\n  border-bottom: 1px solid var(--light-grey);\n}\n\n.right {\n  grid-column: 3;\n}"; }
}

class RefugeResults {
    constructor() {
        this.entries = [];
        this.results = [];
        this.getEntries = () => {
            let results = this.results.filter(result => {
                let passed_filters = true;
                for (let key in this.filter) {
                    if (this.filter[key] === true && passed_filters) {
                        passed_filters = result[key] === this.filter[key];
                    }
                }
                return passed_filters;
            });
            return results.map(r => {
                let fcs = r === this.focused;
                return (h("refuge-result", { result: r, focused: fcs, onClick: () => {
                        if (this.focused === r) {
                            this.setSelectedResult(r);
                            return;
                        }
                        this.setFocusedResult(r);
                    } }));
            });
        };
    }
    componentWillLoad() {
        this.store.mapDispatchToProps(this, {
            setResultsFilter,
            setFocusedResult,
            setSelectedResult
        });
        this.store.mapStateToProps(this, state => {
            const { app: { filter, focused, results } } = state;
            return { filter, focused, results };
        });
    }
    componentDidUpdate() {
        if (!this.focused) {
            return;
        }
        let focusedIndex = this.results.indexOf(this.focused);
        let focusedEntry = this.entries[focusedIndex];
        if (!focusedEntry) {
            return;
        }
        document.getElementById("results-scroll").scrollTop =
            focusedEntry.elm.offsetTop;
    }
    render() {
        this.entries = this.getEntries();
        let resultsClass = classnames({
            "refuge-results": true,
            "results-open": this.results.length > 0
        });
        return [
            h("refuge-filter", null),
            h("div", { id: "results-scroll", class: resultsClass }, this.entries)
        ];
    }
    static get is() { return "refuge-results"; }
    static get properties() { return {
        "elem": {
            "elementRef": true
        },
        "entries": {
            "state": true
        },
        "filter": {
            "state": true
        },
        "focused": {
            "state": true
        },
        "results": {
            "state": true
        },
        "store": {
            "context": "store"
        }
    }; }
    static get style() { return "refuge-results {\n  grid-row: 3;\n  width: 100%;\n  background: var(--white);\n  -webkit-transition: height 0.25s;\n  transition: height 0.25s;\n  /* max-height: 50vh; */\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n\n.refuge-results {\n  position: relative;\n  -webkit-transition: height 0.15s;\n  transition: height 0.15s;\n  height: 0px;\n}\n\n.results-open {\n  -webkit-transition: height 0.25s;\n  transition: height 0.25s;\n  height: 40vh;\n}"; }
}

export { AppRoot, RefugeDetail, RefugeFilter, RefugeMap, RefugePredictions, RefugeResult, RefugeResults };
