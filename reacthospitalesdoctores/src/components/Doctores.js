import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Global from "../Global";
import axios from "axios";
export default class extends Component {
  url = Global.apiDoctores;
  state = {
    doctores: [],
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
    }
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
