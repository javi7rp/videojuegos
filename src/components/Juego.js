import React from "react";
import { Link } from "react-router-dom";
import { deleteJuego } from "../api/juegoApi";

const Juego = ({ categorias, juego, onDeleteJuego }) => {
    const delJuego = async () => {
        const response = await deleteJuego(juego.id);
        if (!response.error) {
            onDeleteJuego(juego.id);
        }
    };

    const getCategory = () => {
        const cat = categorias.find((category) => category.id === juego.category);
        return cat ? cat.name : "No clasificado";
    };

    return (
        <div>
            <h1>
                <Link to={`/juego/${juego.id}`}>{juego.nombre}</Link>
            </h1>
            <img src={juego.url_imagen} alt="Portada Juego" />
            <p>{juego.author ? juego.author : "Autor desconocido"}</p>
            <p>La categoría es: {getCategory()}</p>
            <button onClick={delJuego}>Borrar Juego</button>
        </div>
    );
};

export default Juego;
