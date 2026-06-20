"use client";

import { PageContainer } from "@/components/layout/page-container";
import { SectionHeader } from "@/components/common/section-header";
import { FeedList } from "@/components/feed/feed-list";
import { EmptyState } from "@/components/common/empty-state";
import { useAppSelector } from "@/hooks/use-app-selector";

export default function FavoritesPage() {
  const favorites = useAppSelector((state) => state.favorites.items);

  return (
    <PageContainer>
      <SectionHeader 
        title="Your Favorites" 
        description="All the content you've saved for later."
      />
      
      {favorites.length > 0 ? (
        <FeedList items={favorites} />
      ) : (
        <EmptyState 
          title="No favorites yet" 
          description="Start hearting content to see it here."
        />
      )}
    </PageContainer>
  );
}
