import App from "./App";
import ApiComponent from "./Api";
import BuyCart from "./BuyCart";
import ProductPage from "./Product";
import Category from "./Categories";
import Checkout from "./Checkout";
import Home from "./Home";
import ErrorPage from "./ErrorPage";


const routes =([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
        },
        { 
            path: '/api',
            element: <ApiComponent />, 
        },
        {
            path: '/cart',
            element: <BuyCart />
        },
        {
            path: '/product/:id',
            element: <ProductPage />
        },
        {
            path: '/categories/:category',
            element: <Category />
        },
        {
            path: '/checkout',
            element: <Checkout />
        }    
        ]
    },
    
])

export default routes;