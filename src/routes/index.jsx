import { createBrowserRouter } from 'react-router-dom';
import { Dashboard, ProductDetails, Checkout, Signin, Signup } from '../pages';
import { StoreLayout } from '../layout';
import {
    PRODUCT_DASHBOARD,
    PRODUCT_DETAILS,
    PATH_LOGIN,
    PRODUCT_CHECKOUT,
    PATH_REGISTER,
    PATH_CART,
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
            {
                path: PATH_CART,
                element: <Cart />,
            },
            {
                path: PRODUCT_CHECKOUT,
                element: <Checkout />,
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
