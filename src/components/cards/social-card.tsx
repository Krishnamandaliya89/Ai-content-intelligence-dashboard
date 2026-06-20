import type { FeedItem } from "@/types/feed.types";
import { FeedCard } from "./feed-card";

// Specific card wrapper for Social.
export function SocialCard({ item }: { item: FeedItem }) {
  return <FeedCard item={item} />;
}
