import React from 'react'
import SideBar from "./sideBar"
import Img from "../assets/profile.jpg"
import Button from '../components/button'
 const Profile = () => {
  return (
    <div className='bg-slate-800 flex'>
        <SideBar/>
      <div className='flex w-full' >
<div className='flex flex-col   text-white items-center w-full justify-center '>
    <img width={200} className='rounded-full ' src={Img}/>
    <p className='text-3xl font-semibold my-1'>Jhone Wick</p>
    <p>Computer Science Student in trincomalee caampus</p>
   <div className='flex text-2xl shadow-2xl px-40 py-20  flex-col justify-start gap-10 mt-10'>
   <div className='flex'> <p>Name </p>:
   <p>Jhone Wick</p></div>
   <div className='flex'> <p>Course </p>:
   <p>Computer Science</p></div>
   <div className='flex'> <p>Email </p>:
   <p>JhonWick@gmail.com</p></div>
   <div className='flex'> <p>Batch </p>:
   <p>2024</p></div>
   <Button children="Edit"/>
   </div>
  
</div>
      </div>
    </div>
  )
}
export default Profile