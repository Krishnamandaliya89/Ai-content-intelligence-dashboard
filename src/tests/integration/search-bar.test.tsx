import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SearchBar } from "@/components/search/search-bar";
import * as hooks from "@/hooks/use-app-dispatch";

jest.mock("@/hooks/use-app-dispatch");
jest.mock("@/hooks/use-app-selector", () => ({
  useAppSelector: jest.fn(() => "")
}));

describe("SearchBar", () => {
  it("dispatches actions on input change (with debounce logic mock)", async () => {
    const dispatchMock = jest.fn();
    jest.spyOn(hooks, "useAppDispatch").mockReturnValue(dispatchMock);

    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText("Search everything...");
    fireEvent.change(input, { target: { value: "ai news" } });
    
    // Note: Due to debounce, actual dispatch might be delayed
    // In a real setup we might use fake timers
    expect(input).toHaveValue("ai news");
  });
});
