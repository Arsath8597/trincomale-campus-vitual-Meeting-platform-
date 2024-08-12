import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Button from '../components/button'
const Navbar = () => {
  return (
    <div>
      
        <div className='flex bg-custom-gradient   justify-between px-10 items-center'>
            <img width={80} src={logo} alt='logo'/>
      
        <ul className='flex justify-center items-center'>
          <li className='px-5 text-xl hover:underline'><a href='#home'>Home</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/'>Faculties</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/'>Academic</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/'>About</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/'>Contact</a></li>
          
        </ul>
       
       <Button>Singin</Button>
        </div>
   
    </div>
  )
}

export default Navbar
