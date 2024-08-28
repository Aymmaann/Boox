import React from "react";
import "./Nav.css"
import icons from "./NavIcons"
import '@fortawesome/fontawesome-free/css/all.min.css'

const Nav = () => {

    return(
        <>
            <header>
                <div className="header-icon">
                    <div className="header-icon-div">
                        <img src={icons.facebook} alt="" />
                    </div>
                    <div className="header-icon-div">
                        <img src={icons.twitter} alt="" />
                    </div>
                    <div className="header-icon-div">
                        <img src={icons.instagram} alt="" />
                    </div>
                    <div className="header-icon-div">
                        <img src={icons.linkedin} alt="" />
                    </div>
                </div>

                <p>Free shipping for orders over $150</p>

                <div className="header-settings">
                    <div className="header-setting">
                        <p>USD $</p>
                        <img src={icons.arrowDown} alt="" />
                    </div>
                    <div className="header-setting">
                        <p>English</p>
                        <img src={icons.arrowDown} alt="" />
                    </div>
                </div>
            </header>

            <hr />

            <nav>
                <div className="logo-section">
                    <img src={icons.logo2} alt="" className="logo-img"/>
                    <h2>Boox</h2>
                </div>
                <div className="cart-icon">
                    <i className="fas fa-cart-shopping"></i>
                    <span>0</span>
                </div>
            </nav>
        </>
    )
}

export default Nav;