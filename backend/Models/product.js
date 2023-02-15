const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    uid: String,
    
    Name: String,
    Price: Number,
    Type: String,
    Description: String
})



module.exports = mongoose.model("products", userSchema);