import { PageContainer } from "@/components/layout/page-container";
import { SearchBar } from "@/components/search/search-bar";
import { SearchResults } from "@/components/search/search-results";
import { RecentSearches } from "@/components/search/recent-searches";
import { PersonalizedFeed } from "@/components/feed/personalized-feed";
import { FeedFilters } from "@/components/feed/feed-filters";

export default function DashboardPage() {
  return (
    <PageContainer>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Your Feed</h1>
            <p className="text-gray-500">Discover personalized content across all your interests.</p>
          </div>
          <div className="w-full md:w-auto">
            <SearchBar />
          </div>
        </div>

        <div className="block md:hidden">
          <RecentSearches />
        </div>

        <SearchResults />

        <div className="flex flex-col gap-6">
          <FeedFilters />
          <PersonalizedFeed />
        </div>
      </div>
    </PageContainer>
  );
}
