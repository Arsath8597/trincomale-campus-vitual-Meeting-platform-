import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { logOutFail, logOutRequest, logOutSuccess } from '../reducers/AuthReducer'
import { FaHome } from "react-icons/fa";
import { MdUpcoming } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BiSolidVideoRecording } from "react-icons/bi";
import { IoCreate } from "react-icons/io5";
import profile from "../assets/profile.jpg"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";


const Home = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [open,setOpen]=useState(false)
  
  const handleLogout=async ()=>{
    try {
      dispatch(logOutRequest())
      const res=await axios.post("https://trincomale-campus-vitual-meeting-backend.vercel.app/userlogout",{},{
        withCredentials:true
      })
      
      if(res.status ===200){
        dispatch(logOutSuccess(res))
        navigate("/singin")
      }
      else{
        console.error("logout Fail")
        dispatch(logOutFail())
      }
    } catch (error) {
      console.error('Error occurred during logout:', error);
    }

  }
const handleClick=()=>{
  setOpen(!open)
}
  return (
    <div className='flex h-full'>
<div className='bg-gray-600 rounded-xl  items-center flex flex-col w-60 h-[100vh] '>
<ul className='text-white justify-between items-start px-5 h-[40vh] text-xl font-semibold text-center mt-20 flex flex-col  '>
<Link to="/userhome"><li className='flex gap-3 '><FaHome />Home</li></Link>
<Link to="/upcomingmeeting"><li className='flex gap-3 '><MdUpcoming />
Upcoming</li></Link>
<Link to="/previous"><li className='flex gap-3 '><SlCalender />
Previous</li></Link>
<Link><li className='flex gap-3 '><BiSolidVideoRecording />
Recoding</li></Link>
<Link><li className='flex gap-3 '><IoCreate />
Personal Room</li></Link>
</ul>
<div className="text-white">
<div className='cursor-pointer'  onClick={handleClick}>
<img src={profile} width={60} className='rounded-full mt-16 cursor-pointer'/>
<p className='ml-[-10px]'>Jhone Wick</p>
{open ?
<IoIosArrowDropupCircle size={50} onClick={handleClick}/>:<IoIosArrowDropdownCircle size={50}/>}
</div>

{open &&
<div className='bg-gray-500 shadow-xl px-10 rounded-lg py-2 absolute'>
  
 <Link to="/userprofile"> <p className='text-xl mt-3 cursor-pointer'>Profile</p></Link>
  <p className='text-xl my-3 cursor-pointer'>Setting</p>
  <p className='text-red-500 text-xl cursor-pointer' onClick={handleLogout}>LogOut</p>
</div>}
</div>

</div>

<div>

</div>

    </div>
  )
}
export default Home