import React from 'react'
import FacultiesCard from '../components/facultiesCard'
import { motion } from 'framer-motion'
const Faculties = () => {
  return (
    <div id='Faculties' className='bg-custom-gradient1 py-10 flex-col flex items-center'>
        <h1 className='text-center py-10 text-4xl text-white font-semibold '>Here are our
        Faculties</h1>
    <div className='bg-custom-gradient1  lg:grid lg:gap-7 lg:grid-cols-3'>
        <motion.div 
          initial={{opacity:0, y:0}}
          whileInView={{opacity:1,y:0}}
          viewport={{amount:0.1}}
          transition={{duration:0.5,ease:"easeOut",delay:0.1}}>
        <FacultiesCard
        title={"#Management"}
        description={"Faculty of Management"}
        />
          </motion.div>
   
  <motion.div
   initial={{opacity:0, y:20}}
   whileInView={{opacity:1,y:0}}
   viewport={{amount:0.1}}
   transition={{duration:0.5,ease:"easeOut",delay:0.1}}>
  <FacultiesCard
      title={"#Technology"}
      description={"Faculty of Technology"}
      />
  </motion.div>
      <motion.div initial={{opacity:0, y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{amount:0.1}}
          transition={{duration:0.5,ease:"easeOut",delay:0.2}}>
      <FacultiesCard
      title={"#Science"}
      description={"Faculty of Science"}
      />
      </motion.div>
   <motion.div initial={{opacity:0, y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{amount:0.1}}
          transition={{duration:0.5,ease:"easeOut",delay:0.2}}>
   <FacultiesCard
      title={"#Information Technology"}
      description={"Faculty of IT"}
      />
   </motion.div>
   <motion.div initial={{opacity:0, y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{amount:0.1}}
          transition={{duration:0.5,ease:"easeOut",delay:0.2}}>
   <FacultiesCard
      title={"#Information Technology"}
      description={"Faculty of IT"}
      />
   </motion.div>
   <motion.div initial={{opacity:0, y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{amount:0.1}}
          transition={{duration:0.5,ease:"easeOut",delay:0.2}}>
   <FacultiesCard
      title={"#Information Technology"}
      description={"Faculty of IT"}
      />
   </motion.div>
    </div>
    </div>
  )
}

export default Faculties
