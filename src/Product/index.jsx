import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../Button";
import Icon from '@mdi/react';
import { mdiNumericPositive1, mdiNumericNegative1 } from '@mdi/js';
import ApiComponent from "../Api";

function ProductPage() {
     const [quantity, setQuantity] = useState(0);
    const [buyMessage, setBuyMessage] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setIsProduct] = useState({});
    const [showDetail, setShowDetail] = useState(false)

    const {id} = useParams();
     useEffect(() => {
        
        async function getDetailsOfProduct() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`, { mode: 'cors' });
                if (response.ok) {
                    const product = await response.json();
                    if (product) {
                        setIsProduct(product);
                    } else {
                        throw new Error('Erro ao acessar a api')
                    }
                }
            } catch (err) {
                console.log(err.name)
            }
        }
        getDetailsOfProduct()
     }, [id]);

    const increment = true;
    const decrement = quantity > 0;

    function handleSetQuantity() {
        if (increment) {
            setQuantity(quantity + 1);
            setTotalPrice((quantity + 1) * products.price)
        } 
    }

    function decrementQuantity() {
        if (decrement) {
            setQuantity(quantity - 1);
            setTotalPrice((quantity - 1) * products.price)
        }
    }

    function handleBuy() {
         if (quantity > 0) {
            setTotalPrice(quantity * products.price)
            setTimeout(() => {
                window.location.href = `/checkout`;
            }, 100)
        } else {
            setBuyMessage('Your cart is empty!\n Add some products before proceeding to checkout.!')
            setTimeout(() => {
                setBuyMessage('')
            },6000)
        }
    }
    return (
        <main className="container">
         <div className="d-container" key={products.id}>
            <div className="imag">
            <h2>{products.title}</h2>
                <img className="imgs" src={products.image} alt={products.description} />
                <Button text='Show about' className="car-btn" onClick={() => setShowDetail(!showDetail)} />
                 {showDetail &&
            <p>{products.description}</p>}
            </div>
           <div className="new-card" >
            <h2>${products.price}</h2>
            <div className="btn-container">
                <Button className='increm-decrem' text={<Icon path={mdiNumericPositive1} size={1.3} />} onClick={handleSetQuantity} />
                <input className="input" type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} /> 
                <Button className='increm-decrem' text={<Icon path={mdiNumericNegative1} size={1.3} />} onClick={decrementQuantity} />
            </div>
                <div>
                    <h2>Total: ${totalPrice}</h2>
                </div>
            
                <Button className='car-btn' text='Buy now' onClick={handleBuy} />
          <p>{buyMessage}</p>
        </div>
        </div>
        <ApiComponent />
        </main>
    )
}
export default ProductPage;