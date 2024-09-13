import React from 'react'
import Navbar from "../pages/navbar"
import Home from "../pages/home"
import Faculties from '../pages/faculties'
import Events from '../pages/events'
import Contact from '../pages/contact'
import About from "../pages/about"
import Footer from '../pages/footer'
const Landing = () => {
  return (
    <div className='overflow-x-hidden'>
     <Navbar/>
     <Home/>
     <Faculties/>
     <Events/>
     <About/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default Landing
