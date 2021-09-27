import React from 'react'
import { Switch, Route } from 'react-router-dom';

// COMPONENTS
import {
	Homepage,
	Cryptocurrencies,
	CryptoDetails,
	News,
} from '../components';


const SwitchRoutes: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Homepage />
			</Route>

			<Route exact path="/cryptocurrencies">
				<Cryptocurrencies simplified={false} />
			</Route>

			<Route exact path="/crypto/:coinId">
				<CryptoDetails />
			</Route>

			<Route exact path="/news">
				<News simplified={false} />
			</Route>
		</Switch>
	);
}

export default SwitchRoutes;
