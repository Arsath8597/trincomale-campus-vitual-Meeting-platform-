import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './layout/landing'; // Assuming you have a Home component
import SignInPage from './pages/singin';
import AdminLogIn from "./admin/adminlogin"
import { ToastContainer } from 'react-toastify';
import Store from "./store"
import { LoadUser } from './actions/authAction';
import UserHome from "./user/Home"
import UpcomingMeering from './user/UpcomingMeering';
import Previous from "./user/Previous"
import Meeting from "./room/index"
import RoomPage from './room/room';
import UserProfile from "./user/Profile"
import Schedule from "./user/scheduleService"
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
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
          <Route path="/singin" element={<SignInPage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/adminlogin" element={<AdminLogIn />} />
          <Route path="/upcomingmeeting" element={<UpcomingMeering />} />
          <Route path="/previous" element={<Previous/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;