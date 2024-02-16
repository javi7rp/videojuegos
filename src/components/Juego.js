import { Link } from "react-router-dom";
import { deleteJuego } from "../api/juegoApi"

const Juego = ({categorias, Juego, onDeleteJuego}) => {

    const delJuego = async () => {
      const response = await deleteJuego(Juego);
      if (!response.error) {
        onDeleteJuego(Juego);
      }
    }

    const getCategory = ()=>{
        const cat = categorias.find((category)=>category.id==Juego.category);
        if (cat) {
          return cat.name;
        } else {
          return "No clasificado";
        }
    }

    return  <div>
              <h1><Link to={"/Juego/"+Juego.id}>{Juego.title}</Link></h1>
                <img src={Juego.cover} alt="Portada Juego"/>
              {
                Juego.author ? <p>{Juego.author}</p> : <p>Autor desconocido</p>
              }
              <p>La categoría es: {getCategory()}</p>
              <button onClick={delJuego}>Borrar Juego</button>
            </div>
}

export default Juego;