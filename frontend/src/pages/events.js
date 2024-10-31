import React from "react";
import EventCard from "../components/eventsCard";
import openDay from "../assets/open-days-web.jpg";
import thaiponkal from "../assets/thaiPonkal.jpg";
import session from "../assets/students-meeting.jpg";

const Events = () => {
  return (
    <div id="events" className="bg-custom-gradient1 px-5 text-white">
      <div className="flex flex-col items-center text-center py-8">
        <h1 className="lg:text-4xl text-2xl font-semibold mb-4">
          Completed Events
        </h1>
        <p className="lg:w-[500px] text-xl mb-10">
          Explore our Completed Events section to revisit the excitement,
          inspiration, and community spirit from gatherings that have left a
          <span className="underline"> lasting impression.</span>
        </p>
      </div>

      <div className="flex overflow-x-auto space-x-6 py-6 scrollbar-hide">
        <EventCard
          img={openDay}
          date="2024.05.10"
          title="Open Day Trincomalee Campus"
        />
        <EventCard
          img={thaiponkal}
          date="2024.01.10"
          title="Happy Thai Pongal"
        />
        <EventCard img={session} date="2024.05.23" title="Inaugural Session" />
        <EventCard img={session} date="2024.05.23" title="Inaugural Session" />
      </div>
    </div>
  );
};

export default Events;
