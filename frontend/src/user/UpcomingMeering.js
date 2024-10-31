import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./sideBar";
import UpcomingCard from "../components/UpcomingCard";
import axios from "axios";
import {
  scheduleGetAllFail,
  scheduleGetAllRequest,
  scheduleGetAllSuccess,
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

const UpcomingMeeting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { schedule, error } = useSelector((state) => state.scheduleState);

  // Fetch the schedule from the backend on component mount
  useEffect(() => {
    const getSchedule = async () => {
      dispatch(scheduleGetAllRequest());

      try {
        const res = await axios.get("/getallschedule", {
          withCredentials: true, // Ensures cookies are sent with the request
        });

        console.log("API Response:", res.data); // Debug the response structure

        // If the backend returns a valid response with data
        if (res.data && res.data.data) {
          dispatch(scheduleGetAllSuccess(res.data.data));
        } else {
          console.warn("No upcoming meetings found.");
          dispatch(scheduleGetAllSuccess([]));
        }
      } catch (error) {
        console.error("Failed to fetch schedule:", error);
        dispatch(
          scheduleGetAllFail(
            error?.response?.data?.message || "Error fetching schedule."
          )
        );
      }
    };

    getSchedule(); // Invoke the API call
  }, [dispatch]);

  return (
    <div className="flex min-h-screen bg-gray-900">
      <SideBar />

      <div className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Upcoming Meetings
        </h1>

        {error && (
          <p className="text-red-500 text-center mb-4">
            {error || "Failed to load data."}
          </p>
        )}

        {schedule.length === 0 ? (
          <p className="text-white text-center">No upcoming meetings found.</p>
        ) : (
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
                  href={`/room/${item.roomid}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingMeeting;
