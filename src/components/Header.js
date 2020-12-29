import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

function Header({cartQuantity}) {
    return (
        <nav className="nav">
            <ul style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: 'orange' }}>
                <li><Link to="/products">Home</Link></li>
                <li>
                    <Link to="/cart">
                        <div className="cart">
                            <div>
                                <img className="cart__img" src={process.env.PUBLIC_URL + '/assets/images/cart.png'} alt="shopping cart" />
                                <span className="cart__tooltip">{cartQuantity}</span>
                            </div>
                            <span>Cart</span>
                        </div>
                    </Link>
                </li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}

export default Header
