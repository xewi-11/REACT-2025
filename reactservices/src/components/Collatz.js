import React, { Component } from "react";

export default class Collatz extends Component {
  state = {
    numeros: [],
  };

  generarCollatz = () => {
    let aux = [];
    let numero = parseInt(this.props.numero);
    while (numero !== 1) {
      if (numero % 2 === 0) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
      aux.push(numero);
    }
    this.setState({
      numeros: aux,
    });
  };

  componentDidMount = () => {
    this.generarCollatz();
  };

  render() {
    return (
      <div
        style={{
          background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
          borderRadius: "16px",
          padding: "20px",
          width: "400px",
          margin: "30px auto",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2563eb", marginBottom: "15px" }}>
          Secuencia de Collatz
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            maxHeight: "250px",
            overflowY: "auto",
          }}
        >
          {this.state.numeros.map((number, index) => (
            <li
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#eff6ff",
                margin: "6px 0",
                padding: "8px 12px",
                borderRadius: "8px",
                boxShadow: "0 1px 2px rgba(204, 16, 16, 0.05)",
                color: "#1cdd93ff",
                fontWeight: "500",
              }}
            >
              🔹 {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
