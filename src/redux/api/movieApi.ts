// src/redux/api/movieApi.ts

import { baseApi } from "./baseApi";
import { API_CONFIG } from "@/constants/api";
import type { RawTmdbResponse } from "@/types/feed.types";
import type { TmdbApiParams } from "@/types/api.types";

export const movieApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrendingMovies: builder.query<RawTmdbResponse, TmdbApiParams>({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        const url = new URL(`${API_CONFIG.TMDB.BASE_URL}/trending/movie/day`);
        url.searchParams.append("api_key", API_CONFIG.TMDB.KEY);
        url.searchParams.append("language", arg.language || "en-US");
        url.searchParams.append("page", (arg.page || 1).toString());
        
        try {
          const result = await fetch(url.toString());
          const data = await result.json();
          if (!result.ok) throw new Error(data.status_message || "Failed to fetch movies");
          return { data };
        } catch (error: any) {
          return { error: { status: "CUSTOM_ERROR", error: error.message } };
        }
      },
      providesTags: ["Movies"],
    }),
  }),
});

export const { useGetTrendingMoviesQuery } = movieApi;
