import React from 'react'
import { BrowserRouter } from 'react-router-dom';

interface RoutesProps {
	children: React.ReactNode;
}

const Routes: React.FC<RoutesProps> = ({ children }) => {
	return (
		<BrowserRouter>
			{children}
		</BrowserRouter>
	);
}

export default Routes;

