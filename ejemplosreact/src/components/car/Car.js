import { useState } from "react";

function Car(props){
    // Variable para saber el estado del coche si apagado o encendido
    const[estado,setEstado]=useState(false);
    const[velocidad,setVelocidad]=useState(0);
    //Creamos un obejeto con las priopiedad que vienen en props

    var coche={
        marca:props.marca,
        modelo:props.modelo,
        velocidadMaxima:parseInt(props.velocidadMaxima),
        aceleracion:parseInt(props.aceleracion)
    }
    //metodo para devolver codigo html dinamico a nuestro render

    const comprobarEstado=()=>{
              if(estado){
                     return(<h1 style={{color:"green"}}>Arrancado</h1>)
              }else{
                  return(<h1 style={{color:"red"}}>Apagado</h1>)
              }
    }
    const acelerarCoche=()=>{
            if(!estado){
                alert("El coche esta apagado");
                setVelocidad(0);
            }else{
                if(velocidad>=coche.velocidadMaxima){
                    // ponemos la velocidad al maximo
                    setVelocidad(coche.velocidadMaxima)
                }else{
                    //aceleramos el coche
                    setVelocidad(velocidad+coche.aceleracion)
                }
            }
        }
        return(<div>
            <h1>Marca :{coche.marca}, Modelo: {coche.modelo} </h1>
            <h2 style={{color:"fuchsia"}}>Velocidad actual: {velocidad}</h2>
            <div>
                {comprobarEstado()};

            </div>
            <button onClick={()=>{
                 setEstado(!estado);
            }}>arrancar/apagar</button>
            <button onClick={()=>{
                acelerarCoche();
            }}>Acelerar el coche</button>
        </div>)
        
}
export default Car;