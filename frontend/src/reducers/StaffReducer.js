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
    staffLoginRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    staffLoginSuccess(state, action) {
      return {
        loading: false,
        isAuthendicated: true,
        stuff: action.payload.stuff,
      };
    },
    staffLoginFail(state, action) {
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
    stuffDetailsRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    stuffDetailsSuccess(state, action) {
      return {
        isAuthendicated: true,
        loading: false,
        stuff: action.payload.stuff,
      };
    },
  },
});

const { actions, reducer } = stuffSlice;
export const {
  staffLoginFail,
  stuffLogOutFail,
  stuffLogOutRequest,
  stuffLogOutSuccess,
  loadStuffFail,
  loadStuffRequest,
  loadStuffSuccess,
  staffLoginRequest,
  staffLoginSuccess,
} = actions;
export default reducer;
