import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

// REDUX API
import { useGetCryptosNewsQuery } from '../../services/cryptosNewsApi';
import { useGetCryptosQuery } from '../../services/cryptosApi';

// INTERFACES
import { ICurrency } from '../../interfaces/currency.interfance';
import { INews } from '../../interfaces/news.interface';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

interface NewsProps {
	simplified: boolean
}

const News: React.FC<NewsProps> = ({ simplified }) => {
	const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

	const count = simplified ? 6 : 12;
	const { data: cryptoNews } = useGetCryptosNewsQuery({ newsCategory, count });
	const { data } = useGetCryptosQuery(100);

	if (!cryptoNews?.value) {
		return <h1>Loading...</h1>;
	}

	return (
		<Row gutter={[32, 32]}>
			{
				!simplified && (
					<Col span={24}>
						<Select
							showSearch
							className="select-news"
							placeholder="Select a Crypto"
							optionFilterProp="children"
							filterOption={(input, option) => option?.children.toLowerCase().indexOf(input.toLocaleLowerCase()) >= 0}
							onChange={(value: string) => setNewsCategory(value)}
						>
							<Option value="Cryptocurrency">Cryptocurrency</Option>
							{
								data?.data?.coins.map((coin: ICurrency) => <Option key={coin.id} value={coin.name}>{coin.name}</Option>)
							}
						</Select>
					</Col>
				)
			}
			{
				cryptoNews.value.map((news: INews, index: number) => (
					<Col xs={24} sm={12} lg={8} key={index}>
						<Card hoverable className="news-card">
							<a href={news.url} target="_blank" rel="noreferrer">
								<div className="news-image-container">
									<Title className="news-title" level={4}>{news.name}</Title>
									<img style={{ maxWidth: '200px', maxHeight: '100px' }} alt={news.name} src={news?.image?.thumbnail?.contentUrl || demoImage} />
								</div>

								<p>
									{news.description.length > 120 ? `${news.description.substring(0, 120)}...` : news.description}
								</p>

								<p className="provider-container">
									<div>
										<Avatar alt={news.name} src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} />
										<Text className="provider-name">
											{news.provider[0]?.name}
										</Text>
									</div>
									<Text>{moment(news.datePublished).startOf("s").fromNow()}</Text>
								</p>
							</a>
						</Card>
					</Col>
				))
			}
		</Row>
	);
}

export default News;

