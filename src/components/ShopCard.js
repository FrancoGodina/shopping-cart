import React from "react";
import "./css/shopCard.css";

function ShopCard(props) {
    return(
        <div className="card">
            <div >
                <img className="imgContainer" alt={props.name} src={props.image}/>
            </div>
            <div className="imgName">
                ${props.price} - {props.name}
            </div>
            <div>
                <button class="addButton" type="submit" onClick={() => (props.handleClick(props))}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ShopCard;