import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button';

function HomePage() {
  const [value, setValue] = useState('');

  const navigate = useNavigate();
  const handleJoin = useCallback(() => {
    if (value) {
      navigate(`/room/${value}`);
    }
  }, [navigate, value]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Room Code"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onclick={handleJoin}>Join</Button>
    </div>
  );
}

export default HomePage;
