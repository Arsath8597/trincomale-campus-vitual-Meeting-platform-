import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Button from '../components/button';
import { CiPhone } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";

const About = () => {
  return (
    <div id='about' className='bg-custom-gradient1 text-white' >
    <h1 className='text-center text-4xl font-semibold  py-10'>About Us</h1>
   <div className='lg:px-20 px-5'>
   <div>
   <h1 className='text-2xl font-semibold my-5'>Get In Touch Us</h1>
    <p className=' lg:w-[700px] text-lg'>If you have any inquiries, do not hesitate to get in touch with us. Connect with us via the relevant contact numbers or send us a message and we would get back to you at our earliest.</p>
 
  </div>
  <div className='flex flex-col w-80 my-10'>
    <h1 className='text-blue-300 text-2xl '>Address</h1>
    <p className=' my-3'><CiLocationOn size={40}/><hr/><span>Trrincomalee Campus, Knowledge City Malabe, KCM Drive, Off Millennium Road, Trincomalee,
    Sri Lanka.</span></p>
  </div>
  <div className='flex flex-col w-80 my-10'>
    <h1 className='text-blue-300 text-2xl'>Phone</h1>
    <p className=' my-3' ><CiPhone  size={40}/><hr/><span>(+94 0775654635)
  </span></p>
  </div>
  <div className='flex flex-col w-80 my-10'>
    <h1 className='text-blue-300 text-2xl'>Email</h1>
    <p className=' my-3'><MdOutlineMailOutline   size={40}/><hr/><span>trincomaleecampus@gmail.com <br/>trincomaleecampus@gmail.com
   </span></p>
  </div>
  </div>
  <Button className={"text-end mx-20 mb-10"}>Explore</Button>
    </div>
  )
}

export default About
