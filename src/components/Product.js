import React from 'react'
import './Product.css'

function Product({title, shortDescription, imageUrl, unitPrice, currencyCode}) {
    return (
        <div className="card-producto">
            <h1>{title}</h1>
            <p>{shortDescription}</p>
            <div className="pic-producto">
                <span className="green" data-color="#55efc4" data-pic="url(3.png)" />
            </div>
            <div className="info-producto">
                <div className="price-producto">{currencyCode + unitPrice}</div>
                <a href="#" className="button-producto">Add to Cart</a>
            </div>
        </div>
    )
}

export default Product
