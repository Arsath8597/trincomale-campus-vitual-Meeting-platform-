import React from 'react'
import SideBar from "./sideBar"
import Bg from "../assets/bg.png"
import UserHomeCard from '../components/UserHomeCard'
import { MdCreate } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdOutlineStreetview } from "react-icons/md";
import { MdJoinFull } from "react-icons/md";
 const Home = () => {
  return (

    <div className='flex  bg-slate-800'>
      <SideBar/>
      <div className='text-white flex flex-col  items-center mx-10'>
      <p className='text-2xl mt-10 '> Welcome To Jhon Wick </p>
      <div className='w-[75vw] h-[40vh] rounded-xl mt-10 shadow-2xl  flex  bg-gray-700 justify-between items-center px-10'>
       
        <div>
          <h1 className='bg-slate-500 rounded-lg px-4 py-3 text-2xl mb-10'>Current Time</h1>
         <p className='text-[50px] font-semibold'> 10:20 AM</p>
         <p className='text-xl'>Wenesday,March,27,2024</p>
          
        </div>
<img src={Bg} width={500}/>
      </div>
      <div className='flex gap-3 mt-10'>
<UserHomeCard
link="/meeting"
className="bg-orange-700"
Icon={MdCreate}
Title="New Meeting"
desc="Start an instant Meeting"/>
<UserHomeCard
Icon={MdJoinFull}
Title="Join Meeting"
desc="via invitation link"
className="bg-blue-500"
/>
<UserHomeCard

Icon={RiCalendarScheduleFill}
Title="Schedule Meeting"
desc="Plan your meeting"
className="bg-green-700"
/><UserHomeCard
Icon={MdOutlineStreetview}
Title="View Record"
desc="Meeting Record"
className="bg-yellow-600"
/>    </div>
      </div>
    </div>
  )
}
export default Home