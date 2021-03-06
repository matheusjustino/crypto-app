import React from 'react'
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

interface LineChartProps {
	coinHistory: any;
	currentPrice: string | number;
	coinName: string;
}

const LineChart: React.FC<LineChartProps> = ({ coinHistory, currentPrice, coinName }) => {
	const coinPrice = [];
	const coinTimestamp = [];

	for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
		coinPrice.push(coinHistory.data.history[i].price);
		coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
	}

	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: `Price in USD`,
				data: coinPrice,
				fill: false,
				backgroundColor: '#0071db',
				borderColor: '#0071bd',
			}
		]
	};

	// Chart.ChartOptions
	const options: any = {
		scales: {
			yAxes: [
				{
					ticks: {
						beingAtZero: true,
					}
				}
			]
		}
	}

	return (
		<React.Fragment>
			<Row className="chart-header">
				<Title level={2} className="chart-title">{coinName} Price Chart</Title>
				<Col className="price-container">
					<Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>

					<Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
				</Col>
			</Row>

			<Line data={data} options={options} />
		</React.Fragment>
	);
}

export default LineChart;
