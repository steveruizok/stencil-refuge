import { TypeKeys, ActionTypes } from "../actions/index";

interface AppState {
  service: any;
  map: any;
  filter: {
    accessible: boolean;
    unisex: boolean;
    changing_table: boolean;
  };
  results: Array<any>;
  markers: Array<any>;
  predictions: Array<any>;
  location: any;
  focused: any;
  selected: any;
}

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
    selected: undefined
  };
};

const app = (state: AppState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case TypeKeys.SET_GOOGLE_SERVICES: {
      return { ...state, map: action.map, service: action.service };
    }
    case TypeKeys.SET_RESULTS_FILTER: {
      let newFilter = Object.assign({}, state.filter, action.change);
      return { ...state, filter: newFilter };
    }
    case TypeKeys.SET_RESULTS: {
      return { ...state, results: action.results };
    }
    case TypeKeys.SET_MARKERS: {
      return { ...state, markers: action.markers };
    }
    case TypeKeys.SET_PREDICTIONS: {
      return { ...state, predictions: action.predictions };
    }
    case TypeKeys.SET_USER_LOCATION: {
      return { ...state, location: action.location };
    }
    case TypeKeys.SET_FOCUSED_RESULT: {
      return { ...state, focused: action.focused };
    }
    case TypeKeys.SET_SELECTED_RESULT: {
      return { ...state, selected: action.selected };
    }
  }

  return state;
};

export default app;
