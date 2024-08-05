import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Follow } from './types/follows.types';
import { SearchQueryParams, UsersResponse } from './types/searchQuery.types';
import { Tags } from './types/tags.types';

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_URL}/api`,
});

export const examAPI = createApi({
  reducerPath: 'examAPI',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    followers: builder.query<Follow, void>({
      query: () => `users/all?page=1&pageSize=10`,
    }),
    following: builder.query<Follow, void>({
      query: () => `users/friends?page=1&pageSize=10`,
    }),
    searching: builder.query<UsersResponse, SearchQueryParams>({
      query: (args) => {
        const { pageSize, keyword } = args;
        return {
          url: `/users/all?page=1`,
          params: { pageSize, keyword },
        };
      },
    }),
    tags: builder.query<Tags, void>({
      query: () => `tags`,
    }),
  }),
});

export const {
  useFollowersQuery,
  useFollowingQuery,
  useSearchingQuery,
  useTagsQuery,
} = examAPI;
