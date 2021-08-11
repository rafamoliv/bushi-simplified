import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import reducers
import reducers from "~/store/reducers";

// create store and export
export const store = createStore(reducers, applyMiddleware(thunk));
