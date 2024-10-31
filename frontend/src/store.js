import AuthReducer from "./reducers/AuthReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ScheduleReducer from "./reducers/scheduleReducer";
import adminReducer from "./reducers/AdminReducer";
import stuffState from "./reducers/StaffReducer";

const reducer = combineReducers({
  authState: AuthReducer,
  scheduleState: ScheduleReducer,
  adminState: adminReducer,
  stuffState: stuffState,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
