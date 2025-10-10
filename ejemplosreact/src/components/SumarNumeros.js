import React from 'react'
import goku from '../assets/images/goku.png'
import  './SumarNumeros.css'
function SumarNumeros(props) {
    const {numero1, numero2}=props;
    const sumar=(a,b)=>{
        return alert("La suma es " + (parseInt(a) + parseInt(b)));

    }

  return (
    <div className='SumarNumros'>SumarNumeros
        <button onClick={()=>{sumar(numero1,numero2)}}>Pulsar para sumar</button>
        <img src={goku} className="estilosimagen" alt='goku'/>
        
    </div>
  )
}

export default SumarNumeros