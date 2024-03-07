import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import './Home.css';

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
          <nav className='navigation-menu'>
            <ul>
              <li><Link to="/videojuegos" >Inicio</Link></li>
              <li><Link to="/nuevo" >Añadir Videojuego</Link></li>
              <li><Link to="/acercade">Acerca de</Link></li>
              <li><Link to="/" onClick={handleLogout}>Cerrar Sesión</Link></li>
            </ul>
          </nav>
        <main className="content">
          <Outlet />
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
