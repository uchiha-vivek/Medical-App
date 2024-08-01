const express = require('express')

const app = express()

const PORT = 9000

app.get('/',function(req,res){
    res.json({msg:"Message from backend"})
})

app.listen(PORT,function(){
    console.log(`Server started on PORT ${PORT}`)
})