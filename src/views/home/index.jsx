import { Link } from "react-router-dom";
import { useProducts } from "../../Context/products"

export default function HomePage() {
  const {products} = useProducts();
  return(
    <main>
      <div style={{maxWidth: '800px', backgroundColor: '#e2d4d4', color: '#d40808', margin: '20px auto', borderRadius: '8px', padding: '5px'}}>
        <p style={{textAlign: 'center'}}>I am currently maintaining this project.</p>
      </div>
      {products.length > 0 && (
      <div className="container">
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
      </div>
      )}
    </main>
  )
}


