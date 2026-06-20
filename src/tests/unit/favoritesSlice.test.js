import reducer, { addFavorite, removeFavorite, toggleFavorite } from "@/redux/slices/favoritesSlice";
describe("favoritesSlice", () => {
  const initialState = {
    items: [],
  };

  const mockItem = {
    id: "1",
    title: "Test Item",
    type: "news",
    description: "Test description",
  };

  it("should handle addFavorite", () => {
    const actual = reducer(initialState, addFavorite(mockItem));
    expect(actual.items).toHaveLength(1);
    expect(actual.items[0]).toEqual(mockItem);
  });

  it("should not add duplicate favorites", () => {
    const stateWithItem = { items: [mockItem] };
    const actual = reducer(stateWithItem, addFavorite(mockItem));
    expect(actual.items).toHaveLength(1);
  });

  it("should handle removeFavorite", () => {
    const stateWithItem = { items: [mockItem] };
    const actual = reducer(stateWithItem, removeFavorite("1"));
    expect(actual.items).toHaveLength(0);
  });

  it("should handle toggleFavorite", () => {
    let actual = reducer(initialState, toggleFavorite(mockItem));
    expect(actual.items).toHaveLength(1);

    actual = reducer(actual, toggleFavorite(mockItem));
    expect(actual.items).toHaveLength(0);
  });
});
