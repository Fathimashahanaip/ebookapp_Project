const mongoose=require("mongoose")

const TeamSchema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    DOB:{type:String},
    Gender:{type:String},
    Description:{type:String},
    Role:{type:String},
    Phone:{type:Number}
    // Image:{type:Image},

}

)
const Team=mongoose.model('Team',TeamSchema)

module.exports=Team