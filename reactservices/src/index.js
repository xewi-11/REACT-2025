import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ServicioApiCustomers from "./components/ServicioApiCustomers";
import ServiceApiSuppliers from "./components/ServiceApiSuppliers";
import EmpleadosDepartamento from "./components/EmpleadosDepartamento";
import ServiceEmpleadosDepartamentos from "./components/ServiceEmpleadosDepartamentos";
import ServiceEmpleadosOfice from "./components/ServiceEmpleadosOfice";
import Departamentos from "./components/maestrodetalle/Departamentos";
import Cursos from "./components/ejemplocomunicacionalumno/Cursos";
import TablaMultiplicar from "./components/TablaMultiplicar";

import MenuRutas from "./components/MenuRutas";
import Router from "./components/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Index Principal</h1>
    <header>
      <MenuRutas />
    </header>
    <hr />
    <Router />
    <hr />
    <h2>pie de pagina</h2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
