const Client = require("../../Schemas/ClientSchema")

const ClientDelete=async(req,res)=>{
    const id=req.params.id
    const clientDel=await Client.findByIdAndRemove(id)
    res.json("Deleted")
    console.log("Deleted")
}
module.exports=ClientDelete