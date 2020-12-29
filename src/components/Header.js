import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
    return (
        <nav className="nav">
            <ul style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: 'orange' }}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    )
}

export default Header
