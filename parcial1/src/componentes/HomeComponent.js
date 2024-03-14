import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './home.css';

function HomeComponent() {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/JeffersonH0501/Parcial1/main/datos.json')
        .then(response => response.json())
        .then(data => setUsuarios(data))
        .catch(error => console.error('Error fetching characters:', error));
    }, []);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    console.log(usuarios);
    const usuario = usuarios[0];

    return (
        <div className="home">
            {usuario && (
                <div className='contenidoUno'>

                    <img src={usuario.imagenes[0]} alt={usuario.nombre} />

                    <div className="infoUsuario">
                        <h1>{usuario.nombre}</h1>
                        <p><strong>Nombre: </strong> {usuario.usuario}</p>
                        <p><strong>Descripcion: </strong> {usuario.descripcion}</p>
                        <p><strong>Posts: </strong> {usuario.posts}</p>
                        <p><strong>Seguidores: </strong> {usuario.seguidores}</p>
                        <p><strong>Seguidos: </strong> {usuario.seguidos}</p>
                    </div>

                    <h1>Imagenes</h1>
                    <div className="contenidos imagenes">
                        {usuario.imagenes.map(imagen => (
                            <img src={imagen} alt={usuario.nombre} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomeComponent;