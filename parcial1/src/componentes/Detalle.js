import React from 'react';
import './detalle.css';
import { FormattedMessage } from 'react-intl';

function PerfilComponent() {

    const usuario = localStorage.getItem('usuario');
    const imagen = localStorage.getItem('imagen');

    return (
        <div className="detalle">
            <h1><FormattedMessage id="detail.photoDetail"/> {usuario}</h1>
            <img src={imagen} alt={usuario.nombre} />

        </div>
    );
}

export default PerfilComponent;