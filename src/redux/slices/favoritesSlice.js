// src/redux/slices/favoritesSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const itemExists = state.items.some((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      const itemExists = state.items.some((item) => item.id === action.payload.id);
      if (itemExists) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
    setFavorites: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
