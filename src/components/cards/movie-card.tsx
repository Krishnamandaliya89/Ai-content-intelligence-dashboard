import type { FeedItem } from "@/types/feed.types";
import { FeedCard } from "./feed-card";

// Specific card wrapper for Movie.
export function MovieCard({ item }: { item: FeedItem }) {
  return <FeedCard item={item} />;
}
