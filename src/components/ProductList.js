import React from 'react'
import Product from './Product'
import './ProductList.css'

let id = 1

const ProductList = ({products, cartItems}) => {

    return products.length == 0 ? <h1>No Products available for purchase at this moment!</h1> :
    <div className="grid"> {
                products.map(product => {
                    let found = cartItems.find(item => item.id == product.id)
                    product.qty = (found && found.qty) || 0
                    return product
                })
                .map(product => (<Product key={id++} {...product} />)) } </div>
}

export default ProductList
