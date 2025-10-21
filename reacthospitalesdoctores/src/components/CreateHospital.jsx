import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { error } from 'jquery';
export default class CreateHospital extends Component {

    url=Global.apiHospitales;
    cajaId=React.createRef();
    cajaNombre=React.createRef();
    cajaDireccion=React.createRef();
    cajaTelefono=React.createRef();
    cajaCamas=React.createRef();
    
    state={
        mensaje:""
    }
    crearHospital=(event)=>{
        event.preventDefault();
        let request="webresources/hospitales/post"
        let hospital={
            idhospital:parseInt(this.cajaId.current.value),
            nombre:this.cajaNombre.current.value,
            direccion:this.cajaDireccion.current.value,
            telefono:this.cajaTelefono.current.value,
            camas:parseInt(this.cajaCamas.current.value)
        }
        axios.post(this.url+request,hospital).then(response=>{
              this.setState({mensaje:"Insertando"+hospital.nombre})
        })
            
        }
        

    
  render() {
    return (
      <div>
        
        Create Hospital
        <h1>{this.state.mensaje}</h1>
         
         <form className='form-control' onSubmit={this.crearHospital}>
            <label >Inserta el id</label>
            <input className='form-control' type="number" ref={this.cajaId} /><br />
            <label  >Inserta el nombre</label>
            <input className='form-control' type="text" ref={this.cajaNombre} /><br />
            <label >Inserta la direccion</label>
            <input  className='form-control' type="text" ref={this.cajaDireccion} /><br />
            <label >Inserta el telefono</label>
            <input className='form-control' type="text" ref={this.cajaTelefono} /><br />
            <label >Inserta el numero de camas</label>
            <input className='form-control' type="number" ref={this.cajaCamas} /><br />
            <button className='btn btn-success'>Insertar hospital</button>
         </form>
       

      </div>
    )
  }
}
