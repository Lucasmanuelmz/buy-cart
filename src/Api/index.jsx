import { useEffect, useState } from "react"
import BuyCart from "../BuyCart";

function ApiComponent() {
    const [myProducts, setMyProducts] = useState([]);
    const [menProducts, setMensProducts] = useState([]);
    const [womenProducts, setWomenProducts] = useState([]);
    const [isElectronics, setIsElectronics] = useState([]);
    const [isJewelery, setIsJewelery] = useState([]);
 
    useEffect(() => {
        
        async function getCategories() {
            const response = await fetch('https://fakestoreapi.com/products/', { mode: 'cors' });
            try {
                if (response.ok) {
                    const allProducts = await response.json();
                    if (allProducts) {
                        setMyProducts(allProducts);
                    } else {
                        throw new Error
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
        getCategories()
    }, []);

    useEffect(() => {
        const menProduct = myProducts.filter((product) => product.category === "men's clothing");
        setMensProducts(menProduct);
        const womenProduct = myProducts.filter(product => product.category === "women's clothing");
        setWomenProducts(womenProduct);
        const electronicsProduct = myProducts.filter(product => product.category === 'electronics');
        setIsElectronics(electronicsProduct);
        const jeweleryProduct = myProducts.filter(product => product.category === "jewelery");
        setIsJewelery(jeweleryProduct);
    }, [myProducts])
    console.log(myProducts)
   
    return (
        <>
        <main className="container">
            <h3>Men cloths</h3>
            <section className="men-container">
                {menProducts.map((product, index) => (
                <div key={index}>
                    <BuyCart
                        id={product.id}
                        rating={product.rating.rate}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price} /> 
                </div>
                ))
                }
            </section>
               <h3>Women cloths</h3>
            <section className="women-container">
               
             {womenProducts.map((product, index) => (
                <div key={index}>
                     <BuyCart
                         id={product.id}
                         rating={product.rating.rate}
                         title={product.title}
                         description={product.description}
                         image={product.image}
                         price={product.price} /> 
                </div>
             ))}
            </section>
            <h3>Electronics</h3>
            <section className="women-container">
             {isElectronics.map((product, index) => (
                 <div key={index}>
                     <BuyCart
                         id={product.id}
                         rating={product.rating.rate}
                         title={product.title}
                         description={product.description}
                         image={product.image}
                         price={product.price} /> 
                </div>
             ))}
            </section>
            <h3>Jewelery</h3>
             <section className="men-container">
            {isJewelery.map((product, index) => (
                <div key={index}>
                    <BuyCart
                        id={product.id}
                        rating={product.rating.rate}
                        title={product.title}
                        description={product.description}
                        image={product.image}
                        price={product.price} /> 
                </div>
            ))}
            </section>
            </main>
        </>
    )
}
export default ApiComponent;