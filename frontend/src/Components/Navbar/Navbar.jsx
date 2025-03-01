import React, { useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
    const [menu,setMenu]=useState("shop");
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>NxtTrendz</p> 
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}>women{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>kids{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button className="">Login</button>
            <img src={cart_icon} alt="" className="" />
            <div className="nav-cart-count">1</div>
        </div>




       
    </div>
  )
}

export default Navbar
