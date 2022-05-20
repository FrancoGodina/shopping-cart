import { Outlet, Link } from "react-router-dom"

function Header() {
    return(
        <div>
            <Link to="/" className="page-title"><h1>FAKE SHOP</h1> </Link>
            <nav className="navbar">
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Header;