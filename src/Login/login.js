import React from "react"; 
import './login.css';
import { Link } from 'react-router-dom';
import Cabecera from '../Cabecera';
import Footer from '../Footer';

function login() {
  return (
    <div className="login">
      <Cabecera />
      <div className='login-container'>
        <p>Introduce tus datos</p>
        <hr />
        <form >
          <label>Email</label>
          <p><input className='input'></input></p>
          <label>Contraseña</label>
          <p><input className='input'></input></p>
        </form>
      </div>
      <div className='cajaBtn'>
        <Link to="/" className='btn-login login-link'>Acceder</Link>
      </div>
      <Footer />

    </div>
  );
}
export default login;