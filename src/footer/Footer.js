import React from "react"; 
import './footer.css';

function footer() {
    return (
        <div className="footer">
            <div className="footer-header">
                <div className='footer-lista ' >
                    <h2>Rick & Morty</h2>
                    <hr/>
                </div>
                <div className='footer-lista ' >
                    <h2>Aplicación realizada a modo de practica con React</h2>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default footer;

/*
<p><a href='/' alt='ghjkkhjkhjk'>Quiénes somos</a></p>
<p><a href='/' alt='ghjkkhjkhjk'>Ayuda</a></p>

<p><a href='/' alt='ghjkkhjkhjk'>Quiénes somos</a></p>
<p><a href='/' alt='ghjkkhjkhjk'>Ayuda</a></p>
*/