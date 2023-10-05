const mongoose=require("mongoose")
const AdminSchema=mongoose.Schema({
    Name:{type:String},
    Place:{type:String},
    Age:{type:Number},
    Email:{type:String},
    Password:{type:String},
    Role:{type:String,
        default:"admin"
    
    }
    
})
const Admin=mongoose.model('Admin',AdminSchema)

module.exports=Admin