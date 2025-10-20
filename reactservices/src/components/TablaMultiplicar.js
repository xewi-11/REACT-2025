import React, { Component } from "react";

export default class TablaMultiplicar extends Component {
  state = {
    tabla: [],
  };
  generarMultiplicar = () => {
    let aux = [];
    let numero = parseInt(this.props.numero);
    for (let index = 1; index <= 10; index++) {
      var resultado = numero * index;
      aux.push(resultado);
    }
    this.setState({
      tabla: aux,
    });
  };
  componentDidMount = () => {
    this.generarMultiplicar();
  };
  render() {
    return (
      <div>
        Tabla Multiplicar
        <ul>
          {this.state.tabla.map((num, index) => {
            return <li key={index}>{num}</li>;
          })}
        </ul>
      </div>
    );
  }
}
