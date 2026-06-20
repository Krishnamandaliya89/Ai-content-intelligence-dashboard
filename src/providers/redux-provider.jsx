"use client";

import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/redux/store";
import { setFavorites } from "@/redux/slices/favoritesSlice";
import { updatePreferences } from "@/redux/slices/preferencesSlice";
import { setFeedOrder } from "@/redux/slices/feedSlice";

export default function ReduxProvider({ children }) {
  const [store] = useState(() => makeStore());

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedFavorites = window.localStorage.getItem("favorites");
        if (savedFavorites) {
          store.dispatch(setFavorites(JSON.parse(savedFavorites)));
        }
      } catch (e) {
        console.error("Failed to hydrate favorites", e);
      }

      try {
        const savedPreferences = window.localStorage.getItem("preferences");
        if (savedPreferences) {
          store.dispatch(updatePreferences(JSON.parse(savedPreferences)));
        }
      } catch (e) {
        console.error("Failed to hydrate preferences", e);
      }

      try {
        const savedFeedOrder = window.localStorage.getItem("feedOrder");
        if (savedFeedOrder) {
          store.dispatch(setFeedOrder(JSON.parse(savedFeedOrder)));
        }
      } catch (e) {
        console.error("Failed to hydrate feed order", e);
      }
    }
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
}
