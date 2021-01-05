import React, { useState }from 'react'

function Test() {
    const [count, setcount] = useState(0)

    const add = (e) => {
        e.preventDefault()
        setcount(count + 1)
    }

    const sub = (e) => {
        e.preventDefault()
        setcount(count - 1)
    }

    return (
        <div>
            <button onClick={sub}>-</button>
            <input value={count}/>
            <button onClick={add}>+</button>
        </div>
    )
}

export default Test
