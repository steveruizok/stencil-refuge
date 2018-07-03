/*! Built with http://stenciljs.com */
const { h } = window.App;

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

export { TypeKeys as a, setResults as b, setMarkers as c, setUserLocation as d, setFocusedResult as e, setSelectedResult as f, setResultsFilter as g, setPredictions as h };
