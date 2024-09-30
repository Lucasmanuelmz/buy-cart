import { ProductProvider, useProduct } from "../../Context/product";
import { useParams, useNavigate } from "react-router-dom";

 export function ContextUser() {
  const {id} = useParams()
  return(
    <ProductProvider id={id}>
      <SingleProduct />
    </ProductProvider>
  )
}

export default function SingleProduct() {
  const {id} = useParams();
  const navigate = useNavigate();
  function addToCart() {
   navigate(`/cart/product/${id}`)
  }
  const {product} = useProduct()
  return(
    <main className="product-container">
    <div className="product-image">
       <img className="card-image" src={product.image} alt="" />
    </div>
    <div className="product-details">
       <h4>{product.title}</h4>
       <h4>${product.price}</h4>
       <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
    <button onClick={addToCart} style={{marginTop: '25px'}} className="button">Add to cart</button>
    </div>
    
    </main>
  )
}