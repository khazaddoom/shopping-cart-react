import React from 'react'
import Product from './Product'
import './ProductList.css'

let id = 1

const ProductList = ({products, handleAddToCart, cartItems}) => {

    return (
        <div className="grid">
            {
                products.map(product => {
                    let found = cartItems.find(item => item.cart_item_id == product.id)
                    product.qty = (found && found.qty) || 0
                    return product
                })
                .map(product => (<Product key={id++} {...product} handleAddToCart={handleAddToCart}/>))
            }
            
        </div>
    )
}

export default ProductList
