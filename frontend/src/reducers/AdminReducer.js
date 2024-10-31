import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    isAuthenticated: false,
    admin: null,
    error: null,
  },
  reducers: {
    adminloginRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    adminloginSuccess(state, action) {
      return {
        loading: false,
        isAuthenticated: true,
        admin: action.payload.admin,
      };
    },
    adminloginFail(state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },

    usergetRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    usergetSuccess(state, action) {
      return {
        loading: false,
        isAthundicate: true,
        user: action.payload.user,
      };
    },
    usergetFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = adminSlice;
export const {
  adminloginRequest,
  adminloginSuccess,
  adminloginFail,
  usergetRequest,
  usergetSuccess,
  usergetFail,
} = actions;
export default reducer;
