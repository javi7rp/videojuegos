export const updateVideojuego = (videojuegoActualizado) => {
    const dbVideojuegos = `http://localhost:3000/videojuegos/${videojuegoActualizado.id}`

    const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videojuegoActualizado),
      };
    
      // Realizar la petición PUT
      return fetch(dbVideojuegos, requestOptions)
        .then((res) => res.json())
        .then((response) => {
          console.log('Videojuego editado:', response);
          return response;
        })
        .catch((error) => {
          console.error('Error al editar videojuego:', error);
          throw error;
        });
}
