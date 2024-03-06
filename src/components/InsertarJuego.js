import React, { useEffect, useState } from 'react'
import { getCategorias } from '../api/getCategorias'
import { getPlataformas } from '../api/getPlataformas'
import { formHandleChecked, handleChange, handleSubmit } from '../help/HandleHelpers'
import './insertarJuego.css'


const InsertarJuego = () => {

    const [nuevoJuego, setNuevoJuego] = useState({
        id: 0,
        nombre: "",
        descripcion: "",
        fecha_lanzamiento: "",
        compañia: "",
        plataformas: [],
        categorias: [],
        precio: 0,
        url_imagen: "",
        url_video: ""
    })

    const [categoriasOptions, setCategoriasOptions] = useState([])
    const [plataformasOptions, setPlataformasOptions] = useState([])

    useEffect(() => {
        getCategorias().then(categorias => setCategoriasOptions(categorias))
        getPlataformas().then(plataformas => setPlataformasOptions(plataformas))
    }, [])


    return ( 
        <div>
        <form onSubmit={handleSubmit({juego: nuevoJuego, peticion: 0})}>
            <div className='contenedorFormulario'>
                <div>
                    <div className='contenedorAtributos'>
                        <strong><label htmlFor="nombre">Nombre:</label></strong>
                        <input type="text" id="nombre" name="nombre" onChange={handleChange(nuevoJuego, setNuevoJuego)} required/>

                        <strong><label htmlFor="descripcion">Descripcion:</label></strong>
                        <input type="text" id="descripcion" name="descripcion" onChange={handleChange}/>

                        <strong><label htmlFor="fecha_lanzamiento">Fecha De lanzamiento:</label></strong>
                        <input type="date" id="fecha_lanzamiento" name="fecha_lanzamiento" onChange={handleChange(nuevoJuego, setNuevoJuego)} required/>

                        <strong><label htmlFor="compañia">Compañia:</label></strong>
                        <input type="text" id="compañia" name="compañia" onChange={handleChange(nuevoJuego, setNuevoJuego)}/>

                        <strong><label htmlFor="precio">Precio:</label></strong>
                        <input type="number" step="0.01" id="precio" name="precio" onChange={handleChange(nuevoJuego, setNuevoJuego)} required/>

                        <strong><label htmlFor="url_imagen">Imagen:</label></strong>
                        <input type="text" id="url_imagen" name="url_imagen" onChange={handleChange(nuevoJuego, setNuevoJuego)}/>

                        <strong><label htmlFor="url_video">Video:</label></strong>
                        <input type="text" id="url_video" name="url_video" onChange={handleChange(nuevoJuego, setNuevoJuego)}/>
                    </div>

                    <div className='contenedorCheckboxes'>
                       

                            <strong><label htmlFor="categorias">Categorias:</label></strong>
                            <div className='grupoCheckbox' id='categorias' name="categorias">
                                {
                                    categoriasOptions.map(({id, name}) => {
                                        return <div key={id}>
                                            <input type='checkbox' id={name} name='categorias' onChange={formHandleChecked(nuevoJuego, setNuevoJuego)}/>
                                            <label htmlFor={name}>{name}</label>
                                        </div>
                                    })
                                }
                            </div>

                            <strong><label htmlFor="plataformas">Plataformas:</label></strong>
                            <div className='grupoCheckbox' id='plataformas' name="plataformas">
                                {
                                    plataformasOptions.map(({id, name}) => {
                                        return <div key={id}>
                                            <input type='checkbox' id={name} name='plataformas' onChange={formHandleChecked(nuevoJuego, setNuevoJuego)}/>
                                            <label htmlFor={name}>{name}</label>
                                        </div>
                                    })
                                }
                            </div>
                    </div>
                </div>
                <br/>

                <button type="submit">Agregar Videojuego</button>
            </div>
        </form>
    </div>
    );
}
 
export default InsertarJuego;