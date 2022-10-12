import React from "react";
import ReactDOM from "react-dom/client";
import "./custom.scss";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import Admin from "./users/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Admin />
  </Provider>
);
