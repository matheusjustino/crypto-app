import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
	'x-bingapis-sdk': process.env.REACT_APP_BINGAPI_SDK,
	'x-rapidapi-host': process.env.REACT_APP_BINGAPI_RAPIDAPI_HOST,
	'rapidapi-key': process.env.REACT_APP_BINGAPI_RAPIDAPI_KEY,
}
const baseUrl = process.env.REACT_APP_BINGAPI_BASE_URL;
const createRequest = (url: string) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	endpoints: (builder) => ({
		getCryptosNews: builder.query({
			query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
		}),
	}),
});

export const {
	useGetCryptosNewsQuery,
} = cryptoNewsApi;
