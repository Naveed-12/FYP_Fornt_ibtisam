const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const dotenv = require("dotenv");
const app = express();
const PropertyRoutes = require('./routes/PropertyRoutes')
const MessageRoutes = require('./routes/MessageRoutes')
const http = require("http");
const server = http.createServer(app);


dotenv.config();

mongoose.connect('mongodb://localhost:27017/propertyticket').then(()=>{
    console.log("Connection Succesful");
}).catch((err)=>{
    console.log(err);
})
 

app.use(express.json())
app.use(cors());
app.use('/api/users',userRoutes);
app.use('/api/property',PropertyRoutes); 
app.use('/api/messages',MessageRoutes); 

server.listen(process.env.PORT || 5000 ,()=>{
    console.log("Backend Server is Running on Port",process.env.PORT);
})

module.exports = app; 