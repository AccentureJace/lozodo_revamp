import { createBrowserRouter } from 'react-router-dom';
import {
	AdminDashboard,
	Signin,
	Signup,
	ProductDetails,
	Dashboard,
	AdminUser,
} from '../pages';
import { StoreLayout } from '../layout';
import {
	PRODUCT_DASHBOARD,
	PRODUCT_DETAILS,
	PATH_LOGIN,
	PATH_REGISTER,
	PATH_ADMIN_DASHBOARD,
	PATH_ADMIN_USER,
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
	{
		path: PATH_ADMIN_DASHBOARD,
		element: <AdminDashboard />,
	},
	{
		path: PATH_ADMIN_USER,
		element: <AdminUser />,
	},
]);
