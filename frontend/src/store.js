import AuthReducer from "./reducers/AuthReducer"
import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import ScheduleReducer from "./reducers/scheduleReducer";



const reducer=combineReducers({
    authState:AuthReducer,
    scheduleState:ScheduleReducer
})

const store=configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})

export default store