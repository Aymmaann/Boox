import React from "react";
import "./Card.css"

const Card = ({item}) => {
    return(
        <>
            <div className="card">
                <div>
                    <img src={item.img} alt="" className="book-img"/>
                </div>
                <div className="card-content">
                    <div>
                        <p className="title">{item.title}</p>
                        <p className="author">{item.author}</p>
                    </div>
                    <p className="price">${item.price}</p>
                    <button className="add-to-cart"><i className="fas fa-cart-shopping"></i>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Card;