import React from 'react'
import FacultiesCard from '../components/facultiesCard'

const Faculties = () => {
  return (
    <div className='bg-custom-gradient1'>
        <h1 className='text-center py-10 text-3xl '>Here are our
        Faculties</h1>
    <div className='bg-custom-gradient1 px-28 grid grid-cols-2'>
        
      <FacultiesCard/>
      <FacultiesCard/>
      <FacultiesCard/>
      <FacultiesCard/>
    </div>
    </div>
  )
}

export default Faculties
