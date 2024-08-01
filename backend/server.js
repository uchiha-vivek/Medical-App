const express = require('express')
const app = express()


app.get('/',function(req,res){
    res.status(200).send('Landing Page')
})

app.get('/about',function(req,res){
    res.status(200).send('This is about Page')
})

const PORT = 8000

app.listen(PORT,function(){
    console.log(`Site is running on PORT ${PORT}`)
})