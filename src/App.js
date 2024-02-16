import React, { useEffect, useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import JuegoList from './JuegoList';
import JuegoDetail from './JuegoDetail';
import JuegoValidationForm from './JuegoValidationForm';
import Aboutus from './Aboutus';
import ErrorComponent from './ErrorComponent';
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

  const onSaveJuego = (newJuego) => {
    setJuegos([...juegos, newJuego]);
  };

  const onDeleteJuego = (deletedJuego) => {
    const newJuegos = juegos.filter((juego) => juego.id !== deletedJuego.id);
    setJuegos(newJuegos);
  };

  return (
    <div className="App">
      <nav>
        <NavLink to="/" activeClassName="active">Inicio</NavLink>&nbsp;
        <NavLink to="/nuevo" activeClassName="active">Alta juego</NavLink>&nbsp;
        <NavLink to="/acercade" activeClassName="active">Acerca de</NavLink>&nbsp;
      </nav>
      <Routes>
        <Route path="/" element={<JuegoList categorias={categorias} juegos={juegos} setJuegos={setJuegos} onDeleteJuego={onDeleteJuego} />} />
        <Route path="/juego/:juegoId" element={<JuegoDetail />} />
        <Route path="/nuevo" element={<JuegoValidationForm categorias={categorias} onSaveJuego={onSaveJuego} />} />
        <Route path="/acercade" element={<Aboutus />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </div>
  );
}

export default App;
