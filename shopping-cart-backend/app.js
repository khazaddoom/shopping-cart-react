const express = require('express')
const app = express()
const PORT = 3001

app.get("/", (req, res) => {
    res.json('Hello')
})

app.listen(PORT, ()=> {
    console.log(`App running on $PORT`)
})