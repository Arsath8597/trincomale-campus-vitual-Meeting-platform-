import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./sideBar";
import UpcomingCard from "../components/UpcomingCard";
import axios from "axios";
import {
  scheduleGetFail,
  scheduleGetRequest,
  scheduleGetSuccess,
} from "../reducers/scheduleReducer";

// Helper function to format date and time clearly
const formatDateTime = (dateString) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour format with AM/PM
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
};

const UpcomingMeering = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { schedule, error } = useSelector((state) => state.scheduleState);

  useEffect(() => {
    const getSchedule = async () => {
      dispatch(scheduleGetRequest());

      try {
        const res = await axios.get("/getschedule", { withCredentials: true });
        console.log("Fetched Schedule:", res.data);

        if (Array.isArray(res.data.schedule) && res.data.schedule.length > 0) {
          dispatch(scheduleGetSuccess(res.data.schedule));
        } else {
          console.warn("No upcoming meetings found.");
          dispatch(scheduleGetSuccess([]));
        }
      } catch (error) {
        console.error("Failed to fetch schedule:", error);
        dispatch(
          scheduleGetFail(
            error?.response?.data?.message || "Error fetching schedule."
          )
        );
      }
    };

    getSchedule();
  }, [dispatch]);

  return (
    <div className="flex min-h-screen bg-gray-900">
      <SideBar />

      <div className="flex-grow p-6 lg:pl-60 ">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Upcoming Meetings
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <UpcomingCard
                subject={item.subject}
                Batch={item.batch}
                Date={formatDateTime(item.date)}
                Description={item.roomid}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeering;
