# AI Content Intelligence Dashboard

A production-quality dashboard built with Next.js (App Router), TypeScript, TailwindCSS v4, Redux Toolkit, and RTK Query. 

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **State Management**: Redux Toolkit & RTK Query
- **Testing**: Jest, React Testing Library, Playwright

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Copy `.env.example` to `.env.local` and add your API keys:
   ```bash
   cp .env.example .env.local
   ```
   *Note: You need API keys for NewsAPI and TMDB for real data.*

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure
- `src/app`: Next.js App Router pages and layouts
- `src/components`: Reusable React components (UI, layout, cards, feed, search)
- `src/redux`: Redux store, RTK Query API definitions, and slices
- `src/hooks`: Custom React hooks (Redux typed hooks, debounce, local storage)
- `src/types`: TypeScript interfaces and types
- `src/constants`: Application constants (routes, theme, categories)
- `src/utils`: Helper functions and mock data
- `src/tests`: Unit, integration, and E2E tests
