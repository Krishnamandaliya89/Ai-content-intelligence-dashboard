"use client";

import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector as useSelectorTyped } from "@/hooks/use-app-selector";
import { setSearchQuery } from "@/redux/slices/searchSlice";
import { Badge } from "../ui/badge";

export function RecentSearches() {
  const dispatch = useAppDispatch();
  const recentSearches = useSelectorTyped((state) => state.search.recentSearches);

  if (recentSearches.length === 0) return null;

  return (
    <div className="py-4">
      <h4 className="mb-2 text-sm font-medium text-gray-500">Recent Searches</h4>
      <div className="flex flex-wrap gap-2">
        {recentSearches.map((query) => (
          <Badge
            key={query}
            variant="secondary"
            className="cursor-pointer"
            onClick={() => dispatch(setSearchQuery(query))}
          >
            {query}
          </Badge>
        ))}
      </div>
    </div>
  );
}
