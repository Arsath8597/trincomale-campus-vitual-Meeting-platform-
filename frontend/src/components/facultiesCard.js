import React from "react";
import rating from "../assets/rating.png";
import Button from "./button";
import { motion } from "framer-motion";

const FacultiesCard = ({ className = "", title, description }) => {
  return (
    <div className="flex justify-center my-5">
      <motion.div
        className={`bg-card text-black flex flex-col items-center justify-center w-80 h-64 rounded-lg shadow-lg p-4 ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-xl font-semibold mb-1">{title}</h1>
        <p className="text-lg text-center">{description}</p>

        <div className="flex items-center mt-4 text-lg">
          <span className="mr-2">Rating:</span>
          <img className="mx-2" width={70} src={rating} alt="Rating" />
        </div>

        <div className="h-[1px] w-full bg-black my-3"></div>

        <Button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          children="Read More"
        />
      </motion.div>
    </div>
  );
};

export default FacultiesCard;
