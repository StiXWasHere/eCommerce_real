import { createContext, useContext, useState, useEffect } from "react"

export const CartConext = createContext()

export const useCart = () => {

    const context = useContext(CartConext)

    if (!context) throw new Error ('Invalid use')
    
    return context
}

const getTotalPrice = (cart) => {
    let total = 0
    cart.forEach(item => {
        total += item.product.price * item.quantity
    })
    return total
}

const getTotalQuantity = (cart) => {
    let total = 0
    cart.forEach(item => {
        total += item.quantity
    })
    return total
}

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const totalQuantity = getTotalQuantity(cart)
    const totalPrice = getTotalPrice(cart)

    const addItem = (product) => {
        const reference = cart.find(item => item.product._id === product._id)
        const updateCart = [...cart]

        if(reference) {
            reference.quantity ++
        } else {
            updateCart.push({product, quantity: 1})
        }
        setCart(updateCart)
    }
    const decrement = (productId) => {
        const reference = cart.find(item => item.product._id === productId)
        const updateCart = [...cart]

        if (reference.quantity <= 1) {
            return
        } else {
            reference.quantity--;
        }

        setCart(updateCart)
    }
    const increment = (productId) => {
        const reference = cart.find(item => item.product._id === productId)
        const updateCart = [...cart]

        reference.quantity++;

        setCart(updateCart)
    }
    const removeItem = (productId) => {
        setCart(oldCart => oldCart.filter(item => item.product._id !== productId))
    }
    const clearCart = () => {
        setCart([])
    }

    const value = {
        cart,
        totalQuantity,
        totalPrice,
        addItem,
        decrement,
        increment,
        removeItem,
        clearCart
      }
      return (
        <CartConext.Provider value={value}>
            { children }
        </CartConext.Provider>
      )
}

export default CartContextProvider

