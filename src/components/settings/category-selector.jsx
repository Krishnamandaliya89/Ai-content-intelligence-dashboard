"use client";

import { Badge } from "../ui/badge";
import { ALL_CATEGORIES, CATEGORY_LABELS } from "@/constants/categories";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { toggleCategory } from "@/redux/slices/preferencesSlice";

export function CategorySelector() {
  const dispatch = useAppDispatch();
  const activeCategories = useAppSelector((state) => state.preferences.categories);

  return (
    <div className="flex flex-wrap gap-2">
      {ALL_CATEGORIES.map((cat) => {
        const isActive = activeCategories.includes(cat);
        return (
          <Badge
            key={cat}
            variant={isActive ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => dispatch(toggleCategory(cat))}
          >
            {CATEGORY_LABELS[cat]}
          </Badge>
        );
      })}
    </div>
  );
}
