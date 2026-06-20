# PROJECT_HANDOFF.md

# AI Content Intelligence Dashboard — Project Handoff

## 1) Project Overview

**Project Name:** AI Content Intelligence Dashboard
**Assignment Context:** PG-AGI Software Development Engineer (SDE) Intern Frontend Assignment
**Role Target:** Frontend / SDE Intern
**Project Goal:** Build a personalized content dashboard that aggregates **news**, **movie recommendations**, and **social posts** into a single customizable experience using **Next.js, TypeScript, Redux Toolkit, RTK Query, API integration, and testing**.

This project was intentionally positioned as **“AI Content Intelligence Dashboard”** rather than a generic “Personalized Content Dashboard” to better align with **PG-AGI’s AI-focused brand** while still fulfilling the assignment requirements.

---

## 2) Final Status Summary

### Overall Status

**Submission-ready**

### Current State

The dashboard implementation is complete and verified across development, testing, and production build flows.

### Verification Status

* `npm run lint` → passes with **0 errors**
* `npm run test` → passes with all configured test suites
* `npm run build` → passes successfully for production build
* Responsive dashboard routes and feature flows are functional

### Implemented Scope

The following assignment requirements are implemented:

* Personalized dashboard shell with sidebar + header + responsive layout
* News, movie, and social content feed experience
* Redux Toolkit state management
* RTK Query integration for News API and TMDB
* Unified normalized feed model across multiple content sources
* Debounced search
* Favorites management
* Drag-and-drop feed reordering
* Theme toggle / dark mode persistence
* User preference management for content categories
* Trending and analytics-style views
* Unit / integration testing coverage
* Production-ready build configuration and environment variable setup

### Intentionally Excluded

Per assignment scope and time constraints, the following were **not** implemented:

* Real authentication
* Backend/database
* WebSockets / real-time sync
* Multi-language support
* Admin dashboard

---

## 3) Tech Stack

### Core Framework / Language

* **Next.js 16** (App Router)
* **React**
* **TypeScript**

### Styling / UI

* **Tailwind CSS v4**
* **next-themes**
* **Framer Motion**
* **lucide-react**

### State / Data

* **Redux Toolkit**
* **RTK Query**

### Forms / Interaction

* **React Hook Form**
* **@hello-pangea/dnd**

### Testing

* **Jest**
* **React Testing Library**
* **Playwright**

---

## 4) Product Features

## 4.1 Dashboard Shell

The application uses a dashboard-style layout with:

* left sidebar navigation
* top header with search and theme controls
* responsive mobile navigation fallback
* route-based page content area

### Main routes

* `/` → Main dashboard / personalized feed
* `/trending` → Trending content view
* `/favorites` → Saved content
* `/analytics` → Summary / engagement-oriented dashboard panel
* `/settings` → User preferences and content settings

---

## 4.2 Personalized Content Feed

The dashboard aggregates three content sources into a unified user-facing experience:

### News

Fetched from **News API**, including:

* latest headlines
* category-aware content based on user preferences

### Movies

Fetched from **TMDB**, including:

* trending movies
* recommendation-style movie content

### Social Posts

Served through a mock data layer to simulate a social feed stream.

These sources are normalized into a shared internal feed model so the UI can render them consistently.

---

## 4.3 Unified Feed Model

A central design decision in this project is the use of a **single normalized feed item type** to represent all content.

### Feed item categories

* `news`
* `movie`
* `social`

### Normalized feed item shape (conceptually)

Each content item is transformed into a shared shape containing fields such as:

* `id`
* `type`
* `title`
* `description`
* `image`
* `author`
* `publishedAt`
* `source`
* `externalUrl`
* CTA metadata where relevant

### Why this matters

This normalization makes the following features much simpler:

* mixed feed rendering
* favorites
* search
* drag-and-drop
* analytics / trending summaries
* reusable card components

---

## 4.4 Search

