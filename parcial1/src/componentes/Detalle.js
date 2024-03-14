import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './detalle.css';

function PerfilComponent() {

    const imagen = localStorage.getItem('imagen');
    const usuario = localStorage.getItem('usuario');


    return (

        <div className="detalle">

            <h1>Detalle de Foto de {usuario}</h1>

            <img src={imagen} alt={usuario.nombre} />

            <p><strong>Usuario:</strong> {usuario}</p>

        </div>
    );
}

export default PerfilComponent;