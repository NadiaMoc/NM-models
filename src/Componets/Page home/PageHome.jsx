import React from 'react'
import './PageHome.css'
import { Link } from 'react-router-dom'
import PageHomeSeconds from '../PageHomeSeconds/PageHomeSeconds'
import Footer from '../Footer/Footer'
import imagen3 from '../../assets/img/Imagen3.jpg'
import imagen2 from '../../assets/img/imagen2.jpg'


const PageHome = () => {
  return (
    <>
    <div className='contenedor'>
    <div className='contenedor-principal'>
      <div className='contenedor-1'> 
        <div className='contenedor-texto'> 
          <h2 className='titulo-principal'>WELCOME TO <br/> NM MODEL</h2>
          <p>THE FACES OF FASHION TODAY</p>
        </div>
        <img className='img-principal' src={imagen3} alt="Marla Kusche" />
      </div>
      <div className='contenedor-2'>
        <img className='img-principal' src={imagen2} alt="Emmanuel Franklin" />
        <div className='contenedor-texto'> 
          <p>Discover, connect, and grow. <br/> Fashion in your hands</p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default PageHome