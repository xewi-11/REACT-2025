import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class EmpleadosDepartamento extends Component {
  url = Global.urlEmpleados;
  cajaDepartamento = React.createRef();
  buscarEmpleados = (event) => {
    event.preventDefault();
    let id = this.cajaDepartamento.current.value;
    var requestEmpleados = "api/Empleados/EmpleadosDepartamento/" + id;
    axios.get(this.url + requestEmpleados).then((response) => {
      console.log("Leyendo datos");
      console.log(response.data);

      this.setState({
        empleados: response.data,
      });
    });
  };
  state = {
    empleados: [],
  };
  render() {
    return (
      <div>
        <h1>Empleados Departamento</h1>
        <form>
          <label>Introduzca id departamento</label>
          <input type="number" ref={this.cajaDepartamento} />
          <button onClick={this.buscarEmpleados}>Buscar empleados</button>
        </form>
        <ul>
          {this.state.empleados.map((empleado, index) => {
            return <li key={index}>{empleado.idEmpleado}</li>;
          })}
        </ul>
      </div>
    );
  }
}
