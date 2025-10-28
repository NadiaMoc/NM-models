import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { BiLogoInstagram } from "react-icons/bi"
import { BsTwitterX } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import './Footer.css'


const Footer = () => {
const URLinstagram = "https://www.instagram.com/nadiamocse_/"
const URLfacebook = "https://www.facebook.com/nadia.mocse.7?locale=it_IT"
const URLtwitter ="https://x.com/NadiaMocse"
const URLWhatsApp ="https://wa.me/393921087917"
const handleClickInstagram = () => {
    <a href={URLinstagram}></a>
    }

const handleClickFacebook = () =>{
    <a href={URLfacebook}></a>
}

const handleClickTwitter = () =>{
    <a href={URLtwitter}></a>
}

const handleClickWhatsApp = () =>{
    <a href={URLWhatsApp}></a>
}
  return (
    <div className='Caja-footer'>
        <div className='instagram'>
            <button onClick={handleClickInstagram}>
            <BiLogoInstagram/></button>
            <h3>Visitenos en nuestro Instagram</h3>
        </div>
        <div className='facebook'>
            <button onClick={handleClickFacebook}>
            <FaFacebook /></button>
            <h3>Visitenos en nuestro Facebook</h3>
        </div>
        <div className='twitter'>
        <button onClick={handleClickTwitter}>
        <BsTwitterX /></button>
        <h3>Vea nuestras noticias en Twitter</h3>
        </div>
        <div className="WhatsApp">
            <button onClick={handleClickWhatsApp}>
            <FaWhatsapp /> </button>
            <h3>Contactenos</h3>
        </div>
    </div>
  )
}

export default Footer