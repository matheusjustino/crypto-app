import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

// ImgSrc
import Icon from '../../images/cryptocurrency.png';

const Navbar: React.FC = () => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState<null | number>(null);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (screenSize && screenSize < 768) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	const menuItems = [
		{
			title: 'Home',
			path: '/',
			icon: <HomeOutlined />,
		},
		{
			title: 'Cryptocurrencies',
			path: '/cryptocurrencies',
			icon: <FundOutlined />,
		},
		{
			title: 'News',
			path: '/news',
			icon: <BulbOutlined />,
		}
	]

	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar
					src={Icon}
					size="large"
				/>

				<Typography.Title level={2} className="logo">
					<Link to="/">Cryptoverse</Link>
				</Typography.Title>

				<Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
					<MenuOutlined />
				</Button>
			</div>

			{
				activeMenu && (
					<Menu theme="dark">
						{
							menuItems.map((item, index) => (
								<Menu.Item key={index} icon={item.icon}>
									<Link to={item.path}>{item.title}</Link>
								</Menu.Item>
							))
						}
					</Menu>
				)
			}
		</div>
	);
}

export default Navbar;
