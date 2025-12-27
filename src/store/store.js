import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import appReducer from "./slices/appSlice";

// Global Store -> States
export const store = configureStore({
  reducer: {
    // Register User Slice
    user: userReducer, // useSelector( state => state.user )
    cart: cartReducer, // useSelector( state => state.cart )
    app: appReducer, // useSelector( state => state.app )
  },
});
