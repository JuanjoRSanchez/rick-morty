import React from "react";
import './galeriaTemporada.css';

const ImageList = ({ source }) => {
    return (
        source.map((img, idx) => (
            <>
                <div className='paginaUsuario-episodio'>
                    <img src={img} alt={'img_' + idx} key={'img_' + idx} />
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
/*
 <div className='paginaUsuario-serie'>
     <a href="/PaginaEpisodio">
        <img src={img} alt={'img_' + idx} key={'img_' + idx}  />
        <div>Episodio {idx+1}</div>
        <div>jjjjjjjjjjj</div>
    </a>
</div> 
*/