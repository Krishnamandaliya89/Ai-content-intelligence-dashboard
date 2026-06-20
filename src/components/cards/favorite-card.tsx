import type { FeedItem } from "@/types/feed.types";
import { FeedCard } from "./feed-card";

export function FavoriteCard({ item }: { item: FeedItem }) {
  // Ensure we show it as favorited
  return <FeedCard item={{ ...item, isFavorite: true }} />;
}
