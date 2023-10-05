const User = require("../../Schemas/UserSchema")

const userLog=async(req,res)=>{
    const {Role}=req.body
    const usRole=await User.find({Role})
    res.json(usRole)
    console.log(usRole.name)

}
module.exports=userLog