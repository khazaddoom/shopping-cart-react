import React from 'react'
import Header from './Header'

function WithHeader(props) {
    return (
        <>
            <Header cartQuantity={props.cartQuantity}/>
            { props.children }
        </>

    )
}

export default WithHeader
