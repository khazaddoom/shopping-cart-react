import React, {useState} from 'react'
import './Product.css'

const Product = ({id, title, shortDescription, imageUrl, unitPrice, currencyCode, qty, handleAddToCart, handleRemoveFromCart}) => {

    const [productQty, setproductQty] = useState(qty)

    const increaseProductQty = e => {
        e.preventDefault()
        setproductQty(productQty+1)
        handleAddToCart(id)
    }

    const decreaseProductQty = e => {
        e.preventDefault()
        setproductQty(productQty-1)
        handleRemoveFromCart(id)
    }

    return (
        <div className="card-producto">
            <h1>{title}</h1>
            <p>{shortDescription}</p>
            <div className="pic-producto">
                <span className="green" data-color="#55efc4" data-pic="url(3.png)" />
            </div>
            <div className="info-producto">
                <div className="price-producto">{currencyCode + unitPrice}</div>
                {productQty>0? <div><button onClick={decreaseProductQty}> - </button> {productQty} <button onClick={increaseProductQty}> + </button></div> : <a href="" className="button-producto" onClick={increaseProductQty}>Add to Cart</a>}
            </div>
        </div>
    )
}

export default Product
