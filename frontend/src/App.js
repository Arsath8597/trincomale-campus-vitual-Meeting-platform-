import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './layout/landing'; // Assuming you have a Home component
import SignInPage from './pages/singin';
import AdminLogIn from "./admin/adminlogin"
import { ToastContainer } from 'react-toastify';
import Store from "./store"
import { LoadUser } from './actions/authAction';
import UserHome from "./user/Home"
const App = () => {

  useEffect(()=>{
    Store.dispatch(LoadUser)
  },[])
  return (
    <div className='font-serif'>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/singin" element={<SignInPage />} />
          <Route path="/adminlogin" element={<AdminLogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;