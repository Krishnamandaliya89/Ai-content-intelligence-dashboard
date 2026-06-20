// src/redux/api/movieApi.ts

import { baseApi } from "./baseApi";
import { API_CONFIG } from "@/constants/api";
import type { RawTmdbResponse } from "@/types/feed.types";
import type { TmdbApiParams } from "@/types/api.types";

export const movieApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrendingMovies: builder.query<RawTmdbResponse, TmdbApiParams>({
      queryFn: async (arg) => {
        const url = new URL(`${API_CONFIG.TMDB.BASE_URL}/trending/movie/day`);
        url.searchParams.append("api_key", API_CONFIG.TMDB.KEY);
        url.searchParams.append("language", arg.language || "en-US");
        url.searchParams.append("page", (arg.page || 1).toString());
        
        try {
          const result = await fetch(url.toString());
          const data = await result.json();
          if (!result.ok) throw new Error(data.status_message || "Failed to fetch movies");
          return { data };
        } catch (error) {
          const errMsg = error instanceof Error ? error.message : "Failed to fetch movies";
          return { error: { status: "CUSTOM_ERROR", error: errMsg } };
        }
      },
      providesTags: ["Movies"],
    }),
  }),
});

export const { useGetTrendingMoviesQuery } = movieApi;
