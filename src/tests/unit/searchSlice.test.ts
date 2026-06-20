import reducer, { setSearchQuery, addRecentSearch, clearRecentSearches } from "@/redux/slices/searchSlice";

describe("searchSlice", () => {
  const initialState = {
    query: "",
    recentSearches: [],
    results: [],
    isSearching: false,
  };

  it("should handle setSearchQuery", () => {
    const actual = reducer(initialState, setSearchQuery("test query"));
    expect(actual.query).toEqual("test query");
  });

  it("should handle addRecentSearch", () => {
    let actual = reducer(initialState, addRecentSearch("test"));
    expect(actual.recentSearches).toEqual(["test"]);

    actual = reducer(actual, addRecentSearch("another"));
    expect(actual.recentSearches).toEqual(["another", "test"]);

    // should bring existing to front
    actual = reducer(actual, addRecentSearch("test"));
    expect(actual.recentSearches).toEqual(["test", "another"]);
  });

  it("should clear recent searches", () => {
    const state = { ...initialState, recentSearches: ["test"] };
    const actual = reducer(state, clearRecentSearches());
    expect(actual.recentSearches).toEqual([]);
  });
});
