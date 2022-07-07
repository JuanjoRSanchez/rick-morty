import React from "react"; 
import logo from '../Logo_blanco.png';
import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo} className="HomePage-logo" alt="logo" />
        <div className='HomePage-texto'>Bienvenido a Seriefilia!</div>
        <div className='HomePage-cajaBtn'>
          <Link to="/login" className='HomePage-link'>Login</Link>
          <Link to="/registro" className='HomePage-link'>Crear una cuenta</Link>
          <Link to="/paginaUsuario" className='HomePage-link'>Entrada libre</Link>
        </div>
      </header>
    </div>
  );
}
