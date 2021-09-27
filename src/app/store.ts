import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptosApi';
import { cryptoNewsApi } from '../services/cryptosNewsApi';

export default configureStore({
	reducer: {
		[cryptoApi.reducerPath]: cryptoApi.reducer,
		[cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
	},
});
