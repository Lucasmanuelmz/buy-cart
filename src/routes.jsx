import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./views/home";
import {ContextUser} from "./views/product";
import { ProductCategory } from "./views/category";
import Cart from "./views/cart";
import { ProductProvider } from "./Context/product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product/:id',
        element: <ContextUser />
      },
      {
        path:'category/:category',
        element: <ProductCategory/>
      },
      {
        path: 'cart/product/:id',

        element:<ProductProvider><Cart /></ProductProvider> 
      }
    ]
  },
]);

export default router;