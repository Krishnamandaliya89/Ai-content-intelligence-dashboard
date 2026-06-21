# PROJECT_HANDOFF.md

# AI Content Intelligence Dashboard — Project Handoff

## 1. Project Overview

**Project Name:** AI Content Intelligence Dashboard
**Assignment Context:** PG-AGI Software Development Engineer (SDE) Intern Frontend Assignment
**Role Target:** Frontend / SDE Intern

### Project Goal

Build a personalized content dashboard that aggregates **news**, **movie recommendations**, and **social posts** into a single customizable experience using **Next.js, JavaScript, Redux Toolkit, RTK Query, API integration, and testing**.

### Final Stack

* **Next.js 16** (App Router)
* **React**
* **JavaScript (ES6+)**
* **Tailwind CSS v4**
* **Redux Toolkit**
* **RTK Query**
* **Framer Motion**
* **next-themes**
* **Jest / React Testing Library / Playwright**

---

## 2. Final Status Summary

The dashboard implementation is complete and verified across development, testing, and production build flows.

### Verification Status

* `npm run lint` → passes
* `npm run test` → passes
* `npm run build` → passes

### Implemented Scope

The following assignment requirements are implemented:

* responsive dashboard shell with sidebar, header, and mobile navigation
* personalized content dashboard with News, Movies, and Social sections
* Redux Toolkit state management
* RTK Query integration for News API and TMDB
* unified normalized feed model across multiple content sources
* debounced search
* favorites management
* drag-and-drop feed reordering
* theme toggle / dark mode persistence
* user preference management for content categories
* trending and analytics-style views
* unit / integration testing coverage

### Intentionally Excluded

The following were intentionally not implemented due to assignment scope and time constraints:

* real authentication
* backend/database
* WebSockets / real-time sync
* multi-language support
* admin dashboard

---

## 3. Application Routes

### Main Dashboard Routes

* `/` → Main dashboard / personalized feed
* `/trending` → Trending content view
* `/favorites` → Saved content
* `/analytics` → Dashboard analytics / summary panel
* `/settings` → User preferences and feed settings

---

## 4. Product Features

## 4.1 Dashboard Shell

The application uses a dashboard-style layout with:

* left sidebar navigation
* top header with search and theme controls
* responsive mobile navigation
* route-based content area

## 4.2 Personalized Content Feed

The dashboard aggregates three content sources:

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

---

## 4.3 Unified Feed Model

A central design decision in this project is the use of a **single normalized feed structure** to represent all content types.

### Feed categories

* `news`
* `movie`
* `social`

### Typical feed fields

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

### Why this matters

This normalization makes the following features easier to implement:

* mixed feed rendering
* favorites
* search
* drag-and-drop
* reusable card components
* analytics/trending summaries

---

## 4.4 Search

Search is implemented as a **debounced client-side search experience** across the normalized feed.

### Search behavior

* typing in the search bar updates local input state
* query changes are debounced before being committed to global search state
* results are derived from the unified feed data
* searching from other pages can redirect back to the main dashboard to display results

### Search targets

Search checks relevant fields across:

* news title / description
* movie title / overview
* social author / content

### UX details

* empty state for no matching results
* synchronized query behavior where needed
* dashboard-aware routing behavior for search

---

## 4.5 Favorites

Users can save items from the feed and revisit them later.

### Favorites behavior

* favorite / unfavorite directly from feed cards
* saved favorites view on `/favorites`
* persistence across reloads via local storage

---

## 4.6 Drag-and-Drop Feed Reordering

The feed supports drag-and-drop reordering using `@hello-pangea/dnd`.

### Goal

Allow users to customize the order of feed sections for a more personalized dashboard experience.

### Persistence

Feed ordering state is stored in Redux and persisted locally.

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
* dashboard display preferences
* feed ordering customization

### Example categories

* Technology
* Sports
* Finance

Preferences are stored in Redux and synchronized to local storage.

---

## 4.9 Trending & Analytics Views

The dashboard includes separate views for:

* trending content
* analytics-style overview / content insights

These pages extend the assignment beyond a single feed page and make the product feel more like a complete dashboard application.

---

## 5. Architecture Overview

## 5.1 High-Level Folder Structure

### `src/app/`

