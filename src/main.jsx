import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes.jsx";
import { RouterProvider } from "react-router-dom";
import { CategoriesProvider } from "./Context/categories.jsx";
import { ProductsProvider } from "./Context/products.jsx";
import "./index.css";
import { CartsProvider } from "./Context/cartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CategoriesProvider>
      <ProductsProvider>
        <CartsProvider>
          <RouterProvider router={router} />
        </CartsProvider>
      </ProductsProvider>
    </CategoriesProvider>
  </StrictMode>,
);
