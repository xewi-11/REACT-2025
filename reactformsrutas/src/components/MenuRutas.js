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