Search is implemented as a **debounced client-side search experience** across the normalized feed.

### Search behavior

* typing in the search bar updates local input state
* query changes are debounced before being committed to global search state
* results are derived from the unified feed data
* the search experience supports query synchronization and navigation from other pages back to the main dashboard when needed

### Search targets

Search checks relevant fields across:

* news title / description
* movie title / overview
* social author / content

### UX details

* empty state for no matching results
* recent / externally triggered query synchronization support
* navigation handling for searching outside the main feed route

---

## 4.5 Favorites

Users can save items from the feed and revisit them later.

### Favorites behavior

* favorite / unfavorite directly from feed cards
* saved favorites view on `/favorites`
* persistence across reloads via client-side storage

---

## 4.6 Drag-and-Drop Feed Reordering

The feed supports drag-and-drop reordering using `@hello-pangea/dnd`.

### Goal

Allow users to customize the order of feed items / feed presentation in a more personalized way.

### Persistence

Feed ordering state is stored in Redux and persisted on the client so it survives reloads where applicable.

---

## 4.7 Theme / Dark Mode

The project supports light / dark theme behavior using `next-themes` with persisted preference handling.

### Theme features

* theme toggle in dashboard UI
* theme persistence across reloads
* consistent styling across dashboard pages

---

## 4.8 User Preferences / Settings

The settings area allows users to customize their content experience.

### Preferences supported

* category-based personalization
* dashboard-related display preferences
* theme / interaction-related configuration depending on page implementation

### Category examples

* Technology
* Sports
* Finance

Preferences are stored in Redux and synchronized to client storage.

---

## 4.9 Trending & Analytics Views

The dashboard includes separate views for:

* trending content
* analytics-style overview / content insight presentation

These pages extend the assignment beyond the minimum feed page and make the app feel more like a polished dashboard product rather than a single static page.

---

## 5) Architecture Overview

## 5.1 High-Level Folder Structure

### `src/app/`

Contains the App Router structure:

* root layout
* providers
* route groups and dashboard pages

### `src/components/`

Reusable UI and feature components grouped by concern:

* `cards/`
* `feed/`
* `layout/`
* `search/`
* `settings/`
* `ui/`
* `common/`

### `src/redux/`

Redux Toolkit and RTK Query setup:

* `store.ts`
* `slices/`
* `api/`

### `src/hooks/`

Custom hooks for:

* typed Redux access
* theme config
* debouncing
* feed aggregation / transformations
* local storage hydration helpers

### `src/services/` and/or `src/lib/`

API clients, transformation helpers, and data access utilities.

### `src/types/`

Shared TypeScript types and domain models.

### `src/utils/`

Utility functions, constants, and mock social feed data.

### `src/tests/`

Unit, integration, and end-to-end tests.

---

## 5.2 Route Structure

### Root / dashboard routes

* `/`
* `/trending`
* `/favorites`
* `/analytics`
* `/settings`

### Root-level application support

* `layout.tsx`
* providers
* global theme / store integration

---

## 6) Redux State Architecture

The project uses Redux Toolkit for app-level state and RTK Query for remote data fetching.

## 6.1 Key slices

### `preferencesSlice`

Responsible for user content preferences such as selected categories.

### `favoritesSlice`

Stores favorited content items or identifiers and supports add/remove behavior.

### `themeSlice`

Tracks theme-related preference state where Redux-backed theme metadata is used alongside `next-themes`.

### `searchSlice`

Stores search query state and related metadata such as recent searches / results support where implemented.

### `feedSlice`

Stores feed-order / drag-and-drop related state and other feed-level UI configuration.

---

## 6.2 Persistence Strategy

The project uses client-side persistence for user-specific dashboard state such as:

* preferences
* favorites
* recent search data (where configured)
* feed ordering
* theme-related preferences where applicable

Hydration is handled carefully to avoid App Router / client mismatch issues.

---

## 7) API / Data Flow

