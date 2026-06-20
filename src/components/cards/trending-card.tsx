import type { FeedItem } from "@/types/feed.types";
import { FeedCard } from "./feed-card";

export function TrendingCard({ item }: { item: FeedItem }) {
  // TODO: Add visual indicator for "trending" state
  return <FeedCard item={item} />;
}
