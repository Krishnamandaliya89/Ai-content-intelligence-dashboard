// src/types/preferences.types.ts

export type ContentCategory =
  | "technology"
  | "sports"
  | "entertainment"
  | "science"
  | "health"
  | "business"
  | "politics"
  | "world";

export interface UserPreferences {
  categories: ContentCategory[];
  /** e.g. "en", "hi" */
  language: string;
  /** Number of items to show per feed section */
  feedPageSize: number;
  /** Whether to show trending section on dashboard */
  showTrending: boolean;
}
