import React, { useEffect, useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import JuegoList from './components/JuegoList';
import Aboutus from './components/Aboutus';
import { getCategories } from './api/juegoApi';

function App() {
  const [juegos, setJuegos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const downloadCategorias = async () => {
      try {
        const response = await getCategories();
        if (!response.error) {
          setCategorias(response.data);
        }
      } catch (error) {
        console.error('Error al descargar categorías:', error);
      }
    };

    downloadCategorias();
  }, []);

  return (
    <div className="App">
      <nav>
        <NavLink to="/" activeClassName="active">Inicio</NavLink>&nbsp;
        <NavLink to="/nuevo" activeClassName="active">Alta juego</NavLink>&nbsp;
        <NavLink to="/acercade" activeClassName="active">Acerca de</NavLink>&nbsp;
      </nav>
      <Routes>
        <Route path="/" element={<JuegoList categorias={categorias} juegos={juegos} setJuegos={setJuegos}/>} />
        <Route path="/acercade" element={<Aboutus />} />
      </Routes>
    </div>
  );
}

export default App;
