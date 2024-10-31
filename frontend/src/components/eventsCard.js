import React from "react";
import Button from "./button";

const EventsCard = ({ title, date, img }) => {
  return (
    <div className="rounded-xl bg-yellow-200 flex flex-col lg:w-[400px] lg:h-[480px] shadow-2xl p-4">
      <img
        className="rounded-t-xl w-full h-48 object-cover"
        src={img}
        alt="Open Day"
      />
      <div className="flex text-slate-400 mb-4 mt-1 justify-between items-center">
        <p className="mx-10">{date}</p>
        <p>- By Trincomalee Campus -</p>
      </div>
      <h1 className="text-xl mb-5 font-semibold">{title}</h1>
      <Button className="my-3 mx-1 bg-transparent text-black shadow-2xl hover:bg-transparent">
        Read Me →
      </Button>
    </div>
  );
};

export default EventsCard;
