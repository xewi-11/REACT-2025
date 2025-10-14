import { Component } from "react";

class HijoDeportes extends Component{
    render(){
          return(<div>
            <h1 style={{color:"orange"}}>soy el hijo</h1>
            <h3 style={{color:"blue"}}>Deporte: {this.props.nombre}</h3>
            <h2 style={{background:"gold"}}>Su deporte favorito es: {this.state.favorito}</h2>
            <button onClick={this.props.callParent(this.props)}>Seleccionar favorito</button>
          </div>)
    }
}
export default HijoDeportes;