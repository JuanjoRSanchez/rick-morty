import React from "react";
//import  Po from '../Services/Get'


const titulo = 'titulo';
const ImageList = ({source}) => {
    return (
        source.map((img, idx) => (
            <>
               <div className='paginaUsuario-serie'>
                    <a href="/PaginaSerie">
                    <img src={img} alt={'img_' + idx} key={'img_' + idx}  />
                    </a>
                    <div>
                        {titulo}
                    </div>
                </div> 
            </>
        ))
    )
}

export default ImageList;