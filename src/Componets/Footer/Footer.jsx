import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { BiLogoInstagram } from "react-icons/bi"
import { BsTwitterX } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import './Footer.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {

return (
    <div className='Caja-footer'>
        <div className="caja-footer-redes">
        <p className='titulo-redes'>Conocenos más</p>
        <div className="Caja-redes">
            <Link className='Icono' to={'https://www.instagram.com/nadiamocse_/'}><BiLogoInstagram/></Link> 
            <Link className='Icono' to={'https://www.facebook.com/nadia.mocse/'}> <FaFacebook /></Link>
            <Link className='Icono' to={'https://x.com/NadiaMocse'}><BsTwitterX /></Link>
            <Link className='Icono' to={'https://wa.me/393921087917'}><FaWhatsapp /></Link>
        </div>
        </div>
        <div className="Caja-footer-columnas">
            <div className="Footer-columnas">
                <span className='Titulo-columnas'>COMPANY</span>
                <a className='Link-columnas' href="#">Blog</a>
                <a className='Link-columnas' href="#">Podcast</a>
                <a className='Link-columnas' href="#">About us</a>
                <a className='Link-columnas' href="#">Company data</a>
            </div>
            <div className="Footer-columnas">
                <span className='Titulo-columnas'>PRIVACY</span>
                <a href="#" className="Link-columnas">Privacy Policies</a>
                <a href="#" className="Link-columnas">Terms of use</a>
            </div>
            <div className="Footer-columnas">
                <span className='Titulo-columnas'>AID</span>
                <a href="#" className="Link-columnas">Security and trust</a>
                <a href="#" className="Link-columnas">How it works</a>
                <a href="#" className="Link-columnas">Fashion Tips</a>
                <a href="#" className="Link-columnas"> Contact us</a>
            </div>
        </div>
    </div>
)
}

export default Footer
