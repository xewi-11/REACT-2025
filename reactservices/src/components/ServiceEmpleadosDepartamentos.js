import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class ServiceEmpleadosDepartamentos extends Component {
  urlDep = Global.urlDepartamentos;
  urlEmp = Global.urlEmpleados;
  selectDepartamento = React.createRef();
  cargarDepartamentos = () => {
    let request = "webresources/departamentos";
    axios.get(this.urlDep + request).then((response) => {
      console.log("Leyendo Datos");
      console.log(response.data);
      this.setState({
        departamentos: response.data,
      });
    });
  };
  buscarEmpleados = (event) => {
    event.preventDefault();
    let id = parseInt(this.selectDepartamento.current.value);
    var requestEmpleados = "/Empleados/EmpleadosDepartamento/" + id;
    axios.get(this.urlEmp + requestEmpleados).then((response) => {
      console.log("Leyendo datos");
      console.log(response.data);

      this.setState({
        empleados: response.data,
      });
    });
  };
  state = {
    departamentos: [],
    empleados: [],
  };
  componentDidMount() {
    this.cargarDepartamentos();
  }
  render() {
    return (
      <div>
        <h1>Service Empleados Departamentos</h1>
        <form>
          <label>Seleccione una opcion</label>
          <select ref={this.selectDepartamento} onChange={this.buscarEmpleados}>
            <option>Seleccione una opcion</option>
            {this.state.departamentos.map((dept, index) => {
              return (
                <option key={index} value={dept.numero}>
                  {dept.nombre}
                </option>
              );
            })}
          </select>
        </form>
        {this.state.empleados && this.state.empleados.length > 0 ? (
          this.state.empleados.map((empl, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f9f9f9",
                margin: "15px auto",
                padding: "20px",
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                maxWidth: "400px",
                fontFamily: "Arial, sans-serif",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <h3 style={{ marginBottom: "10px", color: "#333" }}>
                🧑 Empleado ID: {empl.idEmpleado}
              </h3>
              <p style={{ margin: "6px 0" }}>
                <strong>👤 Apellido:</strong> {empl.apellido}
              </p>
              <p style={{ margin: "6px 0" }}>
                <strong>💼 Oficio:</strong> {empl.oficio}
              </p>
              <p style={{ margin: "6px 0" }}>
                <strong>💰 Salario:</strong> ${empl.salario}
              </p>
              <p style={{ margin: "6px 0" }}>
                <strong>🏢 Departamento:</strong> {empl.departamento}
              </p>
            </div>
          ))
        ) : (
          <h2 style={{ textAlign: "center", color: "#888", marginTop: "30px" }}>
            No hay empleados en este departamento
          </h2>
        )}
      </div>
    );
  }
}
