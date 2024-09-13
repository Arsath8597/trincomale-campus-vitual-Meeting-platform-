import React from 'react'
import { SlCalender } from "react-icons/sl";
import Button from './button';
 const UpcomingCard = ({showButton=true}) => {
  return (
    <div className='text-white bg-gray-700 w-80 justify-center flex flex-col bg-opacity-25 rounded-xl shadow-2xl p-3  h-48'>
        <SlCalender size={30}/>
        <h1 className='text-xl my-2 '>Programing MasterClass Meeting</h1>
        <p className='mb-3'>20/02/2024  , 20.00.00</p>
   {showButton && <Button 
    className="py-1 px-1 mt-5 "
    children="start"/>
   }
    </div>
  )
}
export default UpcomingCard
