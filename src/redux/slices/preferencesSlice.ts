// src/redux/slices/preferencesSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserPreferences, ContentCategory } from "@/types/preferences.types";
import { DEFAULT_CATEGORIES } from "@/constants/categories";

const initialState: UserPreferences = {
  categories: DEFAULT_CATEGORIES,
  language: "en",
  feedPageSize: 10,
  showTrending: true,
};

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ContentCategory[]>) => {
      state.categories = action.payload;
    },
    toggleCategory: (state, action: PayloadAction<ContentCategory>) => {
      const category = action.payload;
      if (state.categories.includes(category)) {
        state.categories = state.categories.filter((c) => c !== category);
      } else {
        state.categories.push(category);
      }
    },
    updatePreferences: (state, action: PayloadAction<Partial<UserPreferences>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setCategories, toggleCategory, updatePreferences } = preferencesSlice.actions;
export default preferencesSlice.reducer;
