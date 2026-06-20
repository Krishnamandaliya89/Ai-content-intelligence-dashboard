import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import preferencesReducer from "./slices/preferencesSlice";
import favoritesReducer from "./slices/favoritesSlice";
import themeReducer from "./slices/themeSlice";
import searchReducer from "./slices/searchSlice";
import feedReducer from "./slices/feedSlice";

const localStorageMiddleware = (storeApi) => (next) => (action) => {
  const result = next(action);
  if (typeof window !== "undefined") {
    const state = storeApi.getState();
    if (action.type.startsWith("favorites/")) {
      window.localStorage.setItem("favorites", JSON.stringify(state.favorites.items));
    }
    if (action.type.startsWith("preferences/")) {
      window.localStorage.setItem("preferences", JSON.stringify(state.preferences));
    }
    if (action.type.startsWith("feed/")) {
      window.localStorage.setItem("feedOrder", JSON.stringify(state.feed.order));
    }
  }
  return result;
};

export const makeStore = () => {
  return configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      preferences: preferencesReducer,
      favorites: favoritesReducer,
      theme: themeReducer,
      search: searchReducer,
      feed: feedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware, localStorageMiddleware),
  });
};
