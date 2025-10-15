import React, { Component } from 'react'

export default class FormSimple extends Component {
    // necesitamos una variable referencia para cada objeto de formulario
    cajaNombre=React.createRef();
     nombre="";
    peticionFormulario=(event)=>{
        event.preventDefault();
           console.log("peticion lista");
           // para recuperar el valor de un objeto react se hace :
            nombre=this.cajaNombre.current.value;
           return nombre;
    }
  render() {
    return (
      <div>
        <h1>Formulario simple React</h1>
        <form onSubmit={this.peticionFormulario}>
            <label>Introduzca nombre:</label>
            <input type='text' ref={this.cajaNombre}/>
            <button>Realizar peticion</button>
        </form>
        <h2>Tu nombre es: {this.nombre}</h2>
      </div>
    )
  }
}
