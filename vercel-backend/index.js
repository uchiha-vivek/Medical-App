const express = require('express')
const aiRoutes = require('./routes/response.js')
const cors = require('cors');
const dotenv = require('dotenv');
const app = express()


dotenv.config();

const PORT = 9000


app.use(cors());
app.use(express.json());
app.get('/',function(req,res){
    res.json({msg:"Message from backend"})
})
app.use('/api/ai', aiRoutes);  
app.listen(PORT,function(){
    console.log(`Server started on PORT ${PORT}`)
})