// src/redux/api/socialApi.ts

import { baseApi } from "./baseApi";
import { MOCK_SOCIAL_POSTS } from "@/utils/mock-social-data";
import type { RawSocialPost } from "@/types/feed.types";
import type { SocialApiParams } from "@/types/api.types";

export const socialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSocialPosts: builder.query<RawSocialPost[], SocialApiParams>({
      queryFn: async (arg) => {
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
