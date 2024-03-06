import { NavLink, Routes, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import './Home.css';
import InicioJuegos from './InicioJuegos';
import InsertarJuego from './InsertarJuego';
import Aboutus from './Aboutus';

function Home() {

    const { logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault(); // Evita que Link redireccione, lo hará la protección de ruta.
    logout();
  };


  return (
    <div className="home">
      <header>
        <h1>PORTAL DE VIDEOJUEGOS</h1>
      </header>
      <div className="container">
        <aside className="sidebar">
          <nav>
            <ul>
            <NavLink to="/videojuegos" activeClassName="active">Inicio</NavLink>&nbsp;
            <NavLink to="/videojuegos/nuevo" activeClassName="active">Alta juego</NavLink>&nbsp;
            <NavLink to="/acercade" activeClassName="active">Acerca de</NavLink>&nbsp;
            <NavLink to="/" onClick={handleLogout}>Cerrar Sesión</NavLink>
            </ul>
          </nav>
        </aside>
        <main className="content">
        <Routes>
          <Route exact path="/videojuegos" element={<InicioJuegos />} />
          <Route exact path="/videojuegos/nuevo" element={<InsertarJuego />} />
          <Route path="/acercade" element={<Aboutus />} />
        </Routes>
        </main>
      </div>
    </div>
  );














// eslint-disable-next-line no-lone-blocks
{/*
  return (
    <div className="app-container">
      <div className="App">
        <div className="nav-container">
          <nav>
            <NavLink to="/videojuegos" activeClassName="active">Inicio</NavLink>&nbsp;
            <NavLink to="/videojuegos/nuevo" activeClassName="active">Alta juego</NavLink>&nbsp;
            <NavLink to="/acercade" activeClassName="active">Acerca de</NavLink>&nbsp;

          </nav>
        </div>
        <Routes>
          <Route exact path="/videojuegos" element={<InicioJuegos />} />
          <Route exact path="/videojuegos/nuevo" element={<InsertarJuego />} />
          <Route path="/acercade" element={<Aboutus />} />
        </Routes>
      </div>
    </div>
  );
  */}
}

export default Home;
