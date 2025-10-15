import { Component } from "react";

class Comic extends Component{
    render(){
        return(<div>
            <h1 style={{color:"blueviolet"}}>Comic: {this.props.comic.titulo}</h1>
            <p>{this.props.comic.descripcion}</p>
            <button onClick={()=>this.props.callParent(this.props.comic)}>seleccionar favorito</button>
            <img style={{width:"150px",height:"150"}} src={this.props.comic.imagen} alt="aaa"></img>
            <button onClick={()=>{this.props.deleteComic(parseInt(this.props.comic.index))}}>Eliminar comic</button>
        </div>)
    }
}
export default Comic;