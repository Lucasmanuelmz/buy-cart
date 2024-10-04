import { useCategories } from "../Context/categories";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

export default function Header() {
  const [hamburger, setHamburger] = useState(false);
  const { categories } = useCategories();
  const [mobileVisibility, setMobileVisibility] = useState('mobile-invisible');

  function toggleVisibility() {
    setMobileVisibility(prev => (prev === 'mobile-invisible' ? 'mobile-menu' : 'mobile-invisible'));
    setHamburger(prev => !prev);
  }

  return (
    <>
      <header className="header">
        <div className="navbar">
          <Link to={`/`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="#80B165" strokeWidth="2" />
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="40" fontFamily="Arial" fill="#80B165">
                ac
              </text>
            </svg>
          </Link>

          {categories.length > 0 && (
            <ul className="navlist">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link to={`/category/${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          )}

          <div onClick={toggleVisibility} className="menu-hamburguer">
            {hamburger ? (
              <IoCloseOutline size={30} color="red" />
            ) : (
              <RxHamburgerMenu size={30} color="#80B165" />
            )}
          </div>
          <Link className="ocult-icon" to='/cart'><IoMdCart  size={30} color="#80B165"/></Link>
        
        </div>
      </header>

      <div className={mobileVisibility}>
        {categories.length > 0 && (
          <ul className="nav-mobile">
            {categories.map((category, index) => (
              <li onClick={toggleVisibility} key={index}>
                <Link to={`/category/${category}`}>{category}</Link>
              </li>
            ))}
           <Link to='/cart'><IoMdCart size={30} color="#80B165"/></Link>  
          </ul>
        )}
        
      </div>
    </>
  );
}
