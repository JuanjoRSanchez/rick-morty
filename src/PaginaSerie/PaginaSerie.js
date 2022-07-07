import React from "react";
import Cabecera from '../Cabecera';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import lupa from '../lupa.png';
import BB from '../img/breakingbad.jpg';
import ImageList from "./Galeria";

/*
const titulos = [
    'Breaking Bad'
]
*/
const titulo = 'Breaking Bad'
const images01 = [
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
    BB,
]

function PaginaSerie() {
    return (
        <div className="Paginausuario">
            <Cabecera />
            <div className='nuevaSerie-cajaBtn'>
                <Link to="/" className='nuevaSerie-link'>Añadir Serie</Link>
                <div >
                    <input type='text' className='input-buscador'></input>
                    <img src={lupa} alt='Botón de busqueda' className='paginaUsuario-lupa'></img>
                </div>
            </div>
            <div className='paginaUsuario-body'>
                <p >{titulo}</p>
                <div className='paginausuario-caja'>
                <ImageList source={images01} />
                </div>
            </div>
            <Footer />
        </div >
    );
}
export default PaginaSerie;