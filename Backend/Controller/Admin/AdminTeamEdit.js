const Team = require("../../Schemas/TeamSchema")

const TeamEdit=async(req,res)=>{
    const id=req.params.id
    const { Name, Email,DOB,Gender, Description,Role,Phone,Image}=req.body
    const teammedit=await Team.findByIdAndUpdate(id,{Name, Email,DOB,Gender, Description,Role,Phone,Image})
    res.json({
        Name:teammedit.Name,
        Email:teammedit.Email,
        DOB:teammedit.DOB,
        Gender:teammedit.Gender,
        Description:teammedit.Description,
        Role:teammedit.Role,
        Phone:teammedit.Phone,
        Image:teammedit.DOB

    })
    console.log("Updated")
}
module.exports=TeamEdit