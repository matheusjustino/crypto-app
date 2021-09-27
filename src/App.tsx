import { Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import './App.css';

// COMPONENTS
import {
	Navbar,
} from './components';

// SWITCH ROUTES
import SwitchRoutes from './routes/switchRouter';


const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>

			<div className="main">
				<Layout>
					<div className="routes">
						<SwitchRoutes />
					</div>
				</Layout>

				<div className="footer">
					<Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
						Cryptoverse <br />
						All rights reserved
					</Typography.Title>

					<Space>
						<Link to="/">Home</Link>
						<Link to="/news">News</Link>
					</Space>
				</div>
			</div>
		</div>
	);
}

export default App;
