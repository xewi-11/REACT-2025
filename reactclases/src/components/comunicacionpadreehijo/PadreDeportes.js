import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component {
  deportes = ["futbol", "baloncesto", "volleyball", "padel"];
  // creamos el state para poder conectar el hijo con el padre
  state={
    favorito:""
  }
  // metodo el cual va a llamar el hio para psar deporte
  mostrarFavorito = (deporteSeleccionado) => {
    this.setState({
      favorito: deporteSeleccionado
    });
  };
  render() {
    return (
      <div>
        <h1>Soy el padre</h1>
        <h2 style={{ background: "gold" }}>
          Su deporte favorito es: {this.state.favorito}
        </h2>
        {this.deportes.map((deporte, index) => {
          return (
            <HijoDeportes
              key={index}
              nombre={deporte}
              callParent={this.mostrarFavorito}
            />
          );
        })}
      </div>
    );
  }
}
export default PadreDeportes;
