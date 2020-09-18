var express = require('express');
const app = express()

const PORT = 7500

app.get('/', (req, res) =>{
    res.send({message: 'hello app from server'})
})
 
app.listen(PORT, () =>{ 
    console.log(`server running at port ${PORT}`)})
