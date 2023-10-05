const Team = require("../../Schemas/TeamSchema")

const Teamview=async(req,res)=>{
    const Teammm=await Team.find({})
    res.json(Teammm)
    console.log(Teammm)
}
module.exports=Teamview