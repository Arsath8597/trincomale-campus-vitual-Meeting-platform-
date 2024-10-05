import { createSlice } from "@reduxjs/toolkit";

const stuffSlice = createSlice({
  name: "stuff",
  initialState: {
    loading: false,
    isAuthendicated: false,
    stuff: null,
    error: null,
  },
  reducers: {
    stuffloginRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    stuffloginSuccess(state, action) {
      return {
        loading: false,
        isAuthendicated: true,
        stuff: action.payload.admin,
      };
    },
    stuffloginFail(state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },
    loadStuffRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    loadStuffSuccess(state, action) {
      return {
        loading: false,
        isAuthendicated: true,
        stuff: action.payload.stuff,
      };
    },
    loadStuffFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    stuffLogOutRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    stuffLogOutSuccess(state, action) {
      return {
        ...state,
        loading: false,
        isAuthendicated: false,
      };
    },
    stuffLogOutFail(state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = stuffSlice;
export const {
  stuffloginFail,
  stuffLogOutFail,
  stuffLogOutRequest,
  stuffLogOutSuccess,
  loadStuffFail,
  loadStuffRequest,
  loadStuffSuccess,
  stuffloginRequest,
  stuffloginSuccess,
} = actions;
export default reducer;
