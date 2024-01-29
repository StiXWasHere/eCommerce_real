import { createContext, useContext, useState, useEffect } from "react"

export const CartConext = createContext()

export const useCart = () => {

    const context = useContext(CartConext)

    

}