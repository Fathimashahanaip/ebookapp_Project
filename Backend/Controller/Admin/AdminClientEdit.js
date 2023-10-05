const Client = require("../../Schemas/ClientSchema")

const ClientEdit=async(req,res)=>{
    const id=req.params.id
    const {Name,Username,Email,Signedstatus,Role,Phone}=req.body
    const CEdit=await Client.findByIdAndUpdate(id,{Name,Username,Email,Signedstatus,Role,Phone})
    res.json({
        Name:CEdit.Name,
        Username:CEdit.Username,
        Email:CEdit.Email,
        Signedstatus:CEdit.Signedstatus,
        Role:CEdit.Role,
        Phone:CEdit.Phone
    })
    console.log("updated")
}
module.exports=ClientEdit