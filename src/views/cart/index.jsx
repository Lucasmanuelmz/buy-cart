import { useCart } from "../../Context/cartContext";

export default function Cart() {
  const { cart } = useCart();

  return (
    <main>
      {cart?.products?.length > 0 ? (
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cart.products.map((product) => (
            <div key={product.productId}>
              <h4>Product ID: {product.productId}</h4>
              <p>Quantity: {product.quantity}</p>
              {/* Aqui você pode buscar mais detalhes do produto, como título e descrição */}
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
        <p style={{color: '#333333'}}>Your cart is empty.</p>
        </div>
      )}
    </main>
  );
}
