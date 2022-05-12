const routes = require("express").Router();
const Properties = require('../modules/PropertySearchSchema')

routes.get('/getproperties', async (req,res)=>{
    const Property = await Properties.find();
    console.log(Property)
    res.json(Property);
});

module.exports = routes;