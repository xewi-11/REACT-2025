import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Bienvenido a la Aplicación de Apuestas Deportivas</h1>
        <p>Explora equipos y jugadores, y realiza tus apuestas con confianza.</p>
        <img 
          src="https://www.muyinteresante.com/wp-content/uploads/sites/5/2022/11/19/637902d96b416.jpeg" 
          alt="Imagen interesante" 
          style={{ width: "400px", borderRadius: "10px", marginTop: "20px" }} 
        />
      </div>
    )
  }
}
