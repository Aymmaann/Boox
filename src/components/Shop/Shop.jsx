import React from "react";
import "./Shop.css"
import list from "../../list"
import Card from "./Card";
import '@fortawesome/fontawesome-free/css/all.min.css'

const Shop = () => {
    return(
        <>
            <h1 className="collections-header">Collections</h1>
            <section className="card-section">
                {list.map((item) => {
                    return <Card item={item} key={item.id}/>
                })}
            </section>
        </>
    )
}

export default Shop; 