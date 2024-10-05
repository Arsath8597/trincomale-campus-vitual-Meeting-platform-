import React from "react";
import Meeting from "../room/meeting";
import SideBar from "./sideBar";
const Room = () => {
  return (
    <div className="bg-gray-800 flex">
      <SideBar />
      <div>
        <div className="flex flex-col text-2xl text-white">
          <label>Name :Arsath </label>
          <label>Course:Bsc computer science</label>
        </div>
        <Meeting />
      </div>
    </div>
  );
};
export default Room;
