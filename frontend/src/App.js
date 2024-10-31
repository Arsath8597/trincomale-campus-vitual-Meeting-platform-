import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./layout/landing"; // Assuming you have a Home component
import SignInPage from "./pages/singin";
import AdminLogIn from "./admin/adminlogin";
import { ToastContainer } from "react-toastify";
import Store from "./store";
import { LoadUser } from "./actions/authAction";
import UserHome from "./user/Home";
import UpcomingMeering from "./user/UpcomingMeering";
import StuffUpcomingMeering from "./staff/UpcomingMeering";
import StuffPersonalRoom from "./staff/PersonalRoom";
import StuffProfile from "./staff/Profile";
import Previous from "./user/Previous";
import Meeting from "./room/meeting";
import RoomPage from "./room/room";
import UserProfile from "./user/Profile";
import Schedule from "./user/scheduleService";
import PersonalRoom from "./user/PersonalRoom";
import AdminHome from "./admin/home";
import AdminUser from "./admin/user";
import AdminStuff from "./admin/stuff";
import AdminAdmin from "./admin/admin";
import StuffHome from "./staff/home";
import StuffPrevious from "./staff/Previous";
import { LoadStaff } from "./actions/staffAction";

const App = () => {
  useEffect(() => {
    Store.dispatch(LoadUser);
    Store.dispatch(LoadStaff);
  }, []);
  return (
    <div className="font-serif">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
          <Route path="/singin" element={<SignInPage />} />
          <Route path="/personalRoom" element={<PersonalRoom />} />
          <Route path="/stuffpersonalRoom" element={<StuffPersonalRoom />} />
          <Route path="/stuffhome" element={<StuffHome />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/adminlogin" element={<AdminLogIn />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminuser" element={<AdminUser />} />
          <Route path="/adminadmin" element={<AdminAdmin />} />
          <Route path="/adminstuff" element={<AdminStuff />} />
          <Route path="/upcomingmeeting" element={<UpcomingMeering />} />
          <Route path="/stuffprofile" element={<StuffProfile />} />
          <Route path="/stuffprevious" element={<StuffPrevious />} />
          <Route
            path="/stuffupcomingmeeting"
            element={<StuffUpcomingMeering />}
          />
          <Route path="/previous" element={<Previous />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
