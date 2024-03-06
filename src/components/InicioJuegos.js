import React, { useState, useEffect } from 'react'
import JuegoList from './JuegoList'
import CheckGroup from './CheckGroup'
import { getCategorias } from '../api/getCategorias'
import { getPlataformas } from '../api/getPlataformas'


const InicioJuegos = () => {

    const [busqueda, setBusqueda] = useState('')
    const [busquedaCategorias, setBusquedaCategorias] = useState([])
    const [busquedaPlataformas, setBusquedaPlataformas] = useState([])

    const [categoriasOptions, setCategoriasOptions] = useState([])
    const [plataformasOptions, setPlataformasOptions] = useState([])

    useEffect(() => {
        getCategorias().then(categorias => setCategoriasOptions(categorias))
        getPlataformas().then(plataformas => setPlataformasOptions(plataformas))

    }, [categoriasOptions, plataformasOptions])

    return (
        <div>
            <label for="categorias">Categorías</label>
            <div>
                {
                    categoriasOptions.map(({ id, name }) => {
                        return <CheckGroup
                            id={id}
                            attr={name}
                            busquedaAttr={busquedaCategorias}
                            setBusquedaAttr={setBusquedaCategorias} />
                    })
                }
            </div> <br />
            <label for="plataformas">Plataformas</label>
            <div>
                {
                    plataformasOptions.map(({ id, name }) => {
                        return <CheckGroup
                            id={id}
                            attr={name}
                            busquedaAttr={busquedaPlataformas}
                            setBusquedaAttr={setBusquedaPlataformas} />
                    })
                }
            </div> <br />
            <label for="busquedaPorNombre">Buscar por Nombre: </label>
            <input type='text' defaultValue='' onChange={v => setBusqueda(v.target.value)} />
            <JuegoList busqueda={busqueda} busquedaCategorias={busquedaCategorias} busquedaPlataformas={busquedaPlataformas} />
        </div>
    );
}

export default InicioJuegos;