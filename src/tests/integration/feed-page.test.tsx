import { render, screen } from "@testing-library/react";
import DashboardPage from "@/app/(dashboard)/page";

// Mocking required components and hooks
jest.mock("@/components/search/search-bar", () => ({
  SearchBar: () => <div data-testid="search-bar">Search Bar Mock</div>
}));
jest.mock("@/components/feed/personalized-feed", () => ({
  PersonalizedFeed: () => <div data-testid="personalized-feed">Feed Mock</div>
}));
jest.mock("@/components/feed/feed-filters", () => ({
  FeedFilters: () => <div data-testid="feed-filters">Filters Mock</div>
}));
jest.mock("@/components/search/search-results", () => ({
  SearchResults: () => null
}));
jest.mock("@/components/search/recent-searches", () => ({
  RecentSearches: () => null
}));

describe("DashboardPage", () => {
  it("renders the dashboard page correctly", () => {
    render(<DashboardPage />);
    
    expect(screen.getByText("Your Feed")).toBeInTheDocument();
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    expect(screen.getByTestId("personalized-feed")).toBeInTheDocument();
    expect(screen.getByTestId("feed-filters")).toBeInTheDocument();
  });
});
