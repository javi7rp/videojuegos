import React, { useState } from "react";
import { postJuego } from "../api/juegoApi";

const JuegoForm = ({ onSaveJuego }) => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaLanzamiento, setFechaLanzamiento] = useState("");
    const [compañia, setCompañia] = useState("");
    const [plataformas, setPlataformas] = useState("");
    const [categorias, setCategorias] = useState("");
    const [precio, setPrecio] = useState("");
    const [urlImagen, setUrlImagen] = useState("");
    const [urlVideo, setUrlVideo] = useState("");
    const [error, setError] = useState(false);

    const resetForm = () => {
        setNombre("");
        setDescripcion("");
        setFechaLanzamiento("");
        setCompañia("");
        setPlataformas("");
        setCategorias("");
        setPrecio("");
        setUrlImagen("");
        setUrlVideo("");
        setError(false);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const juego = {
            nombre,
            descripcion,
            fecha_lanzamiento: fechaLanzamiento,
            compañia,
            plataformas: plataformas.split(","),
            categorias: categorias.split(","),
            precio,
            url_imagen: urlImagen,
            url_video: urlVideo
        };

        const response = await postJuego(juego);
        if (!response.error) {
            setError(false);
            onSaveJuego(response.data);
            resetForm();
        } else {
            setError(true);
        }
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
                <span>Nombre</span>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div className="form-group">
                <span>Descripción</span>
                <input
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <div className="form-group">
                <span>Fecha de Lanzamiento</span>
                <input
                    type="text"
                    value={fechaLanzamiento}
                    onChange={(e) => setFechaLanzamiento(e.target.value)}
                />
            </div>
            <div className="form-group">
                <span>Compañía</span>
                <input
                    type="text"
                    value={compañia}
                    onChange={(e) => setCompañia(e.target.value)}
                />
            </div>
            <div className="form-group">
                <span>Plataformas</span>
                <input
                    type="text"
                    value={plataformas}
                    onChange={(e) => setPlataformas(e.target.value)}
                />
            </div>
            <div className="form-group">
                <span>Categorías</span>
                <input
                    type="text"
                    value={categorias}
                    onChange={(e) => setCategorias(e.target.value)}
                />
            </div>
            <div className="form-group">
                <span>Precio</span>
                <input
                    type="text"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />
            </div>
            <div className="form-group">
                <span>URL de la Imagen</span>
                <input
                    type="text"
                    value={urlImagen}
                    onChange={(e) => setUrlImagen(e.target.value)}
                />
            </div>
            <div className="form-group">
                <span>URL del Video</span>
                <input
                    type="text"
                    value={urlVideo}
                    onChange={(e) => setUrlVideo(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button type="submit">Alta</button>
            </div>
            <div className="error">
                {error ? "No se ha podido guardar el juego" : ""}
            </div>
        </form>
    );
};

export default JuegoForm;
