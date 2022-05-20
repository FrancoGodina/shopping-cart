import "./css/cart.css"
import { Link } from "react-router-dom"

function Cart(props) {

    const totalPrice = props.cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
    );

    return(
        <div className="cart">
            <div className="cartHeader">Cart Items</div>
            <div className="clearCart">
                {props.cartItems.length >=1 && (
                    <button className="clearCartButton" onClick={props.handleCartClear}>CLEAR CART</button>
                )}
            </div>

            {props.cartItems.length === 0 && (
                <div className="cartEmpty"> No items added yet. </div>
            )}

            <div >
                {props.cartItems.map((item) => (
                    <div key={item.id} className="cartItemList">
                        <img
                            className="cartItemImg"
                            src={item.image} 
                            alt={item.name} 
                        />
                        <div className="cartItemName">{item.quantity} x {item.name}</div>
                        <div className="cartItemFunction">
                            <button 
                                className="minusButton"
                                onClick={() => props.handleRemoveItem(item)}
                            >
                                    -
                            </button>
                            <button 
                                className="plusButton"
                                onClick={() => props.handleAddItem(item)}
                            >
                                    +
                            </button>
                        </div>
                        <div className="itemPrice">
                            ${item.quantity * item.price}
                        </div>
                    </div>
            ))}
            </div>

            <div className="totalPrice">
                Total price: ${totalPrice}
                {props.cartItems.length >=1 && (
                    <Link to="/" className="checkout">Checkout</Link>)}
            </div>
        </div>
    )
}

export default Cart;