import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../style/product.css'
import '../style/index.css'


function Product() {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        const getProduct = async () => {
            try {
                const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products/${id}`)
                setProduct(res.data)
                console.log(res.data)
                setLoading(false)
            }
            catch (Error) {
                setError(true)
                console.log(Error)
                setLoading(false)
            }
        }
        getProduct()
        
    }, [id])

    const [targetImg, setTargetImg] = useState(null);
    useEffect(() => {
        if (product && product.images.length > 0 && targetImg === null) {
          setTargetImg(product.images[0]);
        }
      }, [product, targetImg])

      const handleImageClick = (image) => {
        if (image !== targetImg) {
          setTargetImg(image);
        }
      }

    

    return (
            <main>
                {
                    loading && (
                        <p>Loading...</p>
                    )
                }
                {
                    error && (
                        <p>Something went wrong!</p>
                    )
                }
                {
                    product && (
                        <div className="item">
                            <div className="item-container">
                                <div className="item-container-top">
                                    <div className="item-container-top-images">
                                        <div className="item-container-top-images-highlight">
                                            <img src={targetImg} alt="img" className='item-container-top-images-hightlight'/>
                                        </div>
                                        <div className="item-container-top-images-list">
                                            {product.images.map((image, index) => (
                                                <img key={index} src={image} alt={`img-${index + 1}`} className='item-container-top-images-list-side' onClick={() => handleImageClick(image)}/>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="item-container-top-info">
                                        <div className="item-container-top-info-title">
                                            <h2 className="item-container-top-info-title-text">{product.name}</h2>
                                        </div>
                                        <div className="item-container-top-info-price">
                                            <span className="item-container-top-info-price-text">{product.price}kr</span>
                                        </div>
                                        <div className="item-container-top-info-button">
                                            <button className="card-buttons-add" id='productButtonAddToCart'>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-container-bottom">
                                    <div className="item-container-bottom-description">
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </main>
    )
}

export default Product