import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import store from "./store/index";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
