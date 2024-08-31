// services/scheduleService.js
import axios from 'axios';

const API_URL = '/getschedule';

export const getSchedule = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true, // Ensure cookies are sent with requests for authentication
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
