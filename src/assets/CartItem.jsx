import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../context/CartContext'

export const CartItem = ({ item }) => {

  const { addItem, decrement, increment, removeItem } = useCart()

  const removeItemFromCart = () => {
    removeItem(item.product._id)
  }
  const incrementItem = () => {
    increment(item.product._id)
  }
  const decrementItem = () => {
    decrement(item.product._id)
  }


  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
}
  return (
    <div className='object-container'>
        <div className="object-container-left">   
          <FontAwesomeIcon icon={faTrash} onClick={removeItemFromCart} className='close-button'></FontAwesomeIcon>
          <img src={item.product.images[0]} alt="product image" id='objectImage'/>
        </div>
          <div className="object-container-right">
            <p id='objectName'>{item.product.name}</p>
            <p id='objectPrice'>{item.product.price} kr</p>
            <div className="object-container-right-quantity">
              <button onClick={decrementItem} className="quantity-buttons">-</button>
              <p id='objectQuantity'>{item.quantity}x</p>
              <button onClick={incrementItem} className="quantity-buttons">+</button>
            </div>
            
        </div>
    </div>
  )
}

export default CartItem
