import Navbar from "../assets/Navbar"
import Sidebar from "../assets/Sidebar"
import { Outlet } from "react-router-dom"
import '../style/index.css'
import '../style/dropDown.css'
import '../style/product.css'
import '../style/cart.css'
import Providers from "../assets/Providers"

function RootLayout() {


    return(
        <Providers>  
            <Navbar />
            <main>
                <Outlet />
            </main>
        </Providers>
    )
}

export default RootLayout