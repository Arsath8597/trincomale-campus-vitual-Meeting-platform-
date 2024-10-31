import React from "react";

const Button = ({ children, className, onclick }) => {
  return (
    <div>
      <button
        className={`bg-blue-300 text-xl text-black
         rounded-lg hover:bg-slate-400 hover:scale-105
          hover:text-black py-2 px-10 ${className}`}
        onClick={onclick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
