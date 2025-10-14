import { Component } from "react";

class DibujoDinamico extends Component{
   //necesitamos un array con nombres y dicho array debe estar declarado en state para actualizar el dibujo

   state={
      nombres:['lucia','Diana','Antonia','sofia','adrian']
   }
   
   generarNombre=()=>{
      this.state.nombres.push("Nuevo Nombre")
      this.setState({
        nombres:this.state.nombres
      })
   }
   eliminarNombre=()=>{
      var nombresNuevos=this.state.nombres.slice(0,-1)
      this.setState({
         nombres:nombresNuevos
      })
   }


   render(){
    return (<div>
         <h1 style={{color:"orange"}}>Dibujos complejos dinamicos</h1>
         {
            // codigo JSX de REACT 
            // el codigo logico debe terner return para que haga un dibujo
            this.state.nombres.map((name,index)=>{
               return (<h3 style={{color:"blue"}} key={index}>{name}</h3>);
            })

            
         }
         <button onClick={this.generarNombre}>Añadir nombre</button>
         <button onClick={this.eliminarNombre}>Eliminar ultimo nombre</button>
    </div>)
   }
}
export default DibujoDinamico;