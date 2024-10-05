import React, { useState } from 'react'
import Button from '../components/button';
import Navbar from '../pages/navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminloginRequest, adminloginSuccess } from '../reducers/AdminReducer';
import axios from 'axios';
import { loginFail } from '../reducers/AuthReducer';
const Singin = () => {
   
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const dispatch=useDispatch()
const Navigate=useNavigate()
const {loading,error,isAuthenticated}=useSelector(state=>state.adminState)

const handleSubmit=async(e)=>{
  e.preventDefault()
  try {
    dispatch(adminloginRequest())
    const {data}=await axios.post("/adminlogin",{email,password})
    dispatch(adminloginSuccess(data))
    Navigate("/adminhome"); 
  } catch (error) {
    dispatch(loginFail(error.response.data.message))
  }
}

  return (
    <div className='flex flex-col  bg-custom-gradient  h-[100vh]'>
      <Navbar/>
      <div className='flex items-center justify-center mt-[200px]'>
      <div className=' w-[500px] h-[420px] flex flex-col rounded-xl shadow-lg justify-center items-center  text-white'>
  
      
      <form onSubmit={handleSubmit} className='lg:w-[400px]'>
        <h1 className='text-center py-3 text-2xl font-semibold'>
    Admin Sing In
        </h1>
        <div>
          <label className='text-lg '>Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} className='w-full px-1 py-2 my-2 rounded-lg shadow-lg text-black' type='text'/>
        </div>
        <div>
          <label className='text-lg '>Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} className='w-full px-1 py-2 my-2 rounded-lg shadow-lg text-black' type='text'/>
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
