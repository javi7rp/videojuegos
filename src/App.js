import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';
import { useAuth } from './context/AuthProvider';
import InicioJuegos from './components/InicioJuegos';
import Aboutus from './components/Aboutus';
import InsertarJuego from './components/InsertarJuego';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <Loading/>;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/registro" element={<RegisterForm/>}/>
      <Route path="" exact element={<PrivateRoute><Home/></PrivateRoute>}>
        <Route index path="/videojuegos" element={<PrivateRoute><InicioJuegos/></PrivateRoute>}/>
        <Route path="/nuevo" element={<PrivateRoute><InsertarJuego/></PrivateRoute>}/>
        <Route path="/acercade" element={<PrivateRoute><Aboutus/></PrivateRoute>}/>
      </Route>
    </Routes>
  );
}


export default App;
