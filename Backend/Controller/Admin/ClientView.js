const Client = require("../../Schemas/ClientSchema")

const ClientView=async(req,res)=>{

    const Clientvv=await Client.find({})
    res.json(Clientvv)
    console.log(Clientvv)


}
module.exports=ClientView