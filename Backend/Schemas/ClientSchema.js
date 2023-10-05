const mongoose=require("mongoose")


const ClientSchema=mongoose.Schema({
    Name:{type:String},
    Username:{type:String},
    Email:{type:String},
    Signedstatus:{type:String},
    Role:{type:String},
    Phone:{type:Number}
    
})
const Client=mongoose.model('Client',ClientSchema)

module.exports=Client