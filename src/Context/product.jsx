import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ id, children }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (!id) return;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Erro ao obter a categoria");
        }
      })

      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) {
    throw Error("Erro ao obter o produto");
  }

  return context;
}
