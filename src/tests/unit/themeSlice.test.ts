import reducer, { toggleTheme, setTheme } from "@/redux/slices/themeSlice";

describe("themeSlice", () => {
  const initialState = {
    mode: "system" as const,
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setTheme", () => {
    const actual = reducer(initialState, setTheme("dark"));
    expect(actual.mode).toEqual("dark");
  });

  it("should handle toggleTheme", () => {
    let actual = reducer({ mode: "light" }, toggleTheme());
    expect(actual.mode).toEqual("dark");

    actual = reducer(actual, toggleTheme());
    expect(actual.mode).toEqual("light");
  });
});
