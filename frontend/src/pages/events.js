import React from 'react';
import EventCard from "../components/eventsCard"
import openDay from "../assets/open-days-web.jpg"
import thaiponkal from "../assets/thaiPonkal.jpg"
import session from "../assets/students-meeting.jpg"
const Events = () => {


  return (
    <div id='events' className='bg-custom-gradient1 px-5'>
        <div className='flex flex-col text-white  items-center '>
        <h1 className='lg:text-4xl text-2xl font-semibold my-8'>Completed Events</h1>
        <p className='lg:w-[500px] text-center mb-12 text-xl'>Explore our Completed Events section to revisit the excitement, inspiration, and community spirit from gatherings that
             have left a<span className='underline'><br/>lasting impression.</span> </p>
    </div>
 <div className="w-full pb-16 overflow-x-scroll flex whitespace-nowrap p-4 rounded-lg">
    <div className="flex space-x-10">
     <EventCard
     img={openDay}
     date={"2024.05.10"}
     title={"Open day Trincomalee Campus "}
     />
     <EventCard
img={thaiponkal}
date={"2024.01.10"}
title={"Happy thai Ponkal"}
/>
     <EventCard
     date={"2024.05.23"}
     title={"inaugural Session"}
     img={session}
     />
       <EventCard
     date={"2024.05.23"}
     title={"inaugural Session"}
     img={session}
     />
    
      </div>
    </div></div>
  );
};

export default Events;
