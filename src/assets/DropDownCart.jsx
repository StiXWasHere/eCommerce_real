import { useState } from 'react'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartItem } from "./CartItem"

export const cartItems = [
  {
    product: {
      _id: "658af3e7d711cabe3c94045e",
      name: "HP Pavilion 15-eh3004no",
      price: 11999,
      images: ["https://www.komplett.se/img/p/1200/1247160.jpg"],
    },
    quantity: 1
  },
  {
    product: {
      _id: "658af3e7d711cabe3c94045e",
      name: "HP Pavilion 15-eh3004no",
      price: 11999,
      images: ["https://www.komplett.se/img/p/1200/1247160.jpg"],
    },
    quantity: 1
  },
]

function DropDownCart() {

    const [visibility, setVisibility] = useState("hidden")
    console.log(cartItems)

  return (
    <div className="drop-down">
        <FontAwesomeIcon onMouseOver={() => setVisibility("visible")}  icon={faCartShopping} id="cart"/>
        <div className="drop-down-container" style={{ visibility: visibility }} onMouseLeave={() => setVisibility("hidden")}>
            <div className="drop-down-container-list">
                { cartItems.map(item => (
                  <CartItem  item={item}/>
                ))}
            </div>
            <div className="drop-down-container-values">
              <p id='cartPrice'>Total price: 0 kr</p>
              <button className="card-buttons-add" id='goToCheckout'>Go to checkout</button>
            </div>
            
        </div>
    </div>
  )
}

export default DropDownCart