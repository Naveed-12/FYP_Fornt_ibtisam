const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const newAdmin = new mongoose.Schema({
    Fname:{
        type:String
    },
    Lname:{
        type:String
    },
    Gender:{
        type:String
    },
    Email:{
        type:String
    },
    Password:{
        type:String
    },
    Cnic:{
        type:String
    },
    Contact:{
        type:String
    }
})

module.exports = mongoose.model('admins',newAdmin);