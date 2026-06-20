import { render, screen } from "@testing-library/react";
import FavoritesPage from "@/app/(dashboard)/favorites/page";
import * as selectorHooks from "@/hooks/use-app-selector";
import * as dispatchHooks from "@/hooks/use-app-dispatch";

// Mock hooks
jest.mock("@/hooks/use-app-selector");
jest.mock("@/hooks/use-app-dispatch");

describe("FavoritesPage", () => {
  beforeEach(() => {
    jest.spyOn(dispatchHooks, "useAppDispatch").mockReturnValue(jest.fn());
  });

  it("renders empty state when no favorites exist", () => {
    jest.spyOn(selectorHooks, "useAppSelector").mockReturnValue([]);
    
    render(<FavoritesPage />);
    
    expect(screen.getByText("Your Favorites")).toBeInTheDocument();
    expect(screen.getByText("No favorites yet")).toBeInTheDocument();
  });

  it("renders list when favorites exist", () => {
    jest.spyOn(selectorHooks, "useAppSelector").mockReturnValue([
      { id: "1", title: "Test Fav", type: "news", description: "Desc" }
    ]);
    
    render(<FavoritesPage />);
    
    expect(screen.getByText("Your Favorites")).toBeInTheDocument();
    expect(screen.getByText("Test Fav")).toBeInTheDocument();
  });
});
