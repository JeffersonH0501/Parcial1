import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeComponent from './componentes/HomeComponent';
import PerfilComponent from './componentes/PerfilComponent';
import DetalleComponent from './componentes/Detalle';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<HomeComponent />} />
          <Route path="/perfil" element={<PerfilComponent />} />
          <Route path="/detalle" element={<DetalleComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
