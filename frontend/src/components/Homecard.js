import React, { useEffect, useState } from 'react';


const Card = ({ targetNumber,className,children,images}) => { // Default target number is 75, but you can pass any number as a prop
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        if (prevNumber < targetNumber) {
          return prevNumber + 1;
        } else {
          clearInterval(interval);
          return prevNumber;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [targetNumber]);

  return (
    <div className={`  bg-custom-gradient rounded-md shadow-2xl flex-col flex justify-center items-center text-2xl font-semibold w-60 h-36 ${className}`}>
       <p className='mb-2'><img width={50} src={images}/></p>
      <h1 >{children}</h1>
      <p>{currentNumber}</p>
     
    </div>
  );
};

export default Card;