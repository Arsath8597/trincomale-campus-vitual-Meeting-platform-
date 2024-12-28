import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  stuffLogOutFail,
  stuffLogOutRequest,
  stuffLogOutSuccess,
} from "../reducers/StaffReducer";
import {
  MdHome,
  MdCalendarToday,
  MdVideoLibrary,
  MdSettings,
  MdLogout,
  MdPerson,
  MdArrowDropUp,
  MdArrowDropDown,
  MdMenu,
  MdClose,
} from "react-icons/md";
import profile from "../assets/profile.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      dispatch(stuffLogOutRequest());
      const res = await axios.post(
        "http://localhost:8000/stufflogout",
        {},
        { withCredentials: true }
      );

      if (res.status === 200) {
        dispatch(stuffLogOutSuccess(res));
        navigate("/");
      } else {
        console.error("Logout failed");
        dispatch(stuffLogOutFail());
      }
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleProfileClick = () => setOpen(!open);

  return (
    <div className="flex h-full absolute">
      {/* Sidebar / Topbar Navigation */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } bg-gray-600 transition-transform duration-300 md:translate-x-0 fixed md:relative z-10 flex flex-col w-60 h-full md:h-[100vh] p-5`}
      >
        <button
          className="md:hidden text-white text-3xl self-end"
          onClick={toggleMenu}
        >
          <MdClose />
        </button>
        <ul className="text-white space-y-8 text-xl  font-semibold mt-10">
          <Link to="/stuffhome">
            <li className="flex items-center gap-3 my-5 cursor-pointer">
              <MdHome />
              Home
            </li>
          </Link>
          <Link to="/stuffupcomingmeeting">
            <li className="flex items-center gap-3 cursor-pointer">
              <MdCalendarToday />
              Upcoming
            </li>
          </Link>
          <Link to="/stuffprevious">
            <li className="flex items-center gap-3 my-5  cursor-pointer">
              <MdCalendarToday />
              Previous
            </li>
          </Link>
          {/* <Link to="/recordings">
            <li className="flex items-center gap-3 cursor-pointer">
              <MdVideoLibrary />
              Recordings
            </li>
          </Link> */}
          <Link to="/stuffpersonalRoom">
            <li className="flex items-center gap-3 my-5  cursor-pointer">
              <MdPerson />
              Personal Room
            </li>
          </Link>
        </ul>

        {/* Profile Section */}
        <div className="mt-auto  text-white">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleProfileClick}
          >
            <img
              src={profile}
              width={50}
              className="rounded-full"
              alt="Profile"
            />
            <p className="font-medium">John Wick</p>
            {open ? <MdArrowDropUp size={30} /> : <MdArrowDropDown size={30} />}
          </div>

          {open && (
            <div className="bg-gray-500 shadow-lg p-4 rounded-lg ">
              <Link to="/stuffprofile">
                <p className="text-2xl my-2 cursor-pointer">Profile</p>
              </Link>
              {/* <p className="text-xl cursor-pointer my-2">
                <MdSettings className="inline-block mr-2" /> Settings
              </p> */}
              <p
                className="text-red-500 text-xl cursor-pointer flex items-center"
                onClick={handleLogout}
              >
                <MdLogout className="mr-2" /> LogOut
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-60">
        <button
          className="md:hidden text-white text-3xl m-5"
          onClick={toggleMenu}
        >
          <MdMenu />
        </button>
      </div>
    </div>
  );
};

export default Home;
