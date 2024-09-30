import { Link } from "react-router-dom";
import { useProductByCategory } from "../../Context/prodCategory";

export function NewProductCategory() {
  const {productCategory} = useProductByCategory();
  console.log(productCategory)
  return(
    <div className="container">
      {productCategory && (
        <>
       {productCategory.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt="" className="card-image" />
          <div className="card-desc">
            <h4>{product.title}</h4>
            <Link className="button" to={`/product/${product.id}`}>Go to cart</Link>
          </div>
        </div>
       ))}
       </>
      )}
    </div>
  )
}