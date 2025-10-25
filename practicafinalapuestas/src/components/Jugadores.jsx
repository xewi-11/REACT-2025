import axios from 'axios';
import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';

// Componente funcional para el botón de detalles
function BotonDetalles({ idJugador }) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/detallesjugador/" + idJugador)}>
            Ver detalles
        </button>
    );
}

export default class Jugadores extends Component {
    url = "https://apiapuestas.azurewebsites.net/api/Jugadores/JugadoresEquipos/";
    state = {
        jugadores: []
    }

    cargarJugadores = () => {
        axios.get(this.url + this.props.idEquipo).then((result) => {
            this.setState({ jugadores: result.data });
        }).catch((err) => {
            console.log(err);
        });
    }
    componentDidMount = () => {
        this.cargarJugadores();
    }
    componentDidUpdate = (oldProps) => {
        if (oldProps.idEquipo !== this.props.idEquipo) {
            this.cargarJugadores();
        }
    }

    render() {
        return (
            <div>
                <div className="table-responsive">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Imagen</th>
                                <th scope="col">Detalles</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.jugadores.map((jugador, index) => (
                                    <tr key={index}>
                                        <td>{jugador.nombre}</td>
                                        <td>
                                            <img src={jugador.imagen} alt={jugador.nombre} width="100" />
                                        </td>
                                        <td>
                                            <BotonDetalles idJugador={jugador.idJugador} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
