import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log(process.env);

const cryptoHeaders = {
	'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
	'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
}
const baseUrl = process.env.REACT_APP_RAPIDAPI_BASE_URL;
const createRequest = (url: string) => ({ url, headers: cryptoHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({
		baseUrl,
	}),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count: number | string) => createRequest(`/coins?limit=${count}`),
		}),
		getExchanges: builder.query({
			query: () => createRequest('/exchanges'),
		}),
		getCryptoDetails: builder.query({
			query: (coinId: string) => createRequest(`/coin/${coinId}`),
		}),
		getCryptoHistory: builder.query({
			query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
		}),
	}),
});

export const {
	useGetCryptosQuery,
	useGetExchangesQuery,
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
