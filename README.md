# AI Content Intelligence Dashboard

A personalized content dashboard built for the **PG-AGI Software Development Engineer (SDE) Intern Frontend Assignment**.

The application aggregates **news**, **movie recommendations**, and **social posts** into a single customizable dashboard experience. It includes features such as **category-based personalization**, **favorites management**, **debounced search**, **drag-and-drop feed reordering**, **dark mode**, and **responsive dashboard navigation**.

---

## Tech Stack

* **Framework:** Next.js 16 (App Router)
* **Language:** JavaScript (ES6+)
* **UI / Styling:** React, Tailwind CSS v4, Framer Motion
* **State Management:** Redux Toolkit
* **Data Fetching:** RTK Query
* **Theme Management:** next-themes
* **Forms / Interaction:** React Hook Form, @hello-pangea/dnd
* **Icons:** lucide-react
* **Testing:** Jest, React Testing Library, Playwright

---

## Features

### 1. Dashboard Layout

* Responsive sidebar navigation
* Top header with search and theme toggle
* Mobile navigation drawer
* Clean dashboard-style page layout

### 2. Personalized Multi-Source Feed

The dashboard combines content from three sources:

* **News API** for top headlines and category-based articles
* **TMDB API** for trending movie recommendations
* **Mock social feed** for simulated social posts

All content is normalized into a shared feed structure so it can be rendered consistently across the application.

### 3. Search

* Debounced search input
* Client-side filtering across the aggregated feed
* Search results and empty states
* Search routing support from other dashboard pages

### 4. Favorites

* Add or remove favorites from feed cards
* Dedicated favorites page
* Favorites persisted locally

### 5. User Preferences

* Category-based content preferences
* Dashboard personalization through Redux state
* Local persistence for saved settings

### 6. Drag and Drop

* Reorder feed sections using drag and drop
* Feed order persisted locally

### 7. Theme Support

* Light mode / dark mode toggle
* Theme persistence across reloads

### 8. Additional Views

* Trending page
* Favorites page
* Analytics page
* Settings page

---

## Project Structure

```bash
src/
├── app/              # Next.js App Router pages, layouts, and dashboard routes
├── components/       # Reusable UI and feature components
│   ├── cards/
│   ├── common/
│   ├── feed/
│   ├── layout/
│   ├── search/
│   ├── settings/
│   └── ui/
├── constants/        # App constants such as routes, categories, and UI config
├── hooks/            # Custom hooks (debounce, feed aggregation, Redux helpers)
├── providers/        # Global providers such as Redux and theme providers
├── redux/            # Redux store, slices, and RTK Query API definitions
├── tests/            # Unit, integration, and E2E tests
└── utils/            # Feed transformers, local storage helpers, mock social data
```

---

## Environment Variables

Create a `.env.local` file in the project root and add the following:

```env
NEXT_PUBLIC_APP_NAME=AI Content Intelligence Dashboard
NEXT_PUBLIC_BASE_URL=http://localhost:3000

NEXT_PUBLIC_NEWS_API_BASE_URL=https://newsapi.org/v2
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_key

NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

### Notes

* **News API** and **TMDB** keys are required for live content.
* The social feed is mock-based and does not require an external API key.

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment variables

Copy the example values into `.env.local` and add your API keys.

### 3. Start the development server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## Available Scripts

### Start development server

```bash
npm run dev
```

### Run lint checks

```bash
npm run lint
```

### Run unit and integration tests

```bash
npm run test
```

### Run end-to-end tests

```bash
npm run test:e2e
```

### Create production build

```bash
npm run build
```

### Start production server

```bash
npm run start
```

---

## Architecture Overview

### 1. Unified Feed Model

The application integrates multiple content sources with different response shapes:

* News articles
* Movie recommendations
* Social posts

To keep rendering and feature logic consistent, all source data is transformed into a **shared internal feed structure**. This makes it easier to implement:

* feed rendering
* search
* favorites
* drag-and-drop
* analytics summaries

### 2. Redux Toolkit for UI State

Redux Toolkit is used for application-level state such as:

* user preferences
* favorites
* search query state
* feed ordering
* theme-related UI state

### 3. RTK Query for Remote Data

RTK Query is used to fetch and manage remote content from:

* News API
* TMDB API

This helps manage:

* loading states
* error states
* caching
* API request handling

### 4. Client-Side Persistence

User-facing dashboard state such as favorites, preferences, and feed order is persisted locally so the dashboard remains personalized across reloads.

---

## Testing

The project includes:

* **Unit tests** for reducer and state logic
* **Integration tests** for key component behavior and search interactions
* **End-to-end coverage** for selected dashboard flows

Validation commands used during development:

* `npm run lint`
* `npm run test`
* `npm run build`

---

## Scope Decisions / Tradeoffs

To keep the project focused on the frontend assignment scope, the following were intentionally not included:

* real authentication
* backend/database
* WebSockets / real-time sync
* multi-language support
* admin dashboard

The social feed is mock-based by design so the focus stays on frontend architecture, state management, and user experience.

---

## Future Improvements

If this project were extended further, the next improvements would be:

1. Add authentication and user accounts
2. Persist favorites and preferences to a backend
3. Add richer recommendation and personalization logic
4. Improve analytics depth
5. Add more advanced filtering and search capabilities
6. Add better caching / revalidation strategies for content APIs

---

## Assignment Context

This project was built as part of the **PG-AGI Software Development Engineer (SDE) Intern Frontend Assignment** and focuses on building a production-style personalized content dashboard with strong frontend architecture, state management, API integration, and user interaction features.
