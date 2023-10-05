const Team = require("../../Schemas/TeamSchema")

const TeamDelete=async(req,res)=>{
    const id=req.params.id
    const teamdelete=await Team.findByIdAndRemove(id)
    res.json("DEleted")
    console.log("Deleted")
}
module.exports=TeamDelete