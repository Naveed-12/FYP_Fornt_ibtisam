const mongoose = require('mongoose');
const newProperty = new mongoose.Schema({
    Type:{
        type:String
    },
    House_Number:{
        type:Number
    },
    land_size:{
        type:String
    },
    Bedrooms:{
        type:Number
    },
    Baths:{
        type:Number
    },
    Address:{
        type:String
    },
    Area:{
        type:String
    },
    Sector:{
        type:String
    },
    Price:{
        type:String
    },
    Date:{
        type:String
    },
    Image:{
        type:String
    },
    Icon:{
        type:String
    },
    Icon1:{
        type:String
    },
    City:{
        type:String
    },
})

module.exports = mongoose.model('properties',newProperty);