import React from 'react'

import './App.css'
import Home from './Componets/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Componets/Contact/Contact'
import About from './Componets/About/About'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/About' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
