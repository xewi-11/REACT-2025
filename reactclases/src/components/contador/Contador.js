import { Component } from 'react';
// podemos declarar metodos fuera de la clase pero no pueden utilizar nada del component
function metodoAbsurdo(){
 console.log("Metodo sin funcionalidad alguna");
}

class Contador extends Component{
    //las variables se declaran a nivel de clase, no se usan palabras coo var,let o const
    numero=1;
    //con los metodos sucede lo mismo,solo la declaracion
    incrementarNumero=()=>{
          // para acceder a variables de clase, debemos utilizar la palabra clave this
          this.numero+=1;
          console.log("Valor de número: " + this.numero)
    }
// LAs Variables state son declaras en el objeto de la clase 
  state={
    valor:parseInt(this.props.inicio)
  }
  incrementarValor=()=>{
    this.setState({
        valor:this.state.valor+1
    });
  }

  render(){
    return (<div>
        <h1 style={{color:"blue"}}>Ejemplo Contador JSX: {this.props.inicio}</h1>
        <h3 style={{color:"red"}}>Valor: {this.state.valor}</h3>
        {/* la llamada se realiza con this y no se utiliza ni lambda ni parentesis */}
        <button onClick={this.incrementarNumero}>Pulsa para incrementar</button>
        {/* Tenemos Multiples formas de llamadas */}
        <button onClick={()=>{
            //codigo JSX
            // si es externo no lleva this
            metodoAbsurdo();
            this.incrementarNumero();
        }}>otra sintaxis con funcion anonima lambda</button>
        <button onClick={this.incrementarValor}>Incrementar valor</button>
    </div>)
  }
}
export default Contador;