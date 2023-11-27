import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom";

const Root = () =>{

    return (
        <main>
            <Navbar />
            <Outlet />
        </main>

    )
}

export default Root;