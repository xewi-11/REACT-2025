import Matematicas from "./Matematicas";

function PadreMatematicas(){
    
    const calcularTriple=(numero)=>{
             console.log("El triple  de "+ numero+" es "+ (numero*3));
    }
    return(<div>
                 <h2>hola soy padrreeee</h2>
            <Matematicas idhijo="triple" numero="2" metodoPadreTriple={calcularTriple}/>
    </div>)
}
export default PadreMatematicas;