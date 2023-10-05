const Books = require("../../Schemas/BookSchema")

const Addbook=async(req,res)=>{
    const{Name,Category,Publication,Author,Year,Price,Availability}=req.body
    const NameCheck=await Books.findOne({Name})
    
    if(!Name||!Category||!Publication||!Author||!Year||!Price||!Availability){
        res.json("All Details are Must")
        console.log("All Details are Must")
    }
    else if(!NameCheck){
        const Bookcreate=await Books.create({
            Name,
            Category,
            Publication,
            Author,
            Year,
            Price,
            Availability
        })
        res.json(Bookcreate)
        console.log(Bookcreate)
    }
    else{
        res.json("Not add book")
        console.log("Not add book")

    }
}
module.exports=Addbook