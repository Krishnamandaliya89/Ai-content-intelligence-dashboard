// src/constants/categories.ts

import type { ContentCategory } from "@/types/preferences.types";

export const ALL_CATEGORIES: ContentCategory[] = [
  "technology",
  "sports",
  "entertainment",
  "science",
  "health",
  "business",
  "politics",
  "world",
];

export const DEFAULT_CATEGORIES: ContentCategory[] = [
  "technology",
  "sports",
  "entertainment",
];

export const CATEGORY_LABELS: Record<ContentCategory, string> = {
  technology: "Technology",
  sports: "Sports",
  entertainment: "Entertainment",
  science: "Science",
  health: "Health",
  business: "Business",
  politics: "Politics",
  world: "World",
};
