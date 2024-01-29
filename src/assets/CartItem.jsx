import {useState} from 'react'

export const CartItem = ({ item }) => {

  console.log("hello")
  return (
    <div className='object-container'>
        <div className="object-container-left">   
            <img src={item.product.images[0]} alt="product image" id='objectImage'/>
        </div>
        <div className="object-container-right">
            <p id='objectName'>{item.product.name}</p>
            <p id='objectPrice'>{item.product.price} kr</p>
            <p id='objectQuantity'>{item.quantity}x</p>
        </div>
    </div>
  )
}

export default CartItem
