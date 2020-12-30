import React from 'react'

function Cart({cartItems}) {
    return (
        <div>
            { cartItems.map(item => <h1>{ item.cart_item_id + " : " + item.qty }</h1>) }
        </div>
    )
}

export default Cart
