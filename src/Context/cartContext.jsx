import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
  const [cart, setCart] = useState([]);
  console.log(cart)

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
    .then(response => {
      if(response.ok) {
        return response.json()
      }
    })

    .then(data => {
      setCart(data)
    })
    
    .catch(error => console.log(error.message))
  },[]) 

 return(
  <CartContext.Provider value={{cart, setCart}}>
    {children}
  </CartContext.Provider>
 )
}

export function useCart() {
  const context = useContext(CartContext);
  if(!context) {
    throw Erro ('Erro ao obter produtos do carinho')
  }
  return context;
}