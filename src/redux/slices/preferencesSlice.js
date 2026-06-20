// src/redux/slices/preferencesSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_CATEGORIES } from "@/constants/categories";

const initialState = {
  categories: DEFAULT_CATEGORIES,
  language: "en",
  feedPageSize: 10,
  showTrending: true,
};

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.categories.includes(category)) {
        state.categories = state.categories.filter((c) => c !== category);
      } else {
        state.categories.push(category);
      }
    },
    updatePreferences: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setCategories, toggleCategory, updatePreferences } = preferencesSlice.actions;
export default preferencesSlice.reducer;
