import React, { useState } from "react";
import InfoJuego from './InfoJuego'
import './juego.css'

const Juego = (juego) => {

    const [verInfo, setVerInfo] = useState(false)

    return (
        <div className="contenedorJuegos">
            <div id={juego.id} className='contenedorVideojuego' onClick={() => setVerInfo(!verInfo)}>
                <input type='checkbox' id='botonModal' className='checkboxModal' checked={verInfo} />
                <div className='contenedorModal'>
                    <div className='contenidoModal'>
                        <InfoJuego id={juego.id} nombre={juego.nombre} fecha_lanzamiento={juego.fecha_lanzamiento} compañia={juego.compañia} plataformas={juego.plataformas} categorias={juego.categorias} precio={juego.precio} url_imagen={juego.url_imagen} url_video={juego.url_video} verInfo={verInfo} setVerInfo={setVerInfo} />
                    </div>
                </div>

                <h2>{juego.nombre}</h2>

                <img src={juego.url_imagen} alt={juego.nombre} />

                {
                    juego.descripcion.length > 100
                        ? <p>{juego.descripcion.substring(0, 101)}...</p>
                        : <p>{juego.descripcion}</p>
                }
            </div>
        </div>
    );
};

export default Juego;
