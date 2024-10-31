import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";

function HomePage() {
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const handleJoin = useCallback(() => {
    if (value.trim()) {
      navigate(`/room/${value.trim()}`);
    }
  }, [navigate, value]);

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-xl text-white">Enter Your Code</h1>
      <input
        className="px-10 py-3 rounded-lg my-3"
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
