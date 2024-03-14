import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
//import './password.css';

function PerfilComponent() {

    const imagen = localStorage.getItem('imagen');
    const usuario = localStorage.getItem('usuario');
    const nombre = localStorage.getItem('nombre');
    const descripcion = localStorage.getItem('descripcion');

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const number = randomNumberInRange(0,1);

    return (

        <div className="vistaClave">

            <h1>Perfil de usuario {usuario}</h1>

            <img src={imagen} alt={usuario.nombre} />

            { number === 1 ? (
                <div>
                    <p><strong>Nombre:</strong> {nombre}</p>
                    <p><strong>Usuario:</strong> {usuario}</p>
                    <p><strong>Descripcion:</strong> {descripcion}</p>

                </div>
                
            ) : (

                <div>
                    <p><strong>Nombre:</strong> <input type="text" name="nombre" defaultValue={nombre} /></p>
                    <p><strong>Usuario:</strong> <input type="text" name="usuario" defaultValue={usuario} /></p>
                    <p><strong>Descripcion:</strong> <input type="text" name="descripcion" defaultValue={descripcion} /></p>
                </div>
            )}
        </div>
    );
}

export default PerfilComponent;