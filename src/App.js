import { NavLink, Routes, Route } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import InicioJuegos from './components/InicioJuegos';

function App() {

  return (
    <div className="App">
      <nav>
        <NavLink to="/" activeClassName="active">Inicio</NavLink>&nbsp;
        <NavLink to="/nuevo" activeClassName="active">Alta juego</NavLink>&nbsp;
        <NavLink to="/acercade" activeClassName="active">Acerca de</NavLink>&nbsp;
      </nav>
      <Routes>
        <Route path="/" element={<InicioJuegos/>} />
        <Route path="/acercade" element={<Aboutus />} />
      </Routes>
    </div>
  );
}

export default App;
