import React from "react";
import './paginaUsuario.css';
import Cabecera from '../Cabecera';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import lupa from '../lupa.png';
import BB from '../img/BreakingBad02.jpg';
import BE from '../img/true-detective.jpg';
import BD from '../img/BreakingBad02.jpg';
import BV from '../img/Los_Soprano.jpg'
import BA from '../img/TheWire.jpg'
import ImageList from "./Galeria";
import  Po from '../Services/Get'
/*

let uno = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
const images01 = [
    BB,
    BD,
    BB,
    uno,
    BE,
    BA,
    BE,
    BB,
    BB,
    BV,
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
*/

function Paginausuario() {
    let uno = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    const images01 = [
    BB,
    BD,
    BB,
    uno,
    BE,
    BA,
    BE,
    BB,
    BB,
    BV,
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
                <p >Tus series</p>
                <div className='paginausuario-caja'>
                    <ImageList source={images01} />
                    <Po />
                </div>
            </div>
            <Footer />
        </div >
    );
}
export default Paginausuario;
