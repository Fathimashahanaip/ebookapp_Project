const Client = require("../../Schemas/ClientSchema")

const ClientAdd=async(req,res)=>{
    const {Name,Username,Email,Signedstatus,Role,Phone}=req.body
    if(!Name||!Username||!Email||!Signedstatus||!Role||!Phone){


        res.json("All Details are Must")
        console.log("All Details are Must")
 

    }
    else{ 
        const clintadd=await Client.create({
            Name,
            Username,
            Email,
            Signedstatus,
            Role,
            Phone
        })

        res.json(clintadd)
        console.log(clintadd)
    }



}
module.exports=ClientAdd