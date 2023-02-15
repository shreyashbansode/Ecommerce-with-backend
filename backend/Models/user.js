const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({

                firstName:String,
                lastName:String,
                mobNumber:Number,
                email:String,
                password:String,
                Address:String,
                type:String,

})


module.exports= mongoose.model("users",userSchema);