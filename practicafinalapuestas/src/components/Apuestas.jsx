import axios from 'axios';
import React, { Component } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

 function RealizarApuesta(){
        const navigate=useNavigate();
        return (
    <button onClick={() => navigate("/apuestas/insertar")}>
      Realizar Apuesta
    </button>
  );
    }
export default class Apuestas extends Component {
    url="https://apiapuestas.azurewebsites.net/api/Apuestas";
    state={
        apuestas:[]
    }
    cargarApuestas=()=>{
        axios.get(this.url).then(res=>{
            this.setState({
                apuestas:res.data
            });
        });
    }
    componentDidMount=()=>{
        this.cargarApuestas();
    }
    
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <RealizarApuesta/>
        <table className="table table-info">
            <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Resultado</th>
                  <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                    {this.state.apuestas.map((apuesta,index)=>
                        <tr key={index}>
                            <td>{apuesta.usuario}</td>
                            <td>{apuesta.resultado}</td>
                            <td>{apuesta.fecha}</td>
                        </tr>
                    )}
            </tbody>
        </table>
      </div>
    )
  }
}
