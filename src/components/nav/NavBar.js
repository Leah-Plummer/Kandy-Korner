import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    const kandyUser = localStorage.getItem("kandy_user")
    const kandyUserObj = JSON.parse(kandyUser)

    return (
        <ul className="navbar">
            <li>
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            {
                kandyUserObj.staff ?
                    <li>
                        <Link className="navbar__link" to="/products">Products</Link>
                    </li>
                    : ""
            }
            <Link className="navbar__link" to="/addProduct">Stonks</Link>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>

        </ul>
    )
}