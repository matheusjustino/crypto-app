import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import App from './App';
import store from './app/store';
import Routes from './routes';

ReactDOM.render(
	<React.StrictMode>
		<Routes>
			<Provider store={store}>
				<App />
			</Provider>
		</Routes>
	</React.StrictMode>,
	document.getElementById('root')
);
