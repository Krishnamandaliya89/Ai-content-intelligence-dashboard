"use client";

import { useAppSelector } from "@/hooks/use-app-selector";
import { FeedList } from "../feed/feed-list";

export function SearchResults() {
  const { results, isSearching } = useAppSelector((state) => state.search);

  if (!isSearching) return null;

  return (
    <div className="py-4">
      <h3 className="mb-4 text-lg font-semibold">Search Results</h3>
      <FeedList items={results} />
    </div>
  );
}
