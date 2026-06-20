// src/redux/slices/themeSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ThemeConfig, ThemeMode } from "@/types/theme.types";
import { DEFAULT_THEME_MODE } from "@/constants/theme";

const initialState: ThemeConfig = {
  mode: DEFAULT_THEME_MODE,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
    toggleTheme: (state) => {
      // Simplistic toggle logic; if system, we might need to know actual resolution to toggle correctly.
      // Usually next-themes handles this at the provider level, but we keep state here if needed.
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
