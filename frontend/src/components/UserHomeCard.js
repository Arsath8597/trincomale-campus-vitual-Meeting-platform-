import React from 'react'
import { MdCreate } from "react-icons/md";
import { Link } from 'react-router-dom';

 const UserHomeCard = ({link,className,Icon,Title,desc}) => {
  return (
    <div className={`w-52 p-3 rounded-xl bg-yellow-500 h-60 ${className}`}>
        <Link to={link}>{Icon && <Icon size={30} />}</Link>
<p className='mt-24 text-xl'>{Title}</p>
<p className='text-sm mt-2'>{desc}</p>
    </div>
  )
}
export default UserHomeCard