import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/collatz'>Collatz</a>
            </li>
            <li>
                <a href='/tabla'>Tabla de multipicar</a>
            </li>
            <li>
                <a href='/tablav2'>Tabla de multipicar version 2</a>
            </li>
            <li>
                <a href='/multiple'>Seleccion Multiple</a>
            </li>
            <li>
                <a href='/form'>Formulario</a>
            </li>
            <li>
                <a href='/cine'>Cine</a>
            </li>
            <li>
                <a href='/musica'>Música</a>
            </li>
            
        </ul>
      </div>
    )
  }
}
