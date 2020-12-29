import React from 'react'
import Header from './Header'

function WithHeader(props) {
    return (
        <>
            <Header cartQuantity={1}/>
            { props.children }
        </>

    )
}

export default WithHeader
