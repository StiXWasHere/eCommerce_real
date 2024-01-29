import { useState, useEffect } from "react";
import _debounce from 'lodash/debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom"
import DropDownCart from "./DropDownCart"
import { cartItems } from "./DropDownCart"
import { CartItem } from "./CartItem"

function Navbar() {
    const [navClass, setNavClass] = useState('fadeIn');

    useEffect(() => {
      let lastScrollY = window.scrollY;
  
      const handleScroll = _debounce(() => {
        const currentScrollY = window.scrollY;
  
        if (lastScrollY < currentScrollY) {
          console.log('scrolling down')
          setNavClass('fadeOut');
        } else {
            console.log('scrolling up')
          setNavClass('fadeIn');
        }
  
        lastScrollY = currentScrollY;
      }, 200); // Adjust the debounce time as needed
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        // Clean up the event listener on component unmount
        window.removeEventListener('scroll', handleScroll);
      };
    }, [navClass]);

    return (
        <header className={navClass}>
            <div className='navbar' id="navbar">
                <div className="navbar-company">
                    <h1 id="companyName"><NavLink to="/" className="nav-link">TechSpec</NavLink></h1>
                    <img src="/src/images/cogwheel.jpg" alt="cogwheel" id="logo"></img>
                </div>
                <div className="navbar-links">
                    <ul className="navbar-links-list">
                        <li id="contact"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                        <li id="store"><NavLink to="/store" className="nav-link">Store</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-icons">
                    <FontAwesomeIcon icon={faUser} id="user"/>
                    <NavLink to="/checkout" className="nav-link"><DropDownCart /></NavLink>
                </div>
            </div>
        </header>
    )
}

export default Navbar