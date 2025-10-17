import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class ServiceEmpleadosOfice extends Component {
  url = Global.urlEmptOfi;
  selectOficio = React.createRef();

  cargarOficios = () => {
    var request = "api/Empleados";
    axios.get(this.url + request).then((response) => {
      var empleados = response.data;
      var ofiaux = [];
      empleados.forEach((empleado) => {
        // Si el oficio no está ya en ofiaux, lo agregamos
        if (!ofiaux.includes(empleado.oficio)) {
          ofiaux.push(empleado.oficio);
        }
      });
      this.setState({
        oficios: ofiaux,
      });
    });
  };
  cargarEmpleados = () => {
    let oficio = this.selectOficio.current.value;
    var request = "api/Empleados/EmpleadosOficio/" + oficio;
    axios.get(this.url + request).then((response) => {
      console.log(response.data);
      this.setState({
        empleados: response.data,
      });
    });
  };
  state = {
    oficios: [],
    empleados: [],
  };
  componentDidMount() {
    this.cargarOficios();
  }
  render() {
    return (
      <div>
        Service Empleados Ofice
        <select ref={this.selectOficio} onChange={this.cargarEmpleados}>
          <option>Seleccione un oficio</option>
          {this.state.oficios.map((oficio, index) => {
            return (
              <option key={index} value={oficio}>
                {oficio}
              </option>
            );
          })}
        </select>
        <table
          style={{
            width: "80%",
            marginTop: "20px",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
                ID
              </th>
              <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
                Apellido
              </th>
              <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
                Oficio
              </th>
              <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
                Salario
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.empleados.map((empl, index) => {
              return (
                <tr key={index}>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #eee" }}
                  >
                    {empl.idEmpleado}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #eee" }}
                  >
                    {empl.apellido}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #eee" }}
                  >
                    {empl.oficio}
                  </td>
                  <td
                    style={{ padding: "8px", borderBottom: "1px solid #eee" }}
                  >
                    {empl.salario}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
