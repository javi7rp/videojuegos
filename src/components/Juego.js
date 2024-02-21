import React from "react";
import { deleteJuego } from "../api/juegoApi";

const Juego = ({ categorias, juego}) => {
    

    const getCategory = () => {
        const cat = categorias.find((categorias) => categorias.id === juego.categorias);
        return cat ? cat.name : "No clasificado";
    };

    return (
        <div>
             <h2>{juego.nombre}</h2>
            <img src={juego.url_imagen} alt={juego.nombre} />
            <p>Descripción: {juego.descripcion}</p>
            <p>Fecha de Lanzamiento: {juego.fecha_lanzamiento}</p>
            <p>Compañía: {juego.compañia}</p>
            <p>Precio: ${juego.precio}</p>
            {juego.url_video && (
                <div>
                    <p>Tráiler:</p>
                    <iframe
                        width="560"
                        height="315"
                        src={juego.url_video}
                        title="Tráiler del juego"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                    </div>
            )}
        </div>
    );
};

export default Juego;
