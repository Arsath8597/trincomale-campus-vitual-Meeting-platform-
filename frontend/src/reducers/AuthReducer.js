import {createSlice} from "@reduxjs/toolkit"

const authSlice=createSlice({
    name:"auth",
    initialState:{
        loading:false,
        isAthundicate:false,
        user:null,
        error:null
    },
    reducers:{
        loginRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        loginSuccess(state,action){
            return{
                loading:false,
                isAthundicate:true,
                user:action.payload.user
            }
        },
        loginFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        loadUserRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        loadUserSuccess(state,action){
            return{
                loading:false,
                isAthundicate:true,
                user:action.payload.user
            }
        },
        loadUserFail(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
    }
})
const {actions,reducer}=authSlice
export const {loginRequest,loginSuccess,loginFail,loadUserFail,loadUserRequest,loadUserSuccess}=actions;
export default reducer;