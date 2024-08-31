import AuthReducer from "./reducers/AuthReducer"
import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import ScheduleReducer from "./reducers/scheduleReducer";
import {thunk} from "redux-thunk";


const reducer=combineReducers({
    authState:AuthReducer,
    scheduleState:ScheduleReducer
})

const store=configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store