import React from 'react';
import './perfil.css';
import { FormattedMessage } from 'react-intl';

function PerfilComponent() {

    const imagen = localStorage.getItem('imagen');
    const usuario = localStorage.getItem('usuario');
    const nombre = localStorage.getItem('nombre');
    const descripcion = localStorage.getItem('descripcion');
    const url = localStorage.getItem('url');

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const number = randomNumberInRange(0,1);

    return (

        <div className="perfil">

            <img src={imagen} alt={usuario.nombre} />

            { number === 1 ? (
                <div>
                    <p><strong><FormattedMessage id="perfil.username"/>:</strong></p>
                    <div className='label'>
                        <p>{usuario}</p>
                    </div>
                    <p><strong><FormattedMessage id="perfil.name"/>:</strong></p>
                    <div className='label'>
                        <p>{nombre}</p>
                    </div>
                    <p><strong><FormattedMessage id="perfil.description"/>:</strong></p>
                    <div className='label'>
                        <p>{descripcion}</p>
                    </div>
                    <p><strong><FormattedMessage id="perfil.url"/>:</strong></p>
                    <div className='label'>
                        <p>{url}</p>
                    </div>
                </div>
            ) : (
                <div>
                    <p><strong><FormattedMessage id="perfil.username"/>:</strong></p>
                    <input type="text" defaultValue={usuario}/>
                    <p><strong><FormattedMessage id="perfil.name"/>:</strong></p>
                    <input type="text" defaultValue={nombre}/>
                    <p><strong><FormattedMessage id="perfil.description"/>:</strong></p>
                    <input type="text" defaultValue={descripcion}/>
                    <p><strong><FormattedMessage id="perfil.url"/>:</strong></p>
                    <input type="text" defaultValue={url}/>
                </div>
            )}

            { number === 1 ? (
                <button><FormattedMessage id="perfil.nodisponibility"/></button>
            ) : (
                <button><FormattedMessage id="perfil.disponibility"/></button>
            )}

        </div>
    );
}

export default PerfilComponent;