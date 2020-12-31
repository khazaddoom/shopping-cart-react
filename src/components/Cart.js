import React, {useState} from 'react'
import Product from './Product'
import './Cart.css'
import Summary from './Summary'
let id = 1

function Cart({cartItems, handleAddToCart, handleRemoveFromCart}) {

    const [state, setstate] = useState(cartItems)

    return (
        <div className="cart-container">
            <section className="single-item-grid">
            { state.map(product => (<Product key={id++} {...product} handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart}/>))}
            </section>
            <section className="summary-card">
                <h3>Summary</h3>
                <Summary cartItems={state} />
            </section>
        </div>
    )
}

export default Cart
