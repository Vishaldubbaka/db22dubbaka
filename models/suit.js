const mongoose = require("mongoose") 
const suitSchema = mongoose.Schema({ 
 suit: String, 
 size: String, 
 price: Number 
}) 
 
module.exports = mongoose.model("Suit", 
suitSchema) 

