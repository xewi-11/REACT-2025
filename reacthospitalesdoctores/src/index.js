import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import $ from "jquery";
import Popper from "popper.js";
import Home from "./components/Home";
import MenuHospitales from "./components/MenuHospitales";
import Router from "./components/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // si trabajamos con servicios adios el React.stricdMode
  <Router />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
