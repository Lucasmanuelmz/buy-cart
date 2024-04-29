import { PropTypes } from "prop-types";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating";

export default function BuyCart({ id,
    price, image, description, title, rating }) {
    
    const navigate = useNavigate()
     
    function handleBuy() {
            setTimeout(() => {
                navigate(`/product/${id}`);
            }, 1000)
    }

    return (
        <>
        <div  onClick={handleBuy} className="card" key={id}>
        <figure className="img-container" >
            <img className="img-product" src={image} alt={description} />    
        </figure>
            <div className="text-container">
                <h3>Price: $ {price}</h3>
                <figcaption>{title}</figcaption>
                <div className="rating">
                    <StarRating rating={rating} />
                    <span>{rating}</span>
                </div>
                
                <Button className='car-btn' onClick={handleBuy} text='Add to cart' />
            </div>
                </div>
        </>
     )
}

BuyCart.propTypes = {
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number
};