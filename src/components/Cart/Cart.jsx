import React, { useEffect, useState } from "react";
import "./Cart.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import walletIcon from "../../assets/wallet.png"


const Cart = ({cart, setCart}) => {
    const [price, setPrice] = useState(0)
    const [tax, setTax] = useState(0)

    useEffect(() => {
        totalPrice()
    }, [cart])

    const handleChange = (itemId, delta) => {
        const updatedCart = cart.map(cartItem => 
            cartItem.id === itemId? {...cartItem, amount: Math.max(cartItem.amount + delta, 1)} : cartItem
        )
        console.log(cart)
        setCart(updatedCart)
    }

    const handleRemove = (itemID) => {
        const updatedCart = cart.filter(cartItem => cartItem.id !== itemID)
        setCart(updatedCart)
    }

    const totalPrice = () => {
        const total = cart.reduce((sum, cartItem) => sum + cartItem.price * cartItem.amount, 0)
        const calculatedTax = total * 0.15
        setTax(calculatedTax)
        setPrice(total)
    }

    const calculateTax = () => {
        let tax = cart.reduce((sum, cartItem) => sum + cartItem.amount)
    }
 
    return(
        <>
            <section className="cart-section-box">
                {cart.length > 0 ? (
                    <div className="cart-section">
                        <h1>Order Summary</h1>
                        {cart?.map((cartItem) => (
                            <div className="cart-box" key={cartItem.id}>
                                <div className="cart-img">
                                    <img src={cartItem.img} alt="" />
                                </div>
                                <div className="cart-box-text">
                                    <div>
                                        <p className="title">{cartItem.title}</p>
                                        <p className="author">{cartItem.author}</p>
                                    </div>

                                    <p className="price">${cartItem.price}</p>
                                    
                                    <div className="button-panel">
                                        <div className="count-changer">
                                            <i className="fas fa-minus" onClick={() => handleChange(cartItem.id, -1)}></i>
                                            <span>{cartItem.amount}</span>
                                            <i className="fas fa-plus" onClick={() => handleChange(cartItem.id, 1)}></i>
                                        </div>

                                        <div className="trash-btn">
                                            <i className="fas fa-trash" onClick={() => handleRemove(cartItem.id)}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <h1>Your cart is empty</h1>
                        <div className="empty-cart">
                            <img src={walletIcon} alt="" className="walletIcon"/>
                            <p>Looks like you haven't added anything to your cart yet!</p>
                        </div>
                    </div>
                )}

                <div className="price-area">
                    <div className="price-section">
                        <h1>Bill</h1>
                        <div className="bill-details">
                            {cart.map((cartItem) => (
                                <div className="bill-detail">
                                    <p className="bill-title">{cartItem.title}</p>
                                    <p className="bill-price">${cartItem.price} x {cartItem.amount} = <span>${cartItem.price * cartItem.amount}</span></p>
                                </div>
                            ))}
                        </div>

                        <hr className="bill-divider"/>

                        <div className="bill-summary">
                            <p>Subtotal: <span>${price.toFixed(2)}</span></p>
                            <p>Tax: <span>${tax.toFixed(2)}</span></p>
                            <p>Total: <span>${(price + tax).toFixed(2)}</span></p>
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;