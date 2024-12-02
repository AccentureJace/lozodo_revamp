import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/user/Dashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
import { ENDPOINTS } from './endpoints';

export const router = createBrowserRouter([
    {
        path: ENDPOINTS.PRODUCT_DASHBOARD,
        element: <Dashboard />,
    },
    {
        path: ENDPOINTS.ADMIN_DASHBOARD,
        element: <AdminDashboard />,
    },
]);
