import React from 'react'
import { Link } from 'react-router-dom'
import { handleEliminarJuego } from '../help/HandleHelpers'

const InfoJuego = ({id, nombre, descripcion, fecha_lanzamiento, compañia, plataformas, categorias, precio, url_imagen, url_video, verInfo, setVerInfo}) => {
  
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
        <img src={url_imagen} alt={nombre}/>
        <section>
                <p>Compañia: {compañia}</p>
                <p>Plataformas:</p>
                {
                    plataformas.map(plataforma => <span>| {plataforma} |</span>)
                }
                <br/>
                <p>Fecha De Lanzamiento: {fecha_lanzamiento}</p>
                <p>Precio: {precio}€</p> <br/>
                <p>Categorias:</p>
                {
                    categorias.map(categoria => <span>| {categoria} |</span>)
                }
        </section>

        <p>{descripcion}</p>
        <a id="trailer" href={url_video}>Trailer de {nombre}</a>

        <div className='opcionesVideojuego'>
            <button> <Link to={`/videojuegos/update/${id}`}>Editar Videojuego</Link> </button>
            <button onClick={() => handleEliminarJuego(videojuego)}>Eliminar Videojuego</button>
            <button onClick={() => setVerInfo(!verInfo)}>Volver A La Lista</button>
        </div>
    </div>
  )
}
 
export default InfoJuego;