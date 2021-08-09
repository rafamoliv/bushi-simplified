import React from "react";
import { store } from "./store/index";
import { Provider } from "react-redux";

import "./assets/globalStyles.scss";

function App() {
  return (
    <Provider store={store}>
      <h1>Hi everyone from CyberLabs</h1>
    </Provider>
  );
}

export default App;
