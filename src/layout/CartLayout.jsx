import { Outlet } from "react-router-dom"
import Navbar from "../assets/Navbar"
import '../style/cart.css'

function CartLayout() {


    return(
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default CartLayout