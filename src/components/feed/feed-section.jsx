import { SectionHeader } from "../common/section-header";
import { FeedList } from "./feed-list";
export function FeedSection({ title, items, action }) {
  return (
    <section className="mb-10">
      <SectionHeader title={title} action={action} />
      <FeedList items={items} />
    </section>
  );
}
