// src/redux/api/newsApi.ts

import { baseApi } from "./baseApi";
import { API_CONFIG } from "@/constants/api";
import type { RawNewsApiResponse } from "@/types/feed.types";
import type { NewsApiParams } from "@/types/api.types";

export const newsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTopHeadlines: builder.query<RawNewsApiResponse, NewsApiParams>({
      // We override the baseQuery for this specific endpoint group since it hits an external API directly
      // In a production app, we would ideally proxy these requests through our Next.js API routes to hide API keys
      queryFn: async (arg) => {
        const url = new URL(`${API_CONFIG.NEWS.BASE_URL}/top-headlines`);
        url.searchParams.append("language", arg.language || "en");
        url.searchParams.append("pageSize", (arg.pageSize || 10).toString());
        url.searchParams.append("page", (arg.page || 1).toString());
        
        if (arg.category) url.searchParams.append("category", arg.category);
        if (arg.query) url.searchParams.append("q", arg.query);
        
        url.searchParams.append("apiKey", API_CONFIG.NEWS.KEY);
        
        try {
          const result = await fetch(url.toString());
          const data = await result.json();
          if (!result.ok) throw new Error(data.message || "Failed to fetch news");
          return { data };
        } catch (error) {
          const errMsg = error instanceof Error ? error.message : "Failed to fetch news";
          return { error: { status: "CUSTOM_ERROR", error: errMsg } };
        }
      },
      providesTags: ["News"],
    }),
  }),
});

export const { useGetTopHeadlinesQuery } = newsApi;
