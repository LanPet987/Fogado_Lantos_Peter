import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Szobak from './components/szobak.jsx'
import CustomNavbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <CustomNavbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Főoldal</h1>} />
          <Route path='/szobak' element={<Szobak />} />
          <Route path='/foglalas' element={<h1>Foglalás</h1>} />
          <Route path='/szobafoglaltsag' element={<h1>Szobafoglaltság</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
