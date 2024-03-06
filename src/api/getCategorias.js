const dbCategorias = "http://localhost:3000/categorias"

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