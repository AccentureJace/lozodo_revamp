import { Outlet } from 'react-router-dom';
import { StoreFooter, StoreHeader } from '../components';

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
