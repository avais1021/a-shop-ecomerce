
import './Nav.css';
import { FaShopify } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';


const Nav = () => {

    const [inputVal , setInputVal] = useState("");

    console.log(inputVal,'inputVal');

    const cartArray = useSelector(state=>state);
    console.log(cartArray,'cartArray');

    return (
        <header>
            {/* <div className="container"> */}

                <nav className='navbar'>
                    <div className='navbar_top'>
                        <div className="logo"><h2>A-SHOP</h2><FaShopify />
                        </div>
                        <div className="searchbar">
                            <input type="text" onChange={(e) => setInputVal(e.target.value) } placeholder='Search for items' />
                            <FiSearch />
                        </div>
                       <NavLink to={"/cart"}>
                        <div className="cart">
                            <span>{cartArray.cart.length}</span>
                            <AiOutlineShoppingCart />
                        </div>
                       </NavLink>
                    </div>
                    <div className='navbar_bottom'>
                        <ul>
                            <NavLink to={"/"}><li>Home</li></NavLink>
                            <NavLink to={"/shop"}><li>Shop</li></NavLink>
                            <NavLink to={"/cart"}><li>Cart</li></NavLink>
                            <NavLink to={"/contact"}><li>Contact</li></NavLink>
                        </ul>
                    </div>
                </nav>
            {/* </div> */}
        </header>
    )
}

export default Nav
