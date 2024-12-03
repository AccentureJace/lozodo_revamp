import { createBrowserRouter } from 'react-router-dom';
import { Dashboard, Cart, ProductDetails } from '../pages';
import { StoreLayout } from '../layout';
import { PRODUCT_DASHBOARD, PRODUCT_DETAILS, PATH_CART } from '../constants/routes';

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
			{
				path: PATH_CART,
				element: <Cart />,
			},
		],
	},
]);
