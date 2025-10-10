import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/SumarNumeros';
import SaludoPadre from './components/saludo/SaludoPadre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SumarNumeros numero1="20" numero2="20"/>
    <SumarNumeros numero1="10" numero2="11"/> */}
    <SaludoPadre/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
