import React from "react";

const Juego = ({ categorias, juego }) => {

    return (
        <div>
             <h2>{juego.nombre}</h2>
            <img src={juego.url_imagen} alt={juego.nombre} />
            <p>Descripción: {juego.descripcion}</p>
            <p>Fecha de Lanzamiento: {juego.fecha_lanzamiento}</p>
            <p>Compañía: {juego.compañia}</p>
            <p>Plataformas: {juego.plataformas.join(", ")}</p>
            <p>Categorías: {juego.categorias.join(", ")}</p>
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
