import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import Cine from "./Cine";
import Musica from "./Musica";
import FormSimple from "./FormSimple";
import Collatz from "./Collatz";
import TablaMultiplicar from "./TablaMultiplicar";
import TablaMultiplicarv2 from "./TablaMultiplicarv2";
import SeleccionMultiple from "./SeleccionMultiple";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/cine" element={<Cine/>} />
          <Route path="/collatz" element={<Collatz/>} />
          <Route path="/tabla" element={<TablaMultiplicar/>} />
          <Route path="/tablav2" element={<TablaMultiplicarv2/>} />
          <Route path="/multiple" element={<SeleccionMultiple/>} />
          <Route path="/musica" element={<Musica/>} />
          <Route path="/form" element={<FormSimple/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