## 7.1 News API

The News API integration is used to fetch:

* top headlines / latest content
* category-filtered content

### Expected env vars

* `NEXT_PUBLIC_NEWS_API_BASE_URL`
* `NEXT_PUBLIC_NEWS_API_KEY`

---

## 7.2 TMDB API

TMDB is used for movie-oriented content such as:

* trending movies
* popular / recommendation-style movie data

### Expected env vars

* `NEXT_PUBLIC_TMDB_BASE_URL`
* `NEXT_PUBLIC_TMDB_API_KEY`

---

## 7.3 Social Feed

Social content is powered by a mock data source / mock API abstraction layer.

### Why mock social data was used

The assignment explicitly allows a mock social feed, and this keeps the project focused on frontend architecture and product experience rather than unnecessary backend scope.

---

## 7.4 Data Normalization Flow

The general data flow is:

1. Fetch remote / mock content from News, TMDB, and Social sources
2. Transform each source into a shared `FeedItem`-style structure
3. Aggregate those normalized items into a unified feed
4. Apply client-side features such as:

   * search filtering
   * favorites
   * drag-and-drop ordering
   * category-aware filtering / personalization
5. Render the final content via reusable feed/card components

---

## 8) Key UI / Feature Components

> Note: file names below reflect the intended architectural responsibilities based on the current project structure. Exact implementation details may vary slightly depending on final repository state.

## Layout Components

Typical responsibilities include:

### `app-sidebar.tsx`

* dashboard navigation
* active route awareness
* responsive sidebar structure

### `app-header.tsx`

* search placement
* theme toggle
* avatar / top-level actions
* cross-page dashboard controls

### `mobile-nav.tsx`

* mobile navigation drawer / overlay behavior

---

## Feed Components

### `personalized-feed.tsx`

Main aggregated feed experience for the dashboard home route.

### `draggable-feed.tsx`

Drag-and-drop feed rendering / ordering logic.

### `feed-list.tsx`

List-level rendering of normalized feed items.

### `feed-card.tsx`

Reusable card rendering for news, movie, and social content with CTA and favorite actions.

---

## Search Components

### `search-bar.tsx`

Debounced search input, query sync, and cross-route search behavior.

### `search-results.tsx`

Search result rendering and empty state handling.

---

## Settings Components

### `preferences-form.tsx`

Preference management UI.

### `category-selector.tsx`

Category toggle / selection experience for personalized content filtering.

---

## 9) Testing Summary

## Testing status

Testing is configured and passing.

### Coverage emphasis

The project focuses test coverage on the most important assignment-level logic:

* Redux slice behavior
* search-related behavior
* component rendering and key interactions
* integration coverage around feed / search / favorites flows where applicable

### Typical test targets in this project

* reducer logic
* search behavior
* theme or preference-related logic
* component interaction behavior
* selected E2E flows if configured in the final repo

---

## 10) Build / Quality Status

The project has been validated through:

* linting
* tests
* production build verification

### Final validation checklist

* `npm run lint` passes
* `npm run test` passes
* `npm run build` passes

This is the baseline expected before final submission.

---

## 11) Environment Variables

Create a `.env.local` file and provide the following:

