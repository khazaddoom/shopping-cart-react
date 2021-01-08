import React, {useState, useContext} from 'react'
import { ShoppingCartContext } from '../App'
import './Product.css'
import Button from '@material-ui/core/Button'


const Product = ({id, title, shortDescription, imageUrl, unitPrice, currencyCode, qty}) => {

    const [productQty, setproductQty] = useState(qty)
    const {handleAddToCart, handleRemoveFromCart} = useContext(ShoppingCartContext)

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
                {productQty>0? <div>
                    <Button variant="contained" color="secondary" onClick={decreaseProductQty} style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}} >-</Button>
                    <span style={{
                        fontSize: '1.25rem'
                    }}> {productQty} </span>
                    <Button variant="contained" color="primary" onClick={increaseProductQty} style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}>+</Button>
                    </div>
                    : <Button variant="contained" color="primary" onClick={increaseProductQty}  >Add To Cart</Button>
                }
            </div>
        </div>
    )
}

export default Product
