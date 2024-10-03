import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({children }) {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Erro ao buscar o carrinho");
      })
      .then((data) => {
        setCart(data);
      })
      .catch(error => console.log(error.message));
  }, []);

  function updateCart(newProduct) {
    const productExists = cart.products.find((p) => p.productId === newProduct.productId);

    if (productExists) {
      const updatedProducts = cart.products.map((p) =>
        p.productId === newProduct.productId
          ? { ...p, quantity: p.quantity + newProduct.quantity }
          : p
      );
      setCart({ ...cart, products: updatedProducts });
    } else {
      setCart({ ...cart, products: [...cart.products, newProduct] });
    }
  }

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Erro ao obter produtos do carrinho");
  }
  return context;
}
