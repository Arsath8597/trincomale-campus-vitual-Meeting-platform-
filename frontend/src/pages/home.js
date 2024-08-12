import React from 'react'
import degree from "../assets/degree.png"
import Card from '../components/Homecard'
import Lecturers from "../assets/lecturer.png"
import events from "../assets/event.png"
import { motion } from 'framer-motion'
const home = () => {
  return (
    <div id='#home' className='flex bg-custom-gradient flex-col  w-full h-[92vh]'>

      <div className=' z-50 mt-28 text-white px-10'>
        <motion.h1
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1,y:0}}
        viewport={{amount:0.1}}
        transition={{duration:0.5,ease:"easeOut",delay:0.1}} className='text-[48px] uppercase bg-black bg-opacity-20 shadow-2xl rounded-2xl '>Provides The <hr/><span className='text-red-400'>best </span>
         Educational <span  className='text-red-400'>Environment</span></motion.h1>
        <motion.p 
         initial={{opacity:0, y:0}}
         whileInView={{opacity:1,y:0}}
         viewport={{amount:0.1}}
         transition={{duration:0.8,ease:"easeOut",delay:0.5}} className='mt-10  px-16 text-2xl  text-center'>Each faculty aims to provide education, research 
            opportunities, and practical skills relevant to its 
            respective field, contributingmotion.  to the overall academic 
            diversity .</motion.p >
            <div className='mt-32  flex justify-between'>
                <Card children='Degree Program'
                images={degree}
                targetNumber="30"/>
                <Card children='Expert Lecturers'
                images={Lecturers}
                targetNumber="50"/>
                <Card children='Completed Events'
                images={events}
                targetNumber="80"/>
          
             
            </div>
      </div>
    </div>
  )
}

export default home
