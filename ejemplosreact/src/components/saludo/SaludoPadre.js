import SaludoHijo from "./SaludoHijo";

function SaludoPadre(){
    const cambiarTexto=()=>{
        console.log("EJecutando metodo padre")
    }
    return (<div>
            <h1 style={{color:"red"}}>Soy el padre</h1>
            <SaludoHijo metodoPadre={cambiarTexto}/>
    </div>)
}
export default SaludoPadre;