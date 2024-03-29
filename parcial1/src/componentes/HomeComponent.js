import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
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

    const usuario = usuarios[0];

    const [redirectToPerfil, setRedirectToPerfil] = useState(false);
    const [redirectToDetail, setRedirectToDetail] = useState(false);

    if (redirectToPerfil) {
        return <Navigate to="/perfil" />;
    }

    if (redirectToDetail) {
        return <Navigate to="/detalle" />;
    }

    const vistaPerfil = () => {
        localStorage.setItem('imagen', usuario.imagen_perfil);
        localStorage.setItem('usuario', usuario.usuario);
        localStorage.setItem('nombre', usuario.nombre);
        localStorage.setItem('descripcion', usuario.descripcion);
        localStorage.setItem('url', usuario.url);
        setRedirectToPerfil(true);
    };

    const vistaDetalle = (imagen) => {
        localStorage.setItem('usuario', usuario.usuario);
        localStorage.setItem('imagen', imagen);
        setRedirectToDetail(true);
    };

    return (
    <div className="home">
        {usuario && (
            <div className="contenidoInformacion">
                <img onClick={vistaPerfil} src={usuario.imagen_perfil} alt={usuario.nombre} className="imagenPerfil" />
                <div className="informacionUsuario">
                    <h1>{usuario.usuario}</h1>
                    <p><strong>{usuario.nombre} </strong>{usuario.descripcion}</p>
                    <p><strong><a href={usuario.url}>{usuario.url}</a></strong></p>
                    <div className="infoEstadisticas">
                        <div className="info">
                            <p><strong>{usuario.posts} </strong><FormattedMessage id="home.posts"/></p>
                        </div>
                        <div className="info">
                            <p><strong>{usuario.seguidores} </strong><FormattedMessage id="home.followers"/></p>
                        </div>
                        <div className="info">
                            <p><strong>{usuario.seguidos} </strong><FormattedMessage id="home.following"/></p>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {usuario && (
            <div className="contenidoImagenes">
                <div className='matriz'>
                    {usuario.imagenes.map((imagen, index) => (
                        <img key={index} onClick={() => vistaDetalle(imagen)} src={imagen} alt={usuario.nombre} />
                    ))}
                </div>
            </div>
        )}
    </div>
    );    
}

export default HomeComponent;