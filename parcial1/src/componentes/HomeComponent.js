import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
//import './email.css';

function HomeComponent() {


    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch('https://my.api.mockaroo.com/users.json?key=53df03a0')
        .then(response => response.json())
        .then(data => setUsuarios([...usuarios, ...data]))
        .catch(error => console.error('Error fetching characters:', error));
    }, []);


    const [userSelect, setUserSelect] = useState(null); // Inicialmente null

    return (
        <div className="home">

            <div className='contenidoUno'>
                <img src={carro.image} alt={carro.carModel} />
            </div>

        </div>
    );

}

export default HomeComponent;