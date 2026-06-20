// src/redux/api/baseApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// This is the base API. We use injectEndpoints in specific feature APIs.
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }), // Individual APIs will override the baseUrl
  tagTypes: ["News", "Movies", "Social", "Feed"],
  endpoints: () => ({}),
});
