import CartContextProvider from "../context/CartContext"

const Providers = ({ children }) => {
  return (
    <>
        <CartContextProvider>
            { children }
        </CartContextProvider>
    </>
  )
}

export default Providers