import React, { Component } from 'react'
import axios from 'axios'

export default class ServicioApiCustomers extends Component {
    url="https://services.odata.org/V4/Northwind/Northwind.svc/customers";

    //creamos metodo para cagr los clientes

    loadCustomers=()=>{
        console.log("Antes del servicio")
        axios.get(this.url).then(response=>{
            console.log("Leyendo datos")
            // la informacion viene en response.data
            this.setState({
                customers:response.data.value
            })

        })
        
        console.log("Despues del servicio")
    }
    componentDidMount(){
        console.log("Creando COmponents");
        this.loadCustomers();
    }
    state={
        customers:[]
    }
  render() {
    return (
      <div>
        Servicio Api Customers
           
           <button >Load Customers</button>
           {
            this.state.customers.map((cliente,index)=>{
                return(<h3 style={{color:'blue'}} key={index}> {cliente.ContactName}</h3>)
            })
           }
      </div>
    )
  }
}
