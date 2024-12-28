import axios from "axios";
import {
  loadStuffFail,
  loadStuffRequest,
  loadStuffSuccess,
} from "../reducers/StaffReducer";

// get login stuff data
export const LoadStaff = async (dispatch) => {
  try {
    dispatch(loadStuffRequest());
    const config = {
      header: {
        "Content-type": "multipart/form-data",
      },
    };
    const { data } = await axios.get(
      "http://localhost:8000/stuffgetdata",
      config,
      { withCredentials: true }
    );
    dispatch(loadStuffSuccess(data));
  } catch (error) {
    dispatch(loadStuffFail(error.response.data.message));
  }
};
