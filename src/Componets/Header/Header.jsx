import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-contenedor'>
        <div className='link-contenedor'>
        <Link className='link' to={"/"}>HOME</Link>
        <Link className='link' to={"/Contact"}>CONTACT</Link>
        <Link className='link' to={'/About'}>ABOUT</Link>
        </div>
    </header>
  )
}

export default Header


