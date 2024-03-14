import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeComponent from './componentes/HomeComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<HomeComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;