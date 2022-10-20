import React from "react";
import ReactDOM from "react-dom/client";
import "./custom.scss";
import "./index.css";
// import App from "./App";
import store from "./redux/store";
import { Provider, useSelector } from "react-redux";
import Admin from "./users/Admin";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<Admin />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </Provider>
);
