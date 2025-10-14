import { useState } from "react";
function Contador() {
  // declaramos la variable que deseamos dibujar en el render y que se modifica
  const [numero, setNumero] = useState(0);
  const sumarContador = () => {
    // para modificar el valor de una variable de estado se realiza con setVariable(nuevo valor)
    setNumero(numero + 1);
  };
  return (
    <div>
      <h1>Ejemplo state</h1>
      <button onClick={() => sumarContador()}>Sumar</button>
      <h2 style={{ color: "blue" }}>El resultado es {numero}</h2>
      {/* otra forma de hacerlo */}
      <button onClick={()=>{
        setNumero(numero-1);
      }}> Restar</button>
    </div>
  );
}
export default Contador;
