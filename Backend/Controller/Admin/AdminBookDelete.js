const Books = require("../../Schemas/BookSchema")

const AdminBookDelete=async(req,res)=>{
    const id=req.params.id
    const BookDelete=await Books.findByIdAndRemove(id)
    res.json("Deleted")
    console.log("Deleted")
}
module.exports=AdminBookDelete