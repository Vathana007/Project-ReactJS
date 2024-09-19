import React from 'react'
import Navbar from './Component/Navbar/Navbar.jsx'
import Hero from './Component/Hero/Hero.jsx'
import Service from './Component/Service/Service.jsx'
import Banner from './Component/Banner/Banner.jsx'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>

      <Hero />
      <Service />
      <Banner />
    </main>
  )
}

export default App