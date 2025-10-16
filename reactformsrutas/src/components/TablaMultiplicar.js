import React, { Component } from "react";

export default class TablaMultiplicar extends Component {
  cajaNumero = React.createRef();
  generarTabla = (event) => {
    event.preventDefault();
    let numero = parseInt(this.cajaNumero.current.value);
    let aux = [];
    for (var i = 1; i <= 10; i++) {
      aux.push(numero * i);
    }
    this.setState({
      numeros: aux,
    });
  };
  state = {
    numeros: [],
  };
  render() {
    return (
      <div>
        Tabla de Multiplicar
        <form onSubmit={this.generarTabla}>
          <label>Introduzca un numero</label>
          <input type="number" ref={this.cajaNumero} />
          <button>Mostar tabla</button>
          <table
            style={{
              width: "60%",
              margin: "20px auto",
              borderCollapse: "collapse",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              fontFamily: "Arial, sans-serif",
              textAlign: "center",
            }}
          >
            <thead style={{ backgroundColor: "#4CAF50", color: "white" }}>
              <tr>
                <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                  Operación
                </th>
                <th style={{ padding: "12px", border: "1px solid #ddd" }}>
                  Resultado
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.numeros.map((resultado, index) => {
                const valorCaja = this.cajaNumero?.current?.value || 0;
                return (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                    }}
                  >
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {valorCaja} * {index + 1}
                    </td>
                    <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                      {resultado}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
