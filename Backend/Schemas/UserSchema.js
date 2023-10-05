const mongoose=require("mongoose")
const UserShema=mongoose.Schema({
    Name:{type:String},
    Place:{type:String},
    Age:{type:Number},
    Email:{type:String},
    Password:{type:String},
    Role:{type:String,
        default:"user"
    
    }
    
})
const User=mongoose.model("User",UserShema)
module.exports=User