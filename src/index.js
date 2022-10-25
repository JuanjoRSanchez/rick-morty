import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Personajes from './PaginaPersonjes/Personajes';
import PersonajeDetalle from './PaginaPersonaje/PersonajeDetalle';
import HomePage from './componentes_Home/HomePage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/personajes' element={<Personajes />} />
      <Route path='/personaje' element={<PersonajeDetalle />} />
    </Routes>
  </BrowserRouter>
);

