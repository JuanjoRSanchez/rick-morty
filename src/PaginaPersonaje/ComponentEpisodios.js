import React from "react";
import './personajeDetalle.css'

function EpisodiosList({ source }) {
    const list = Object.values(source);

    return (
        list.map((element, idx) => (
                <div className='cuadro_episodio'>
                    <div key={idx +1}>Episodio { element ? element.split('/')[5] : ''}</div>
                </div>
        )
        )
    )
}
export default EpisodiosList;
