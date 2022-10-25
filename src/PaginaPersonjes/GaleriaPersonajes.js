import React from "react";
import { Link } from "react-router-dom";

const GaleriaPersonajes = ({ source }) => {

    return (
        source.map((caracter, idx) => (
            <>
                <div className='paginaUsuario-serie'>
                    <Link to='/personaje' state={idx + 1} >
                        <img src={caracter.image} alt={'cuadro del personaje' + caracter.name} key={idx + 1} />
                    </Link>
                    <div>
                        {caracter.name}
                    </div>
                </div>
            </>
        ))
    )
}

export default GaleriaPersonajes;

