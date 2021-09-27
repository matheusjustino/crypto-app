import React from 'react'
import { Link } from 'react-router-dom';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';

// REDUX API
import { useGetCryptosQuery } from '../../services/cryptosApi';

// COMPONENTS
import { Cryptocurrencies, News } from '..';

const { Title } = Typography;

const Homepage = () => {
	const { data, error, isFetching } = useGetCryptosQuery(10);
	const globalStats = data?.data?.stats;

	if (isFetching) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		const err = error as any;
		const message = `${err.status}\n${err.data.message}`
		return <h1>{message}</h1>;
	}

	return (
		<React.Fragment>
			<Title level={2} className="heading">
				Global Crypto Stats
			</Title>

			<Row>
				<Col span={12}>
					<Statistic title="Total Cryptocurrencies" value={globalStats.total} />
				</Col>

				<Col span={12}>
					<Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
				</Col>

				<Col span={12}>
					<Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
				</Col>

				<Col span={12}>
					<Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
				</Col>

				<Col span={12}>
					<Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
				</Col>
			</Row>

			<div className="home-heading-container">
				<Title level={2} className="home-title">
					Top 10 Cryptocurrencies in the world
				</Title>

				<Title level={3} className="show-more">
					<Link to="/cryptocurrencies">Show more</Link>
				</Title>
			</div>

			<Cryptocurrencies simplified />

			<div className="home-heading-container">
				<Title level={2} className="home-title">
					Latest Crypto News
				</Title>

				<Title level={3} className="show-more">
					<Link to="/news">Show more</Link>
				</Title>
			</div>

			<News simplified />
		</React.Fragment>
	);
}

export default Homepage;