Contains the Next.js App Router structure:

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

* `store.js`
* `slices/`
* `api/`

### `src/hooks/`

Custom hooks for:

* Redux access
* theme config
* debouncing
* feed aggregation
* local storage helpers

### `src/utils/`

Utility functions, feed transformers, storage helpers, and mock social feed data.

### `src/tests/`

Unit, integration, and end-to-end tests.

---

## 5.2 Data Flow Overview

The general data flow is:

1. Fetch content from News API, TMDB, and mock social sources
2. Transform each source into a shared feed structure
3. Aggregate normalized items into the personalized dashboard feed
4. Apply client-side features such as:

   * search filtering
   * favorites
   * drag-and-drop ordering
   * category-based filtering / personalization
5. Render the final content through reusable feed and card components

---

## 6. Redux State Architecture

The project uses Redux Toolkit for application state and RTK Query for remote data fetching.

## 6.1 Key slices

### `preferencesSlice`

Responsible for user content preferences such as selected categories.

### `favoritesSlice`

Stores favorited content items or identifiers and supports add/remove behavior.

### `themeSlice`

Tracks theme-related preference state where needed alongside `next-themes`.

### `searchSlice`

Stores search query state and related metadata.

### `feedSlice`

Stores feed-order / drag-and-drop related state and feed-level UI configuration.

---

## 6.2 Persistence Strategy

The project uses local persistence for dashboard state such as:

* preferences
* favorites
* feed ordering
* search-related state where configured

Hydration is handled on the client to avoid server/client mismatch issues in the App Router environment.

---

## 7. API Integrations

## 7.1 News API

Used to fetch:

* top headlines
* category-filtered content

### Required env vars

* `NEXT_PUBLIC_NEWS_API_BASE_URL`
* `NEXT_PUBLIC_NEWS_API_KEY`

---

## 7.2 TMDB API

Used to fetch:

* trending movies
* movie recommendation-style content

### Required env vars

* `NEXT_PUBLIC_TMDB_BASE_URL`
* `NEXT_PUBLIC_TMDB_API_KEY`

---

## 7.3 Social Feed

Social content is powered by a mock data source.

### Why mock social data was used

The assignment allows a mock social feed, and this keeps the project focused on frontend architecture and dashboard behavior rather than unnecessary backend setup.

---

## 8. Testing Summary

Testing is configured for key application flows.

### Coverage emphasis

The project focuses testing on important dashboard-level logic such as:

* Redux slice behavior
* search behavior
* component rendering and key interactions
* integration coverage around favorites and feed behavior

### Validation commands

* `npm run lint`
* `npm run test`
* `npm run build`

---

## 9. Environment Variables

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

## 10. Runbook

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Run lint

```bash
npm run lint
```

### Run unit/integration tests

```bash
npm run test
```

### Run end-to-end tests

```bash
npm run test:e2e
```

### Build for production

```bash
npm run build
```

---

## 11. Known Tradeoffs / Limitations

### 1. No real authentication

Authentication was intentionally skipped because it is outside the assignment scope and would take focus away from the dashboard experience.

### 2. No backend / database

The project is frontend-focused and relies on client-side state plus external APIs.

### 3. Social feed is mock-based

This is an intentional scope decision aligned with the assignment brief.

### 4. Search is client-side

Search is performed against the normalized client-side feed rather than through a dedicated search backend. For this assignment, it keeps the experience fast and the architecture simple.

### 5. Analytics page is presentation-focused

The analytics route is intended to improve the dashboard feel and product polish rather than act as a full analytics platform.

---

## 12. Future Improvements

If this project were extended beyond the internship assignment, the next improvements would be:

1. Add authentication and user accounts
2. Persist favorites / preferences in a backend database
3. Add richer recommendation logic and personalization signals
4. Add server-side caching / revalidation strategies for content APIs
5. Add richer analytics and engagement tracking
6. Add more advanced filtering and search capabilities

---

## 13. Final Notes

This project was built to satisfy the PG-AGI frontend assignment with an emphasis on:

* clean frontend architecture
* practical JavaScript / React / Redux implementation
* API integration and normalized data handling
* dashboard-style user experience
* testing and production-readiness

It should be treated as a frontend assignment submission focused on product experience, state management, and multi-source content integration.
