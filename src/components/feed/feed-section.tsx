import { SectionHeader } from "../common/section-header";
import { FeedList } from "./feed-list";
import type { FeedItem } from "@/types/feed.types";

interface FeedSectionProps {
  title: string;
  items: FeedItem[];
  action?: React.ReactNode;
}

export function FeedSection({ title, items, action }: FeedSectionProps) {
  return (
    <section className="mb-10">
      <SectionHeader title={title} action={action} />
      <FeedList items={items} />
    </section>
  );
}
