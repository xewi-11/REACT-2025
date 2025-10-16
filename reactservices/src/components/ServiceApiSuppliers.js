import axios from "axios";
import React, { Component } from "react";
import './ServiceApiSuppliers.css'
export default class ServiceApiSuppliers extends Component {
  url = "https://services.odata.org/V4/Northwind/Northwind.svc/suppliers";
  cajaid = React.createRef();

  loadProvedores = () => {

    console.log("antes del servicio");
    axios.get(this.url).then((response) => {
      console.log("Leyendos datos");
      this.setState({
        provedores: response.data.value,
      });
    });
    console.log("despues del servicio");
  };
  sacarInformacion = (event) => {   
    event.preventDefault();
    let num = this.cajaid.current.value;

    let provedor = this.state.provedores.find(
      (provedor) => provedor.SupplierID == num
    );
    console.log(provedor);
    this.setState({
      provedor: provedor,
    });
  };
  state = {
    provedores: [],
    provedor: null,
  };
  componentDidMount() {
    this.loadProvedores();
  }
  render() {
    return (
      <div>
        <h1>Service Api Suppliers</h1>
        <form onSubmit={this.sacarInformacion}>
          <label>Introduzca id provedor</label>
          <input type="number" ref={this.cajaid} />
          <button>Sacar informacion</button>
        </form>

        <ul>
          {this.state.provedores.map((provedor, index) => {
            return (
              <li key={index}>
                ID: {provedor.SupplierID}, Nombre: {provedor.ContactName}
              </li>
            );
          })}
        </ul>
        {this.state.provedor ? (
          <div className="card">
            <h2>ID: {this.state.provedor.SupplierID}</h2>
            <h2>Nombre: {this.state.provedor.ContactName}</h2>
            <p>Nombre Compañía: {this.state.provedor.CompanyName}</p>
            <p>
              Dirección: 
              {this.state.provedor.Address}
            </p>
            {/* Puedes seguir agregando más campos del objeto */}
          </div>
        ) : (
          <h3>No hay información</h3>
        )}
      </div>
    );
  }
}
