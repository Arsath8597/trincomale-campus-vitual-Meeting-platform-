import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Button from '../components/button'
const Navbar = () => {
  return (
    <div className='fixed flex z-50 w-full'>
      
        <div className='flex w-full bg-custom-gradient z-50 justify-between px-10 items-center'>
            <img width={80} src={logo} alt='logo'/>
      
        <ul className='flex justify-center items-center'>
          <li className='px-5 text-xl hover:underline'><a href='/#home'>Home</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/#Faculties'>Faculties</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/#events'>Events</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/#about'>About</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/#contact'>Contact</a></li>
          
        </ul>
       
      <Link to="/Singin"> <Button>Singin</Button></Link>
        </div>
   
    </div>
  )
}

export default Navbar
