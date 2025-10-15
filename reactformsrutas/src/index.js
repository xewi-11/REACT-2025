import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './components/Router';
import MenuRutas from './components/MenuRutas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <h1>Index Principal</h1>
   <header>
    <MenuRutas/>
   </header>
   <hr/>
   <Router/>
   <hr/>
   <h2>pie de pagina</h2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
