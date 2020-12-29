import React from 'react'
import Product from './Product'
import './ProductList.css'

let id = 1

function ProductList({products}) {
    return (
        <div className="grid">
            {
                products.map(({title, shortDescription, imageUrl, unitPrice, currencyCode})=> (<Product key={id++} title={title} shortDescription={shortDescription} currencyCode={currencyCode} unitPrice={unitPrice}/>))
            }
            
        </div>
    )
}

export default ProductList
