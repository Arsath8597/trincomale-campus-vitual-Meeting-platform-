import React from "react";
import SideBar from "./sideBar";
import UpcomingCard from "../components/UpcomingCard";
const Privious = () => {
  return (
    <div className="bg-gray-800 flex">
      <SideBar />
      <div className="p-10 flex w-full flex-col ">
        <h1 className="text-3xl font-semibold  text-white text-center mb-10">
          Upcoming Meeting
        </h1>
        <div className="flex gap-20">
          <UpcomingCard showButton={false} />
          <UpcomingCard showButton={false} />
        </div>
      </div>
    </div>
  );
};
export default Privious;
