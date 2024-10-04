import { Link } from "react-router-dom";
import { useProducts } from "../../Context/products"
import { Fragment } from "react";

export default function HomePage() {
  const {products} = useProducts();
  return(
    <main>
      <div className="container">
      <h3 style={{marginBottom: 50, 
        color: '#333', 
        fontSize: 26,
        alignSelf: "flex-start"
        }}>All products</h3>
      <div className="content">
        
      {products.length > 0 && (
        <Fragment>
        {products.map(product => (
          <div key={product.id} className="product">
            <Link className="link-product" to={`/product/${product.id}`}>
            <img className="card-image" src={product.image} alt="" />
            </Link>
            <div style={{width: '100%', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  boxSizing: 'border-box'
}
  }> 

              <h4><Link style={{textDecoration: 'none',
                color: '#333', fontSize: '14px'
              }} to={`/product/${product.id}`}>{product.title}</Link></h4>
              <h3 style={{padding: '5px', textAlign: 'right'}}><Link style={{textDecoration: 'none',
                color: '#333', fontSize: '14px'
              }} to={`/product/${product.id}`}>${product.price}</Link></h3>
              </div>
          </div>
        ))}
        </Fragment>
      )}
      </div>
      </div>
    </main>
  )
}


