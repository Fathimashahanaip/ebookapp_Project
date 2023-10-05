const Books = require("../../Schemas/BookSchema")

const AdminBookView=async(req,res)=>{
    const {Name,Category,Publication,Author,Year,Price,Availability}=req.body
    const BookView=await Books.find({})
    res.json(BookView)
    console.log(BookView)


}
module.exports=AdminBookView