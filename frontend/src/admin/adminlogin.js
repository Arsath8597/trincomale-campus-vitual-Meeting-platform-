import React, { useState } from 'react'
import Button from '../components/button';
import Navbar from '../pages/navbar';
import { Link } from 'react-router-dom';
const Singin = () => {
   

  return (
    <div className='flex flex-col  bg-custom-gradient  h-[100vh]'>
      <Navbar/>
      <div className='flex items-center justify-center mt-[200px]'>
      <div className=' w-[500px] h-[420px] flex flex-col rounded-xl shadow-lg justify-center items-center  text-white'>
  
      
      <form className='lg:w-[400px]'>
        <h1 className='text-center py-3 text-2xl font-semibold'>
    Admin Sing In
        </h1>
        <div>
          <label className='text-lg '>Email</label>
          <input className='w-full px-1 py-2 my-2 rounded-lg shadow-lg text-black' type='text'/>
        </div>
        <div>
          <label className='text-lg '>Password</label>
          <input className='w-full px-1 py-2 my-2 rounded-lg shadow-lg text-black' type='text'/>
        </div>
      
        <Button type='submit' className={"mt-5 "}>
Sing In
        </Button>
       
      
        </form>
      </div>
      </div>
    </div>
  )
}

export default Singin
