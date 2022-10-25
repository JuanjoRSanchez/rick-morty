import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ComponentEpisodios from './ComponentEpisodios'
import './personajeDetalle.css'
import { useLocation } from "react-router-dom";
import Header from '../header/Cabecera'
import Footer from '../footer/Footer'

function PaginaSerie(props) {
    const location = useLocation();
    const state = location.state;
    const baseURL = "https://rickandmortyapi.com/api/character/" + state;
    const [post, setPost] = useState({})
    const [origin, setOrigin] = useState({})
    const [loca, setLoca] = useState({})
    const [episodes, setEpisodes] = useState({})

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setPost(response.data);
                setOrigin(response.data.origin)
                setLoca(response.data.location)
                setEpisodes(response.data.episode)
            });
    }, []);

    return (
        <>
            <Header />
            <div className="Paginausuario">
                <div className='paginaUsuario-body'>
                    <div className="box_detalle">
                        <img src={post.image} alt='Imagen del personaje' className="img_detalle" />
                        <div className="info_detalle">
                            <p className="texto_detalle">Nombre: {post.name}</p>
                            <p className="texto_detalle">Status: {post.status}</p>
                            <p className="texto_detalle">Especie: {post.species}</p>
                            <p className="texto_detalle">Genero: {post.gender}</p>
                            <p className="texto_detalle">Creado: {post.created}</p>
                            <p className="texto_detalle">Prueba: {post.id}</p>
                            <p className="texto_detalle">Origen: {origin.name}</p>
                            <p className="texto_detalle">Localización: {loca.name}</p>
                        </div>
                    </div>
                    <p className="texto_detalle">Participa en los siguientes episodio/s: </p>
                    <div className='box_episodio'>
                        <ComponentEpisodios source={episodes} />
                    </div>
                </div>
            </div >
            <Footer />
        </>

    );
}
export default PaginaSerie;

/*
<div className="img_detalle">
                            <img src={post.image} alt='Imagen del personaje' />
                        </div>
*/