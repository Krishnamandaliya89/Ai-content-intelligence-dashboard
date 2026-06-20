// src/constants/api.ts

export const API_CONFIG = {
  NEWS: {
    BASE_URL: process.env.NEXT_PUBLIC_NEWS_API_BASE_URL || "https://newsapi.org/v2",
    KEY: process.env.NEXT_PUBLIC_NEWS_API_KEY || "",
  },
  TMDB: {
    BASE_URL: process.env.NEXT_PUBLIC_TMDB_BASE_URL || "https://api.themoviedb.org/3",
    KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY || "",
  },
  APP: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  }
};
