// src/redux/slices/feedSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Default block order
  order: ["news", "social", "movie"],
  activeFilters: [],
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setFeedOrder: (state, action) => {
      state.order = action.payload;
    },
    setActiveFilters: (state, action) => {
      state.activeFilters = action.payload;
    },
  },
});

export const { setFeedOrder, setActiveFilters } = feedSlice.actions;
export default feedSlice.reducer;
