import { useFetch } from '../../hooks/useFetch'
import { useState, useEffect} from 'react'
import {AdressForm} from '../forms/AdressForm'
import {UserForm} from '../forms/UserForm'
import {PaymentForm} from '../forms/PaymentForm'
import CartItem from '../assets/CartItem'
import { useCart } from '../context/CartContext'
import { userValidate } from '../utils/FormUserValidation'
import { adressValidate } from '../utils/FormAdressValidation'
import { paymentValidate } from '../utils/FormPaymentValidation'

function Cart() {

    const { cart, totalPrice, totalQuantity, clearCart } = useCart()

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
  
    const placeOrder = async () => {
        
        const userForm = document.getElementById('UserForm')
        const adressForm = document.getElementById('AdressForm')
        const paymentForm = document.getElementById('PaymentForm')
        const formErrors = document.getElementsByClassName('error')
        console.log(formErrors.length)
          
        if (userForm && adressForm && paymentForm) {
            
            const formPromises = [              
            userForm.requestSubmit(),
            adressForm.requestSubmit(),
            paymentForm.requestSubmit()
            ]

            try {

                await Promise.all(formPromises)

                if(cart.length  !== 0 && formErrors.length === 0) {

                const orderItems = cart.map((item) => ({
                    productId: item.product._id,
                    quantity: item.quantity,
                    }))

                    const orderData = {
                        products: orderItems,
                    }
                
                    try {
                    
                    const res = await fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(orderData),
                    })
                
                    if (res.ok) {
                        setSuccess('Order has been placed!')
                        setError('')
                    } else {
                        setError('Order failed to send')
                        console.log(res.status)
                    }
                    } catch (err) {
                        setError('Order failed to send')
                    }
                }
            
                else {
                    if (formErrors.length > 0) {
                        setError('Invalid forms')
                        setSuccess('')
                        return
                    } else {
                        setError('Cart is empty')
                        setSuccess('')
                        return
                    } 
                }
            } catch {
                console.log('Error')
            }        
        } 
    }
         
    return (
        <div className="cart-body">
            <div className="cart">
                <div className="cart-container">
                    <div className="cart-container-forms">
                        <div className="cart-container-forms-user">
                            <UserForm />
                        </div>
                        <div className="cart-container-forms-adress">
                            <AdressForm />
                        </div>
                        <div className="cart-container-forms-payment">
                            <PaymentForm />
                        </div>

                    </div>
                    <div className="cart-container-oversight">
                        <h2 className="cart-container-oversight-label">Your cart</h2>
                        <div className="cart-container-oversight-container">
                        { cart.map(item => (
                            <CartItem key={'cart_' + item.product._id} item={item}/>
                        ))}
                        </div>
                        <div className="cart-container-oversight-price">
                            <p>Total price:{totalPrice}kr</p>
                            <button onClick={clearCart} className="clear-cart">Clear cart</button>
                        </div>
                    </div>
                </div>
                <div className="cart-bottom">
                    <button onClick={placeOrder} className="card-buttons-add">Place order</button>
                    {
                        error && <p className="cart-error">{error}</p>
                    }
                    {
                        success && <p className="cart-success">{success}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart