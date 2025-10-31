import React from 'react'
import Filtro from './Filtro'
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


const PageHomeSeconds = () => {
const Caracteristicas = ({Caracteristicas}) => {
return (
    <div>
    {Caracteristicas.map(Caracteristicas =>(
        <div key={Caracteristicas.ID}>
            <ul>
                {Caracteristicas.map((Caracteristicas, ID) => (
                <li key={ID}>{Caracteristicas}</li>
                ))}
            </ul>
        </div>
    ))}
</div>
)
}
return (
    <div className="contendo-page-home-seconds">
    <Filtro/>
    <div className="caja-contenedora-principal">
        <a className='a-img' href="#">
            <img src={aaronpellegrino} alt="Aaron Pellegrino" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Aaron Pellegrino</h2>
            {/* <p key={'aaronpellegrino'}>
                Height: {Caracteristicas.altura}
                Dress: {Caracteristicas.vestimenta}
                Shoes: {Caracteristicas.zapatos}
                Breast:{Caracteristicas.pecho}
                Waist: {Caracteristicas.cintura}
                Hips: {Caracteristicas.caderas}

            </p> */}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={anissarezaiguia} alt="Anissa Rezaiguia" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Anissa Rezaiguia </h2>
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={Arianejung} alt="Ariane Jung" />
            <div className='a-datos'>
            <h2 className='titulo-img'> Ariane Jung</h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={azrapatkovic} alt="Azra Patkovic" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Azra Patkovic </h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={danielcihak} alt="Daniel Cihak" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Daniel Cihak </h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={jensfischer} alt="Jens Fischer" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Jens Fischer</h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={justynawallner} alt="Justyna Wallner" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Justyna Wallner</h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={laurybutler} alt="Laury Butler" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Laury Butler</h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={mathieuleroy} alt="Mathie Leroy" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Mathie Leroy</h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={mathisdiedonne} alt="Mathis Diedonne" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Mathis Diedonne</h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={matttyborowski} alt="Matt Tyborowski" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Matt Tyborowski</h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={michelpineiro} alt="Michel Pineiro" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Michel Pineiro</h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={noahvanleeuwen} alt="Noah van Leeuwen" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Noah van Leeuwen</h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={sandrahunke} alt="Sandra Hunke" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Sandra Hunke</h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={yasminZitman} alt="Yasmin Zitman" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Yasmin Zitman</h2></div>
        </a>
        <a className='a-img' href="#">
            <img src={marlakusche} alt="Marla Kusche" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Marla Kusche</h2></div>
        </a>
    </div>
    </div>
    

  )
}

export default PageHomeSeconds


