import React from "react";
import Cabecera from '../Cabecera';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import lupa from '../lupa.png';
import B1 from '../img/breakingbad_temporada01.jpg';
import B2 from '../img/breakingbad_temporada02.jpg';
import B3 from '../img/breakingbad_temporada03.jpg';
import B4 from '../img/breakingbad_temporada04.jpg';
import B5 from '../img/breakingbad_temporada05.jpg';
import ImageList from "./Galeria";

const titulo = 'Breaking Bad'
const images01 = [
    B1,
    B2,
    B3,
    B4,
    B5,
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