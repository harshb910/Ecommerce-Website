import React from 'react';
import {ReactNavbar} from "overlay-navbar";
import {FaUserCircle} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";

import logo from "../../../images/logo.png";

import { FiShoppingBag } from "react-icons/fi";

// const options = {
//     burgerColorHover: "#eb4034",
//     logo,
//     logoWidth: "20vmax",
//     navColor1: "white",
//     logoHoverSize: "10px",
//     logoHoverColor: "#eb4034",
//     link1Text: "Home",
//     link2Text: "Products",
//     link3Text: "Contact",
//     link4Text: "About",
//     link1Url: "/",
//     link2Url: "/products",
//     link3Url: "/contact",
//     link4Url: "/about",
//     link1Size: "1.3vmax",
//     link1Color: "rgba(35, 35, 35,0.8)",
//     nav1justifyContent: "flex-end",
//     nav2justifyContent: "flex-end",
//     nav3justifyContent: "flex-start",
//     nav4justifyContent: "flex-start",
//     link1ColorHover: "#eb4034",
//     link1Margin: "1vmax",
//     profileIconUrl: "/login",
//     profileIconColor: "rgba(35, 35, 35,0.8)",
//     searchIconColor: "rgba(35, 35, 35,0.8)",
//     cartIconColor: "rgba(35, 35, 35,0.8)",
//     profileIconColorHover: "#eb4034",
//     searchIconColorHover: "#eb4034",
//     cartIconColorHover: "#eb4034",
    
//     searchIcon : true,
//     SearchIconElement: {FaSearch},
//     searchIconMargin : "1vmax",
//     profileIcon : true,
//     ProfileIconElement: {FaUserCircle},
//     cartIconMargin : "1vmax",
//     cartIcon : true,
//     CartIconElement: {FiShoppingBag},
//     profileIconMargin : "1vmax",
// };


const Header = () => {
    return (
        <ReactNavbar
            burgerColor = "#eb4034"
            burgerColorHover = "#a62d24"
            navColor1 = "rgb(256, 256, 256,0.95)"

            logo={logo}
            logoWidth = "20vmax"
            logoHoverSize = "10px"
            logoHoverColor = "#eb4034"

            link1Text = "Home"
            link2Text = "Products"
            link3Text = "Contact"
            link4Text = "About"
            link1Url = '/'
            link2Url = '/products'
            link3Url = '/contact'
            link4Url = '/about'
            link1Size = "1.3vmax"
            link1Color = "rgba(35,35,35,0.8)"
            nav1justifyContent = "flex-end"
            nav2justifyContent = "flex-end"
            nav3justifyContent = "flex-start"
            nav4justifyContent = "flex-start"
            link1ColorHover = "#eb4043"
            link1Margin= "1vmax"
            
            
            
            
            searchIconColorHover= "#eb4034"
            searchIcon = {true}
            SearchIconElement={FaSearch}
            searchIconMargin = "5px"
            searchIconColor= "rgba(35, 35, 35,0.8)"

            profileIcon = {true}
            ProfileIconElement={FaUserCircle}
            profileIconUrl= "/login"
            profileIconColor= "rgba(35, 35, 35,0.8)"
            profileIconColorHover= "#eb4034"
            profileIconMargin = "5px"

            cartIconMargin = "5px"
            cartIcon = {true}
            CartIconElement={FiShoppingBag}
            cartIconColor= "rgba(35, 35, 35,0.8)"
            cartIconColorHover= "#eb4034"
            
        />
        

    )
}

export default Header;

