import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-700  bg-opacity-50 backdrop-blur-sm absolute w-full h-full">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-75"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-150"></div>
      </div>
    </div>
  );
};

export default Loader;
