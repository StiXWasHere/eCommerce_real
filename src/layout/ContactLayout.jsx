import { Outlet } from "react-router-dom"
import Navbar from "../assets/Navbar"
import Contact from "../pages/Contact"

function ContactLayout() {


    return(
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default ContactLayout