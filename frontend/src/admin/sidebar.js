import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-[100vh] bg-[#0c1432]  w-72">
      <div>
        <ul className="  text-white h-full flex flex-col gap-16 mt-20 mx-14">
          <Link to="/adminhome">
            <li className="text-xl ">Dhasboard</li>
          </Link>
          <Link to="/adminuser">
            <li className="text-xl ">Students</li>
          </Link>
          <Link to="/adminstuff">
            <li className="text-xl ">Staff</li>
          </Link>
          <Link to="/adminadmin">
            <li className="text-xl ">Admin</li>
          </Link>
          <Link to="/adminaccount">
            <li className="text-xl ">Account</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
