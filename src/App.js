import { NavLink, Routes, Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import InicioJuegos from './components/InicioJuegos';
import InsertarJuego from './components/InsertarJuego';
import EditJuego from './components/EditJuego';

function App() {

  return (
    <div className="App">
      <nav>
        <NavLink to="/videojuegos" activeClassName="active">Inicio</NavLink>&nbsp;
        <NavLink to="/videojuegos/nuevo" activeClassName="active">Alta juego</NavLink>&nbsp;
        <NavLink to="/acercade" activeClassName="active">Acerca de</NavLink>&nbsp;
      </nav>
      <Routes>
        <Route path="/videojuegos" element={<InicioJuegos/>}/>
        <Route path="/videojuegos/nuevo" element={<InsertarJuego/>}/>
        <Route path="/videojuegos/update/:videojuego" element={<EditJuego/>}/>
        <Route path="/acercade" element={<Aboutus/>} />
      </Routes>
    </div>
  );
}

export default App;
