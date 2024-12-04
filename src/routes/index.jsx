import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/user/Dashboard';
import ProductDetails from '../pages/user/ProductDetails';
import { StoreLayout } from '../layout';
import { PRODUCT_DASHBOARD, PRODUCT_DETAILS } from '../constants/routes';

export const router = createBrowserRouter([
	{
		path: PRODUCT_DASHBOARD,
		element: <StoreLayout />,
		children: [
			{
				path: PRODUCT_DASHBOARD,
				element: <Dashboard />,
			},
			{
				path: PRODUCT_DETAILS,
				element: <ProductDetails />,
			},
		],
	},
	{
		path: ENDPOINTS.PATH_LOGIN,
		element: <Signin />,
	},
]);
