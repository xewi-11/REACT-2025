import { Component } from "react";

class DibujoComplejo extends Component {
    dibujarNumeros=()=>{
        var lista=[];
        for(var i=0;i<=7;i++){
            var numero=parseInt(Math.random()*100)+1;
             // Mediante push vamos añadiendo datos a la lista
             // los dibujos dinamicos necesitan una key
             lista.push(<li key={i}>{numero}</li>)
        }
        return lista;
    }
    render(){
        return(<div>
            <h1>Dibujos complejos react</h1>
             <ul>
                {this.dibujarNumeros()}
             </ul>



        </div>)
    }
}
export default DibujoComplejo;