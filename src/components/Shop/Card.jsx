import React from "react";

const Card = ({item}) => {
    return(
        <>
            <div>
                <img src={item.img} alt="" />
            </div>
        </>
    )
}

export default Card;