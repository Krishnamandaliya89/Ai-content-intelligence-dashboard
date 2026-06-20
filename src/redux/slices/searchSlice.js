// src/redux/slices/searchSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  recentSearches: [],
  results: [],
  isSearching: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    addRecentSearch: (state, action) => {
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
    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
    setIsSearching: (state, action) => {
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
