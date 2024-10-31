import React from "react";
import Meeting from "../room/meeting";
import SideBar from "./sideBar";

const Room = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-8 lg:pl-60 ">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">User Details</h1>
          <div className="text-white text-lg space-y-2">
            <p>
              <span className="font-semibold">Name:</span> Arsath
            </p>
            <p>
              <span className="font-semibold">Course:</span> B.Sc. Computer
              Science
            </p>
          </div>
        </div>

        {/* Meeting Component */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <Meeting />
        </div>
      </div>
    </div>
  );
};

export default Room;
