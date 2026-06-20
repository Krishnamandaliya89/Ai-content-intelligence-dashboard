// src/types/api.types.ts
// Generic wrappers for RTK Query API layers

export interface ApiQueryParams {
  page?: number;
  pageSize?: number;
  category?: string;
  query?: string;
  language?: string;
}

export interface NewsApiParams extends ApiQueryParams {
  sources?: string;
  from?: string;
  to?: string;
  sortBy?: "relevancy" | "popularity" | "publishedAt";
}

export interface TmdbApiParams {
  page?: number;
  language?: string;
  region?: string;
  with_genres?: string;
}

export interface SocialApiParams {
  page?: number;
  tag?: string;
  author?: string;
}
