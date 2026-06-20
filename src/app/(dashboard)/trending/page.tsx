"use client";

import { PageContainer } from "@/components/layout/page-container";
import { SectionHeader } from "@/components/common/section-header";
import { FeedList } from "@/components/feed/feed-list";
import { LoadingState } from "@/components/common/loading-state";
import { EmptyState } from "@/components/common/empty-state";
import { useGetTopHeadlinesQuery } from "@/redux/api/newsApi";
import { useGetTrendingMoviesQuery } from "@/redux/api/movieApi";
import { useGetSocialPostsQuery } from "@/redux/api/socialApi";
import {
  transformNewsToFeedItems,
  transformMoviesToFeedItems,
  transformSocialToFeedItems,
} from "@/utils/feed-transformers";
import { useAppSelector } from "@/hooks/use-app-selector";
import { useMemo } from "react";
import type { FeedItem } from "@/types/feed.types";

export default function TrendingPage() {
  const { language } = useAppSelector((state) => state.preferences);
  const favorites = useAppSelector((state) => state.favorites.items);

  const { data: newsData, isLoading: isNewsLoading } = useGetTopHeadlinesQuery({
    language,
    pageSize: 10,
  });

  const { data: movieData, isLoading: isMovieLoading } = useGetTrendingMoviesQuery({
    language,
  });

  const { data: socialData, isLoading: isSocialLoading } = useGetSocialPostsQuery({});

  const trendingItems = useMemo(() => {
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
    
    return items.map((item) => ({
      ...item,
      isFavorite: favorites.some((fav) => fav.id === item.id),
    }));
  }, [newsData, movieData, socialData, favorites]);

  const isLoading = isNewsLoading || isMovieLoading || isSocialLoading;

  return (
    <PageContainer>
      <SectionHeader 
        title="Trending Now" 
        description="See what's popular across all categories right now."
      />
      {isLoading ? (
        <LoadingState />
      ) : trendingItems.length > 0 ? (
        <FeedList items={trendingItems} />
      ) : (
        <EmptyState title="No trending items found" description="Please check back later." />
      )}
    </PageContainer>
  );
}
