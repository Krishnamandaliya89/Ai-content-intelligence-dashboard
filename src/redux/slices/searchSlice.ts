// src/redux/slices/searchSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { SearchState } from "@/types/search.types";
import type { FeedItem } from "@/types/feed.types";

const initialState: SearchState = {
  query: "",
  recentSearches: [],
  results: [],
  isSearching: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    addRecentSearch: (state, action: PayloadAction<string>) => {
      const query = action.payload.trim();
      if (!query) return;
      state.recentSearches = [
        query,
        ...state.recentSearches.filter((q) => q !== query),
      ].slice(0, 10); // keep last 10
    },
    clearRecentSearches: (state) => {
      state.recentSearches = [];
    },
    setSearchResults: (state, action: PayloadAction<FeedItem[]>) => {
      state.results = action.payload;
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
    clearSearch: (state) => {
      state.query = "";
      state.results = [];
      state.isSearching = false;
    },
  },
});

export const {
  setSearchQuery,
  addRecentSearch,
  clearRecentSearches,
  setSearchResults,
  setIsSearching,
  clearSearch,
} = searchSlice.actions;
export default searchSlice.reducer;
