import React, { useEffect, useState } from 'react';
import Juego from './Juego';
import { getJuegos } from '../api/getJuegos';

function JuegoList({ busqueda = '', busquedaCategorias = [''], busquedaPlataformas = [''] }) {

    const [videojuegos, setVideojuegos] = useState([])

    useEffect(() => {
        getJuegos({ busqueda, busquedaCategorias, busquedaPlataformas })
            .then(videojuegos => setVideojuegos(videojuegos))
    }, [busqueda, busquedaCategorias, busquedaPlataformas]);

    return (
        <div>
            {videojuegos.map(({ id, nombre, descripcion, fecha_lanzamiento, compañia, plataformas, categorias, precio, url_imagen, url_video }) =>
                <Juego
                    key={id}
                    id={id}
                    nombre={nombre}
                    descripcion={descripcion}
                    fechaLanzamiento={fecha_lanzamiento}
                    compañia={compañia}
                    plataformas={plataformas}
                    categorias={categorias}
                    precio={precio}
                    url_imagen={url_imagen}
                    url_video={url_video}
                />
            )}
        </div>
    )
}

export default JuegoList;
