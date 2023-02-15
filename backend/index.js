const express = require('express');

const app = express();

const conn = require('./db')
const cors = require('cors')



conn.connection.on("connected",(err)=>{

        if(err){
            console.error(err);
        }
        else{
            console.log("mongo database is connected")
        }
})
app.use(cors())
app.use(express.json())
app.use("/",require("./routes/user"))
app.use("/product",require("./routes/product"))
app.use("/cart",require("./routes/cart"))



app.listen(1031,()=>{
    console.log("server is on")
})