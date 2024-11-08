import React from "react";
import SideBar from "./sideBar";
import UpcomingCard from "../components/UpcomingCard";

const Privious = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col lg:flex-row">
      <SideBar />

      <div className="p-6 lg:p-10 w-full flex flex-col items-center lg:ml-60 lg:items-start">
        <h1 className="text-3xl font-bold text-white text-center lg:text-left mb-8 lg:mb-12">
          Upcoming Meetings
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <UpcomingCard showButton={false} />
          <UpcomingCard showButton={false} />
          {/* Add more <UpcomingCard /> components here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Privious;
