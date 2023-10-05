const Books = require("../../Schemas/BookSchema")

const  UserBookSearch =async(req,res)=>{
    const Category=req.params.Category
    const regex = new RegExp(Category, 'i');
    const BookSearch=await Books.find({Category:regex})
    res.json(BookSearch)
    console.log("Searched")
}
module.exports=UserBookSearch