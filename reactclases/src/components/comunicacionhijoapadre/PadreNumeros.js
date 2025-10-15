
import { Component } from "react";
import HijoNumeros from "./HijoNumeros";

/**
 * Componente PadreNumeros
 * - Genera y muestra una lista de números aleatorios.
 * - Permite sumar los números seleccionados por el usuario.
 * - Interactúa con HijoNumeros para sumar valores.
 * @extends Component
 */


class PadreNumeros extends Component {
    /** Array que almacena los números aleatorios generados. */
    numerosAleatorios = [];

    /**
     * Genera 4 números aleatorios entre 1 y 100 y los guarda en el estado.
     */
    generarAleatorio = () => {
        let numeros2=0
        for (var i = 1; i <= 4; i++) {
            numeros2=parseInt(Math.random() * 100) + 1;
            this.numerosAleatorios.push(numeros2);
        }
        this.setState({
            numeros: this.numerosAleatorios
        });
    }

    /**
     * Añade un número aleatorio entre 1 y 100 al array y actualiza el estado.
     */
    añadirAleatorio = () => {
        var aleatorio = parseInt(Math.random() * 100) + 1;
        this.numerosAleatorios.push(aleatorio);
        this.setState({
            numeros: this.numerosAleatorios
        });
    }

    /**
     * Suma el número recibido al total actual y actualiza el estado.
     * @param {number} numero Número a sumar al total.
     */
    sumar = (numero) => {
        var suma = this.state.total + numero;
        this.setState({
            total: suma
        });
    }

    /** Estado inicial del componente. */
    state = {
        numeros: this.numerosAleatorios,
        total: 0
    }

    /**
     * Renderiza el componente PadreNumeros y sus hijos HijoNumeros.
     * @returns {JSX.Element}
     */
    componentDidMount() {
        if(this.numerosAleatorios.length==0){
              this.generarAleatorio();
        } 
    }
    render() {
                return (
            <div>

                <h1>Padre numeros</h1>
                <h2 style={{ backgroundColor: "lightblue" }}>La suma es: {this.state.total}</h2>
                {
                    this.state.numeros.map((Number, index) => {
                        return (<HijoNumeros numero={Number} key={index} callParent={this.sumar} />);
                    })
                }
                <br />

                <br />
                <button style={{ borderColor: "lightgreen", borderRadius: "20px" }} onClick={this.añadirAleatorio}>Añadir otro numero aleatorio</button>
            </div>
        );
    }
}

export default PadreNumeros;