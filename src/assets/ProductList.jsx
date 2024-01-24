import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { ProductCard } from './ProductCard'

function ProductList () {
    const [url, setUrl] = useState('https://js2-ecommerce-api.vercel.app/api/products')


    const {data, loading, error} = useFetch(url)

    if(error) return <p>{error}</p>

    if(loading) return <p>Loading...</p>

    return (
        <div className="product-list">
            {
                data && data.map(product => (
                    <ProductCard key={product.id} product={product}/>
                ))
            }
        </div>
    )
}

export default ProductList