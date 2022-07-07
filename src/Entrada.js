import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './componentes_Home/HomePage'
import App from './App/App'
import Login from './Login/login'
import Registro from './registro/Registro'
import PaginaUsuario from './PaginaUsuario/PaginaUsuario'
import PaginaSerie from './PaginaSerie/PaginaSerie'
import PaginaTemporada from './PaginaSerie/PaginaTemporada'



export default function Entrada() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/App' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registro' element={<Registro />} />
      <Route path='/paginaUsuario' element={<PaginaUsuario />} />
      <Route path='/PaginaSerie' element={<PaginaSerie />} />
      <Route path='/PaginaTemporada' element={<PaginaTemporada />} />



    </Routes>
  )
}
