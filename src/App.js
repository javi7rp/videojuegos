import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { deleteJuego, getCategories } from './api/juegoApi';

function App() {
 
  const [juegos, setJuegos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const downloadCategorias = async () => {
    const response = await getCategories();
    if(!response.error){
      setCategorias(response.data)
    }
  }

  useEffect(() => {
    downloadCategorias();
  },[juegos])

  const onSaveJuego = (newJuego) => {
    setJuegos([...juegos, newJuego])
  }

  const onDeleteJuego = (deleteJuego) => {
    const newJuegos = juegos.filter((juego) => deleteJuego!==juego)
    setJuegos(newJuegos)
  }

  return(
    <div className="App">
      
    </div>
  )

export default App;
