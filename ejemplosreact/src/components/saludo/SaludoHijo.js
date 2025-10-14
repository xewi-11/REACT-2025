function SaludoHijo(props){
     return (<div>
            <h1 style={{color:"blue"}}>Soy el hijo</h1>
            <button onClick={()=>{props.metodoPadre("luke "+ props.idhijo)}}>llamar al parent</button>
    </div>)
}
export default SaludoHijo;