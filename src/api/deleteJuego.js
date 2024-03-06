export const deleteVideojuego = (videojuegoAEliminar) => {
    const dbVideojuegos = `http://localhost:3000/videojuegos/${videojuegoAEliminar.id}`

    const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videojuegoAEliminar),
      };
    
      // Realizar la petición PUT
      return fetch(dbVideojuegos, requestOptions)
        .then((res) => res.json())
        .then((response) => {
          console.log('Videojuego eliminado:', response);
          return response;
        })
        .catch((error) => {
          console.error('Error al eliminar videojuego:', error);
          throw error;
        });
}
