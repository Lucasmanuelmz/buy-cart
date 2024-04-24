import {useEffect, useState} from "react"
import { data } from "../Data";
import Button from "../Button";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link, useNavigate} from "react-router-dom";
import { FaPercent } from "react-icons/fa";
import { MdLocalShipping, MdSpatialTracking } from "react-icons/md";
import { TbArrowsSplit2 } from "react-icons/tb";
import { GiCoffeeCup } from "react-icons/gi";

export default function Home() {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()
    
    const scrollPrev = index > 0;
    const scrollNext = index < data.length - 1;

    const imgData = data[index];

    function handleImageNext() {
        if (scrollNext) {
                setIndex(index + 1)
        } 
    }

    function handleImagePrev() {
        if (scrollPrev) {
            setIndex(index - 1)
        }
    }
     
    function handleNewPage() {
    navigate('/api')
    }

    useEffect(() => {
        const sliderText = setInterval(() => {
             setIndex(index => (index + 1) % data.length)
        }, 8000)

        return () => {
            clearInterval(sliderText)
        }
    }, [data.length])
    
    return (
        <main className="home-container">
            
        <div className="carrossel">
          <Button
            id='prev'
            className='prev-and'
            text={<GrPrevious size={36} color="white" />}
                    onClick={handleImagePrev} />
                    <img
                        key={imgData.id} 
                        className='my-image'
                        src={imgData.image}
                        alt="carrossel" />
          <div className="content-c">
            <h2 className="text">Do not miss the unbeatable offers in our collection.</h2>
            <button className="car-btn" onClick={handleNewPage}>Go now</button>
          </div>
            <Button
              id='next'
              className='next-and'
              text={<GrNext size={36} color="white" />}
              onClick={handleImageNext} />
            </div>
            <div className="card-h">
                <div className="card-now">
                    < FaPercent className="icon" size={50} />
                    <div>
                       <p className="span">Ensure 90% OFF</p>
                        <p className="span">1st Purchase |</p>
                        <p className="span">Coupon: PROMO90</p>
                    </div>
                </div>
                <div className="card-now">
                    < MdLocalShipping className="icon" size={50} />
                    <div>
                        <p className="span">FREE SHIPPING</p>
                        <p className="span">On purchases over $ 900</p>
                    </div>
                </div>
                <div className="card-now">
                    < TbArrowsSplit2 className="icon" size={50} />
                    <div>
                        <p className="span">Easy installement</p>
                        <p className="span">Split in up to 20x interest-free!</p>
                    </div>
                </div>
                <div className="card-now">
                    < MdSpatialTracking className="icon" size={50} />
                    <div>
                        <p className="span">TRACK ORDER</p>
                        <p className="span">Bought on the website, track your order</p>
                    </div>
                </div>
                <div className="card-now">
                    < GiCoffeeCup className="icon" size={50} />
                    <div>
                        <p className="span">FREE AND EASY EXCHANGE</p>
                        <p className="span"><Link to="/">make your</Link>exchange!</p>
                        <p className="span">Coupon: PROMO90</p>
                    </div>
                </div>
        </div>
        <h2 className="subtitle">New Arrivals</h2>
            <div className="card-h">
                <div className="cards">
                    <img className="cards-img"
                        src="/img/tchirt (4).png"
                        alt="Simulation dress-0" />
                    <div className="btn-new">
                        <p className="descri-text">Explore our variety of shirts and dress shoes for formal events.</p>
                        <Button className='car-btn'  onClick={handleNewPage} text='Explore now' />
                    </div>
                </div>
                <div className="cards">
                    <img className="cards-img"
                        src="/img/smart.png"
                        alt="simulation-1" />
                    <div className="btn-new">
                        <p className="descri-text">Discover the latest electronics and technologies in our online store.</p>
                        <Button className='car-btn'  onClick={handleNewPage} text='Explore now' />
                    </div>
                </div>
                <div className="cards">
                    <img className="cards-img"
                        src="/img/shoes.png"
                        alt="Simulation-2" />
                    <div className="btn-new">
                        <p className="descri-text">Discover our leisure shoes, perfect for moments of leisure and relaxation.</p>
                        <Button className='car-btn'  onClick={handleNewPage} text='Explore now' />
                    </div>
                </div>
                <div className="cards">
                    <img className="cards-img"
                        src="/img/trauses-wo.png"
                        alt="simulation-3" />
                    <div className="btn-new">
                        <p className="descri-text">Renove seu guarda-roupa com nossas carteiras sociais femininas, feitas para impressionar.</p>
                        <Button className='car-btn'  onClick={handleNewPage} text='Explore now' />
                    </div>
                </div>
                <div className="cards">
                    <img className="cards-img"
                        src="/img/tchirt.png"
                        alt="simulation-4" />
                    <div className="btn-new">
                        <p className="descri-text">Enjoy the day with comfort and style wearing our leisure t-shirts.</p>
                        <Button className='car-btn'  onClick={handleNewPage} text='Explore now' />
                    </div>
                </div>
            </div>
            <div className="newer-card">
                <figure className="big-card" >
                   <img className="cards-img"
                        src="/img/trauses-wo (1).png"
                        alt="simulation-4" />
                    <div className="btn-new">
                        <p className="descri-text">Add a touch of elegance with our women's wallets.</p>
                        <Button className='car-btn'  onClick={handleNewPage} text='Explore now' />
                    </div>
                </figure>
                <div className="news-card" >
                    <div className="big-card" >
                         <img className="cards-img"
                        src="/img/tchirt (2).png"
                            alt="simulation-3" />
                        <div className="btn-new">
                        <p className="descri-text">Renew your wardrobe with our women's social wallets, made to impress.</p>
                        <Button className='car-btn'  onClick={handleNewPage} text='Explore now' />
                    </div>
                    </div>
                    <div className="big-card">
                         <img className="cards-img"
                        src="/img/tchirt (3).png"
                            alt="simulation-3" />
                        <div className="btn-new">
                        <p className="descri-text">Enjoy the day with comfort and style wearing our leisure t-shirts.</p>
                        <Button className='car-btn'  onClick={handleNewPage} text='Explore now' />
                    </div>
                    </div>
                    <div className="big-card">
                         <img className="cards-img"
                        src="/img/dressnew.png"
                            alt="simulation-3" />
                        <div className="btn-new">
                        <p className="descri-text">Rock the parties with our stunning social dresses</p>
                        <Button className='car-btn'  onClick={handleNewPage} text='Explore now' />
                    </div>
                    </div>
                    <div className="big-card">
                         <img className="cards-img"
                        src="/img/dressnew (1).png"
                            alt="simulation-3" />
                        <div className="btn-new">
                        <p className="descri-text">Enjoy the day with comfort and style wearing our leisure t-shirts.</p>
                        <Button className='car-btn'  onClick={handleNewPage} text='Explore now' />
                    </div>
                    </div>
                </div>
            </div>

        </main>
    )
}