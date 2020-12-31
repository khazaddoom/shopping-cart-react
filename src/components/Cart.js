import React, {useState} from 'react'
import Product from './Product'
import './Cart.css'
import Summary from './Summary'
let id = 1

function Cart({cartItems, handleAddToCart, handleRemoveFromCart}) {

    const [itemsInCart, setItemsInCart] = useState(cartItems)

    return (
        itemsInCart.length>0? <div className="cart-container">
        <section className="single-item-grid">
        { itemsInCart.map(product => (<Product key={id++} {...product} handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart}/>))}
        </section>
        <section className="summary-card">
            <h3>Summary</h3>
            <Summary cartItems={itemsInCart} />
        </section>
    </div> : <h1>There is nothing to show here!</h1>
    )
}

export default Cart
