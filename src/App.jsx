import React from 'react'

import './App.css'
import Home from './Componets/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Componets/Contact/Contact'
import About from './Componets/About/About'
import { FaFacebook } from "react-icons/fa"
import { BiLogoInstagram } from "react-icons/bi"
import { BsTwitterX } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='https://www.instagram.com/nadiamocse_/' element={<BiLogoInstagram/>}/>
    <Route path='https://www.facebook.com/nadia.mocse/' element={<FaFacebook/>}/>
    <Route path='https://x.com/NadiaMocse' element={<BsTwitterX/>}/>
    <Route path='https://wa.me/393921087917' element={<FaWhatsapp/>}/>
      </Routes>
    </BrowserRouter>
    <div>
    </div>
    </>
  )
}

export default App
