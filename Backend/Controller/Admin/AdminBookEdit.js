const Books = require("../../Schemas/BookSchema")

const AdminBookEdit=async(req,res)=>{
    const id=req.params.id
    const {Name,Publication,Author,Year,Price,Availability}=req.body
 
    const BookEdit=await Books.findByIdAndUpdate(id,{Name,Publication,Author,Year,Price,Availability})
    res.json({
        Name:BookEdit.Name,
        Category:BookEdit.Category,
        Publication:BookEdit.Publication,
        Author:BookEdit.Author,
        Year:BookEdit.Year,
        Price:BookEdit.Price,
        Availability:BookEdit.Availability

    })
    console.log("Updated")
}
module.exports=AdminBookEdit
