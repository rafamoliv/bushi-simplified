import React from "react";
import { store } from "./store/index";
import { Provider } from "react-redux";

import "./assets/globalStyles.scss";
import Routes from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
