"use client";

import { PageContainer } from "@/components/layout/page-container";
import { SectionHeader } from "@/components/common/section-header";
import { useAppSelector } from "@/hooks/use-app-selector";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Library, Settings, CheckCircle } from "lucide-react";

export default function AnalyticsPage() {
  const favorites = useAppSelector((state) => state.favorites.items);
  const categories = useAppSelector((state) => state.preferences.categories);
  const preferences = useAppSelector((state) => state.preferences);

  const newsFavs = favorites.filter((item) => item.type === "news").length;
  const movieFavs = favorites.filter((item) => item.type === "movie").length;
  const socialFavs = favorites.filter((item) => item.type === "social").length;

  const totalFavs = favorites.length;

  return (
    <PageContainer>
      <SectionHeader 
        title="Your Analytics" 
        description="See your preferences and content curation metrics."
      />
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Total Favorites
            </CardTitle>
            <Star className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalFavs}</div>
            <p className="text-xs text-gray-500">Saved articles and recommendations</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Favorite Categories
            </CardTitle>
            <Library className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{categories.length}</div>
            <p className="text-xs text-gray-500">Active category filters</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Language Settings
            </CardTitle>
            <Settings className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold capitalize">{preferences.language}</div>
            <p className="text-xs text-gray-500">System language</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Trending Status
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {preferences.showTrending ? "Enabled" : "Disabled"}
            </div>
            <p className="text-xs text-gray-500">Global trending feed</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Favorites Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[250px] flex flex-col justify-center">
            {totalFavs > 0 ? (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>News</span>
                    <span>{newsFavs} ({Math.round((newsFavs / totalFavs) * 100)}%)</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full dark:bg-gray-800 overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: `${(newsFavs / totalFavs) * 100}%` }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Movies</span>
                    <span>{movieFavs} ({Math.round((movieFavs / totalFavs) * 100)}%)</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full dark:bg-gray-800 overflow-hidden">
                    <div className="h-full bg-amber-500" style={{ width: `${(movieFavs / totalFavs) * 100}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Social Posts</span>
                    <span>{socialFavs} ({Math.round((socialFavs / totalFavs) * 100)}%)</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full dark:bg-gray-800 overflow-hidden">
                    <div className="h-full bg-purple-500" style={{ width: `${(socialFavs / totalFavs) * 100}%` }} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                No items favorited yet to display distribution.
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Category Filters</CardTitle>
          </CardHeader>
          <CardContent className="h-[250px] flex flex-wrap gap-2 items-start content-start overflow-y-auto">
            {categories.length > 0 ? (
              categories.map((category) => (
                <div 
                  key={category} 
                  className="rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 text-sm font-medium border border-blue-100 dark:border-blue-800 capitalize"
                >
                  {category}
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 w-full py-16">
                No categories active.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
