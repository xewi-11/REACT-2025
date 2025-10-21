import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home";
import MenuHospitales from "./MenuHospitales";
import Doctores from "./Doctores";
import DetalleDoctor from "./DetalleDoctor";
import CreateHospital from "./CreateHospital";

export default class Router extends Component {
  render() {
    function DoctoresElement() {
      let { idhospital } = useParams();
      return <Doctores idhospital={idhospital} />;
    }
    function DoctorDetalleElemnt() {
      let { iddoctor } = useParams();
      return <DetalleDoctor iddoctor={iddoctor} />;
    }
    return (
      <BrowserRouter>
        <MenuHospitales />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctores/:idhospital" element={<DoctoresElement />} />
          <Route path="/insertdoctor/" element={<CreateHospital />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
