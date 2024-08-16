import React from 'react'
import rating from "../assets/rating.png"
import Button from './button'
import { motion } from 'framer-motion'
const FacultiesCard = ({className,title,description}) => {
  return (
    <div>
      <motion.div
      
      className={`bg-card  text-black my-10 flex flex-col items-center justify-center w-80 h-52 rounded-lg shadow-lg  ${className}`}>
        <h1 className='text-xl mb-1'>{title}</h1>
        <h1 className='text-2xl'>{description}</h1>
        <p className='flex justify-center text-lg items-center'>Rating <img className='mx-4' width={70} src={rating}/></p>
        <div className='h-[1px] w-full bg-black mb-2'></div>
        
        <Button children={"Read More"}/>
      </motion.div>
    </div>
  )
}

export default FacultiesCard
