import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" >Jom</Link>
                </li>
                <li>
                    <Link to="/pelos">Pelos</Link>
                </li>
                <li>
                    <Link to="/app">App</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;