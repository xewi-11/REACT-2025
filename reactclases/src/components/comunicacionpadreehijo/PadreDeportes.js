import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component{
   
    deportes=['futbol','baloncesto','volleyball','padel'];
   
    render(){
        return(<div>
            <h1>Soy el padre</h1>
            { this.deportes.map((deporte,index)=>{
               return (<HijoDeportes key={index} nombre={deporte}/>)
            })}
           

        </div>)
    }
}
export default PadreDeportes;