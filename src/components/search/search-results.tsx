"use client";

import { useAppSelector } from "@/hooks/use-app-selector";
import { useFeedData } from "@/hooks/use-feed-data";
import { FeedList } from "../feed/feed-list";
import { SearchEmpty } from "./search-empty";

export function SearchResults() {
  const { query, isSearching } = useAppSelector((state) => state.search);
  const { combinedFeed } = useFeedData();
  const favorites = useAppSelector((state) => state.favorites.items);

  if (!isSearching || !query.trim()) return null;

  const lowercaseQuery = query.toLowerCase().trim();
  const results = combinedFeed
    .filter((item) => {
      return (
        item.title.toLowerCase().includes(lowercaseQuery) ||
        item.description.toLowerCase().includes(lowercaseQuery) ||
        (item.source && item.source.toLowerCase().includes(lowercaseQuery)) ||
        (item.author && item.author.toLowerCase().includes(lowercaseQuery))
      );
    })
    .map((item) => ({
      ...item,
      isFavorite: favorites.some((fav) => fav.id === item.id),
    }));

  return (
    <div className="py-4 border-b border-gray-100 dark:border-gray-800">
      <h3 className="mb-4 text-lg font-semibold">Search Results for &ldquo;{query}&rdquo;</h3>
      {results.length > 0 ? (
        <FeedList items={results} />
      ) : (
        <SearchEmpty />
      )}
    </div>
  );
}
