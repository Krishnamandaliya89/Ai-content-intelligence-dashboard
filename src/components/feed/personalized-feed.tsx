"use client";

import { useFeedData } from "@/hooks/use-feed-data";
import { LoadingState } from "../common/loading-state";
import { ErrorState } from "../common/error-state";
import { EmptyState } from "../common/empty-state";
import { FeedList } from "./feed-list";
import { useAppSelector } from "@/hooks/use-app-selector";

export function PersonalizedFeed() {
  const { combinedFeed, isLoading } = useFeedData();
  const { favorites } = useAppSelector((state) => ({
    favorites: state.favorites.items,
  }));

  if (isLoading) return <LoadingState />;
  if (!combinedFeed) return <ErrorState />;
  if (combinedFeed.length === 0) return <EmptyState />;

  // Map favorites state into the feed items
  const feedWithFavorites = combinedFeed.map((item) => ({
    ...item,
    isFavorite: favorites.some((fav) => fav.id === item.id),
  }));

  return (
    <div className="space-y-6">
      {/* In a real implementation we would split this by type or order it per feedSlice state */}
      <FeedList items={feedWithFavorites} />
    </div>
  );
}
