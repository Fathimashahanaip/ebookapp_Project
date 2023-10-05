const Books = require("../../Schemas/BookSchema")

const CardView=async(req,res)=>{

    const id=req.params.id
    const {Name,Category,Publication,Author,Year,Price,Availability}=req.body
    const BookView=await Books.findById(id)
    res.json(BookView)
    console.log(BookView)

}
module.exports=CardView