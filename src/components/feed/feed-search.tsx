"use client";

import { Input } from "../ui/input";
import { Search } from "lucide-react";

export function FeedSearch() {
  // TODO: connect to searchSlice
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        type="search"
        placeholder="Search across all your feeds..."
        className="pl-10"
      />
    </div>
  );
}
