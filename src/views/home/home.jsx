import { Link } from "react-router-dom";
import { useProducts } from "../../Context/products"
import tv from '../../assets/tv.png'

export default function LandingPage() {
  const {products} = useProducts();
  const fitTchirts = products.filter(product => product.id === 2);
  const whiteGold = products.filter(product => product.id === 7);
  const newTv = products.filter(product => product.id === 14);
  const removeble = products.filter(product => product.id === 16);
  const womenChirt = products.filter(product=> product.id === 20)
  const productsFilter = [...fitTchirts, ...whiteGold, ...newTv, ...removeble, ...womenChirt]; 

  return(
   <main className="main-land">
    <section className="section">
      <div className="div-section">
      <div className="header-section">
       <h1>Fack shop</h1>
       <p>Your trusted online store to find high-quality products at unbeatable prices. At Fackshop, we offer a wide selection of electronics, fashion, accessories, and home goods, all in one place. Browse through our exclusive collections, take advantage of special deals, and enjoy a convenient and secure shopping experience.</p>
       <div style={{width: 120}}>
       <Link to='products/page' className="button">Shop now</Link>
       </div>
      </div>
        <div className="card">
        <img className="image" src={tv} alt="" />
      </div> 
      </div>
    </section>
    <section>
      <h2 style={{textAlign: 'center'}}>New Arrivals & Trends</h2>
      <div className="container">
        {productsFilter.map(product => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`}>
           <img className="card-image" src={product.image} alt={product.title} />
           </Link>
           <h4>${product.price}</h4>
         </div>
        ))}  
      </div>
    </section>
    <section className="citation-section">
      <div className="citation">
      <q style={{fontWeight: 600, lineHeight: 1.5}}>Fackshop exceeded all my expectations! I bought a TV and some home accessories, and I was impressed with the quality of the products and the fast delivery. The website is easy to navigate, and the deals are truly competitive. I will definitely shop here again. I highly recommend it to everyone!</q>
      <span style={{textAlign: 'right', display: 'block', marginTop: '25px'}}>John Mario</span>
    </div>
    </section>
   </main>
  )
}