import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
	'x-bingapis-sdk': process.env.REACT_APP_BINGAPI_SDK, //'true',
	'x-rapidapi-host': process.env.REACT_APP_BINGAPI_RAPIDAPI_HOST, //'bing-news-search1.p.rapidapi.com',
	'rapidapi-key': process.env.REACT_APP_BINGAPI_RAPIDAPI_KEY, //'c13f59a4c6msh1cb026d8b45823cp13f6c2jsn3af325935f92'
}
const baseUrl = process.env.REACT_APP_BINGAPI_BASE_URL;//'https://bing-news-search1.p.rapidapi.com';
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
