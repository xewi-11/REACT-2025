function Matematicas(props) {
  // var numero=$("#cajanumero").val();
  const calcularDoble = (numero) => {
    console.log("El doble de " + numero + " es " + numero * 2);
  };
  return (
    <div>
      <h2>hola soy el hijoo</h2>

      <button onClick={() => calcularDoble(parseInt(props.numero))}>
        {" "}
        dovle
      </button>
      <button onClick={() => props.metodoPadreTriple(parseInt(props.numero))}>
        {" "}
        triple
      </button>
    </div>
  );
}
export default Matematicas;
