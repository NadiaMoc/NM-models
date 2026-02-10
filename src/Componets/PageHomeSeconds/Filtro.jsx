import React from 'react'
import { IoSearch } from "react-icons/io5";
import './filtro.css'

const Filtro = ({ value, onChange, results }) => {
        return(
            <div className="container">
                <IoSearch className='lupa-buscador'/>
                <input
                    placeholder='Desired characteristics'
                    className='input-buscador'
                    type="search"
                    value={value}
                    onChange={(evento) => onChange(evento.target.value)}
                />
            </div>
        )
}

export default Filtro