import axios from 'axios';
import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
function BotonVolver(){
    const navigate=useNavigate();
    return(
        <button onClick={()=>navigate("/")}>Volver</button>
    )
}
export default class DetallesJugador extends Component {
    url="https://apiapuestas.azurewebsites.net/api/Jugadores/";
    state={
        jugador:{}
    }
    cargarInformacionJugador=()=>{
         axios.get(this.url+this.props.idJugador).then((result) => {
              console.log(result.data);
                this.setState({ jugador: result.data });
            }).catch((err) => {
                console.log(err);
            }); 
    }
    componentDidMount=()=>{
        this.cargarInformacionJugador();
    }
    componentDidUpdate=(oldProps)=>{
        if(oldProps.idJugador!=this.props.idJugador){
            this.cargarInformacionJugador();
        }
    }
  render() {
    return (
      <div className="card" style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
            <h2>{this.state.jugador.nombre}</h2>
            <img 
                src={this.state.jugador.imagen} 
                alt={this.state.jugador.nombre} 
                style={{ width: "200px", borderRadius: "10px", marginBottom: "15px" }} 
            />
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li><strong>Posición:</strong> {this.state.jugador.posicion}</li>
                <li><strong>Fecha de nacimiento:</strong> {this.state.jugador.fechaNacimiento}</li>
                <li><strong>País:</strong> {this.state.jugador.pais}</li>
            </ul>
            <BotonVolver/>
        </div>
    )
  }
}
