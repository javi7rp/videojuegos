const dbPlataformas = "http://localhost:3000/plataformas"

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