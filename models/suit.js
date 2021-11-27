const mongoose = require("mongoose") 
const suitSchema = mongoose.Schema({ 
 suit: String, 
 size: String, 
 price: {type:Number,min:10,max:250} 
}) 
 
module.exports = mongoose.model("Suit", 
suitSchema) 

