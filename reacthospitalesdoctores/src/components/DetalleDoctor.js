import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
export default class DetalleDoctor extends Component {
  url = Global.apiDoctores;
  state = {
    doctor: null,
  };
  loadDoctor() {
    let request = "api/Doctores/" + this.props.iddoctor;

    axios.get(this.url + request).then((res) => {
      console.log("LEyendo datos");
      console.log(res.data);
      this.setState({
        doctor: res.data,
      });
    });
  }
  componentDidMount = () => {
    this.loadDoctor();
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.iddoctor != this.props.iddoctor) {
      this.loadDoctor();
    }
  };
  render() {
    return (
      <div>
        Detalle Doctor
        {this.state.doctor && (
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                apellido: {this.state.doctor.apellido}
              </h4>
              <p className="card-text">
                especialidad: {this.state.doctor.especialidad}
              </p>
              <p className="card-text">salario: {this.state.doctor.salario}</p>
              <p className="card-text">
                idDoctor: {this.state.doctor.idDoctor}
              </p>
              <p className="card-text">
                idHospital: {this.state.doctor.idHospital}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
