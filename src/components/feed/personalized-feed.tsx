"use client";

import { useFeedData } from "@/hooks/use-feed-data";
import { LoadingState } from "../common/loading-state";
import { ErrorState } from "../common/error-state";
import { EmptyState } from "../common/empty-state";
import { FeedList } from "./feed-list";
import { useAppSelector } from "@/hooks/use-app-selector";

export function PersonalizedFeed() {
  const { combinedFeed, isLoading } = useFeedData();
  const order = useAppSelector((state) => state.feed.order);
  const favorites = useAppSelector((state) => state.favorites.items);

  if (isLoading) return <LoadingState />;
  if (!combinedFeed) return <ErrorState />;
  if (combinedFeed.length === 0) return <EmptyState />;

  // Map favorites state into the feed items
  const feedWithFavorites = combinedFeed.map((item) => ({
    ...item,
    isFavorite: favorites.some((fav) => fav.id === item.id),
  }));

  return (
    <div className="space-y-10">
      {order.map((sectionType) => {
        const sectionItems = feedWithFavorites.filter((item) => item.type === sectionType);
        
        let title = "";
        let description = "";
        if (sectionType === "news") {
          title = "News Headlines";
          description = "Top stories matching your preferred categories.";
        } else if (sectionType === "movie") {
          title = "Movie Recommendations";
          description = "Trending movies you might enjoy.";
        } else if (sectionType === "social") {
          title = "Social Buzz";
          description = "Hot topics and posts on social platforms.";
        }

        if (sectionItems.length === 0) return null;

        return (
          <div key={sectionType} className="space-y-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight capitalize">{title}</h2>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
            <FeedList items={sectionItems} />
          </div>
        );
      })}
    </div>
  );
}
