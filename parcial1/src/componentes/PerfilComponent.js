import React from 'react';
import './perfil.css';

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
                    <p><strong>Nombre de usuario:</strong></p>
                    <div className='label'>
                        <p>{usuario}</p>
                    </div>
                    <p><strong>Nombre completo:</strong></p>
                    <div className='label'>
                        <p>{nombre}</p>
                    </div>
                    <p><strong>Descripción del perfil:</strong></p>
                    <div className='label'>
                        <p>{descripcion}</p>
                    </div>
                    <p><strong>URL página principal:</strong></p>
                    <div className='label'>
                        <p>{url}</p>
                    </div>
                </div>
            ) : (
                <div>
                    <p><strong>Nombre de usuario:</strong></p>
                    <input type="text" defaultValue={usuario}/>
                    <p><strong>Nombre completo:</strong></p>
                    <input type="text" defaultValue={nombre}/>
                    <p><strong>Descripción del perfil:</strong></p>
                    <input type="text" defaultValue={descripcion}/>
                    <p><strong>URL página principal:</strong></p>
                    <input type="text" defaultValue={url}/>
                </div>
            )}

            { number === 1 ? (
                <button>No Disponible Para Editar</button>
            ) : (
                <button>Disponible Para Editar</button>
            )}

        </div>
    );
}

export default PerfilComponent;