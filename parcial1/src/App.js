import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CarlistosComponent from './componentes/carlitos';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<CarlistosComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;