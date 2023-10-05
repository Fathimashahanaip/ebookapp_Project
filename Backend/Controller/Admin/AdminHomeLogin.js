const Admin = require("../../Schemas/AdminSchema")

const AdminLog=async(req,res)=>{
    const {Role}=req.body
    const AdRole=await Admin.find({Role})
    res.json(AdRole)
    console.log(AdRole)

}
module.exports=AdminLog