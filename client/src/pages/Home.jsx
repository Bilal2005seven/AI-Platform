import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import AiTools from '../components/AiTools.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Plan from '../components/Plan.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Testimonials/>
      <Plan/>
      <Footer/>
    </div>
  )
}

export default Home
