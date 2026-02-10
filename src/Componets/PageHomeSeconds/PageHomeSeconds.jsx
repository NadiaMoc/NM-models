import React, { useMemo, useState } from 'react'
import Filtro from './Filtro'
import UserCard from './usercard'
import aaronpellegrino from '../../assets/img/aaronpellegrino.jpg'
import anissarezaiguia from '../../assets/img/anissarezaiguia.jpg'
import Arianejung from '../../assets/img/Ariane Jung.jpg'
import azrapatkovic from '../../assets/img/azrapatkovic.jpg'
import danielcihak from '../../assets/img/danielcihak.jpg'
import jensfischer from '../../assets/img/jensfischer.jpg'
import justynawallner from '../../assets/img/justynawallner.jpg'
import laurybutler from '../../assets/img/laurynbutler.jpg'
import mathieuleroy from '../../assets/img/mathieuleroy.jpg'
import mathisdiedonne from  '../../assets/img/mathisdiedonne.jpg'
import matttyborowski from '../../assets/img/matttyborowski.jpg'
import michelpineiro from '../../assets/img/Michelpineiro.jpg'
import noahvanleeuwen from '../../assets/img/noahvanleeuwen.jpg'
import sandrahunke from '../../assets/img/sandrahunke.jpg'
import yasminZitman from '../../assets/img/yasminZitman.jpg'
import marlakusche from '../../assets/img/Imagen3.jpg'
import './PageHomeSeconds.css'
import useUserData from '../../hooks/useUserData'



const PageHomeSeconds = () => { 
    const [query, setQuery] = useState('')
    const users = [
    { 
    id: 1, 
    name: "Aaron Pellegrino", 
    imageSrc: aaronpellegrino, 
    height: '188cm',
    clothing: '40/L',
    shoes:'45',
    chest:'100',
    waist:'78',
    hips:'98' 
},
{ 
    id: 2,
    name: "Anissa Rezaiguia",
    imageSrc: anissarezaiguia, 
    height: '177cm',
    clothing: '36/S',
    shoes:'41',
    chest:'81',
    waist:'60',
    hips:'89'
},
{ 
    id: 3, name: "Ariane Jung",
    imageSrc: Arianejung,
    height: '176cm',
    clothing: '36/S',
    shoes:'40',
    chest:'84',
    waist:'64',
    hips:'93'
},
{ 
    id: 4,
    name: "Azra Patkovic",
    imageSrc: azrapatkovic,
    height: '189cm',
    clothing: '48',
    shoes:'46',
    chest:'85',
    waist:'67',
    hips:'90.5'
},
{ 
    id: 5,
    name: "Daniel Cihak",
    imageSrc: danielcihak,
    height: '189cm',
    clothing: '48',
    shoes:'46',
    chest:'85',
    waist:'67',
    hips:'90.5' 
},
{
    id:6,
    name: 'Jens Fischer',
    imageSrc: jensfischer,
    height: '185cm',
    clothing: '40/S',
    shoes:'45',
    chest:'103',
    waist:'83',
    hips:'96'
    },
    {
        id:7,
        name:'Justyna Wallner',
        imageSrc: justynawallner,
        height: '178cm',
        clothing: '36/S',
        shoes:'38',
        chest:'89',
        waist:'66',
        hips:'95'
    },
    {
        id:8,
        name: 'Lauryn Butler',
        imageSrc: laurybutler,
        height: '178cm',
        clothing: '34/XS',
        shoes:'41',
        chest:'81.3',
        waist:'68.6',
        hips:'86.4'
    },
    {
        id: 9,
        name:'Marla Kusche',
        imageSrc: marlakusche,
        height: '180cm',
        clothing: '34/36/S',
        shoes:'39',
        chest:'79',
        waist:'62',
        hips:'89'
    },
    {
        id: 10,
        name:'Mathieu Leroy',
        imageSrc: mathieuleroy,
        height: '190cm',
        clothing: '42/XL ',
        shoes:'46',
        chest:'94',
        waist:'91',
        hips:'104'
    },
    {
        id: 11,
        name:'Mathi Diedonne',
        imageSrc: mathisdiedonne,
        height: '185cm',
        clothing: '48/M',
        shoes:'45',
        chest:'90',
        waist:'76',
        hips:'88'
    },
    {
        id: 12,
        name:'Mattty Boroswski',
        imageSrc: matttyborowski,
        height: '185cm',
        clothing: '48/M',
        shoes:'41',
        chest:'84',
        waist:'71',
        hips:'84'
    },
    {
        id: 13,
        name:'Michel Pineiro',
        imageSrc: michelpineiro,
        height: '187cm',
        clothing: '48/M',
        shoes:'44',
        chest:'98',
        waist:'70',
        hips:'98'
    },
    {
        id: 14, 
        name:'Noah Vanleeuwen',
        imageSrc: noahvanleeuwen,
        height: '16cm',
        clothing: '48/M',
        shoes:'43',
        chest:'97',
        waist:'76',
        hips:'89'
    },
    {
        id: 15,
        name:'Sandra Hunke',
        imageSrc: sandrahunke,
        height: '178cm',
        clothing: '34/36/XS/S',
        shoes:'39',
        chest:'77',
        waist:'60',
        hips:'90'
    },
    {
        id: 16,
        name:'Yasmin Zitman',
        imageSrc: yasminZitman,
        height: '179cm',
        clothing: '36/S',
        shoes:'38',
        chest:'80',
        waist:'64',
        hips:'94'
    }

];
    const filteredUsers = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase()
        if (!normalizedQuery) return users

        return users.filter((user) => {
            const fieldsToSearch = [
                `name:${user.name}`,
                `height:${user.height}`,
                `clothing:${user.clothing}`,
                `shoes:${user.shoes}`,
                `chest:${user.chest}`,
                `waist:${user.waist}`,
                `hips:${user.hips}`,
                'name',
                'height',
                'clothing',
                'shoes',
                'chest',
                'waist',
                'hips',
                
            ]

            return fieldsToSearch.some((value) =>
                String(value).toLowerCase().includes(normalizedQuery)
            )
        })
    }, [query, users])
return (
    <div className="contenedor-page-home-seconds">
    <Filtro value={query} onChange={setQuery} results={filteredUsers} />
    <div className="caja-contenedora-principal">
        {filteredUsers.map(user => (
        <UserCard key={user.id} user={user} /> 
        ))}
    </div>
    </div>
) 

}
export default PageHomeSeconds