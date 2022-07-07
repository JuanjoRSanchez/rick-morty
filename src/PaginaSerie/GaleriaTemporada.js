import React from "react";
import './galeriaTemporada.css';


const ImageList = ({source}) =>{
    return (
        source.map((img, idx) => (
            <>
                <div className='paginaUsuario-episodio'>
                    <div>Episodio {idx + 1}</div>
                    <div>Valoración</div>
                    <div>Vista</div>
                    <div>Comentario</div>
                </div>
            </>
        ))
    )
}
export default ImageList;
