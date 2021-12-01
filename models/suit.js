const mongoose = require("mongoose") 
const suitSchema = mongoose.Schema({ 
 suit: {type:String,required:true}, 
 size:  {type:String,required:true},  
 price: {type:Number,min:10,max:250} 
}) 
 
module.exports = mongoose.model("Suit", 
suitSchema) 

