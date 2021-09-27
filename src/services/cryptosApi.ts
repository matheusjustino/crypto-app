import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log(process.env);

const cryptoHeaders = {
	'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST, // 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY, //'c13f59a4c6msh1cb026d8b45823cp13f6c2jsn3af325935f92'
}
const baseUrl = process.env.REACT_APP_RAPIDAPI_BASE_URL; //'https://coinranking1.p.rapidapi.com';
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
