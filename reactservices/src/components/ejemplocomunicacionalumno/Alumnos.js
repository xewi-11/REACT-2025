import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class Alumnos extends Component {
  url = "https://apiejemplos.azurewebsites.net/";
  state = {
    alumnos: [],
  };
  cargarAlumnos = () => {
    let request = "api/Alumnos/FiltrarCurso/" + this.props.curso;
    axios.get(this.url + request).then((res) => {
      console.log(res.data);
      this.setState({
        alumnos: res.data,
      });
    });
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.curso != this.props.curso) {
      this.cargarAlumnos();
    }
  };
  render() {
    return (
      <div>
        Alumnos Component
        <ul>
          {this.state.alumnos.map((alum, index) => {
            return (
              <li key={index}>
                {alum.nombre}-{alum.apellidos}
                <button
                  data-key={alum.idAlumno}
                  onClick={() => {
                    this.props.callParent(alum);
                  }}
                >
                  Detalles
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
