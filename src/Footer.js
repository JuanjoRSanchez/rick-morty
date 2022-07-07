import React from "react"; 
import './footer.css';

function footer() {
    return (
        <div className="footer">
            <div className="footer-header">
                <div className='footer-lista ' >
                    <h2>Seriefilia</h2>
                    <hr/>
                    <p><a href='/' alt='ghjkkhjkhjk'>Quiénes somos</a></p>
                    <p><a href='/' alt='ghjkkhjkhjk'>Ayuda</a></p>
                </div>
                <div className='footer-lista ' >
                    <h2>Otras</h2>
                    <hr/>
                    <p><a href='/' alt='ghjkkhjkhjk'>Quiénes somos</a></p>
                    <p><a href='/' alt='ghjkkhjkhjk'>Ayuda</a></p>
                </div>
                <div className='footer-lista ' >
                    <h2>Redes sociales</h2>
                    <hr/>
                    <p><a href='/' alt='ghjkkhjkhjk'>Quiénes somos</a></p>
                    <p><a href='/' alt='ghjkkhjkhjk'>Ayuda</a></p>
                </div>
            </div>
        </div>
    );
}

export default footer;

/*
 <div className='footer-lista ' >
                    <h2>sgasdfgasdf</h2>
                    <ul className='list' >
                        <li><a href='/' alt='ghjkkhjkhjk'>Quiénes somos</a></li>
                        <li><a href='/' alt='ghjkkhjkhjk'>Ayuda</a></li>
                    </ul>
                </div>
                 <div className='pruebalogo'>
                    <a href='/'><img src={logo} className="footer-logo" alt="logo" /></a>
                </div> 
*/