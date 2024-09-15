import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import Button from '../components/button'
import { MdMenu } from "react-icons/md";

import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [Open,setOpen]=useState(false)

  const HanldeClick=()=>[
    setOpen(!Open)
  ]
  return (
    <div className='fixed flex z-50 w-full'>
      
        <div className='lg:flex hidden w-full bg-custom-gradient z-50 justify-between px-10 items-center'>
        <Link to="/"><img width={80} height={20} src={logo} alt='logo'/></Link>  
      
        <ul className='flex justify-center items-center'>
          <li className='px-5 text-xl hover:underline'><a href='/'>Home</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/#Faculties'>Faculties</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/#events'>Events</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/#about'>About</a></li>
          <li className='px-5 text-xl hover:underline'><a href='/#contact'>Contact</a></li>
          
        </ul>
       
      <Link to="/Singin"> <Button>Singin</Button></Link>
        </div>

         <div className='flex w-full lg:hidden bg-custom-gradient z-50 justify-between  '>

          <Link to="/"><img width={80} height={20} src={logo} alt='logo'/></Link>  
      {Open && <div className='mt-5'><IoClose size={40} className='' onClick={HanldeClick}/></div>
       }
            
     
   {Open ?  
   <div className='absolute  overflow-x-hidden  mt-20 backdrop-blur-xl  w-full justify-center flex items-center'>
    
    <ul className='flex-col text-black text-center font-semibold mb-80'> 
   
          <li className='px-5 py-10 text-2xl hover:underline' onClick={HanldeClick}><a href='/#home'>Home</a></li>
          <li className='px-5 py-10 text-2xl hover:underline' onClick={HanldeClick}><a href='/#Faculties'>Faculties</a></li>
          <li className='px-5 py-10 text-2xl hover:underline' onClick={HanldeClick}><a href='/#events'>Events</a></li>
          <li className='px-5 py-10 text-2xl hover:underline' onClick={HanldeClick}><a href='/#about'>About</a></li>
          <li className='px-5 py-10 text-2xl hover:underline' onClick={HanldeClick}><a href='/#contact'>Contact</a></li>
          <Link to="/Singin"> <Button>Singin</Button></Link>
        </ul></div>:<div className='mt-6 font-bold'><MdMenu size={30} onClick={HanldeClick}/></div>
        
    }
        </div> 
   
    </div>
  )
}

export default Navbar
