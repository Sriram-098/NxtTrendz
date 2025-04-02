import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/icons8-dropdown-50.png";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef(null);

    const dropdown_toggle = (e) => {
        if (menuRef.current) {
            menuRef.current.classList.toggle("nav-menu-visible");
        }
        e.currentTarget.classList.toggle("open"); // Use `currentTarget`
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>NxtTrendz</p>
            </div>
            <img onClick={dropdown_toggle} src={nav_dropdown} alt="Dropdown" className="nav-dropdown" />
            <ul className="nav-menu" ref={menuRef}>
                <li onClick={() => setMenu("shop")}>
                    <Link style={{ textDecoration: "none" }} to="/">
                        Shop
                    </Link>
                    {menu === "shop" && <hr />}
                </li>
                <li onClick={() => setMenu("mens")}>
                    <Link style={{ textDecoration: "none" }} to="/mens">
                        Men
                    </Link>
                    {menu === "mens" && <hr />}
                </li>
                <li onClick={() => setMenu("women")}>
                    <Link style={{ textDecoration: "none" }} to="/womens">
                        Women
                    </Link>
                    {menu === "women" && <hr />}
                </li>
                <li onClick={() => setMenu("kids")}>
                    <Link style={{ textDecoration: "none" }} to="/kids">
                        Kids
                    </Link>
                    {menu === "kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button className="">Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="Cart" className="" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;
