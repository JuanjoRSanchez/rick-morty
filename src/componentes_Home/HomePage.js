import React from "react"; 
import logo from '../assets/images/Logo_RickMorty.png';
import './HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo} className="HomePage-logo" alt="logo" />
        <div className='HomePage-texto'>Bienvenido a Rick an Morty!</div>
        <div className='HomePage-cajaBtn'>
          <Link to="/personajes" className='HomePage-link'>Entrada libre</Link>
        </div>
      </header>
    </div>
  );
}
