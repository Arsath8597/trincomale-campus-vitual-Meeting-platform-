import React from 'react'
import Button from '../components/button'
import Contactimg from "../assets/contactus.webp"
const contact = () => {
  return (
    <div id='contact' className='px-20 bg-custom-gradient1 text-white'>
      <h1 className='text-center text-4xl font-semibold py-8'>Contact Us</h1>
      <div>
        <h1 className='text-2xl font-semibold mb-5'>Leave a message here</h1>
      </div>
      <div className='grid grid-cols-2'>
        <input className='w-full px-2 bg-gray-100 py-4 my-3 rounded-lg' placeholder='Name'/>
        <input className='w-full px-2 bg-gray-100 py-4 mx-10  my-3  rounded-lg' placeholder='Email'/>
        <input className='w-full px-2 bg-gray-100 py-4 rounded-lg ' placeholder='Phone'/>
        <input className='w-full px-2 bg-gray-100 py-4 mx-10 rounded-lg' placeholder='Subject'/>
      </div>
      <textarea className='px-10 w-full py-20 bg-gray-100 my-5 rounded-xl' placeholder='Write here' type='text'/>
    <Button className={"text-center my-5"}>Submit</Button>
    <img className='pb-10' src={Contactimg} alt='contact us images'/>
    </div>
  )

}

export default contact
