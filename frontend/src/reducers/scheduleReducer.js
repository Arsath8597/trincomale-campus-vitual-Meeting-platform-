import { createReducer, createSlice } from "@reduxjs/toolkit";

const ScheduleSlice =createSlice({
    name:"schedule",
    initialState:{
        loading:false,
        schedule:[],
        error:[]
    },
    reducers:{
        scheduleGetRequest(state,action){
            return{
                ...state,
                loading:true
            }
            
        },
        scheduleGetSuccess(state,action){
            return{
                ...state,
                loading:false,
                schedule:action.payload.schedule
            }
        },

        scheduleGetFail(state,action){
            return{
                ...state,
                loading:false,
             error:action.payload
            }
        }
    }
})
const {actions,reducer}=ScheduleSlice;
export const {scheduleGetRequest,scheduleGetSuccess,scheduleGetFail} =actions;
export default reducer