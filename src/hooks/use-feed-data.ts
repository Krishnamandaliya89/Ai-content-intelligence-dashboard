// src/hooks/use-feed-data.ts

import { useAppSelector } from "./use-app-selector";
import { useGetTopHeadlinesQuery } from "@/redux/api/newsApi";
import { useGetTrendingMoviesQuery } from "@/redux/api/movieApi";
import { useGetSocialPostsQuery } from "@/redux/api/socialApi";
import {
  transformNewsToFeedItems,
  transformMoviesToFeedItems,
  transformSocialToFeedItems,
} from "@/utils/feed-transformers";
import { useMemo } from "react";
import type { FeedItem } from "@/types/feed.types";

export function useFeedData() {
  const { categories, language } = useAppSelector((state) => state.preferences);

  // For the starter we'll just fetch a single generic category or no category for news.
  // In a real app we might fetch per-category or a combined feed.
  const newsCategory = categories.length > 0 ? categories[0] : undefined;

  const { data: newsData, isLoading: isNewsLoading } = useGetTopHeadlinesQuery({
    category: newsCategory,
    language,
    pageSize: 5,
  });

  const { data: movieData, isLoading: isMovieLoading } = useGetTrendingMoviesQuery({
    language,
  });

  const { data: socialData, isLoading: isSocialLoading } = useGetSocialPostsQuery({});

  const combinedFeed = useMemo(() => {
    let items: FeedItem[] = [];

    if (newsData?.articles) {
      items = [...items, ...transformNewsToFeedItems(newsData.articles)];
    }
    if (movieData?.results) {
      items = [...items, ...transformMoviesToFeedItems(movieData.results)];
    }
    if (socialData) {
      items = [...items, ...transformSocialToFeedItems(socialData)];
    }

    // Sort by date descending (mock basic sorting)
    return items.sort((a, b) => {
      if (!a.publishedAt || !b.publishedAt) return 0;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }, [newsData, movieData, socialData]);

  const isLoading = isNewsLoading || isMovieLoading || isSocialLoading;

  return {
    combinedFeed,
    isLoading,
    isNewsLoading,
    isMovieLoading,
    isSocialLoading,
  };
}
