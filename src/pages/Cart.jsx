import { useFetch } from '../../hooks/useFetch'
import { useState, useEffect} from 'react'
import {AdressForm} from '../forms/AdressForm'
import {UserForm} from '../forms/UserForm'
import {PaymentForm} from '../forms/PaymentForm'
import CartCard from '../assets/CartCard'

function Cart() {
    const [url, setUrl] = useState('https://js2-ecommerce-api.vercel.app/api/orders')

    const {data, loading, error} = useFetch(url)

    if(error) return <p>{error}</p>

    if(loading) return <p>Loading...</p>

    return (
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
                        {
                        data && data.map(product => (
                            <CartCard key={product.id} product={product}/>
                        ))
                        }
                    </div>
                    <div className="cart-container-oversight-price">

                    </div>
                </div>
            </div>
            <button className="cart-submit">Submit</button>
        </div>
    )
}

export default Cart