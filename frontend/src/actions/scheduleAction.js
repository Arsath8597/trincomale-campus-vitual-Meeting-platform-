import axios from "axios";
import {
  scheduleGetFail,
  scheduleGetRequest,
  scheduleGetSuccess,
} from "../reducers/scheduleReducer";

export const getSchedule = async (dispatch) => {
  try {
    dispatch(scheduleGetRequest());
    const config = {
      headers: {
        "Content-type": "multipart/form-data",
      },
    };
    const { data } = await axios.get(
      `http://localhost:8000/getschedule`,
      config,
      { withCredentials: true }
    );
    dispatch(scheduleGetSuccess(data));
  } catch (error) {
    dispatch(scheduleGetFail(error.response.data.message));
  }
};
