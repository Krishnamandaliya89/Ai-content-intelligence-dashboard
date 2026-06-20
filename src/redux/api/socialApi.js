// src/redux/api/socialApi.js

import { baseApi } from "./baseApi";
import { MOCK_SOCIAL_POSTS } from "@/utils/mock-social-data";

export const socialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSocialPosts: builder.query({
      queryFn: async () => {
        // Mocking an API call
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: MOCK_SOCIAL_POSTS });
          }, 800);
        });
      },
      providesTags: ["Social"],
    }),
  }),
});

export const { useGetSocialPostsQuery } = socialApi;
