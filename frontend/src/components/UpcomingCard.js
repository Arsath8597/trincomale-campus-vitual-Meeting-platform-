import React from "react";
import { SlCalender } from "react-icons/sl";
import Button from "./button";
import { Link } from "react-router-dom";
const UpcomingCard = ({
  showButton = true,
  Date,
  Batch,
  Description,
  subject,
  href,
}) => {
  return (
    <div className="text-white bg-gray-700 w-80 justify-center flex flex-col bg-opacity-25 rounded-xl shadow-2xl p-3  h-48">
      <SlCalender size={30} />
      <h1 className="text-xl my-2 ">{subject}</h1>
      <p className="mb-3">{Date}</p>
      <p className="mb-3">Batch : {Batch}</p>
      <p className="mb-3 text-xl">Room Id : {Description}</p>
      {showButton && (
        <Link to={href}>
          <Button className="py-1 px-1 mt-5 " children="start" />
        </Link>
      )}
    </div>
  );
};
export default UpcomingCard;
