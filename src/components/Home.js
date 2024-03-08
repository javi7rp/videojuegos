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
}

export default Home;
