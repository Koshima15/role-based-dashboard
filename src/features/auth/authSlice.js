import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("user");
const savedRole = localStorage.getItem("role");

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  role: savedRole || null,
  isAuthenticated: !!savedUser && !!savedRole,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.isAuthenticated = true;
      state.loading = false;

      localStorage.setItem(
        "user",
        JSON.stringify(action.payload.user)
      );

      localStorage.setItem(
        "role",
        action.payload.role
      );
    },

    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
      state.loading = false;

      localStorage.removeItem("user");
      localStorage.removeItem("role");
    },

    finishLoading: (state) => {
      state.loading = false;
    },
  },
});

export const {
  login,
  logout,
  finishLoading,
} = authSlice.actions;

export default authSlice.reducer;