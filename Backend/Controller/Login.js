const Admin = require("../Schemas/AdminSchema")
const User = require("../Schemas/UserSchema")

const Login=async(req,res)=>{
    const {Email,Password,Role}=req.body
    // const chh = (Admin || User)

    const check=await Admin.findOne({Email})
    const uscheck=await User.findOne({Email})

    if(check){
        if(check.Email===Email && check.Password===Password){
            res.json("Login Successfully")
            console.log("Login Successfully")
        }

        else{
            res.json("Login Failed")
            console.log("Login Failed") 
        }

        }
        else if(uscheck){
            if(uscheck.Email===Email && uscheck.Password===Password){
                res.json("Login Successfully")
                console.log("Login Successfully")
            }
    
            else{
                res.json("Login Failed")
                console.log("Login Failed") 
            }

        }
        else{
            res.json("No data")
            console.log("No data")
        }

    // if((Email===User.Email && Password===User.Password)|| (Email===Admin.Email && Password===Admin.Password)){

    // }




    }


module.exports=Login