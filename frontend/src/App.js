import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './layout/landing'; // Assuming you have a Home component
import SignInPage from './pages/singin';
import AdminLogIn from "./admin/adminlogin"
const App = () => {
  return (
    <div className='font-serif'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singin" element={<SignInPage />} />
          <Route path="/adminlogin" element={<AdminLogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;