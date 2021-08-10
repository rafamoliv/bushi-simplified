// import my action types
import { ActionTypes } from "../helpers/helpers";

// def my initial state
const initialState = {
  animes: [],
  loading: false,
  errorMsg: "",
};

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ANIMES_LIST_LOADING:
      return { ...state, loading: true, errorMsg: "" };

    case ActionTypes.ANIMES_LIST_FAIL:
      return { ...state, loading: true, errorMsg: "Poxa, o anime não foi encontrado." };

    case ActionTypes.ANIMES_LIST_SUCCESS:
      return { ...state, animes: [...action.payload] };

    default:
      return state;
  }
};
