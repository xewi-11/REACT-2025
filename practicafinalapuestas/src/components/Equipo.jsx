import axios from "axios";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const BotonJugadores = ({ idEquipo }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/jugadores/" + idEquipo)}>
      Jugadores
    </button>
  );
};

const BotonVolver = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/")}>Volver</button>;
};

export default class Equipo extends Component {
  url = "https://apiapuestas.azurewebsites.net/api/Equipos/";
  state = {
    equipo: {},
  };
  cargarInformacionEquipo = () => {
    axios
      .get(this.url + this.props.idEquipo)
      .then((result) => {
        console.log(result.data);
        this.setState({ equipo: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount = () => {
    this.cargarInformacionEquipo();
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.idEquipo != this.props.idEquipo) {
      this.cargarInformacionEquipo();
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.equipo.nombre}</h1>
        <img
          src={this.state.equipo.imagen}
          alt={this.state.equipo.nombre}
          style={{ width: "150px", height: "150px" }}
        />
        <h3>Champions: {this.state.equipo.champions}</h3>
        <p>{this.state.equipo.descripcion}</p>

        <BotonJugadores idEquipo={this.props.idEquipo} />
        <BotonVolver />
      </div>
    );
  }
}
