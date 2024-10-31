import React from "react";
import Sidebar from "./sidebar";
import AdminHomeCard from "../components/adminHomeCard";
import { FaUserInjured } from "react-icons/fa";
import Bar from "../admin/chart/bar";
import Pie from "../admin/chart/pie";
const Home = () => {
  return (
    <div className="flex h-full  overflow-x-hidden bg-[#020617] ">
      <Sidebar />
      <div className="justify-center flex flex-col items-center">
        <div className="grid  grid-cols-2 lg:flex justify-between">
          <AdminHomeCard Icon={FaUserInjured} Title="Users" count="82" />
          <AdminHomeCard Icon={FaUserInjured} Title="Students" count="10" />
          <AdminHomeCard Icon={FaUserInjured} Title="Admins" count="2" />
        </div>

        <div className="lg:flex items-center mt-10 gap-10 ">
          <div className="w-[50vw] ml-10 mt-16">
            <Bar />
          </div>
          <div className="w-[30vw] mt-10 lg:mt-0">
            <Pie />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
