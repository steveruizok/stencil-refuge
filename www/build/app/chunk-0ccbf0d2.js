/*! Built with http://stenciljs.com */
const { h } = window.App;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var TypeKeys;
(function (TypeKeys) {
    TypeKeys["NULL"] = "NULL";
    TypeKeys["ERROR"] = "ERROR";
    TypeKeys["SET_GOOGLE_SERVICES"] = "SET_GOOGLE_SERVICES";
    TypeKeys["SET_RESULTS_FILTER"] = "SET_RESULTS_FILTER";
    TypeKeys["SET_RESULTS"] = "SET_RESULTS";
    TypeKeys["SET_MARKERS"] = "SET_MARKERS";
    TypeKeys["SET_PREDICTIONS"] = "SET_PREDICTIONS";
    TypeKeys["SET_USER_LOCATION"] = "SET_USER_LOCATION";
    TypeKeys["SET_FOCUSED_RESULT"] = "SET_FOCUSED_RESULT";
    TypeKeys["SET_SELECTED_RESULT"] = "SET_SELECTED_RESULT";
    TypeKeys["SET_LOADING"] = "SET_LOADING";
    TypeKeys["RESET_ALL"] = "RESET_ALL";
})(TypeKeys || (TypeKeys = {}));

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const setResultsFilter = (change) => (dispatch, _getState) => __awaiter(undefined, void 0, void 0, function* () {
    return dispatch({
        type: TypeKeys.SET_RESULTS_FILTER,
        change: change
    });
});
const setResults = (results = []) => (dispatch, _getState) => __awaiter(undefined, void 0, void 0, function* () {
    return dispatch({
        type: TypeKeys.SET_RESULTS,
        results: results
    });
});
const setMarkers = (markers = []) => (dispatch, _getState) => __awaiter(undefined, void 0, void 0, function* () {
    return dispatch({
        type: TypeKeys.SET_MARKERS,
        markers: markers
    });
});
const setPredictions = (predictions = []) => (dispatch, _getState) => __awaiter(undefined, void 0, void 0, function* () {
    return dispatch({
        type: TypeKeys.SET_PREDICTIONS,
        predictions: predictions
    });
});
const setUserLocation = (location) => (dispatch, _getState) => __awaiter(undefined, void 0, void 0, function* () {
    return dispatch({
        type: TypeKeys.SET_USER_LOCATION,
        location: location
    });
});
const setFocusedResult = (focused) => (dispatch, _getState) => __awaiter(undefined, void 0, void 0, function* () {
    return dispatch({
        type: TypeKeys.SET_FOCUSED_RESULT,
        focused: focused
    });
});
const setSelectedResult = (selected) => (dispatch, _getState) => __awaiter(undefined, void 0, void 0, function* () {
    return dispatch({
        type: TypeKeys.SET_SELECTED_RESULT,
        selected: selected
    });
});
const setLoading = (loading) => (dispatch, _getState) => __awaiter(undefined, void 0, void 0, function* () {
    return dispatch({
        type: TypeKeys.SET_LOADING,
        loading: loading
    });
});
const resetAll = () => (dispatch, _getState) => __awaiter(undefined, void 0, void 0, function* () {
    return dispatch({
        type: TypeKeys.RESET_ALL
    });
});

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

export { commonjsGlobal as a, unwrapExports as b, createCommonjsModule as c, TypeKeys as d, setResults as e, setMarkers as f, setUserLocation as g, setFocusedResult as h, setSelectedResult as i, setLoading as j, classnames as k, setResultsFilter as l, setPredictions as m, resetAll as n };
