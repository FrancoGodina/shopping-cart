import { Outlet, Link } from "react-router-dom"
import "./css/header.css"

function Header(props) {
    return(
        <div>
            <nav className="header">
                <Link to="/" className="page-title"><h1>FAKE SHOP</h1> </Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart:{props.cartItems.length}</Link>

            </nav>
            <Outlet />
        </div>
    )
}

export default Header;