import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";
import Alumnos from "./Alumnos";

export default class Cursos extends Component {
  url = "https://apiejemplos.azurewebsites.net/";
  selectCurso = React.createRef();
  state = {
    cursos: [],
    cursoSeleccionado: "",
    alumnoSelecionado: null,
  };
  cargarCursos = () => {
    let request = "api/Alumnos/Cursos";
    axios.get(this.url + request).then((res) => {
      this.setState({
        cursos: res.data,
      });
    });
  };
  cargarDatos = (event) => {
    event.preventDefault();
    let curso = this.selectCurso.current.value;
    this.setState({
      cursoSeleccionado: curso,
    });
  };
  componentDidMount = () => {
    this.cargarCursos();
  };
  recogerAlumno = (alumno) => {
    this.setState({
      alumnoSelecionado: alumno,
    });
  };
  render() {
    return (
      <div>
        Cursos
        <select ref={this.selectCurso} onChange={this.cargarDatos}>
          <option>Seleccione una opcion</option>
          {this.state.cursos.map((curso, index) => {
            return (
              <option key={index} value={curso}>
                {curso}
              </option>
            );
          })}
        </select>
        <Alumnos
          callParent={this.recogerAlumno}
          curso={this.state.cursoSeleccionado}
        />
        {/* Contenedor de carta para el alumno seleccionado */}
        <div style={{ marginTop: "30px" }}>
          {this.state.alumnoSelecionado && (
            <div
              style={{
                border: "1px solid #32e16fff",
                borderRadius: "12px",
                padding: "16px",
                maxWidth: "400px",
                boxShadow: "0 2px 8px rgba(248, 61, 5, 0.1)",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "#333" }}>
                {this.state.alumnoSelecionado.nombre}
              </h3>
              <p>
                <strong>ID:</strong> {this.state.alumnoSelecionado.idAlumno}
              </p>
              <img
                src={this.state.alumnoSelecionado.imagen}
                alt="foto alumno"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginTop: "10px",
                  display: "block",
                }}
              />
              <p>
                <strong>Curso:</strong> {this.state.cursoSeleccionado}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
