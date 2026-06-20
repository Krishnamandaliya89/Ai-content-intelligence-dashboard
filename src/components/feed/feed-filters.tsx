"use client";

import { Badge } from "../ui/badge";
import { ALL_CATEGORIES } from "@/constants/categories";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { toggleCategory } from "@/redux/slices/preferencesSlice";
// Need to import useAppSelector correctly or alias it. Let's fix imports for real apps.
import { useAppSelector as useSelectorTyped } from "@/hooks/use-app-selector";

export function FeedFilters() {
  const dispatch = useAppDispatch();
  const activeCategories = useSelectorTyped((state) => state.preferences.categories);

  return (
    <div className="flex flex-wrap gap-2">
      {ALL_CATEGORIES.map((cat) => {
        const isActive = activeCategories.includes(cat);
        return (
          <Badge
            key={cat}
            variant={isActive ? "default" : "outline"}
            className="cursor-pointer capitalize"
            onClick={() => dispatch(toggleCategory(cat))}
          >
            {cat}
          </Badge>
        );
      })}
    </div>
  );
}
