import React from 'react'
import Header from './Header'

function WithHeader(props) {
    return (
        <>
            <Header />
            { props.children }
        </>

    )
}

export default WithHeader
