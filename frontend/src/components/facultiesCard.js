import React from 'react'
import rating from "../assets/rating.png"
import Button from './button'
const FacultiesCard = (className) => {
  return (
    <div>
      <div className={`bg-card my-10 flex flex-col items-center justify-center w-80 h-52 rounded-lg shadow-lg  ${className}`}>
        <h1 className='text-2xl'>#Managment</h1>
        <h1>Faculty of Management</h1>
        <p className='flex justify-center items-center'>Rating <img width={70} src={rating}/></p>
        <div className='h-[1px] w-full bg-black mb-2'></div>
        
        <Button children={"Read More"}/>
      </div>
    </div>
  )
}

export default FacultiesCard
