const mongoose = require('mongoose');
const newMessages = new mongoose.Schema({
    FullName:{
        type:String
    },
    Email:{
        type:String
    },
    Message:{
        type:String
    },
})

module.exports = mongoose.model('messages',newMessages);