const { isDisabled } = require('@testing-library/user-event/dist/utils');
const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    pID: {type: String, required: true},
    quantity: {
        type: Number,
        default: 1
    },
    
})



module.exports = mongoose.model("carts", userSchema);