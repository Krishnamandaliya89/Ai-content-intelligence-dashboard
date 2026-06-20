// src/redux/slices/favoritesSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { FeedItem } from "@/types/feed.types";

export interface FavoritesState {
  items: FeedItem[];
}

const initialState: FavoritesState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FeedItem>) => {
      const itemExists = state.items.some((item) => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<FeedItem>) => {
      const itemExists = state.items.some((item) => item.id === action.payload.id);
      if (itemExists) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
    setFavorites: (state, action: PayloadAction<FeedItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
