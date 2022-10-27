import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: {},
  isLoading: true,
  error: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signinUser(state, action) {
      state.isLoading = true;
      state.user = action.payload;
    },
    signinUserSuccess(state, action) {
      state.isLoading = false;
      state.error = {};
    },
    signinUserError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    signOutUser(state, action) {
      state.user = {};
    },
  },
});

export const { actions: authActions } = authSlice;

export default authSlice.reducer;
