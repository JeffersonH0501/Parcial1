import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './home.css';

function HomeComponent() {

    const [usuarios, setUsuarios] = useState([])

    const [redirectToPerfil, setRedirectToPerfil] = useState(false);
    const [redirectToDetail, setRedirectToDetail] = useState(false);


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/JeffersonH0501/Parcial1/main/datos.json')
        .then(response => response.json())
        .then(data => setUsuarios(data))
        .catch(error => console.error('Error fetching characters:', error));
    }, []);

    const usuario = usuarios[0];

    if (redirectToPerfil) {
        return <Navigate to="/perfil" />;
    }

    if (redirectToDetail) {
        return <Navigate to="/detalle" />;
    }

    const handleNext = () => {
        localStorage.setItem('imagen', usuario.imagenes[0]);
        localStorage.setItem('usuario', usuario.usuario);
        localStorage.setItem('nombre', usuario.nombre);
        localStorage.setItem('descripcion', usuario.descripcion);
        setRedirectToPerfil(true);
    };

    const handleNextDetail = (imagen) => {
        localStorage.setItem('imagen', imagen);
        localStorage.setItem('usuario', usuario.usuario);
        setRedirectToDetail(true);
    };

    return (
        <div className="home">
            {usuario && (
                <div className='contenidoUno'>

                    <img onClick={handleNext} src={usuario.imagenes[0]} alt={usuario.nombre} />

                    <div className="infoUsuario">
                        <h1>{usuario.nombre}</h1>
                        <p><strong>Nombre: </strong> {usuario.usuario}</p>
                        <p><strong>Descripcion: </strong> {usuario.descripcion}</p>
                        <p><strong>Posts: </strong> {usuario.posts}</p>
                        <p><strong>Seguidores: </strong> {usuario.seguidores}</p>
                        <p><strong>Seguidos: </strong> {usuario.seguidos}</p>
                    </div>

                    <div className="contenidosImagenes">
                        {usuario.imagenes.map(imagen => (
                            <img onClick={() => handleNextDetail(imagen)} src={imagen} alt={usuario.nombre} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomeComponent;