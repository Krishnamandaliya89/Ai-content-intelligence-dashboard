import type { FeedItem } from "@/types/feed.types";
import { FeedCard } from "./feed-card";

// Specific card wrapper for News. In a real app, this might have specific styling.
// For now it wraps the generic FeedCard.
export function NewsCard({ item }: { item: FeedItem }) {
  return <FeedCard item={item} />;
}
