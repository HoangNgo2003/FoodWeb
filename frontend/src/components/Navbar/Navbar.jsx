import { assets } from "../../assets/assets"
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css"
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom";



const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");
    StoreContext.getTotalCartAmount
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className ='navbar'>
        <Link to='/'><img src={assets.logo} alt=""/></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>Trang Chủ</Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>Tomato</a>
            <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu=="cont    act-us"?"active":""}>Liên Hệ</a>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <Link to= '/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()==0?"":"dot"}></div>
            </div> 
        <button onClick={()=>setShowLogin(true)}>Đăng ký</button>
        </div>
    </div>
  )
}

export default Navbar