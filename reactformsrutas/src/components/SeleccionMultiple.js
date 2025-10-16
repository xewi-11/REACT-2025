import React, { Component } from "react";

export default class SeleccionMultiple extends Component {
  selectMultiple = React.createRef();
  mostrarSelecionados = (event) => {
    event.preventDefault();
     let options=this.selectMultiple.current.options;
     var data=""
     // debemos reccoreer todas las opciones
     for(var option of options){
        if(option.selected){
            data+=option.value+", "
            
        }
     }
       this.setState({
            seleccionados: data
        })
  };
  state={
    seleccionados:""
  }
  render() {
    return (
      <div>
        <h1>seleccion Multiple</h1>
        <h2 style={{color:"blue"}}>{this.state.seleccionados}</h2>
        <form onSubmit={this.mostrarSelecionados}>
          <label>Seleccione varios elementos</label>
          <select size="10" multiple ref={this.selectMultiple}>
            <option>Elemento 1</option>
            <option>Elemento 2</option>
            <option>Elemento 3</option>
            <option>Elemento 4</option>
            <option>Elemento 5</option>
            <option>Elemento 6</option>
            <option>Elemento 7</option>
          </select>
          <button type="submit">Mostrar seleccionados</button>
          
        </form>
      </div>
    );
  }
}
