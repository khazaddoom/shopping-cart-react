import React, {useState} from 'react'
import './Summary.css'

function Summary({cartItems}) {

    const [items, setItems] = useState(cartItems)
    return (
        <ul>
            { items.map((item, index) => <li>
                {index+1}. {item.title}  x {item.qty} = {item.qty*item.unitPrice}
            </li>) }
            {
                <li style={{fontWeight:'bold' }}>Total: {items.reduce((acc, item)=> {
                    return acc + (item.qty*item.unitPrice)
                }, 0)}</li>
            }
        </ul>
    )
}

export default Summary
