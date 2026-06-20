// src/types/search.types.ts

import type { FeedItem } from "./feed.types";

export interface SearchState {
  query: string;
  recentSearches: string[];
  results: FeedItem[];
  isSearching: boolean;
}
