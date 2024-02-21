import React, { useEffect, useState } from 'react';
import Juego from './Juego';
import { getJuegos } from '../api/juegoApi';

function JuegoList({ categorias, juegos, setJuegos}) {
    const [serverError, setServerError] = useState({ error: false, message: "" });

    const downloadJuegos = async () => {
        const response = await getJuegos();
        if (!response.error) {
            setJuegos(response.data);
        } else {
            setJuegos([]);
            setServerError(response.data);
        }
    }

    useEffect(() => {
        downloadJuegos();
    }, []);

    return (
        <div className="App">
            <div className='results'>
                {juegos.length === 0 ? <p>No se han encontrado juegos</p> : ""}
                {serverError ? <p>{serverError.message}</p> : ""}
                {juegos.map(juego => <Juego categorias={categorias} juego={juego} key={juego.id}/>)}
            </div>
        </div>
    );
}

export default JuegoList;
