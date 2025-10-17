import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class ServicioApiCustomers extends Component {
  url = Global.urlNorthwind;

  //creamos metodo para cagr los clientes

  loadCustomers = () => {
    let request = "customers";
    console.log("Antes del servicio");
    axios.get(this.url + request).then((response) => {
      console.log("Leyendo datos");
      // la informacion viene en response.data
      this.setState({
        customers: response.data.value,
      });
    });

    console.log("Despues del servicio");
  };
  componentDidMount() {
    console.log("Creando COmponents");
    this.loadCustomers();
  }
  state = {
    customers: [],
  };
  render() {
    return (
      <div>
        Servicio Api Customers
        <button>Load Customers</button>
        {this.state.customers.map((cliente, index) => {
          return (
            <h3 style={{ color: "blue" }} key={index}>
              {" "}
              {cliente.ContactName}
            </h3>
          );
        })}
      </div>
    );
  }
}
