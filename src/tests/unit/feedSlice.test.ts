import reducer, { setFeedOrder, setActiveFilters } from "@/redux/slices/feedSlice";
import type { FeedItemType } from "@/types/feed.types";

describe("feedSlice", () => {
  const initialState = {
    order: ["news", "social", "movie"] as FeedItemType[],
    activeFilters: [] as string[],
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setFeedOrder", () => {
    const newOrder: FeedItemType[] = ["movie", "news", "social"];
    const actual = reducer(initialState, setFeedOrder(newOrder));
    expect(actual.order).toEqual(newOrder);
  });

  it("should handle setActiveFilters", () => {
    const filters = ["tech", "science"];
    const actual = reducer(initialState, setActiveFilters(filters));
    expect(actual.activeFilters).toEqual(filters);
  });
});
