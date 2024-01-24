import ProductCard from "../assets/ProductCard"
import { useState, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"
import { Link, NavLink } from "react-router-dom"

function Home() {
    const [url, setUrl] = useState('https://js2-ecommerce-api.vercel.app/api/products')
    const {data, loading, error} = useFetch(url)

    if(error) return <p>{error}</p>

    if(loading || data === null) return <p>Loading...</p>

    const handleClick = () => {
        console.log("clicked")
    }

    const getProductDeals = (data) => {
        const validProducts = data.filter(product => product.price != null);
      
        const sortedProducts = validProducts.sort((a, b) => a.price - b.price);
      
        const productDeals = sortedProducts.slice(0, 3);
      
        return productDeals;
    }
    const productDeals = getProductDeals(data);

    return(
        <div className="home-page">
            <div className="home-page-items">
                <h2 className="home-page-title">Featured items</h2>
                <div className="product-list-home">
                    {
                        data && data.slice(0, 3).map(product => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                    }
                </div>
                <button className="home-page-button" onClick={handleClick}><NavLink to="/store" className="nav-link">Show more</NavLink></button>
            </div>
            <div className="home-page-items">
                <h2 className="home-page-title">Best deals</h2>
                <div className="product-list-home">
                    {
                        productDeals.map(product => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home