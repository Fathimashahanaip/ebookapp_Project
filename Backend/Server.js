const express=require("express")
 const dotenv=require("dotenv")
 const cors=require("cors")
 const ConnectDB=require('./DataBase/Db')
 ConnectDB()
const router = require("./Router/TestRouter")



 const app=express()

 app.use(cors())
 app.use(express.json())
 app.use("/",router)



 const PORT=process.env.PORT || 4000
 app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))