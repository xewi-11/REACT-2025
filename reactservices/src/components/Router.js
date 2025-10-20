import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceApiSuppliers from "./ServiceApiSuppliers";
import TablaMultiplicar from "./TablaMultiplicar";
import Home from "./Home";
import NotFound from "./NotFound";
import { useParams } from "react-router-dom";
import Collatz from "./Collatz";
export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
      // esta funcion nos servira para capturar los paarametors recibidos en una ruta y enviarlos con props a nuestro component

      let { minumero } = useParams();
      return <TablaMultiplicar numero={minumero} />;
    }
    function CollatzElement() {
      let { numero } = useParams();
      return <Collatz numero={numero} />;
    }
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tabla/:minumero"
            element={<TablaMultiplicarElement />}
          />
          <Route path="/collatz/:numero" element={<CollatzElement />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
