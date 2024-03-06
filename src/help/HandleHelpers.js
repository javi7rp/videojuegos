import { deleteVideojuego } from "../api/deleteJuego";
import { getJuegos } from "../api/getJuegos"
import { postVideojuego } from "../api/postJuego"


export const handleChecked = (attrElegidas, setAttrElegidas, isChecked, setIsChecked) => (evt) => {
    const valor = evt.target.id;

    setIsChecked(!isChecked)

    if (!attrElegidas.includes(valor)) {
        setAttrElegidas(prevAttr => [...prevAttr, valor]);
    } else {
        setAttrElegidas(prevAttr => prevAttr.filter(c => c !== valor));
    }
}

export const handleEliminarJuego = (videojuego) => {
    const confirmado = window.confirm('¿Estás seguro de que deseas eliminar este videojuego?');

    if (confirmado) {
        deleteVideojuego(videojuego)
    }
  };

export const formHandleChecked = (nuevoJuego, setNuevoJuego) => (evt) => {
    const attr = evt.target.name
    const valor = evt.target.id
    
    const arrayActual = nuevoJuego[attr]
    let nuevoArray = []
    if(arrayActual.includes(valor)){
        nuevoArray = arrayActual.filter(v => v !== valor)
    }else{
        arrayActual.push(valor)
        nuevoArray = arrayActual
    }

    setNuevoJuego({ ...nuevoJuego, [attr]: nuevoArray})
}

export const handleChange = (nuevoJuego, setNuevoJuego) => (evt) => {
    const attr = evt.target.name
    const valor = evt.target.value
    setNuevoJuego({ ...nuevoJuego, [attr]: valor})
}

export const handleSubmit = ({juego, peticion = -1}) => async (e) => {
    e.preventDefault()
    console.log(peticion)
    console.log(juego)
    juego.fecha_lanzamiento = juego.fecha_lanzamiento.replaceAll('-', '/')
    juego.precio = parseFloat(juego.precio, 10)
    
    switch(peticion){
        //Post
        case 0:
            getJuegos({}).then(videojuegos => {
                //const videojuego = { ...juego, id: videojuegos.length.toLocaleString() };
                //postVideojuego(videojuego)

                const ultimoID = videojuegos.reduce((maxID, videojuego) => {
                    return Math.max(maxID, parseInt(videojuego.id, 10));
                }, 0);
                // Incrementa el ID más alto en uno para obtener un nuevo ID único
                const nuevoID = ultimoID + 1;
                const videojuego = { ...juego, id: nuevoID.toString() };
                console.log(videojuego);
                postVideojuego(videojuego);
            })
            break;

        default:
            break;
    }
}