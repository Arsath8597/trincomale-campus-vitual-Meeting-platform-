import React from 'react'

import { CiMenuKebab } from "react-icons/ci";


 const AdminHomeCard = ({count,Title,Icon}) => {
  return (
<div className='w-60 text-white h-40 rounded-xl m-2 bg-[#0c1432]'>
<div className=' py-2 flex px-2 gap justify-between'>
{Icon && <Icon className='mt-2' size={25}/>}
<h1 className='text-xl mt-2 '>{Title}</h1>
<CiMenuKebab className='mt-3' size={23}/>

</div>
<p className='text-center text-4xl'>{count}</p>
<p className='mt-5 px-2 text-center'>Active {Title} Count</p>
    </div>
  )
}
export default AdminHomeCard