import React from 'react'
import Product from './Product'
let id = 1

function Cart({cartItems, handleAddToCart, handleRemoveFromCart}) {
    console.log(cartItems)
    return (
        <div>
            { cartItems.map(product => (<Product key={id++} {...product} handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart}/>))}
        </div>
    )
}

export default Cart
