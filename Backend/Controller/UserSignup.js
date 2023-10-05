const Admin = require("../Schemas/AdminSchema")
const User = require("../Schemas/UserSchema")


const UserSignup=async(req,res)=>{
    const {Name,Place,Age,Email,Password}=req.body

    
    const EmailCheck=await User.findOne({Email})
    pass=Password.length
    if(!Name || !Place || !Age|| !Email || !Password){
        console.log("All Details are must")
        res.json("All Details are must") 
    }
    else if(!EmailCheck){

        if(pass>4){
            const UserCreate=await User.create({
                
                Name,
                Place,
                Age,
                Email,
                Password,
                Role:"user"

        
           
         
            })
            console.log(UserCreate)
            res.json(UserCreate)
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
module.exports=UserSignup