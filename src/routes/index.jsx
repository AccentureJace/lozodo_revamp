import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/user/Dashboard';
import ProductDetails from '../pages/user/ProductDetails';
import AdminDashboard from '../pages/admin/AdminDashboard';
import { StoreLayout } from '../layout';
import { ENDPOINTS } from './endpoints';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <StoreLayout />,
        children: [
            {
                path: ENDPOINTS.PRODUCT_DASHBOARD,
                element: <Dashboard />,
            },
            {
                path: ENDPOINTS.ADMIN_DASHBOARD,
                element: <AdminDashboard />,
            },
            {
                path: ENDPOINTS.PRODUCT_DETAILS,
                element: <ProductDetails />,
            },
        ],
    },
]);
