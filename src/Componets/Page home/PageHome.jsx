import React from 'react'
import './PageHome.css'
import { Link } from 'react-router-dom'
import PageHomeSeconds from '../PageHomeSeconds/PageHomeSeconds'
import Footer from '../Footer/Footer'


const PageHome = () => {
  return (
    <>
    <div className='contenedor'>
    <div className='contenedor-principal'>
      <div className='contenedor-1'> 
        <div className='contenedor-texto'> 
          <h2>WELCOME TO <br/> NM MODEL</h2>
          <p>THE FACES OF FASHION TODAY</p>
        </div>
        <img src={''} alt="Marla Kusche" />
      </div>
      <div className='contenedor-2'>
        <img src={''} alt="Emmanuel Franklin" />
        <div className='contenedor-texto'> 
          <p>Discover, connect, and grow. <br/> Fashion in your hands</p>
        </div>
      </div>
    </div>
    <div className='contenedor-secundario'>
      <PageHomeSeconds/>
    </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default PageHome