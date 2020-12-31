import React from 'react'
import Product from './Product'
import './Cart.css'
let id = 1

function Cart({cartItems, handleAddToCart, handleRemoveFromCart}) {
    console.log(cartItems)
    return (
        <div className="single-item-grid">
            { cartItems.map(product => (<Product key={id++} {...product} handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart}/>))}
        </div>
    )
}

export default Cart
