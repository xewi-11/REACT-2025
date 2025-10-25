import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MenuRutas from "./MenuRutas";
import Equipo from "./Equipo";
import Jugadores from "./Jugadores";
import DetallesJugador from "./DetallesJugador";
import Home from "./Home";

export default class Router extends Component {
  render() {
    function EquipoElement() {
      let { idEquipo } = useParams();
      return <Equipo idEquipo={idEquipo} />;
    }
    function JugadoresElement() {
      let { idEquipo } = useParams();
      return <Jugadores idEquipo={idEquipo} />;
    }
    function DetallesJugadorElement() {
      let { idJugador } = useParams();
      return <DetallesJugador idJugador={idJugador} />;
    }
    return (
      <BrowserRouter>
        <MenuRutas />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipos/:idEquipo" element={<EquipoElement />} />
          <Route path="/jugadores/:idEquipo" element={<JugadoresElement />} />
          <Route
            path="/detallesjugador/:idJugador"
            element={<DetallesJugadorElement />}
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
