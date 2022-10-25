import React from "react";
import './paginaUsuario.css';
import Header from '../header/Cabecera'
import Footer from '../footer/Footer'

import GetPersonajes from './GetPersonjes'



function Paginausuario() {
    return (
        <>
            <Header />
            <div className="Paginausuario">
                <div className="paginaUsuario-cuerpo">
                    <div className='paginaUsuario-body'>
                        <p >Personajes</p>
                        <div className='paginausuario-caja'>
                            <GetPersonajes />
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}
export default Paginausuario;
