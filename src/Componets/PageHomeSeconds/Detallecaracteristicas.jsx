import React from 'react'

const Detallecaracteristicas = ({caracteristica}) => {
  return (
    <div className='tarjeta-caracteristicas'>
        <p>Height:{caracteristica.altura}</p>
        <p>Dress:{caracteristica.vestimenta} </p>
        <p>Shoes:{caracteristica.zapatos}</p>
        <p>Breast:{caracteristica.pecho}</p>
        <p>Waist:{caracteristica.cintura}</p>
        <p>Hips:{caracteristica.caderas} </p>
    </div>
  )
}

export default Detallecaracteristicas