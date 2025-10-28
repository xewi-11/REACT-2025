import React, { Component } from "react";
import axios from "axios";
import { event } from "jquery";
export default class InsertarApuesta extends Component {
  idApuesta = React.createRef();
  usuarioApuesta = React.createRef();
  resultadoApuesta = React.createRef();
  fechaApuesta = React.createRef();
  url = "https://apiapuestas.azurewebsites.net/api/Apuestas/";
  insertarApuesta = (event) => {
    event.preventDefault();
    let apuesta = {};
    apuesta.idApuesta = parseInt(this.idApuesta.current.value);
    apuesta.usuarioApuesta = this.usuarioApuesta.current.value;
    apuesta.resultadoApuesta = this.resultadoApuesta.current.value;
    apuesta.fechaApuesta = this.fechaApuesta.current.value;
    axios
      .post(this.url, {
        idApuesta: apuesta.idApuesta,
        usuario: apuesta.usuarioApuesta,
        resultado: apuesta.resultadoApuesta,
        fecha: apuesta.fechaApuesta,
      })
      .then((res) => {
        console.log("Insertado correctamente");
      })
      .catch((error) => {
        console.error("Error al insertar la apuesta:", error);
      });
  };
  render() {
    return (
      <div>
        <form className="form-control" onSubmit={this.insertarApuesta}>
          <label>Introduce id de apuesta</label>
          <input className="form-control" type="text" ref={this.idApuesta} />
          <label>Introduce usuario de apuesta</label>
          <input
            className="form-control"
            type="text"
            ref={this.usuarioApuesta}
          />
          <label>Introduce resultado de apuesta</label>
          <input
            className="form-control"
            type="text"
            ref={this.resultadoApuesta}
          />
          <label>Introduce la fecha de apuesta</label>
          <input className="form-control" type="text" ref={this.fechaApuesta} />

          <button className="btn btn-primary" type="submit">
            Insertar Apuesta
          </button>
        </form>
      </div>
    );
  }
}
