import React from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import './Home.css' // Make sure this CSS file includes the styles you shared
import Cards from './Cards.jsx'
import  Carousel  from './Carousel.jsx'

const Home = () => {
  return (
    <div>
      

      <div className="hero">
        <img src="/images/gaspillage-alimentaire.jpg" alt="Gaspillage Alimentaire" />
        <div className="hero-text">
          <h1>Gaspillage Alimentaire</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
            at laborum itaque iusto a, temporibus ab, modi sint, fugiat atque
            ipsam blanditiis impedit eum totam consectetur magnam autem eaque
            asperiores!
          </p>
          

        </div>
      </div>

      <Cards/>
     <Carousel/>
     
    </div>
  )
}

export default Home
