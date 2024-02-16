import React, { useRef, useState } from "react";
import { postJuego } from "../api/juegoApi";
import './JuegoValidationForm.css';

const JuegoValidationForm = ({ categorias, onSaveJuego }) => {
    const [inputValue, setInputValue] = useState({
        nombre: "",
        descripcion: "",
        fecha_lanzamiento: "",
        compañia: "",
        plataformas: [],
        precio: 0,
        url_imagen: "",
        url_video: ""
    });

    const [errors, setErrors] = useState({
        nombre: { error: false, message: "" },
        descripcion: { error: false, message: "" },
        fecha_lanzamiento: { error: false, message: "" },
        compañia: { error: false, message: "" },
        precio: { error: false, message: "" },
        url_imagen: { error: false, message: "" },
        url_video: { error: false, message: "" }
    });

    const [serverError, setServerError] = useState({ error: false, message: "" });

    const nombreRef = useRef();

    const resetForm = () => {
        setInputValue({
            nombre: "",
            descripcion: "",
            fecha_lanzamiento: "",
            compañia: "",
            plataformas: [],
            precio: 0,
            url_imagen: "",
            url_video: ""
        });
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        if (nombreRef.current.value.length > 0) {
            const response = await postJuego(inputValue);
            if (!response.error) {
                onSaveJuego(response.data);
                resetForm();
            } else {
                setServerError({ error: true, message: "No se ha podido guardar el juego" });
            }
        } else {
            setErrors({
                ...errors,
                nombre: { error: true, message: "El campo nombre es obligatorio" }
            });
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInputValue({
            ...inputValue,
            [name]: value
        });

        if (name === "precio") {
            if (isNaN(value) || value < 0) {
                setErrors({
                    ...errors,
                    precio: { error: true, message: "El precio debe ser un número válido y mayor o igual a 0" }
                });
            } else {
                setErrors({
                    ...errors,
                    precio: { error: false, message: "" }
                });
            }
        }

        setServerError({ error: false, message: "" });
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
                <span>Nombre</span>
                <input
                    type="text"
                    name="nombre"
                    ref={nombreRef}
                    value={inputValue.nombre}
                    onChange={handleChange}
                />
                {errors.nombre.error && <div className="error">{errors.nombre.message}</div>}
            </div>
            <div className="form-group">
                <span>Descripción</span>
                <input
                    type="text"
                    name="descripcion"
                    value={inputValue.descripcion}
                    onChange={handleChange}
                />
                {errors.descripcion.error && <div className="error">{errors.descripcion.message}</div>}
            </div>
            <div className="form-group">
                <span>Fecha de Lanzamiento</span>
                <input
                    type="text"
                    name="fecha_lanzamiento"
                    value={inputValue.fecha_lanzamiento}
                    onChange={handleChange}
                />
                {errors.fecha_lanzamiento.error && <div className="error">{errors.fecha_lanzamiento.message}</div>}
            </div>
            <div className="form-group">
                <span>Compañía</span>
                <input
                    type="text"
                    name="compañia"
                    value={inputValue.compañia}
                    onChange={handleChange}
                />
                {errors.compañia.error && <div className="error">{errors.compañia.message}</div>}
            </div>
            <div className="form-group">
                <span>Precio</span>
                <input
                    type="text"
                    name="precio"
                    value={inputValue.precio}
                    onChange={handleChange}
                />
                {errors.precio.error && <div className="error">{errors.precio.message}</div>}
            </div>
            <div className="form-group">
                <span>URL de Imagen</span>
                <input
                    type="text"
                    name="url_imagen"
                    value={inputValue.url_imagen}
                    onChange={handleChange}
                />
                {errors.url_imagen.error && <div className="error">{errors.url_imagen.message}</div>}
            </div>
            <div className="form-group">
                <span>URL de Video</span>
                <input
                    type="text"
                    name="url_video"
                    value={inputValue.url_video}
                    onChange={handleChange}
                />
                {errors.url_video.error && <div className="error">{errors.url_video.message}</div>}
            </div>
            <div className="form-group">
                {serverError.error && serverError.message}
            </div>
            <div className="form-group">
                <button type="submit">Alta</button>
            </div>
        </form>
    );
}

export default JuegoValidationForm;
