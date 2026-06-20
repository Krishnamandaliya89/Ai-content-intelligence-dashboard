import { render, screen } from "@testing-library/react";
import FavoritesPage from "@/app/(dashboard)/favorites/page";
import * as hooks from "@/hooks/use-app-selector";

// Mock hooks
jest.mock("@/hooks/use-app-selector");

describe("FavoritesPage", () => {
  it("renders empty state when no favorites exist", () => {
    jest.spyOn(hooks, "useAppSelector").mockReturnValue([]);
    
    render(<FavoritesPage />);
    
    expect(screen.getByText("Your Favorites")).toBeInTheDocument();
    expect(screen.getByText("No favorites yet")).toBeInTheDocument();
  });

  it("renders list when favorites exist", () => {
    jest.spyOn(hooks, "useAppSelector").mockReturnValue([
      { id: "1", title: "Test Fav", type: "news", description: "Desc" }
    ]);
    
    render(<FavoritesPage />);
    
    expect(screen.getByText("Your Favorites")).toBeInTheDocument();
    expect(screen.getByText("Test Fav")).toBeInTheDocument();
  });
});
