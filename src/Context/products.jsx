import { createContext, useContext, useEffect, useState } from "react";

const ProductContex = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Nao foi possivel obter os produtos");
        }
      })
      .then((data) => {
        setProducts(data);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <ProductContex.Provider value={{ products, setProducts }}>
      {children}
    </ProductContex.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContex);
  if (!context) {
    throw Error("Erro ao obter produtos");
  }

  return context;
}
