import { createContext, useContext, useEffect, useState } from "react";

const CartsContext = createContext();

export function CartsProvider({ children }) {
  const [carts, setCarts] = useState(() => {
    const savedCarts = localStorage.getItem('carts');
    try {
      return savedCarts ? JSON.parse(savedCarts) : { products: [] };
    } catch (error) {
      console.error("Erro ao analisar o carrinho do localStorage:", error);
      return { products: [] };
    }
  });

  useEffect(() => {
    localStorage.setItem('carts', JSON.stringify(carts));
  }, [carts]);

  function updateCarts(newProduct) {
    if (!carts) return;

    const productExists = carts.products.find((p) => p.productId === newProduct.productId);

    if (productExists) {
      const updatedProducts = carts.products.map((p) =>
        p.productId === newProduct.productId
          ? { ...p, quantity: p.quantity + newProduct.quantity }
          : p
      );
      setCarts({ ...carts, products: updatedProducts });
    } else {
      const newCartProduct = { ...newProduct, quantity: newProduct.quantity || 1 }; 
      setCarts({ ...carts, products: [...carts.products, newCartProduct] });
    }
  }

  return (
    <CartsContext.Provider value={{ carts, updateCarts }}>
      {children}
    </CartsContext.Provider>
  );
}

export function useCarts() {
  const context = useContext(CartsContext);
  if (!context) {
    throw new Error("Erro ao obter produtos do carrinho");
  }
  return context;
}
