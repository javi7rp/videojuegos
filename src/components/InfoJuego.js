import React from 'react'
import { handleEliminarJuego } from '../help/HandleHelpers'

const InfoJuego = ({ id, nombre, descripcion, fecha_lanzamiento, compañia, plataformas, categorias, precio, url_imagen, url_video, verInfo, setVerInfo }) => {

    const videojuego = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        fecha_lanzamiento: fecha_lanzamiento,
        compañia: compañia,
        plataformas: plataformas,
        categorias: categorias,
        precio: precio,
        url_imagen: url_imagen,
        url_video: url_video
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={url_imagen} alt={nombre} />
            <section>
                <p>Compañia: {compañia}</p>
                <p>Plataformas:</p>
                {
                    plataformas.length > 0 && (
                        <span>{plataformas.join(', ')}</span>
                    )
                }
                <br />
                <p>Fecha De Lanzamiento: {fecha_lanzamiento}</p>
                <p>Precio: {precio}€</p> <br />
                <p>Categorias:</p>
                {
                    categorias.length > 0 && (
                        <span>{categorias.join(', ')}</span>
                    )
                }
                <br />

            </section>

            <p>{descripcion}</p>
            <a id="trailer" href={url_video}>Trailer de {nombre}</a>

            <div className='opcionesVideojuego'>
                <button onClick={() => handleEliminarJuego(videojuego)}>Eliminar Videojuego</button>
            </div>
        </div>
    )
}

export default InfoJuego;