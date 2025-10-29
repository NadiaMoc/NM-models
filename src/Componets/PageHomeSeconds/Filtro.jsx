import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";


const Filtro = () => {
        const[inputValue, SetInputValue]= useState('')
        const[users, setUsers] = useState([])
        const [filteruserList, setfilterUserlist] = useState(users)

        useEffect(() =>{
            fetch('https://jsonplaceholden.typicode.com/users')
            .then(resultado =>{
                if(!resultado.ok){return error('No se encontraron resultados');}
                return resultado.json();})
                .then (data=>setUsers(data))
        })

        const filterUser = (value) =>{
            SetInputValue(value)
            const filterUser=users.filter(usesr => users.name.toloWerCase().includes()(inputValue.toloWerCase))
            setfilterUserlist (filterUser)
        }
        return(
            <div className="container">
                <IoSearch />
                <input type="Search" onChange={(evento) =>
                    filterUser(evento.target.value)
                } />
                
                <ul>
                    {filteruserList && filteruserList.map(user=>{
                        return(
                            <li key={user.id}> {user.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
}

export default Filtro