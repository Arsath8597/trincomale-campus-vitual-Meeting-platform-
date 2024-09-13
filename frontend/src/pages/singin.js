import React, { useEffect, useState } from 'react'
import Button from '../components/button';
import Navbar from './navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authAction';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Singin = () => {

    const [isUserLogin,setIsUserLogin]=useState(true);
    const [email,setEmail]=useState("")
    const [Password,setPassword]=useState("")

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {loading,error,isAthundicate}=useSelector(state=>state.authState)

    const toggleLoginType=()=>{
        setIsUserLogin(!isUserLogin)
        
    }
    

    const handleSubmit=(e)=>{
      e.preventDefault()
      if(email && Password){
      dispatch(login(email,Password))}
      else{
        toast("Please fill in all fields", {
          position: 'top-center',
          type: "error"
        });
      }
    }

    useEffect(()=>{
if(isAthundicate){
navigate("/userhome")

}

// if(error){
//   toast(error,{
//   position:'top-center',
//   type:"error"
// })}
    },[isAthundicate,error,navigate])
  return (
    <div className='flex flex-col  bg-custom-gradient  h-[100vh]'>
      <Navbar/>
      <div className='flex items-center justify-center mt-[200px]'>
      <div className=' w-[500px]  h-[420px] flex flex-col rounded-xl shadow-lg justify-center items-center  text-white'>
      <div>
      <button 
      onClick={()=>setIsUserLogin(true) } className='px-4 text-xl shadow-lg mx-1  bg-black bg-opacity-25 py-3  '>Student Login</button>
      <button
        onClick={()=>setIsUserLogin(false) } className='px-4 text-xl shadow-lg  bg-black bg-opacity-25 py-3  '>staff Login</button>
      </div>
      
      <form onSubmit={handleSubmit} className='lg:w-[400px]'>
        <h1 className='text-center py-3 text-2xl font-semibold'>
          {isUserLogin ? "Student Sing In":"Staff Sing In"}
        </h1>
        <div>
          <label className='text-lg '>Email</label>
          <input onChange={(e)=>setEmail(e.target.value)} className='w-full px-1 py-2 my-2 rounded-lg shadow-lg text-black' type='text'/>
        </div>
        <div>
          <label className='text-lg '>Password</label>
          <input onChange={(e)=>setPassword(e.target.value)} className='w-full px-1 py-2 my-2 rounded-lg shadow-lg text-black' type='text'/>
        </div>
        <div className='flex justify-between'>
        <Button type='submit' className={"mt-5 "}>
Sing In
        </Button>
        <Button className={"bg-transparent rounded-2xl mt-20 hover:bg-transparent shadow-2xl text-md text-black"}><Link to={"/adminlogin"}>Admin Login</Link></Button>
      
        </div></form>
      </div>
      </div>
    </div>
  )
}

export default Singin
