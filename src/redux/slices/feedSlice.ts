// src/redux/slices/feedSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { FeedItemType } from "@/types/feed.types";

export interface FeedState {
  order: FeedItemType[];
  activeFilters: string[]; // generic filter strings
}

const initialState: FeedState = {
  // Default block order
  order: ["news", "social", "movie"],
  activeFilters: [],
};

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setFeedOrder: (state, action: PayloadAction<FeedItemType[]>) => {
      state.order = action.payload;
    },
    setActiveFilters: (state, action: PayloadAction<string[]>) => {
      state.activeFilters = action.payload;
    },
  },
});

export const { setFeedOrder, setActiveFilters } = feedSlice.actions;
export default feedSlice.reducer;
