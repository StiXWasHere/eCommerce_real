

function CartCard({product}) {

    return (
        <div className="card">
            <div className="card-title">
                <p id="product-title">{product.name}</p>
            </div>
            <div className="card-img">
                <img id="product-img" src={product.images[0]} alt="image" />
            </div>
            <div className="card-price">
                <p id="product-price">{product.price}</p>
            </div>
        </div>

    )
}

export default CartCard