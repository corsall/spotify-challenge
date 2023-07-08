import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'cad93fe8fcmsh466edae33eba6e0p1a4882jsn4aaca49ff091');
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => 'charts/track'}),
  })
});

export const {
  useGetTopChartsQuery
} = shazamApi;

