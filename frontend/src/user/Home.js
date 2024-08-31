import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSchedule } from '../actions/scheduleAction'

const Home = () => {
   const dispatch=useDispatch()
   const { schedule } = useSelector((state) => state.scheduleState); 
   console.log(schedule)

  useEffect(()=>{
dispatch(getSchedule())
  },[dispatch])
  return (
    <div>
        <h1>Schedule information</h1>
     {
        schedule.map((item,index)=>{
            return(
                <li key={index}>
                <label>Subject:{item.subject}</label>
                <label>description:{item.description}</label>
                <label>Bacth:{item.batch}</label>
            
            </li>
            )
        })
     }
        
    </div>
  )
}
export default Home