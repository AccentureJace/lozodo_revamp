<<<<<<< HEAD
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
=======
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/user/Dashboard";
import ProductDetails from "../pages/user/ProductDetails";
import {StoreLayout} from "../layout";
import { ENDPOINTS } from "./endpoints";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreLayout />,
    children: [
      {
        path: ENDPOINTS.PRODUCT_DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ENDPOINTS.PRODUCT_DETAILS,
        element: <ProductDetails />,
      },
    ],
  },
>>>>>>> bdd3f5d0fbe48397942cef58e8e2c8508133cd20
]);
