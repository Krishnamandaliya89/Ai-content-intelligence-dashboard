// src/redux/store.ts

import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import preferencesReducer from "./slices/preferencesSlice";
import favoritesReducer from "./slices/favoritesSlice";
import themeReducer from "./slices/themeSlice";
import searchReducer from "./slices/searchSlice";
import feedReducer from "./slices/feedSlice";

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
      getDefaultMiddleware().concat(baseApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
