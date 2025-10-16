import React, { Component } from 'react'

export default class Collatz extends Component {
    cajaNumero=React.createRef();
    generarCollatz=(event)=>{
         event.preventDefault();
         let numero=parseInt(this.cajaNumero.current.value);
         let aux=[];
         while(numero!=1){
            if(numero % 2 == 0){
                  numero = numero / 2;
            }else{
               numero= numero * 3 + 1;
            }
            aux.push(numero);
         }

         this.setState({
            numeros:aux
         })
    }
    state={
        //crear lista de numeros
        numeros:[]
    }
  render() {
    return (
      <div>Conjetura Collatz
         <form onSubmit={this.generarCollatz}>
         <label>Introduzca numero</label>
         <input type='
         number' ref={this.cajaNumero}/>
         <button>Mostrar Conjetura</button>
         <ul>
            {
                this.state.numeros.map((number,index)=>{
                    return(<li key={index}>{number}</li>)
                })
            }
         </ul>
      </form>
      </div>
     
    )
  }
}
