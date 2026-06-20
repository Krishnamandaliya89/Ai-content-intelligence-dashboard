# AI Content Intelligence Dashboard — PG-AGI Intern Assignment

A production-quality, personalized dashboard built with **Next.js 16 (App Router)**, **JavaScript (ES6+)**, **Tailwind CSS v4**, **Redux Toolkit**, and **RTK Query** to aggregate multi-source feeds into a single customizable interface.

This project was built to satisfy the Software Development Engineer (SDE) Intern Frontend Assignment requirements for **PG-AGI**.

---

## 🚀 Features

### 1. Dashboard Layout & UI Shell
- Sleek, modern responsive sidebar and header layout.
- Responsive mobile drawer navigation menu powered by React states.
- Clean loading skeleton states, empty states, and custom dynamic styling.
- Persisted **Dark Mode / Light Mode** theme configuration using `next-themes` (free of hydration flashes).

### 2. Multi-Source Feed Aggregation
- **Unified Feed Model:** Disjoint content formats from external APIs and mocks are normalized into a unified schema, making search, rendering, and drag-and-drop ordering highly reusable.
- **News Feed:** Fetches top-headlines and category-filtered articles in real-time from the **News API**.
- **Movie Recommendations:** Fetches trending TMDB movies in real-time.
- **Social Buzz:** Mock social feed displaying mock likes, comments, and tags.

### 3. Drag-and-Drop Organization
- Drag-and-drop feed reordering powered by `@hello-pangea/dnd`.
- Allows users to customize the vertical hierarchy of feed sections (News, Movies, Social) in **Settings**.
- Changes to the feed sequence are dispatched to Redux and persisted.

### 4. Interactive Curation & Search
- **Debounced Search:** Filters aggregated items instantly on client query inputs. Syncs input parameters when badges are clicked.
- **Smart Navigation:** Searching from external pages (like Settings or Analytics) instantly routes the user back to the Home feed page to show live search results.
- **Favorites:** Heart icons on individual cards add or remove items from the Redux-backed favorites list, which is persisted.

### 5. Premium Custom Analytics
- Presentation analytics dashboard displaying breakdown cards for active category settings.
- Favorites distribution bar graphs created with responsive CSS.

---

## 🛠️ Tech Stack
- **Framework:** Next.js 16.2 (App Router, static page optimization)
- **State Management:** Redux Toolkit & RTK Query
- **Styling:** Tailwind CSS v4 & Framer Motion
- **Interactions:** `@hello-pangea/dnd` & `React Hook Form`
- **Theme:** `next-themes` & `lucide-react`
- **Testing:** Jest & React Testing Library (Unit and Integration testing)

---

## 📁 Repository Structure

```
src/
├── app/               # Next.js App Router root layouts, providers, and dashboard pages (.js/.jsx)
├── components/        # Presentational and state-connected visual components (.js/.jsx)
│   ├── cards/         # Unified FeedCard rendering news, movies, and social layout types
│   ├── feed/          # Aggregated personalized grid sections and Draggable DnD reorder logic
│   ├── layout/        # Shell layout templates (app-header, app-sidebar, mobile-nav)
│   ├── search/        # Debounced search-bar query handlers and search-results logic
│   ├── settings/      # Category selectors and toggle forms
│   └── ui/            # Basic layout primitives (buttons, modals, cards, badges)
├── constants/         # Category definitions, theme modes, and route paths
├── hooks/             # Custom React Hooks (useDebounce, useFeedData, useThemeConfig, Redux helpers)
├── providers/         # Global provider mounts (Redux and next-themes)
├── redux/             # Redux state configuration (store.js, Slices, and RTK Query endpoints)
├── tests/             # Jest tests (unit/ slices tests and component integration tests)
└── utils/             # Formatters, localStorage storage wrappers, and mock social data
```

---

## ⚙️ Setup & Installation

### 1. Clone the repository and install dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env.local` file at the root of the project and populate it with your credentials:
```env
NEXT_PUBLIC_APP_NAME=AI Content Intelligence Dashboard
NEXT_PUBLIC_BASE_URL=http://localhost:3000

NEXT_PUBLIC_NEWS_API_BASE_URL=https://newsapi.org/v2
NEXT_PUBLIC_NEWS_API_KEY=your_newsapi_api_key

NEXT_PUBLIC_TMDB_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
```

> **Note:** A `.env.example` file is included in the project for reference. You can obtain API keys for free from [NewsAPI](https://newsapi.org/) and [TMDB](https://www.themoviedb.org/).

### 3. Run the Development Server
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧪 Available Scripts

- **`npm run dev`**: Starts the Next.js development server.
- **`npm run lint`**: Checks for code quality and ESLint errors.
- **`npm run test`**: Runs the Jest unit and integration tests (21 tests total).
- **`npm run build`**: Runs the Next.js production compilation.
- **`npm run start`**: Serves the compiled production bundle.

---

## 🧠 Architectural Insights & Tradeoffs

1. **Client-Side Persistence:** A custom Redux middleware (`localStorageMiddleware`) intercepts slice state changes (preferences, feed order, favorites) and serializes them to localStorage. Client-side hydration executes on mount, protecting the App Router from React server/client hydration mismatches.
2. **Client-Side Search:** Search query parameters are debounced by 500ms before committing to the store. Results are derived from the current cache array, reducing API requests and keeping response times extremely high.
3. **Mock Social Feeds:** Social posts are mock-backend powered, which keeps focus on the client-side state integration and drag-and-drop mechanics.
