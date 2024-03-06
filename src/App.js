import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';
import { useAuth } from './context/AuthProvider';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <Loading/>;
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/registro" element={<RegisterForm/>}/>
      <Route path="/" exact element={<PrivateRoute><Home/></PrivateRoute>}/>
    </Routes>
  );
}


export default App;
