import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import Button from '../Button'
import Slider from "../Slider";

export default function Header() {
    const [products, setProducts] = useState([]);
    const [visibility, setVisibility] = useState(true)
    const [headerVisibility, setHeaderVisibility] = useState('header');

    useEffect(() => {
        async function getCategories() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products`, { mode: 'cors' });
                if (!response.ok) {
                    throw new Error('Nao conseguimos acessar os dados')
                } else {
                    const products = await response.json();
                    console.log(products)
                    if (products) {
                        
                        const categories =[...new Set(products.map((product) => product.category))] 
                        setProducts(categories);
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
        getCategories()
    }, []);
    
    function handleVisibility() {
        visibility ? setVisibility(false) : '';
    }

    function visibilityHeader() {
        if (headerVisibility === 'header') {
            setHeaderVisibility('invi-header')
        } else {
            setHeaderVisibility('header')
        }
    }

    return (
        <>
           
            <header>
                {visibility &&
                    <div className="promo">
                        <div></div>
                            <Slider />
                        <div>
                            <Button className='remove-p' aria-label='Close button' text={<IoMdClose id="icon" color="white" size={24} />} onClick={handleVisibility} />
                        </div>
                    </div>}
                <button className="button" onClick={visibilityHeader}>{headerVisibility === 'header' ? <RxHamburgerMenu size={24} color="#fefefe" /> : <IoMdClose color="#333" size={24} /> }</button>
                <div className="header-container">
            <nav className={`nav-bar ${headerVisibility}`}>
                <Link className="categories" to='/'>Home</Link>
                {products.map((category, index) => (
                <Link className="categories" key={index} to={`/categories/${category}`}>{category}</Link> 
                ))
                }
                <Link className="categories" to="/product/5"><MdOutlineAddShoppingCart size={26} /></Link>
                    </nav>
                </div>
            </header>
        </>    
    )
}