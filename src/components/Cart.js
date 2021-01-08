import React, { useState, useEffect, useContext } from 'react'
import Product from './Product'
import './Cart.css'
import Summary from './Summary'
import { ShoppingCartContext } from '../App'
import Paper from '@material-ui/core/Paper'

let id = 1

function Cart({ cartItems}) {

    const [itemsInCart, setItemsInCart] = useState([...cartItems])
    const {handleAddToCart, handleRemoveFromCart} = useContext(ShoppingCartContext)
    
    useEffect(() => {
        setItemsInCart([...cartItems])
    }, [cartItems])

    return (
        itemsInCart.length > 0 ? <div className="cart-container">
            <section className="single-item-grid">
                {itemsInCart.map(product => (<Paper elevation={3}><Product key={id++} {...product} handleRemoveFromCart={handleRemoveFromCart} handleAddToCart={handleAddToCart} /></Paper>))}
            </section>
            <Paper elevation={3} spacing={2}>
                <section className="summary-card">
                    <h3>Summary</h3>
                    <Summary cartItems={itemsInCart} />
                </section>
            </Paper>
        </div> : <h1>There is nothing to show here!</h1>
    )
}

export default Cart
