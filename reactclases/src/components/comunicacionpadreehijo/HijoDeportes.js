import { Component } from "react";

class HijoDeportes extends Component {
  seleccionarFavorito=()=>{
    // capturar el deporte del propio COmponent de props
    var deporte=this.props.nombre;
    //Realizar la peticion al parent
    this.props.callParent(deporte);
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "orange" }}>soy el hijo</h1>
        <h3 style={{ color: "blue" }}>Deporte: {this.props.nombre}</h3>
        <button onClick={this.seleccionarFavorito}>
          Seleccionar favorito
        </button> 
      </div>
    );
  }
}
export default HijoDeportes;
