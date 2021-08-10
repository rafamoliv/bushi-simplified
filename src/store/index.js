import { configureStore } from "@reduxjs/toolkit";
import animesListReducer from "./reducers/reducers";

export const store = configureStore({
  reducer: {
    animesListReducer: animesListReducer,
  },
});
