import { Link } from "react-router-dom";
import { useProductByCategory } from "../../Context/prodCategory";

export function NewProductCategory() {
  const { productCategory } = useProductByCategory();
  console.log(productCategory);

  return (
    <div className="container">
      {productCategory && (
        <div className="content">
          {productCategory.map((product) => (
            <div key={product.id} className="product">
              <Link
                style={{
                  color: '#000',
                  textDecoration: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}
                to={`/product/${product.id}`}
              >
                <img src={product.image} alt={product.title} className="card-image" />
                <h4>{product.title}</h4>
                <h4>${product.price}</h4>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
