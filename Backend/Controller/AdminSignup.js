const Admin = require("../Schemas/AdminSchema")
const User = require("../Schemas/UserSchema")

const AdminSignup=async(req,res)=>{
    const {Name,Place,Age,Email,Password}=req.body
    
    const AdEmailCheck=await Admin.findOne({Email})
    pass=Password.length
    if(!Name|| !Place||!Age||!Email||!Password){
        console.log("All Details are must")
        res.json("All Details are must") 
    }
    else if(!AdEmailCheck){

        if(pass>4){
            const AdminCreate=await Admin.create({
                Name,
                Place,
                Age,
                Email,
                Password,
             
                
            })
            console.log(AdminCreate)
            res.json(AdminCreate)
        }
        else{
            console.log("incorrect Password")
            res.json("incorrect Password")

        }
    }

    else{
        console.log("User already exist")
        res.json("User already exist")
        
    }
}
module.exports=AdminSignup