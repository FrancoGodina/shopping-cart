import data from "./data"
import ShopCard from "./ShopCard"
import { Link } from "react-router-dom";

function Shop (props) {

    const {dataItems} = data;
    return(
        <div className="shop">
            <div className="itemNumber">
                <Link to="/cart"> Cart:{props.cartItems.length}</Link>
            </div>
            <div className="shopContainer">
                {dataItems.map((wear, index) => {
                    return(
                        <ShopCard
                            id={wear.id}
                            key={index}
                            index={index}
                            name={wear.name}
                            image={wear.img}
                            price={wear.price}
                            handleClick={props.handleClick}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Shop