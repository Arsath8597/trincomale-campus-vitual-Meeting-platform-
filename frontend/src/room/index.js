import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {
//  const [value, setValue] = useState();
const value = Math.random(10);
 const navigate = useNavigate();
 const handleJoin = useCallback(() => {
    navigate(`/room/${value}`);
 }, [navigate,value])
  return (
    <div>
      {/* <input type='text' placeholder='Enter Room Code' value={value} onChange={(e) => setValue(e.target.value)}/> */}
      <button onClick={handleJoin}>Join</button>
    </div>
  )
}

export default HomePage