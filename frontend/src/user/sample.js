// components/Schedule.js
import React, { useState, useEffect } from 'react';
import { getSchedule } from './scheduleService';

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const data = await getSchedule();
        console.log("Fetched schedules data:", data);  // Debug: Check what data is being fetched
        setSchedules(data.schedule);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch schedules');
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User Schedules</h1>
      {schedules.length === 0 ? (
        <p>No schedules found</p>
      ) : (
        <ul>
          {schedules.map((schedule) => (
            <li key={schedule._id}>
              <h2>{schedule.subject}</h2>
              <p>{schedule.description}</p>
              <p>Batch: {schedule.batch}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Schedule;
