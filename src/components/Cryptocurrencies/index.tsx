import React, { useEffect, useState } from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

// REDUX API
import { useGetCryptosQuery } from '../../services/cryptosApi';

// INTERFACES
import { ICurrency } from '../../interfaces/currency.interfance';

interface CryptocurrenciesProps {
	simplified: boolean;
}

const Cryptocurrencies: React.FC<CryptocurrenciesProps> = ({ simplified }) => {
	const count = simplified ? 10 : 100;
	const { data: cryptosList, error, isFetching } = useGetCryptosQuery(count);
	const [cryptos, setCryptos] = useState<ICurrency[]>([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const filteredData = cryptosList?.data?.coins
			.filter((coin: ICurrency) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

		setCryptos(filteredData);
	}, [cryptosList, searchTerm]);


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
			{
				!simplified && (
					<div className="search-crypto">
						<Input placeholder="Search crypto currency" onChange={(e) => setSearchTerm(e.target.value)} />
					</div>
				)
			}

			<Row gutter={[32, 32]} className="crypto-card-container">
				{
					cryptos?.map((currency) => (
						<Col key={currency.id} xs={24} sm={12} lg={6} className="crypto-card">
							<Link to={`/crypto/${currency.id}`}>
								<Card
									title={`${currency.rank}. ${currency.name}`}
									extra={<img alt={currency.name} className="crypto-image" src={currency.iconUrl} />}
									hoverable
								>
									<p>Price: {millify(Number(currency.price))}</p>
									<p>Market Cap: {millify(currency.marketCap)}</p>
									<p>Daily Change: {millify(currency.change)}%</p>
								</Card>
							</Link>
						</Col>
					))
				}
			</Row>
		</React.Fragment>
	);
}

export default Cryptocurrencies;

