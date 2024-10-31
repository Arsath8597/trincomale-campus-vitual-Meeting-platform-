import React from "react";
import { Link } from "react-router-dom";

const UserHomeCard = ({ link, className, Icon, Title, desc, onclick }) => {
  return (
    <div
      onClick={onclick}
      className={`w-52 p-4 rounded-xl bg-green-700 h-60 flex flex-col justify-between items-start text-white shadow-lg cursor-pointer ${className}`}
    >
      <Link to={link} className="flex items-center mb-2">
        {Icon && <Icon size={30} className="mr-2" />}
        <h1 className="text-lg font-semibold">{Title}</h1>
      </Link>
      <p className="text-sm mt-2">{desc}</p>
    </div>
  );
};

export default UserHomeCard;
