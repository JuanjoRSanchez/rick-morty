import React, { useRef } from "react";
import logo from './Logo_blanco.png';
import flecha from './flechasMenu.png';
//import ReactDOM from "react-dom/client";
import './cabecera.css';

export default function Cabecera() {
    const inputElement = useRef();
    const inputElement01 = useRef();

    const focusInput = () => {
        let display = inputElement01.current.style.display;
        if(display === 'block'){
            inputElement01.current.style.display = 'none';
        }else{
            inputElement01.current.style.display = 'block';
        }
      };
  
    return (
        <div className="cabecera">
            <div className="cabecera-header">
                <div className='pruebalogo'>
                    <a href='/'><img src={logo} className="cabecera-logo" alt="logo" /></a>
                </div>
                <div className='cabecera-usuario' ref={inputElement}>
                    <div className='cabecera-nombreCaja'>
                        <div id='cabecera-nombre' >Usuario</div>
                    </div>
                    <div className='btn-desplegable' id='flechaMenu' onClick={focusInput}><img src={flecha} alt='flecha del menu de usuario' /></div>
                    <div className='cabecera-lista' id='cabecera-lista' ref={inputElement01}>
                        <ul>
                            <a  href='/'><li>11111111111</li></a>
                            <a  href='/'><li>22222222222</li></a>
                            <a  href='/'><li>33333333333</li></a>
                            <a  href='/'><li>44444444444</li></a>
                            <a  href='/'><li>55555555555</li></a>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="cabecera-hr" />
        </div>
    );
}

/*
                <div className='prueba'></div>

*/
