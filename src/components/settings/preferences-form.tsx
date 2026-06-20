"use client";

import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector as useSelectorTyped } from "@/hooks/use-app-selector";
import { updatePreferences } from "@/redux/slices/preferencesSlice";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Switch } from "../ui/switch";
import { CategorySelector } from "./category-selector";

export function PreferencesForm() {
  const dispatch = useAppDispatch();
  const preferences = useSelectorTyped((state) => state.preferences);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="mb-3 text-sm font-medium">Favorite Categories</h4>
          <CategorySelector />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm font-medium leading-none">Show Trending Section</label>
            <p className="text-sm text-gray-500">Display trending content on the dashboard</p>
          </div>
          <Switch
            checked={preferences.showTrending}
            onCheckedChange={(checked) => dispatch(updatePreferences({ showTrending: checked }))}
          />
        </div>
      </CardContent>
    </Card>
  );
}
