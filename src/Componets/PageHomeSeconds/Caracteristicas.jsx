import React from 'react'

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

export default Caracteristicas
/*     const caracteristicas =[
    {
        ID: 'aaronpellegrino',
        altura: '188cm',
        vestimenta: '40/L',
        zapatos:'45',
        pecho:'100',
        cintura:'78',
        caderas:'98'
    },
    {
        ID: 'anissarezaiguia',
        altura: '177cm',
        vestimenta: '36/S',
        zapatos:'41',
        pecho:'81',
        cintura:'60',
        caderas:'89'
    },
    {
        ID: 'arianejung',
        altura: '176cm',
        vestimenta: '36/S',
        zapatos:'40',
        pecho:'84',
        cintura:'64',
        caderas:'93'
    },
    {
        ID: 'azrapatkovic',
        altura: '180cm',
        vestimenta: '34-36/S',
        zapatos:'39',
        pecho:'88',
        cintura:'58',
        caderas:'87'
    },
    {
        ID: 'danielcihak',
        altura: '189cm',
        vestimenta: '48',
        zapatos:'46',
        pecho:'85',
        cintura:'67',
        caderas:'90.5'
    },
    {
        ID: 'jensfischer',
        altura: '185cm',
        vestimenta: '40/S',
        zapatos:'45',
        pecho:'103',
        cintura:'83',
        caderas:'96'
    },
    {
        ID: 'justynawallner',
        altura: '178cm',
        vestimenta: '36/S',
        zapatos:'38',
        pecho:'89',
        cintura:'66',
        caderas:'95'
    },
    {
        ID: 'laurynbutler',
        altura: '178cm',
        vestimenta: '34/XS',
        zapatos:'41',
        pecho:'81.3',
        cintura:'68.6',
        caderas:'86.4'
    },
    {
        ID: 'marlakusche',
        altura: '180cm',
        vestimenta: '34/36/S',
        zapatos:'39',
        pecho:'79',
        cintura:'62',
        caderas:'89'
    },
    {
        ID: 'mathieuleroy',
        altura: '190cm',
        vestimenta: '42/XL ',
        zapatos:'46',
        pecho:'94',
        cintura:'91',
        caderas:'104'
    },
    {
        ID: 'mathidiedonne',
        altura: '185cm',
        vestimenta: '48/M',
        zapatos:'45',
        pecho:'90',
        cintura:'76',
        caderas:'88'
    },
    {
        ID: 'matttyboroswski',
        altura: '185cm',
        vestimenta: '48/M',
        zapatos:'41',
        pecho:'84',
        cintura:'71',
        caderas:'84'
    },
    {
        ID: 'michelpineiro',
        altura: '187cm',
        vestimenta: '48/M',
        zapatos:'44',
        pecho:'98',
        cintura:'70',
        caderas:'98'
    },
    {
        ID: 'noahvanleeuwen',
        altura: '16cm',
        vestimenta: '48/M',
        zapatos:'43',
        pecho:'97',
        cintura:'76',
        caderas:'89'
    },
    {
        ID: 'sandrahunke',
        altura: '178cm',
        vestimenta: '34/36/XS/S',
        zapatos:'39',
        pecho:'77',
        cintura:'60',
        caderas:'90'
    },
    {
        ID: 'yasminZitman',
        altura: '179cm',
        vestimenta: '36/S',
        zapatos:'38',
        pecho:'80',
        cintura:'64',
        caderas:'94'
    }, 
    ]*/


    /* <caracteristicas caracteristicas={caracteristicas}/> */