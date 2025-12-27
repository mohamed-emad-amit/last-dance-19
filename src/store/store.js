import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

// Global Store -> States
export const store = configureStore({
  reducer: {
    // Register User Slice
    user: userReducer, // useSelector( state => state.user )
  },
});
