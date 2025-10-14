import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component{
   
    deportes=['futbol','baloncesto','volleyball','padel'];
   state={
        favorito:""
    }
     mostrarFavorito=(nombre)=>{
        this.setState({
            favorito:nombre
        })
    }
    render(){
        return(<div>
            <h1>Soy el padre</h1>
             <h2 style={{background:"gold"}}>Su deporte favorito es: {this.state.favorito}</h2>
            { this.deportes.map((deporte,index)=>{
               return (<HijoDeportes key={index} nombre={deporte} callParent={this.mostrarFavorito}/>)
            })}
           

        </div>)
    }
}
export default PadreDeportes;