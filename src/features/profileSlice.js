import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  personalDetails: {
    name: "",
    address: "",
    contact: "",
    stream: "",
    section: "",
    company: "",
    position: "",
    mentor: "",
  },
  internshipDetails: {
    name: "",
    address: "",
    contact: "",
    stream: "",
    section: "",
    company: "",
    position: "",
    mentor: "",
  },

  isLoading: true,
  error: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfile(state, action) {
      state.isLoading = true;
      state.personalDetails = action.payload.personalDetails;
      state.internshipDetails = action.payload.internshipDetails;
    },
    // getProfileSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = {};
    // },
    // getProfileError(state, action) {
    //   state.error = action.payload;
    //   state.isLoading = false;
    // },
    updatePersonalDetails(state, action) {
      state.personalDetails = action.payload;
    },
    updateInternshipDetails(state, action) {
      state.internshipDetails = action.payload;
    },
  },
});

export const { actions: profileActions } = profileSlice;

export default profileSlice.reducer;
