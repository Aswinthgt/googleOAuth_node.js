const mongoose = require('mongoose');


const emails = new mongoose.Schema({
    value:String,
    verified:Boolean
})


const userSchema = new mongoose.Schema({
    id: String,
    displayName: String,
    image: String,
    emails:[emails],
})


const User = mongoose.model("User",userSchema,'User');

module.exports = {
    User
}