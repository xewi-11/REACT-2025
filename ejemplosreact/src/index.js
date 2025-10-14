import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/SumarNumeros';
import SaludoPadre from './components/saludo/SaludoPadre';
import PadreMatematicas from './components/matematicas/PadreMatematicas';
import Contador from './components/contador/Contador';
import Car from './components/car/Car';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SumarNumeros numero1="20" numero2="20"/>
    <SumarNumeros numero1="10" numero2="11"/> */}
    {/* <SaludoPadre/> */}
    {/* <PadreMatematicas/> */}
    {/* <Contador/> */}
    <Car marca="Audi" modelo="Q3" velocidadMaxima="260" aceleracion="25"/>
    <Car marca="Pontiac" modelo="Firebird" velocidadMaxima="360" aceleracion="33"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
