import reducer, { setCategories, toggleCategory, updatePreferences } from "@/redux/slices/preferencesSlice";
import { DEFAULT_CATEGORIES } from "@/constants/categories";

describe("preferencesSlice", () => {
  const initialState = {
    categories: DEFAULT_CATEGORIES,
    language: "en",
    feedPageSize: 10,
    showTrending: true,
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setCategories", () => {
    const actual = reducer(initialState, setCategories(["sports"]));
    expect(actual.categories).toEqual(["sports"]);
  });

  it("should handle toggleCategory", () => {
    // Add category
    let actual = reducer({ ...initialState, categories: [] }, toggleCategory("technology"));
    expect(actual.categories).toContain("technology");

    // Remove category
    actual = reducer(actual, toggleCategory("technology"));
    expect(actual.categories).not.toContain("technology");
  });

  it("should handle updatePreferences", () => {
    const actual = reducer(initialState, updatePreferences({ language: "fr", showTrending: false }));
    expect(actual.language).toEqual("fr");
    expect(actual.showTrending).toEqual(false);
  });
});
