import { Component } from "react";

/**
 * Componente HijoNumeros
 * - Muestra un número recibido por props.
 * - Permite sumarlo al total del padre mediante un botón.
 * @extends Component
 * @prop {number} numero Número a mostrar y sumar.
 * @prop {function} callParent Función para comunicar el número al padre.
 */
class HijoNumeros extends Component {
    /**
     * Llama a la función del padre para sumar el número actual.
     */
    sumarNumeros = () => {
        var numero = this.props.numero;
        this.props.callParent(numero);
    }

    /**
     * Renderiza el número y el botón para sumarlo.
     * @returns {JSX.Element}
     */
    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>Numero: {this.props.numero}</h1>
                <br />
                <button style={{ borderColor: "gold" }} onClick={this.sumarNumeros}>Sumar numero</button>
            </div>
        );
    }
}

export default HijoNumeros;