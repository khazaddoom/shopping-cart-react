import React from 'react'
import Product from './Product'
import './ProductList.css'

let id = 1

const ProductList = ({products, handleAddToCart}) => {

    return (
        <div className="grid">
            {
                products.map((product)=> (<Product key={id++} {...product} handleAddToCart={handleAddToCart}/>))
            }
            
        </div>
    )
}

export default ProductList
