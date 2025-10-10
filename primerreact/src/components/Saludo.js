

function Saludo(props){
    let mensaje="Hoy es viernes";
    const {nombre,edad}=props;
        return (<div>
        <h1>hola me llamo: {nombre}</h1>
        <h2>Mi dato:{mensaje} y mi edad es {edad}</h2>
        <h3>Bienvenido a react</h3>
        </div>);
}
export default Saludo;