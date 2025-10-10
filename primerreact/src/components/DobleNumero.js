function DobleNumero(){
    const numeroDoble=(numero)=>{
          var doble=numero*2;
            alert("El doble de "+numero+" es: "+doble);
    }
    return(<div>
       <h1>Ejemplo de metodos parametros</h1>
       < button onClick={()=>numeroDoble(7)}>Doble de 7</button>
       <button onClick={()=>{numeroDoble(199)}}>Doble de 199</button>
       <button onClick={()=>{numeroDoble(201)}}>Doble de 201</button>
    </div>)
}
export default DobleNumero;