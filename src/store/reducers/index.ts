import { combineReducers } from "redux";
import { animesListSuccess, animesListFail, animesListLoading } from "./reducers";

// combine reducers
export default combineReducers({
  animesListSuccess,
  animesListFail,
  animesListLoading,
});
