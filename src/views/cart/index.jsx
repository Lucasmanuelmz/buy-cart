import { useCart } from "../../Context/cartContext";

export default function Cart() {
  const {cart} = useCart();

  return(
    <main>
      {cart.length > 0 && (
      <div className="container">
      {cart.map(cart => (
       <div key={cart.id}>
        <div>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
          {cart.products.map(product => {
            <div key={product.productId}>{product.quantity}</div>
          })}
          </div>
       </div>
      ))}
      </div>
      )}
    </main>
  )
}