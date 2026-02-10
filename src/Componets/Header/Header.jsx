import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='header-contenedor'>
      <button
        type="button"
        className='menu-toggle'
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <GiHamburgerMenu />
      </button>
        <div className={`link-contenedor ${isOpen ? 'open' : ''}`}>
        <Link className='link' to={"/"}>HOME</Link>
        <Link className='link' to={"/Contact"}>CONTACT</Link>
        <Link className='link' to={'/About'}>ABOUT</Link>
        </div>
    </header>
  )
}

export default Header


