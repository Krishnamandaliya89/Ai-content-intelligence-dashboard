import { Search } from "lucide-react";
import { EmptyState } from "../common/empty-state";

export function SearchEmpty() {
  return (
    <EmptyState
      icon={<Search className="mx-auto h-12 w-12 text-gray-400" />}
      title="No results found"
      description="Try adjusting your search query or filters."
    />
  );
}
