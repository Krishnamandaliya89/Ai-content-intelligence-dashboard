import { PageContainer } from "@/components/layout/page-container";
import { SectionHeader } from "@/components/common/section-header";
import { FeedList } from "@/components/feed/feed-list";

export const metadata = {
  title: "Trending",
};

export default function TrendingPage() {
  // TODO: Fetch trending items specifically
  return (
    <PageContainer>
      <SectionHeader 
        title="Trending Now" 
        description="See what's popular across all categories right now."
      />
      {/* Placeholder FeedList */}
      <FeedList items={[]} />
    </PageContainer>
  );
}
