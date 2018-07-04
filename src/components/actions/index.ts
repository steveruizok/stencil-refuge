import {
  SetResultsFilterAction,
  SetGoogleServicesAction,
  SetResultsAction,
  SetMarkersAction,
  SetPredictionsAction,
  SetUserLocationAction,
  SetFocusedResultAction,
  SetSelectedResultAction,
  SetLoadingAction,
  ResetAllAction
} from "./app";

export interface NullAction {
  type: TypeKeys.NULL;
}

export type ActionTypes =
  | NullAction
  | SetGoogleServicesAction
  | SetResultsFilterAction
  | SetResultsAction
  | SetPredictionsAction
  | SetUserLocationAction
  | SetFocusedResultAction
  | SetSelectedResultAction
  | SetLoadingAction
  | ResetAllAction
  | SetMarkersAction;

export enum TypeKeys {
  NULL = "NULL",
  ERROR = "ERROR",
  SET_GOOGLE_SERVICES = "SET_GOOGLE_SERVICES",
  SET_RESULTS_FILTER = "SET_RESULTS_FILTER",
  SET_RESULTS = "SET_RESULTS",
  SET_MARKERS = "SET_MARKERS",
  SET_PREDICTIONS = "SET_PREDICTIONS",
  SET_USER_LOCATION = "SET_USER_LOCATION",
  SET_FOCUSED_RESULT = "SET_FOCUSED_RESULT",
  SET_SELECTED_RESULT = "SET_SELECTED_RESULT",
  SET_LOADING = "SET_LOADING",
  RESET_ALL = "RESET_ALL"
}
