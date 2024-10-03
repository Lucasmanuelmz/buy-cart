import { ProductProvider, useProduct } from "../../Context/product";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";


export function ContextUser() {
  const { id } = useParams();
  return (
    <ProductProvider id={id}>
      <SingleProduct />
    </ProductProvider>
  );
}

export default function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { product } = useProduct();

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };
  
  const handleAddToCart = () => {
    setTimeout(() => {
      navigate(`/cart`);
    }, 300) 
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  if (!product.id) { 
    return <div>Product not found.</div>;
  }

  return (
    <main className="product-container">
      <div className="product-image">
        <img className="card-image" src={product.image} alt={product.title} />
      </div>
      <div className="product-details">
        <h4>{product.title}</h4>
        <h4>${product.price.toFixed(2)}</h4>
        <p>{product.description}</p>
        <input
          aria-label="Quantidade"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          style={{
            width: 50,
            padding: 8,
            border: "solid gray 0.345px",
            borderRadius: 6,
            textAlign: "center",
          }}
        />
        <button
          onClick={handleAddToCart}
          style={{ marginTop: "25px" }}
          className="button"
          disabled={quantity < 1}
        >
          Add to cart
        </button>
      </div>
    </main>
  );
}
