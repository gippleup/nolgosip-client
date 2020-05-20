import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
