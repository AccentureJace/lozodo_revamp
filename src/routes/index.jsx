import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/user/Dashboard';
import ProductDetails from '../pages/user/ProductDetails';
import { Signin, Signup } from '../pages';
import { StoreLayout } from '../layout';
import {
	PRODUCT_DASHBOARD,
	PRODUCT_DETAILS,
	PATH_LOGIN,
	PATH_REGISTER,
} from '../constants/routes';

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
		path: PATH_LOGIN,
		element: <Signin />,
	},
	{
		path: PATH_REGISTER,
		element: <Signup />,
	},
]);
