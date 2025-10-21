import React, { Component } from "react";
import { NavLink, useParams } from "react-router-dom";
import Global from "../Global";
import axios from "axios";
import DetalleDoctor from "./DetalleDoctor";
export default class extends Component {
  url = Global.apiDoctores;
  state = {
    doctores: [],
    iddoctor: null,
  };
  loadDoctores = () => {
    let request = "api/Doctores/DoctoresHospital/" + this.props.idhospital;
    axios.get(this.url + request).then((res) => {
      console.log("Leyendo doctores");
      this.setState({
        doctores: res.data,
      });
    });
  };
  componentDidMount = () => {
    this.loadDoctores();
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.idhospital != this.props.idhospital) {
      this.loadDoctores();
      this.setState({
        iddoctor: null,
      });
    }
  };
  buscarDoctor = (id) => {
    this.setState({
      iddoctor: id,
    });
  };
  render() {
    return (
      <div>
        <h1>soy doctores {this.props.idhospital}</h1>
        <div className="table-responsive">
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">id Doctor: </th>
                <th scope="col">apellido</th>
                <th scope="col">especialidad</th>
                <th scope="col">salario</th>
                <th scope="col">id Hospital</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.doctores.map((doctor, index) => {
                return (
                  <tr key={index}>
                    <td>{doctor.idDoctor}</td>
                    <td>{doctor.apellido}</td>
                    <td>{doctor.especialidad}</td>
                    <td>{doctor.salario}</td>
                    <td>{doctor.idHospital}</td>
                    <td>
                      <button
                        className="btn btn-info"
                        onClick={() => this.buscarDoctor(doctor.idDoctor)}
                      >
                        Ver detalles
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {this.state.iddoctor && (
          <DetalleDoctor iddoctor={this.state.iddoctor} />
        )}
      </div>
    );
  }
}
