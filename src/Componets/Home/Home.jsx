import React from 'react'
import Header from '../Header/Header'
import PageHome from '../Page home/PageHome'
import PageHomeSeconds from '../PageHomeSeconds/PageHomeSeconds'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <PageHome/>
        <PageHomeSeconds/>
        <Footer/>
    </div>
  )
}

export default Home