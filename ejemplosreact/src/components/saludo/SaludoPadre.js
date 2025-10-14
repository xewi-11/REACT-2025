import SaludoHijo from "./SaludoHijo";

function SaludoPadre(){
    // const cambiarTexto=()=>{
    //     console.log("EJecutando metodo padre")
    // }
    // return (<div>
    //         <h1 style={{color:"red"}}>Soy el padre</h1>
    //         <SaludoHijo metodoPadre={cambiarTexto}/>
    // </div>)
    const metodoPadre=(nombre)=>{
        console.log("Yo soy tu padre," + nombre);
    }
    return (<div>
            <h1 style={{color:"red"}}>Soy el padre</h1>
             <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
             <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
             <SaludoHijo idhijo="3" metodoPadre={metodoPadre}/>
     </div>)
}
export default SaludoPadre;