import React, { Component } from "react";
import Empleados from "./Empleados";
import Global from "../../Global";
import axios from "axios";

export default class Departamentos extends Component {
  url = Global.urlDepartamentos;
  selectDepartamento = React.createRef();
  state = {
    departamentos: [],
    iddepartamento: 0,
  };
  loadDepartamentyos = () => {
    let request = "webresources/departamentos";
    axios.get(this.url + request).then((res) => {
      this.setState({
        departamentos: res.data,
      });
    });
  };
  componentDidMount = () => {
    this.loadDepartamentyos();
  };
  buscarEmpleados = (event) => {
    event.preventDefault();
    let iddepartamento = this.selectDepartamento.current.value;
    this.setState({
      iddepartamento: iddepartamento,
    });
  };
  render() {
    return (
      <div>
        <h1>Departamentos components</h1>
        <form>
          <select ref={this.selectDepartamento}>
            {this.state.departamentos.map((dept, index) => {
              return (
                <option key={index} value={dept.numero}>
                  {dept.nombre}
                </option>
              );
            })}
          </select>
          <button onClick={this.buscarEmpleados}>Buscar Empleados</button>
        </form>
        {this.state.iddepartamento != 0 && (
          <Empleados idDepartamento={this.state.iddepartamento} />
        )}
      </div>
    );
  }
}
