import { useState } from 'react'
import './css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Szobak from './components/szobak.jsx'
import CustomNavbar from './components/Navbar.jsx'
import Fooldal from './oldalak/Fooldal.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Fooldal/>} />
          <Route path='/szobak' element={<Szobak />} />
          <Route path='/foglalas' element={<h1>Foglalás</h1>} />
          <Route path='/szobafoglaltsag' element={<h1>Szobafoglaltság</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
