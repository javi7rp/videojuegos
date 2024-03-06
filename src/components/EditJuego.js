import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getJuegos } from '../api/getJuegos'
import { getCategorias } from '../api/getCategorias'
import { getPlataformas } from '../api/getPlataformas'
import { formHandleChecked, handleChange, handleSubmit } from '../help/HandleHelpers'




const EditJuego = () => {

    const { videojuegoId } = useParams();

    const [juegoEditado, setJuegoEditado] = useState({
        id: '',
        nombre: '',
        descripcion: '',
        fecha_lanzamiento: '',
        compañia: '',
        plataformas: [],
        categorias: [],
        precio: 0,
        url_imagen: '',
        url_video: ''
    });

    const [categoriasOptions, setCategoriasOptions] = useState([]);
    const [plataformasOptions, setPlataformasOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videojuegos = await getJuegos({}, videojuegoId);
                const videojuego = videojuegos[0];

                if (videojuego) {
                    setJuegoEditado(videojuego);
                }
                
                const categorias = await getCategorias();
                const plataformas = await getPlataformas();

                setCategoriasOptions(categorias);
                setPlataformasOptions(plataformas);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, [videojuegoId]);
    return (  
        <div>
            <form onSubmit={handleSubmit({juego: juegoEditado, peticion: 1})}>
                <div className='contenedorFormulario'>
                    <div>
                        <strong><label htmlFor="nombre">Nombre:</label></strong>
                        <input type="text" id="nombre" name="nombre" defaultValue={juegoEditado.nombre} onChange={handleChange(juegoEditado, setJuegoEditado)} required/>
    
                        <strong><label htmlFor="descripcion">Descripcion:</label></strong>
                        <input type="text" id="descripcion" name="descripcion" defaultValue={juegoEditado.descripcion} onChange={handleChange}/>
    
                        <strong><label htmlFor="fecha_lanzamiento">Fecha De lanzamiento:</label></strong>
                        <input type="date" id="fecha_lanzamiento" name="fecha_lanzamiento" defaultValue={juegoEditado.fecha_lanzamiento.replaceAll('/', '-')} onChange={handleChange(juegoEditado, setJuegoEditado)} required/>
                    </div>
    
                    <div>
                        <strong><label htmlFor="compañia">Compañia:</label></strong>
                        <input type="text" id="compañia" name="compañia" defaultValue={juegoEditado.compañia} onChange={handleChange(juegoEditado, setJuegoEditado)}/>
                    </div>
    
                    <div>
                        <strong><label htmlFor="precio">Precio:</label></strong>
                        <input type="number" step="0.01" id="precio" name="precio" value={juegoEditado.precio} onChange={handleChange(juegoEditado, setJuegoEditado)} required/>
    
                        <strong><label htmlFor="url_imagen">Portada:</label></strong>
                        <input type="text" id="url_imagen" name="url_imagen" defaultValue={juegoEditado.url_imagen} onChange={handleChange(juegoEditado, setJuegoEditado)}/>
    
                        <strong><label htmlFor="url_video">Trailer:</label></strong>
                        <input type="text" id="url_video" name="url_video" defaultValue={juegoEditado.url_video} onChange={handleChange(juegoEditado, setJuegoEditado)}/>
                    </div>
                </div>
    
                <div>
                    <strong><label htmlFor="categorias">Categorias:</label></strong>
                    <div className='grupoCheckbox' id='categorias' name="categorias">
                        {
                            categoriasOptions.map(({id, categoria}) => {
                                return <div key={id}>
                                    <input type='checkbox' id={categoria} name='categorias' onChange={formHandleChecked(juegoEditado, setJuegoEditado)}/>
                                    <label htmlFor={categoria}>{categoria}</label>
                                </div>
                            })
                        }
                    </div>
    
                    <strong><label htmlFor="plataformas">Plataformas:</label></strong>
                    <div className='grupoCheckbox' id='plataformas' name="plataformas">
                        {
                            plataformasOptions.map(({id, plataforma}) => {
                                return <div key={id}>
                                    <input type='checkbox' id={plataforma} name='plataformas' onChange={formHandleChecked(juegoEditado, setJuegoEditado)}/>
                                    <label htmlFor={plataforma}>{plataforma}</label>
                                </div>
                            })
                        }
                    </div>
                </div>
    
                <br/>
    
                <button type="submit">Editar Videojuego</button>
            </form>
        </div>
    );
}
 
export default EditJuego;