function Metodos(){
    var mensaje="Hola, soy un mensaje";
               const mostrar=()=>{
                alert("Hola");

               }
               const cambiarTexto=()=>{
                        mensaje="Hoy se sale";
                        return mensaje;
               }
               

               return(<div>
                <h1>{mensaje}</h1>
                <button onClick={()=>{cambiarTexto()}}>Cambiar Mensaje</button>
                <button onClick={()=>mostrar()}>Pulsar</button>
               </div>)
}
export default Metodos;