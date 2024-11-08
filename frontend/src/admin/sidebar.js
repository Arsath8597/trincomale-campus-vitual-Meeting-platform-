import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MdMenu,
  MdClose,
  MdDashboard,
  MdPeople,
  MdAccountCircle,
  MdAdminPanelSettings,
  MdLogout,
} from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle for mobile
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "/adminlogout",
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        navigate("/"); // Redirect to the login page after logout
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex">
      {/* Toggle button for mobile */}
      <button
        className="text-white text-3xl m-5 md:hidden focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Sidebar container */}
      <div
        className={`fixed inset-y-0 left-0 w-72 bg-slate-700 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex flex-col min-h-screen`}
      >
        <div className="flex flex-col items-center py-8">
          <h1 className="text-2xl font-bold tracking-wide mb-10">
            Admin Panel
          </h1>
        </div>

        <ul className="flex flex-col gap-8 mx-6 font-medium">
          <Link to="/adminhome" onClick={() => setIsOpen(false)}>
            <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-600 transition duration-200 cursor-pointer">
              <MdDashboard size={24} /> Dashboard
            </li>
          </Link>
          <Link to="/adminuser" onClick={() => setIsOpen(false)}>
            <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-600 transition duration-200 cursor-pointer">
              <MdPeople size={24} /> Students
            </li>
          </Link>
          <Link to="/adminstuff" onClick={() => setIsOpen(false)}>
            <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-600 transition duration-200 cursor-pointer">
              <MdAccountCircle size={24} /> Staff
            </li>
          </Link>
          {/* <Link to="/adminadmin" onClick={() => setIsOpen(false)}>
            <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-600 transition duration-200 cursor-pointer">
              <MdAdminPanelSettings size={24} /> Admin
            </li>
          </Link> */}
          <Link to="/adminhome" onClick={() => setIsOpen(false)}>
            <li className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-600 transition duration-200 cursor-pointer">
              <MdAccountCircle size={24} /> Account
            </li>
          </Link>
          <li
            className="flex items-center gap-4 p-3 rounded-lg text-red-400 hover:bg-red-600 transition duration-200 cursor-pointer"
            onClick={handleLogout}
          >
            <MdLogout size={24} /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
