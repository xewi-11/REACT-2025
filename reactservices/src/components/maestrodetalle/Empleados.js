import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
export default class Empleados extends Component {
  url = Global.urlEmpleados;
  loadEmpleados = () => {
    let iddepartamento = this.props.idDepartamento;
    let request = "api/Empleados/EmpleadosDepartamento/" + iddepartamento;
    axios.get(this.url + request).then((res) => {
      this.setState({
        empleados: res.data,
      });
    });
  };
  state = {
    empleados: [],
  };
  componentDidUpdate = (oldProps) => {
    console.log("current" + this.props.idDepartamento);
    console.log("old" + oldProps.idDepartamento);
    //solamente acutalizamos state si props a cambiado
    if (oldProps.idDepartamento != this.props.idDepartamento) {
      this.loadEmpleados();
    }
  };
  componentDidMount = () => {
    this.loadEmpleados();
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>Empleados {this.props.idDepartamento}</h1>
        <ul>
          {this.state.empleados.map((emp, index) => {
            return (
              <li key={index}>
                {emp.apellido}- {emp.oficio}-{emp.departamento}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
