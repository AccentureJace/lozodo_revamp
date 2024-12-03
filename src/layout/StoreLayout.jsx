import React from 'react';
import { StoreFooter, StoreHeader } from '../components';
import { Outlet } from 'react-router-dom';

const StoreLayout = () => {
	return (
		<div>
			<StoreHeader />
			<Outlet />
			<StoreFooter />
		</div>
	);
};

export default StoreLayout;
