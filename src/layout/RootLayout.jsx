import Navbar from "../assets/Navbar"
import Sidebar from "../assets/Sidebar"
import { Outlet } from "react-router-dom"
import '../style/index.css'

function RootLayout() {


    return(
        <>  
            <Navbar />
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout