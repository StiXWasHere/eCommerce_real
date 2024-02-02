import ProductCard from "../assets/ProductCard"
import ProductList from "../assets/ProductList"
import Sidebar from "../assets/Sidebar"
import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"

function Store() {

    return (
        <>
        <Sidebar/>
        <ProductList />
        </>
    )
}

export default Store