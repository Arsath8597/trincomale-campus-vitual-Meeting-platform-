import axios from "axios"
import { loadUserFail, loadUserRequest, loadUserSuccess, loginFail, loginRequest, loginSuccess, scheduleSuccess } from "../reducers/AuthReducer"


//login action
export const login=(email,password)=>async(dispatch)=>{
try {
    dispatch(loginRequest())
    const {data}=await axios.post("/userlogin",{email,password})
    dispatch(loginSuccess(data))
} catch (error) {
    dispatch(loginFail(error.response.data.message))
}
}

//user data get action
export const LoadUser=async(dispatch)=>{
    try {
        dispatch(loadUserRequest())
        const config={
            header:{
                 "Content-type":"multipart/form-data"
            }
        }
        const {data}=await axios.get("/getuserdata",config)
        dispatch(loadUserSuccess(data))
    } catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }
}

