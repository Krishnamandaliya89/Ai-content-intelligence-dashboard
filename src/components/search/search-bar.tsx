"use client";

import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector as useSelectorTyped } from "@/hooks/use-app-selector";
import { setSearchQuery, setIsSearching } from "@/redux/slices/searchSlice";
import { useDebounce } from "@/hooks/use-debounce";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export function SearchBar() {
  const dispatch = useAppDispatch();
  const initialQuery = useSelectorTyped((state) => state.search.query);
  const [localQuery, setLocalQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(localQuery, 500);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocalQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    dispatch(setSearchQuery(debouncedQuery));
    if (debouncedQuery.trim()) {
      dispatch(setIsSearching(true));
      if (pathname !== "/") {
        router.push("/");
      }
    } else {
      dispatch(setIsSearching(false));
    }
  }, [debouncedQuery, dispatch, pathname, router]);

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        type="search"
        placeholder="Search everything..."
        className="pl-10"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
      />
    </div>
  );
}
