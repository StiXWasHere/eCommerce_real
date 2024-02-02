import { useState } from 'react'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartItem } from "./CartItem"
import { useCart } from '../context/CartContext'
import { NavLink } from 'react-router-dom'



function DropDownCart() {

  const { cart, totalPrice, totalQuantity } = useCart()

  const [visibility, setVisibility] = useState("hidden")

  const handleClick = (e) => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <div onClick={handleClick} className="drop-down">
        <FontAwesomeIcon onMouseOver={() => setVisibility("visible")}  icon={faCartShopping} id="cart"/>
        <div className="drop-down-container" style={{ visibility: visibility }} onMouseLeave={() => setVisibility("hidden")}>
            <div className="drop-down-container-list">
                { cart.map(item => (
                  <CartItem key={'cart_' + item.product._id} item={item}/>
                ))}
            </div>
            <div className="drop-down-container-values">
              <p id='cartPrice'>Total price: {totalPrice}kr</p>
              <NavLink to="/checkout" className="nav-link"><button className="card-buttons-add" id='goToCheckout'>Go to checkout</button></NavLink>
            </div>
            
        </div>
    </div>
  )
}

export default DropDownCart