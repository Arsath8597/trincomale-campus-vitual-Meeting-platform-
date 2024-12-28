import React from "react";
import Meeting from "../room/meeting";
import SideBar from "./sideBar";

const Room = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col lg:flex-row">
      <SideBar />

      <div className="p-6 lg:p-10 w-full lg:ml-60 flex flex-col items-center lg:items-start">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8 text-white w-full lg:w-3/4">
          <label className="block text-xl font-semibold mb-2">
            Name: Raihan
          </label>
          <label className="block text-xl font-semibold">
            Course: BSc Computer Science
          </label>
        </div>

        <div className="w-full lg:w-3/4">
          <Meeting />
        </div>
      </div>
    </div>
  );
};

export default Room;
