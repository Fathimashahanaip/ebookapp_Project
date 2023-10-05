const Client = require("../../Schemas/ClientSchema")

const ClientSingleView=async(req,res)=>{
    const id=req.params.id
    const SingleView=await Client.findOne(id)
    res.json(SingleView)
    console.log(SingleView)
}
module.exports=ClientSingleView