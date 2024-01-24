import { useState, useEffect } from "react"

export const usePost = (url, productId, quantity) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const productId = productId
    const quantity = quantity

    useEffect((productId, quantity) => {

        const postProduct = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                productId: {productId},
                quantity: {quantity}
            })
        }
        const postData = async () => {
            try {
                setLoading(true)
                const res = await fetch(url, postProduct)

                if(!res.ok) {
                    throw new Error(res.status, res.status.text)
                }
                const productData = res.json()
                setData(productData)
                console.log(productData)
            }
            catch(err) {
                console.log(err)
                setError('Something went wrong!')
            }
            finally {
                setLoading(false)
            }
        }
        postData()
    }, [url])

    return {data, loading, error}
}