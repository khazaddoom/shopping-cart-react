import React from 'react'
import './Product.css'

const Product = ({id, title, shortDescription, imageUrl, unitPrice, currencyCode, qty, handleAddToCart}) => {
    return (
        <div className="card-producto">
            <h1>{title}</h1>
            <p>{shortDescription}</p>
            <div className="pic-producto">
                <span className="green" data-color="#55efc4" data-pic="url(3.png)" />
            </div>
            <div className="info-producto">
                <div className="price-producto">{currencyCode + unitPrice}</div>
                {qty>0? <div><button>-</button>{qty}<button onClick={e => e.preventDefault() || handleAddToCart(id)}>+</button></div> : <a href="" className="button-producto" onClick={e => e.preventDefault() || handleAddToCart(id)}>Add to Cart</a>}
            </div>
        </div>
    )
}

export default Product
