# SDE Intern Candidate Interview Guide: JavaScript Stack

This guide is designed to help you confidently explain the architecture, design choices, and implementation details of your **AI Content Intelligence Dashboard** in technical interviews.

---

## 1. Core Architecture Overview

### How would you describe this application in 60 seconds?
> *"I built a personalized Content Intelligence Dashboard using **Next.js 16 (App Router)**, **React 19**, and **Redux Toolkit (with RTK Query)**. It aggregates multi-source feeds—specifically live TMDB movie recommendations, News API articles, and mock social feed posts—into a unified data model. The application features user preference management, client-side debounced search, favorites management, and drag-and-drop feed section reordering. The entire state is serialized and persisted locally, avoiding hydration mismatch issues. It is fully covered by a Jest unit and integration testing suite."*

---

## 2. Technical Decision Details

### Q1: Why did you choose pure JavaScript over TypeScript?
* **Real Skillset Alignment:** "I wanted my submission to be a 100% accurate representation of my comfortable, interview-explainable skillset. Over-complicating the project with type constraints when my real-world strengths lie in core JavaScript, DOM manipulation, asynchronous loops, and React state flow would create a mismatch during live coding or deep-dives."
* **Focus on Testing over Types:** "Instead of relying on compile-time types to guess code correctness, I focused on robust **unit and integration testing (Jest & React Testing Library)** to prove that the application executes correctly at runtime. This shows a practical, production-oriented engineering mindset."

### Q2: How does state management work in the app?
* **Redux Toolkit (RTK):** Used for global UI state (theme settings, search queries, active categories, favorites, and the drag-and-drop feed order).
* **RTK Query:** Used to hit News API and TMDB endpoints. It automatically handles caching, loading states, error states, and deduplication of network requests, which reduces redundant API calls.
* **Custom Middleware (`localStorageMiddleware`):** Intercepts actions starting with `favorites/`, `preferences/`, or `feed/`. Whenever these slices update, the middleware automatically stringifies and writes the updated slice state to `localStorage` in a non-blocking manner.

### Q3: How did you solve Next.js Client-Side Hydration mismatches?
* **The Problem:** In Next.js (SSR), the server renders a static HTML tree. If the client tries to initialize state from `localStorage` immediately during render, the client HTML won't match the server HTML, causing a React hydration crash.
* **The Solution (Two-Step Hydration):** 
  1. Initialize the Redux store with static default values.
  2. Use a standard `useEffect` block inside the client-side provider (`ReduxProvider.jsx`) to dispatch hydration actions (`setFavorites`, `updatePreferences`, `setFeedOrder`) once the client mounts.
  3. For components like the Drag-and-Drop feed where layout structure depends on state, we use a `mounted` state hook that returns `null` on server-side rendering and mounts the interactive DnD container only after mounting.

### Q4: How is search debouncing implemented?
* **The Custom Hook (`use-debounce.js`):** A custom hook that delays setting a state variable until a specified delay (500ms) has passed since the last keystroke.
* **Store Integration:** The search query state is updated immediately in the input field to feel snappy. However, the search filtering logic responds to the debounced query, preventing heavy computational filter loops on every keystroke.

### Q5: How did you normalize data from disparate APIs?
* **Unified Data Model:** News API returns `{ articles: [{ title, url, urlToImage }] }`, TMDB returns `{ results: [{ title, backdrop_path, vote_average }] }`, and social buzz has a custom schema.
* **Transformers (`src/utils/feed-transformers.js`):** We wrote utility functions to normalize all feed objects into a single contract:
  ```javascript
  {
    id: string,
    title: string,
    description: string,
    type: "news" | "movie" | "social",
    image: string,
    publishedAt: string,
    externalUrl: string,
    source: string,
    rating: number
  }
  ```
  This makes the `FeedList` and `FeedCard` components completely generic and reusable, significantly reducing UI code duplication.

---

## 3. Review Checklist for Live Interviews

1. **Be Ready to Explain RTK Query injection:**
   * Point out [baseApi.js](file:///c:/Users/KRISHNA/OneDrive/Desktop/PG-AGI/ai-content-intelligence-dashboard/src/redux/api/baseApi.js) as the single source of truth for endpoints, which keeps all queries organized.
2. **Be Ready to Walkthrough the DND reordering logic:**
   * Explain that we use `@hello-pangea/dnd`. Inside [draggable-feed.jsx](file:///c:/Users/KRISHNA/OneDrive/Desktop/PG-AGI/ai-content-intelligence-dashboard/src/components/feed/draggable-feed.jsx), `onDragEnd` extracts the indexes of the source and destination, splices the array in memory, and dispatches the updated order to the Redux `feedSlice`.
3. **Be Ready to Explain your Jest setup:**
   * Let the interviewer know you wrote unit tests for slices (to check reducer purity) and integration tests for key page interactions (using mock providers and jest-mocking).
