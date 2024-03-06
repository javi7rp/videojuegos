import React, { useState, useEffect } from 'react';
import JuegoList from './JuegoList';
import CheckGroup from './CheckGroup';
import { getCategorias } from '../api/getCategorias';
import { getPlataformas } from '../api/getPlataformas';
import './inicioJuegos.css'; 

const InicioJuegos = () => {
    const [busqueda, setBusqueda] = useState('');
    const [busquedaCategorias, setBusquedaCategorias] = useState([]);
    const [busquedaPlataformas, setBusquedaPlataformas] = useState([]);
    const [categoriasOptions, setCategoriasOptions] = useState([]);
    const [plataformasOptions, setPlataformasOptions] = useState([]);

    useEffect(() => {
        getCategorias().then(categorias => setCategoriasOptions(categorias));
        getPlataformas().then(plataformas => setPlataformasOptions(plataformas));
    }, []);

    return (
        <div className="container">
            <div className="categorias-container">
                <label htmlFor="categorias">Categorías</label>
                {categoriasOptions.map(({ id, name }) => (
                    <CheckGroup
                        key={id}
                        id={id}
                        attr={name}
                        busquedaAttr={busquedaCategorias}
                        setBusquedaAttr={setBusquedaCategorias}
                    />
                ))}
            </div>
            <div className="plataformas-container">
                <label htmlFor="plataformas">Plataformas</label>
                {plataformasOptions.map(({ id, name }) => (
                    <CheckGroup
                        key={id}
                        id={id}
                        attr={name}
                        busquedaAttr={busquedaPlataformas}
                        setBusquedaAttr={setBusquedaPlataformas}
                    />
                ))}
            </div>
            <div className="busqueda-container">
                <label htmlFor="busquedaPorNombre">Buscar por Nombre:</label>
                <input type="text" defaultValue="" onChange={v => setBusqueda(v.target.value)} />
            </div>
            <JuegoList busqueda={busqueda} busquedaCategorias={busquedaCategorias} busquedaPlataformas={busquedaPlataformas} />
        </div>
    );
}

export default InicioJuegos;
