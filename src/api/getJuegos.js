const dbVideojuegos = "http://localhost:3000/videojuegos"

export const getJuegos = ({busqueda = '', busquedaCategorias = [''], busquedaPlataformas = ['']}, id = null) => {  
  return fetch(dbVideojuegos).then(res => res.json()).then(response => {
    const data = response
    const videojuegos = data.map(videojuego => {
        const {id, nombre, descripcion, fechaLanzamiento, compañia, plataformas, categorias, precio, portada, trailer} = videojuego
        return {id, nombre, descripcion, fechaLanzamiento, compañia, plataformas, categorias, precio, portada, trailer}
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