import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import Cine from "./Cine";
import Musica from "./Musica";
import FormSimple from "./FormSimple";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/cine" element={<Cine/>} />
          <Route path="/musica" element={<Musica/>} />
          <Route path="/form" element={<FormSimple/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