```env
NEXT_PUBLIC_APP_NAME=AI Content Intelligence Dashboard
NEXT_PUBLIC_BASE_URL=http://localhost:3000

NEXT_PUBLIC_NEWS_API_BASE_URL=https://newsapi.org/v2
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key

NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

### Notes

* News API and TMDB keys are required for live remote content.
* Social feed content does not require an external key because it is mock-backed.

---

## 12) Runbook

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

## Run lint

```bash
npm run lint
```

## Run unit/integration tests

```bash
npm run test
```

## Run end-to-end tests

```bash
npm run test:e2e
```

## Build for production

```bash
npm run build
```

---

## 13) Known Tradeoffs / Limitations

### 1. No real authentication

Authentication was intentionally skipped because it is outside the assignment’s required scope and would have consumed time better spent on the dashboard experience.

### 2. No backend / database

The project is frontend-focused and relies on client-side state plus external APIs.

### 3. Social feed is mock-based

This is an intentional scope decision aligned with the assignment brief.

### 4. Search is client-side

Search is performed against the normalized client-side feed rather than through a dedicated search backend. For the assignment, this is a good tradeoff because it keeps the experience fast and the architecture simple.

### 5. Analytics page is presentation-focused

The analytics route is intended to improve the dashboard feel and product polish, not to act as a full analytics platform.

---

## 14) Suggestions for Future Improvements

If this project were extended beyond the internship assignment, the next improvements would be:

1. Add real authentication and user accounts
2. Persist favorites / preferences in a backend database
3. Add richer recommendation logic and personalization signals
4. Add server-side caching / revalidation strategy for content APIs
5. Add deeper analytics / engagement tracking
6. Add richer search and filtering capabilities
7. Add better offline/error resilience and telemetry

---

## 15) Final Submission Notes

This project was built to satisfy the PG-AGI frontend assignment with an emphasis on:

* clean architecture
* strong TypeScript / Redux foundations
* realistic dashboard UX
* API integration + testing discipline
* thoughtful personalization features

It should be presented as a **production-minded internship assignment submission**, not just a UI mockup.

---

## 16) How to Explain This Project in an Interview

This section serves as a direct study guide for interview prep, allowing you to explain your technical decisions clearly.

### The 60-Second Elevator Pitch
> *"I built a personalized content intelligence dashboard utilizing Next.js, Redux Toolkit, and RTK Query to aggregate multi-source feeds—specifically live News API articles, TMDB movie recommendations, and mock social data—into a unified data model. The application features full local state serialization for favorites and preferences, responsive layouts with theme configuration, client-side debounced search, and drag-and-drop feed reordering. To guarantee long-term stability and code quality, I backed the application with a robust unit and integration testing suite."*

### The 2-Minute Architecture Pitch
> *"The project follows clean architecture principles using Next.js 16’s App Router. The UI layer consists of reusable presentation components under `src/components/`, while logic and state are fully decoupled into the Redux data layer under `src/redux/`. For remote data synchronization, I set up RTK Query with separate api endpoints for News and TMDB, feeding into client-side data transformers under `src/utils/feed-transformers.ts`. These map disjoint raw inputs into a unified `FeedItem` shape. Local dashboard states, like user preferences and feed layouts, are handled through Slice Reducers. To persist user preferences and favorites across reloads without causing hydration mismatches, I authored a custom serialization middleware that syncs changes to local storage, and hydrated the store safely using a client-side layout hook."*

### Key Architectural Decisions & Justifications

#### Why Redux Toolkit?
- **Single Source of Truth:** Essential for a dashboard where multiple widgets (like the header search bar, home feed, settings form, and analytics graphs) need to react synchronously to the same user settings.
- **Structured State Lifecycle:** Simplifies features like local storage serialization, tracking active preferences, and managing feed ordering.

#### Why RTK Query instead of standard `fetch` or `Axios`?
- **Caching & Cache Invalidation:** Automatically caches API responses and refetches data only when inputs (like categories or language) change.
- **Declarative Hooks:** Provides auto-generated React hooks like `useGetTopHeadlinesQuery` that expose loading, error, and caching status directly to components.

#### Why a Normalized Feed Model?
- **Consistent Rendering:** Allows the grid layout to treat all feeds (News, Movies, Social) as a list of generic cards with standard visual interfaces, reducing UI duplication.
- **Simplified Features:** Client-side search, favorites filtering, and drag-and-drop ordering become trivial because they operate on a single type array (`FeedItem[]`) instead of three different API schemas.

#### How is Client-side Search and Debounce implemented?
- **UX Optimization:** Typing triggers local state changes, which are debounced using a custom `useDebounce` hook. This updates the global query in Redux and automatically routes the user back to the feed page if they are searching from other tabs.
- **Client-Side Filtering:** The `SearchResults` component dynamically filters the active aggregated feed based on the debounced query, maximizing response times and avoiding redundant API rate limits.

#### What tradeoffs were made due to constraints?
- **Client-Side Filtering:** A production app might execute search on a search engine backend, but client-side filtering on the aggregated feed is perfect for this scope because it works instantly across News, TMDB, and Social posts without rate limits.
- **Mock Social Feed:** Storing social data as a local mock resource allowed focusing on state synchronization and React DnD reordering rather than spending time setting up a mock API database backend.

---

## 17) File Map

Here is the guide on where to start reading the code:

- **State Persistence & Hydration:**
  - [store.ts](file:///c:/Users/KRISHNA/OneDrive/Desktop/PG-AGI/ai-content-intelligence-dashboard/src/redux/store.ts#L11-L24): Contains our custom `localStorageMiddleware` which watches slices and saves state updates to local storage.
  - [redux-provider.tsx](file:///c:/Users/KRISHNA/OneDrive/Desktop/PG-AGI/ai-content-intelligence-dashboard/src/providers/redux-provider.tsx#L13-L41): Hydrates the store with the stored values in a client-side `useEffect` block, avoiding hydration mismatches.
- **Data Query & Transformation:**
  - [use-feed-data.ts](file:///c:/Users/KRISHNA/OneDrive/Desktop/PG-AGI/ai-content-intelligence-dashboard/src/hooks/use-feed-data.ts): Fetches news API, movie API, and mock social data and normalizes them into a unified list.
  - [feed-transformers.ts](file:///c:/Users/KRISHNA/OneDrive/Desktop/PG-AGI/ai-content-intelligence-dashboard/src/utils/feed-transformers.ts): Contains functions mapping API results to the shared `FeedItem` model.
- **UI Components:**
  - [personalized-feed.tsx](file:///c:/Users/KRISHNA/OneDrive/Desktop/PG-AGI/ai-content-intelligence-dashboard/src/components/feed/personalized-feed.tsx): Groups content items into sections and renders them in the reordered drag-and-drop sequence.
  - [search-bar.tsx](file:///c:/Users/KRISHNA/OneDrive/Desktop/PG-AGI/ai-content-intelligence-dashboard/src/components/search/search-bar.tsx): Manages the debounced search logic and page redirection.
  - [analytics/page.tsx](file:///c:/Users/KRISHNA/OneDrive/Desktop/PG-AGI/ai-content-intelligence-dashboard/src/app/%28dashboard%29/analytics/page.tsx): Our custom analytics panel displaying metrics and visual charts.

---

## 18) Demo Walkthrough Order

Use this order to demonstrate the application in a recording or review:

1. **Dashboard Home:** Show the clean grid containing News, Movies, and Social feeds.
2. **Search with Debounce:** Type a query (e.g. "AI" or "sci-fi"). Show the smooth loading state and filtered search results card layout.
3. **Favorites Feature:** Click the favorite heart icon on multiple cards. Navigate to the **Favorites** page to show they persist. Reload the page to show they remain saved.
4. **Theme Toggle:** Toggle the theme in the header to show the dark mode design and lack of hydration flashes.
5. **Feed Organization (Settings):** Navigate to the **Settings** page. Use the drag-and-drop grip to change the section order (e.g. Movies first, then Social, then News). Navigate back to the **Feed** page to show the layout respects the new order.
6. **Analytics View:** Go to the **Analytics** page to show the favorites count and distribution bar charts update.

---

## 19) Final Verification Section

The repository has been verified using the following execution commands:

- `npm run lint` → Passed cleanly with **0 errors**.
- `npm run test` → Passed with **21 tests** successfully passing.
- `npm run build` → Succeeded, compiling all static pages with Next.js Turbopack.
