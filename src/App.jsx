import React from 'react'
import Navbar from './Component/Navbar/Navbar.jsx'
import Hero from './Component/Hero/Hero.jsx'
import Service from './Component/Service/Service.jsx'
import Banner from './Component/Banner/Banner.jsx'
import Subscribe from './Component/Subscribe/Subscribe.jsx'
import Banner2 from './Component/Banner/Banner2.jsx'
import Footer from './Component/Footer/Footer.jsx'


const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>

      <Hero />
      <Service />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Footer />

    </main>
  )
}

export default App