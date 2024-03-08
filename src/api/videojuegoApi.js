const dbVideojuegos = "http://localhost:3000/videojuegos"
const dbPlataformas = "http://localhost:3000/plataformas"
const dbCategorias = "http://localhost:3000/categorias"


export const postVideojuego = (nuevoVideojuego) => {
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoVideojuego),
      };
    
      // Realizar la petición POST
      return fetch(dbVideojuegos, requestOptions)
        .then((res) => res.json())
        .then((response) => {
          console.log('Videojuego añadido:', response);
          return response;
        })
        .catch((error) => {
          console.error('Error al añadir videojuego:', error);
          throw error;
        });
    };

    export const getPlataformas = () => {
        return fetch(dbPlataformas).then(res => res.json()).then(response => {
          const data = response
          const plataformas = data.map(plat => {
              const {id, name} = plat
              return {id, name}
          })
      
          return plataformas
        })
      }

      export const getJuegos = ({busqueda = '', busquedaCategorias = [''], busquedaPlataformas = ['']}, id = null) => {  
        return fetch(dbVideojuegos).then(res => res.json()).then(response => {
          const data = response
          const videojuegos = data.map(videojuego => {
              const {id, nombre, descripcion, fecha_lanzamiento, compañia, plataformas, categorias, precio, url_imagen, url_video} = videojuego
              return {id, nombre, descripcion, fecha_lanzamiento, compañia, plataformas, categorias, precio, url_imagen, url_video}
          })
      
          let coincidencias = videojuegos
      
          if (busqueda !== '' || busquedaCategorias.length !== 0 || busquedaPlataformas.length !== 0){
            if(busquedaCategorias.length !== 0){
              const coincidenciasCategorias = coincidencias.filter(function(videojuego){
                if(busquedaCategorias.some(categoriaElegida => 
                  videojuego.categorias.includes(categoriaElegida))){
                    return null
                  }else{
                    return videojuego
                  }
              }) 
              coincidencias = coincidenciasCategorias;
            }
      
            if(busquedaPlataformas.length !== 0){
              const coincidenciasPlataformas = coincidencias.filter(function(videojuego){
                if(videojuego.plataformas.every(plataformaElegida => 
                  busquedaPlataformas.includes(plataformaElegida))
                  ){
                    return null
                  }else{
                    return videojuego
                  }
              })
              coincidencias = coincidenciasPlataformas
            }
      
            if(busqueda !== ''){
              const coincidenciasBusqueda = coincidencias.filter(function(videojuego){
                if(videojuego.nombre.toLowerCase().trim().includes(busqueda.toLowerCase().trim()) || 
                videojuego.descripcion.toLowerCase().trim().includes(busqueda.toLowerCase().trim())){
                  return videojuego
                }else{
                  return null
                }
              })
              coincidencias = coincidenciasBusqueda
            }
          }
      
          if(id != null){
            const videojuegoConcreto = videojuegos.filter(videojuego => 
              videojuego.id === id
            )
            coincidencias = videojuegoConcreto
          }
      
          return coincidencias
        })
      }

      export const getCategorias = () => {
        return fetch(dbCategorias).then(res => res.json()).then(response => {
          const data = response
          const categorias = data.map(cat => {
              const {id, name} = cat
              return {id, name}
          })
      
          return categorias
        })
      }

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
    