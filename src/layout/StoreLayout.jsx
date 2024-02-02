import { Outlet } from "react-router-dom"
import Store from "../pages/Store"
import Providers from "../assets/Providers"

function StoreLayout() {


    return (
        <Providers>
            <Outlet />
        </Providers>
    )
}

export default StoreLayout