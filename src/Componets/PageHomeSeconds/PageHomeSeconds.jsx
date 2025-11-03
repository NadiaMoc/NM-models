import React from 'react'
import  {useState}  from 'react'
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
import Detallecaracteristicas from './Detallecaracteristicas'
        const caracteristicaspersonas =[
    {
        ID: 'aaronpellegrino1',
        altura: '188cm',
        vestimenta: '40/L',
        zapatos:'45',
        pecho:'100',
        cintura:'78',
        caderas:'98'
    },
    {
        ID: 'anissarezaiguia1',
        altura: '177cm',
        vestimenta: '36/S',
        zapatos:'41',
        pecho:'81',
        cintura:'60',
        caderas:'89'
    },
    {
        ID: 'arianejung1',
        altura: '176cm',
        vestimenta: '36/S',
        zapatos:'40',
        pecho:'84',
        cintura:'64',
        caderas:'93'
    },
    {
        ID: 'azrapatkovic1',
        altura: '180cm',
        vestimenta: '34-36/S',
        zapatos:'39',
        pecho:'88',
        cintura:'58',
        caderas:'87'
    },
    {
        ID: 'danielcihak1',
        altura: '189cm',
        vestimenta: '48',
        zapatos:'46',
        pecho:'85',
        cintura:'67',
        caderas:'90.5'
    },
    {
        ID: 'jensfischer1',
        altura: '185cm',
        vestimenta: '40/S',
        zapatos:'45',
        pecho:'103',
        cintura:'83',
        caderas:'96'
    },
    {
        ID: 'justynawallner1',
        altura: '178cm',
        vestimenta: '36/S',
        zapatos:'38',
        pecho:'89',
        cintura:'66',
        caderas:'95'
    },
    {
        ID: 'laurynbutler1',
        altura: '178cm',
        vestimenta: '34/XS',
        zapatos:'41',
        pecho:'81.3',
        cintura:'68.6',
        caderas:'86.4'
    },
    {
        ID: 'marlakusche1',
        altura: '180cm',
        vestimenta: '34/36/S',
        zapatos:'39',
        pecho:'79',
        cintura:'62',
        caderas:'89'
    },
    {
        ID: 'mathieuleroy1',
        altura: '190cm',
        vestimenta: '42/XL ',
        zapatos:'46',
        pecho:'94',
        cintura:'91',
        caderas:'104'
    },
    {
        ID: 'mathidiedonne1',
        altura: '185cm',
        vestimenta: '48/M',
        zapatos:'45',
        pecho:'90',
        cintura:'76',
        caderas:'88'
    },
    {
        ID: 'matttyboroswski1',
        altura: '185cm',
        vestimenta: '48/M',
        zapatos:'41',
        pecho:'84',
        cintura:'71',
        caderas:'84'
    },
    {
        ID: 'michelpineiro1',
        altura: '187cm',
        vestimenta: '48/M',
        zapatos:'44',
        pecho:'98',
        cintura:'70',
        caderas:'98'
    },
    {
        ID: 'noahvanleeuwen1',
        altura: '16cm',
        vestimenta: '48/M',
        zapatos:'43',
        pecho:'97',
        cintura:'76',
        caderas:'89'
    },
    {
        ID: 'sandrahunke1',
        altura: '178cm',
        vestimenta: '34/36/XS/S',
        zapatos:'39',
        pecho:'77',
        cintura:'60',
        caderas:'90'
    },
    {
        ID: 'yasminZitman1',
        altura: '179cm',
        vestimenta: '36/S',
        zapatos:'38',
        pecho:'80',
        cintura:'64',
        caderas:'94'
    }
]

const PageHomeSeconds = () => {
const [caracteristicas] = useState(caracteristicaspersonas)


return (
    <div className="contenedor-page-home-seconds">
    <Filtro/>
    <div className="caja-contenedora-principal">
        <a className='a-img' href="#">
            <img src={aaronpellegrino} alt="Aaron Pellegrino" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Aaron Pellegrino</h2>
                {caracteristicas.map((caracteristica)=>{
            return(
                <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.aaronpellegrino1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={anissarezaiguia} alt="Anissa Rezaiguia" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Anissa Rezaiguia </h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.anissarezaiguia1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={Arianejung} alt="Ariane Jung" />
            <div className='a-datos'>
            <h2 className='titulo-img'> Ariane Jung</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.arianejung1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={azrapatkovic} alt="Azra Patkovic" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Azra Patkovic </h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.azrapatkovic1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={danielcihak} alt="Daniel Cihak" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Daniel Cihak </h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.danielcihak1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={jensfischer} alt="Jens Fischer" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Jens Fischer</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.jensfischer1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={justynawallner} alt="Justyna Wallner" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Justyna Wallner</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.justynawallner1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={laurybutler} alt="Laury Butler" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Laury Butler</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.laurybutler1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={mathieuleroy} alt="Mathie Leroy" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Mathie Leroy</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.mathieuleroy1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={mathisdiedonne} alt="Mathis Diedonne" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Mathis Diedonne</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.mathisdiedonne1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={matttyborowski} alt="Matt Tyborowski" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Matt Tyborowski</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.matttyborowski1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={michelpineiro} alt="Michel Pineiro" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Michel Pineiro</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.michelpineiro1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={noahvanleeuwen} alt="Noah van Leeuwen" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Noah van Leeuwen</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.noahvanleeuwen1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={sandrahunke} alt="Sandra Hunke" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Sandra Hunke</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.sandrahunke1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={yasminZitman} alt="Yasmin Zitman" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Yasmin Zitman</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.yasminZitman1}/>
            )})}
            </div>
        </a>
        <a className='a-img' href="#">
            <img src={marlakusche} alt="Marla Kusche" />
            <div className='a-datos'>
            <h2 className='titulo-img'>Marla Kusche</h2>
            {caracteristicas.map((caracteristica)=>{
            return(
            <Detallecaracteristicas caracteristica={caracteristica} key={caracteristica.marlakusche1}/>
            )})}
            </div>
        </a>
    </div>
    </div>
    

  )
}

export default PageHomeSeconds


