const Books = require("../../Schemas/BookSchema")

const Userbookview=async(req,res)=>{
    const {Name,Category,Publication,Author,Year,Price,Availability}=req.body
    const userbook=await Books.find({})
    res.json(userbook)
    console.log(userbook)
}
module.exports=Userbookview