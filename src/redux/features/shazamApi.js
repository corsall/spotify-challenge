import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', process.env.REACT_APP_API_KEY);
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => 'charts/track'}),
    getSongDetails: builder.query({query: ({songid}) => `songs/get-details?key=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `songs/list-recommendations?key=${songid}` }),
    getArtistTopSongs: builder.query({ query: ({artistId}) => `artists/get-top-songs?id=${artistId}` }),
    getArtistDetails: builder.query({ query: ({artistId}) => `artists/get-details?id=${artistId}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `search?term=${searchTerm}` }),
  })
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistTopSongsQuery,
  useGetArtistDetailsQuery,
  useGetSongsBySearchQuery,
} = shazamApi;

