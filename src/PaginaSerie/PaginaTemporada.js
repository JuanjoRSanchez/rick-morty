import React from "react";
import './paginaSerie.css';
import Cabecera from '../Cabecera';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import lupa from '../lupa.png';
import BB from '../img/breakingbad.jpg';
import ImageList from "./GaleriaTemporada";

const titulo = 'Breaking Bad'
const numeroTemporada = 1;

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
]

function PaginaTemporada() {
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
                <p >Temporada: {numeroTemporada}</p>

                <div className='paginausuario-caja'>
                <ImageList source={images01} />
                </div>
            </div>
            <Footer />
        </div >
    );
}
export default PaginaTemporada;