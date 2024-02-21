
export const getJuegos = async () => {
    try {
        const response = await fetch("http://localhost:3000/videojuegos");
        return {error: false, data: await response.json()};
    } catch(e) {
        return {error: true, data: "No se ha podido descargar la lista de juegos"}
    }
}

export const getJuego = async (JuegoId) => {
    try {
        const response = await fetch("http://localhost:3000/videojuegos/" + JuegoId);
        if (response.status === 200) {
            return {error: false, data: await response.json()};
        } else {
            return {error: true, data: "No existe el id del juego"};
        }
    } catch(e) {
        return {error: true, data: "No se ha podido descargar el juego"}
    }
}



export const getCategories = async () => {
    try {
        const response = await fetch("http://localhost:3000/categorias");
        return {error: false, data: await response.json()};
    } catch(e) {
        return {error: true, data: "No se ha podido cargar las categorias"}
    }
}

export const postJuego = async (Juego) => {
    try {
        const response = await fetch("http://localhost:3000/videojuegos/", {
           method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(Juego)
        });
        if (response.status === 201) {
            return {error: false, data: await response.json()}
        }
        return {error: true, data: "No se ha podido guardar el juego"};
    } catch(e) {
        return {error: true, data: "No hay conectividad con el servidor."}
    }
    
}

export const deleteJuego = async (Juego) => {
    const response = await fetch("http://localhost:3000/videojuegos/" + Juego.id, {
        method: "DELETE"
    });
    
    if (response.status === 200) {
        return {error: false}
    } else {
        return {error: true, data: "No se ha podido borrar el juego"};
    }
}