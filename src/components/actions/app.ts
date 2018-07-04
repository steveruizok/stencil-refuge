import { TypeKeys } from "../actions/index";

export interface SetGoogleServicesAction {
  type: TypeKeys.SET_GOOGLE_SERVICES;
  service: any;
  map: any;
}

export interface SetResultsFilterAction {
  type: TypeKeys.SET_RESULTS_FILTER;
  change: Object;
}

export interface SetResultsAction {
  type: TypeKeys.SET_RESULTS;
  results: Array<any>;
}

export interface SetMarkersAction {
  type: TypeKeys.SET_MARKERS;
  markers: Array<any>;
}
export interface SetPredictionsAction {
  type: TypeKeys.SET_PREDICTIONS;
  predictions: Array<any>;
}
export interface SetUserLocationAction {
  type: TypeKeys.SET_USER_LOCATION;
  location: any;
}
export interface SetFocusedResultAction {
  type: TypeKeys.SET_FOCUSED_RESULT;
  focused: any;
}
export interface SetSelectedResultAction {
  type: TypeKeys.SET_SELECTED_RESULT;
  selected: any;
}
export interface SetLoadingAction {
  type: TypeKeys.SET_LOADING;
  loading: boolean;
}
export interface ResetAllAction {
  type: TypeKeys.RESET_ALL;
}

export const setGoogleServices = (service: any, map: any) => async (
  dispatch,
  _getState
) => {
  return dispatch({
    type: TypeKeys.SET_GOOGLE_SERVICES,
    service: service,
    map: map
  });
};

export const setResultsFilter = (change: Object) => async (
  dispatch,
  _getState
) => {
  return dispatch({
    type: TypeKeys.SET_RESULTS_FILTER,
    change: change
  });
};

export const setResults = (results: Array<any> = []) => async (
  dispatch,
  _getState
) => {
  return dispatch({
    type: TypeKeys.SET_RESULTS,
    results: results
  });
};

export const setMarkers = (markers: Array<any> = []) => async (
  dispatch,
  _getState
) => {
  return dispatch({
    type: TypeKeys.SET_MARKERS,
    markers: markers
  });
};

export const setPredictions = (predictions: Array<any> = []) => async (
  dispatch,
  _getState
) => {
  return dispatch({
    type: TypeKeys.SET_PREDICTIONS,
    predictions: predictions
  });
};

export const setUserLocation = (location: any) => async (
  dispatch,
  _getState
) => {
  return dispatch({
    type: TypeKeys.SET_USER_LOCATION,
    location: location
  });
};

export const setFocusedResult = (focused: any) => async (
  dispatch,
  _getState
) => {
  return dispatch({
    type: TypeKeys.SET_FOCUSED_RESULT,
    focused: focused
  });
};

export const setSelectedResult = (selected: any) => async (
  dispatch,
  _getState
) => {
  return dispatch({
    type: TypeKeys.SET_SELECTED_RESULT,
    selected: selected
  });
};

export const setLoading = (loading: boolean) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.SET_LOADING,
    loading: loading
  });
};

export const resetAll = () => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.RESET_ALL
  });
};
