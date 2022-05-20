import React from "react";

function ClothesCard(props) {
    return(
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image}/>
            </div>
            <div className="img-name">
                ${props.price} - {props.name}
            </div>
            <div>
                <button type="submit" onClick={() => (props.handleClick(props))}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ClothesCard;