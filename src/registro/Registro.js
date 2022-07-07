import React from "react"; 
import './registro.css';
import { Link } from 'react-router-dom';
import Cabecera from '../Cabecera';
import Footer from '../Footer';

function registro() {
    return (
        <div className="registro">
            <Cabecera />
            <div className='registro-container'>
                <p>Introduce tus datos</p>
                <hr />
                <form >
                    <label>Nombre</label>
                    <p><input className='input'></input></p>
                    <label>Email</label>
                    <p><input className='input'></input></p>
                    <label>Contraseña</label>
                    <p><input className='input'></input></p>
                </form>
            </div>
            <div className='cajaBtn'>
                <Link to="/" className='btn-entrar registro-link'>Crear cuenta</Link>
            </div>
            <Footer />
        </div>
    );
}
export default registro;