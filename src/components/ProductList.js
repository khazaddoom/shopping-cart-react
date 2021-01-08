import React from 'react'
import Product from './Product'
import './ProductList.css'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

let id = 1

const ProductList = ({products, cartItems}) => {

    return products.length == 0 ? <h1>No Products available for purchase at this moment!</h1> :
    <Grid container spacing={2}> {
                products.map(product => {
                    let found = cartItems.find(item => item.id == product.id)
                    product.qty = (found && found.qty) || 0
                    return product
                })
                .map(product => (<Grid item><Paper spacing={2}><Product key={id++} {...product} /></Paper></Grid>)) } </Grid>
}

export default ProductList
