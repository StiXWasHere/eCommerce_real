import { useState, useEffect } from "react"

export const useFetchCart = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(url)

                if(!res.ok) {
                    throw new Error(res.status, res.statusText)
                } 

                const apiData = await res.json()
                setData(apiData)
                console.log(apiData)
            }
            catch(err) {
                console.log(err)
                setError('Something went wrong!')
            }
            finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return {data, loading, error}
}