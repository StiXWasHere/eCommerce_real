import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Link, NavLink } from "react-router-dom"
import Carousel from './Carousel.jsx'
import { useCart } from '../context/CartContext.jsx'

export const ProductCard = ({ product }) => {

    const { addItem } = useCart()
    const [addSuccess, setAddSuccess] = useState('')

    const handleClick = (e) => {
        addItem(product)
        setAddSuccess('Product added to cart')
    }


    return (
        <div className='card'>
            <div className="card-title">
                <h1 id='productTitle'>{product.name}</h1>
            </div>
            <div className='card-image'>
                <Carousel images={product.images}/>
            </div>
            <div className="card-text">
                <span id='productCategory'>Category: {product.category}</span>
                <span id='productPrice'>{product.price}kr</span>
                <p id='productDescription'>{product.description}</p>
            </div>
            <div className="card-buttons">
                {
                    addSuccess && <p className="success-stat">{addSuccess}</p>
                }
                <button onClick={handleClick} className="card-buttons-add" id='productButtonAddToCart'>Add to cart</button>
                <NavLink to={`/product/${product._id}`} className='nav-link'><button className="card-buttons-add">Details</button></NavLink>
            </div>
        </div>
    )
}

export default ProductCard