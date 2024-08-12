import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './layout/landing'; // Assuming you have a Home component

const App = () => {
  return (
    <div className='font-serif'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;