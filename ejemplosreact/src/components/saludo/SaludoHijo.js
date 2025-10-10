function SaludoHijo(props){
     return (<div>
            <h1 style={{color:"blue"}}>Soy el hijo</h1>
            <button onClick={()=>{props.metodoPadre()}}>llamar al parent</button>
    </div>)
}
export default SaludoHijo;