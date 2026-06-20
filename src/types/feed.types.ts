// src/types/feed.types.ts
// Normalized feed item type — the single shape used throughout the UI

export type FeedItemType = "news" | "movie" | "social";

export interface FeedItem {
  id: string;
  type: FeedItemType;
  title: string;
  description: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  source?: string;
  ctaLabel?: string;
  externalUrl?: string;
  isFavorite?: boolean;
  /** Rating out of 10, relevant for movies */
  rating?: number;
  /** Category tag (technology, sports, etc.) */
  category?: string;
}

// ─── Raw API shapes (unmapped) ─────────────────────────────────────────────

export interface RawNewsArticle {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface RawNewsApiResponse {
  status: string;
  totalResults: number;
  articles: RawNewsArticle[];
}

export interface RawTmdbMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  popularity: number;
}

export interface RawTmdbResponse {
  page: number;
  results: RawTmdbMovie[];
  total_pages: number;
  total_results: number;
}

export interface RawSocialPost {
  id: string;
  author: string;
  handle: string;
  avatar?: string;
  content: string;
  likes: number;
  reposts: number;
  timestamp: string;
  tags?: string[];
}
