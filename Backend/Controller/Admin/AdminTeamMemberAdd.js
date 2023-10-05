

const Team = require("../../Schemas/TeamSchema")

const Teams=async(req,res)=>{
    const {Name,Email,DOB,Gender,Description,Role,Phone,Image}=req.body

    const TeamAdd=await Team.create({
        Name,
        Email,
        DOB,
        Gender,
        Description,
        Role,
        Phone,
        Image
    })
    console.log(TeamAdd)
    res.json(TeamAdd)

    
}
module.exports=Teams