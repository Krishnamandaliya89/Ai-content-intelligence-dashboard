// src/constants/routes.ts

export const APP_ROUTES = {
  HOME: "/",
  TRENDING: "/trending",
  FAVORITES: "/favorites",
  ANALYTICS: "/analytics",
  SETTINGS: "/settings",
} as const;

export type AppRoute = (typeof APP_ROUTES)[keyof typeof APP_ROUTES];
