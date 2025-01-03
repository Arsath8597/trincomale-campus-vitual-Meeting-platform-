import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  scheduleGetFail,
  scheduleGetRequest,
  scheduleGetSuccess,
} from "../reducers/scheduleReducer";
import {
  logOutFail,
  logOutRequest,
  logOutSuccess,
} from "../reducers/AuthReducer";

const Home = () => {
  const dispatch = useDispatch();
  const { schedule, loading, error } = useSelector(
    (state) => state.scheduleState
  );

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(scheduleGetRequest());
    const getSchedule = async () => {
      try {
        const res = await axios.get("http://localhost:8000/getschedule", {
          withCredentials: true,
        });
        console.log(schedule);
        if (Array.isArray(res.data.schedule)) {
          // Check if res.data.schedule is an array

          dispatch(scheduleGetSuccess(res.data.schedule)); // Update the state with the schedule array
        } else {
          console.error("Data fetched is not an array:", res.data); // Log if the response is not an array
        }
      } catch (error) {
        console.error("Failed to fetch schedule:", error);
        dispatch(scheduleGetFail(error.response.data.message));
      }
    };
    getSchedule();
  }, [dispatch]);
  console.log(schedule);
  return (
    <div>
      <h1>Schedule information</h1>
      {schedule.map((item, index) => (
        <ul key={index}>
          <li>
            <label>Subject:{item.subject}</label>
            <label>description:{item.description}</label>
            <label>Bacth:{item.batch}</label>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Home;
