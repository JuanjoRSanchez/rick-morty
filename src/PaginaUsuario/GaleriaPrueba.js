import React from "react";
//import  Po from '../Services/Get'

const titulo = 'titulo';
const ImageList = ({source}) => {
    return (
        source.map((caracter, idx) => (
            <>
               <div className='paginaUsuario-serie'>
                    <a href="/PaginaSerie">
                    <img src={caracter.image} alt={'cuadro del personaje' + caracter.name} key={'img_' + idx}  />
                    </a>
                    <div>
                        {caracter.name}
                    </div>
                </div> 
            </>
        ))
    )
}

export default ImageList;