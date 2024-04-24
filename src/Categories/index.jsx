import { useState, useEffect } from "react";
import BuyCart from "../BuyCart";
import { useParams } from "react-router-dom";

export default function Category() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        async function getCategoryToHeader() {
            try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
                if (response.ok) {
                  const product = await response.json();
                    setProducts(product);
                } else {
                 throw new Error('Não conseguimos acessar os dados')
              }
            }
            catch (error) {
                console.log(error.name);
                console.log(error.message);
            }
        }
        getCategoryToHeader()
    }, [category])

    return (
        <main className="container">
            <div className="men-container">
                {products.map((category, index) => (
                    <div key={index}>
                        <BuyCart
                            title={category.title}
                            id={category.id}
                            image={category.image}
                            price={category.price} />
                        </div>
                    ))
                    }
                </div>
        </main>
    )
}