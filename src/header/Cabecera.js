import React from "react";
import logo from '../assets/images/Logo_RickMorty.png';
import './cabecera.css';
import { Link } from 'react-router-dom';

export default function Cabecera() {

    return (
        <div className="cabecera">
            <div className="cabecera-header">
           <Link to='/personajes'> <button className="btn_home"> Home</button></Link>
                <div className='pruebalogo'>
                <Link to='/'><img src={logo} className="cabecera-logo" alt="logo" /></Link>
                </div>
            </div>
        </div>
    );
}

/*
<hr className="cabecera-hr" />
*/

