import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/user/Dashboard';
import { ENDPOINTS } from './endpoints';
import Signin from '../pages/user/Signin';

export const router = createBrowserRouter([
    {
        path: ENDPOINTS.PRODUCT_DASHBOARD,
        element: <Dashboard />,
    },
    {
        path: ENDPOINTS.PATH_LOGIN,
        element: <Signin />,
    },
]);
