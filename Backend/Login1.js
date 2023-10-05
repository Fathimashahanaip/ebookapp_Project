// const Admin = require("../Schemas/AdminSchema")
// const User = require("../Schemas/UserSchema")

// const Login1=async(req,res)=>{
//     const {Email,Password}=req.body
//     // const admin = Admin
// const checkus=await User.findOne({Email})
//     const check=await Admin.findOne({Email})

//     if(check){
//         if(check.Email===Email && check.Password===Password){
//             res.json("Login Successfully")
//             console.log("Login Successfully")
//         }
        
//         else if(checkus.Email===Email && checkus.Password===Password){
//             res.json("Login successfull")
//             console.log("Successfull") 
//         }
//         else{
//             res.json("failed")
//             console.log("failed")
//         }

    
//         }
//         else{
//             res.json("No data")
//             console.log("No data")
//         }
    

//         }


    


// module.exports=Login1