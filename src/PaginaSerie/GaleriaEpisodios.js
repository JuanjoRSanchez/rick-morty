import React from "react";

const ImageList = ({source}) => {
    return (
        source.map((img, idx) => (
            <>

               <div className='paginaUsuario-serie'>
                    <a href="/PaginaTemporada">
                    <img src={img} alt={'img_' + idx} key={'img_' + idx}  />
                    <div>Temporada {idx+1}</div>
                    <div>jjjjjjjjjjj</div>
                    </a>
                </div> 
            </>
        ))
    )
}

export default ImageList;