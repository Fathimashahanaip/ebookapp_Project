
const mongoose=require("mongoose")
const BookSchema=mongoose.Schema({

    Name:{type:String},
    Category:{type:String},
    Publication:{type:String},
    Author:{type:String},
    Year:{type:String},
    Price:{type:String},
    Availability:{type:String},
})
const Books=mongoose.model("Book",BookSchema) 
module.exports=Books