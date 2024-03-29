import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartLoader from './Loader/CartProductLoader';
import Checkout from './components/Checkout/Checkout';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "order",
        element: <Order></Order>,
        loader: () => cartLoader()
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "checkout",
        element:<Checkout></Checkout>
      },
      {
        path: "login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
