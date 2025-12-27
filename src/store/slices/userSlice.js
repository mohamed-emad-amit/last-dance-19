import { createSlice } from "@reduxjs/toolkit";

// Create UserSlice
const userSlice = createSlice({
  name: "userSlice",

  initialState: {
    isLoggedIn: false,
    user: null,
  },

  reducers: {
    // Login
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    // Logout
    clearUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

// Export Action
export const { clearUser, setUser } = userSlice.actions;

// Export State
export default userSlice.reducer;
