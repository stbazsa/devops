require('dotenv').config()

const express = require('express')
const app =  express()
const port = process.env.PORT
const message = process.env.MESSAGE

app.get('/',(req, res) => {
    res.send('API response')
})

app.listen(port, ()=>{
    console.log(`Message: ${message} \nPort: ${port}`)
})