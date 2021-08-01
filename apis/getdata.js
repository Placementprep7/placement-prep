//import express
const exp=require("express")

//getting express object
const getDataApi=exp.Router()






//importing express-async-handler
const asyncHandler=require("express-async-handler")

//http://localhost:5000/getdata/users
getDataApi.get('/users',asyncHandler(async (req,res,next)=>{

//getting database object
dbObj=req.app.get("databaseObject")

//fetching users collection
userColObj=dbObj.collection("users")

//getting the users array
usersList= await userColObj.find().toArray()

//sending response
res.send({users:usersList})


}))


//http://localhost:5000/getdata/admins
getDataApi.get('/admins',asyncHandler(async (req,res,next)=>{

    //getting database object
    dbObj=req.app.get("databaseObject")
    
    //fetching users collection
    adminColObj=dbObj.collection("admin")
    
    //getting the admins array
    adminsList= await adminColObj.find({type:'master'}).toArray()
    
    //sending response
    res.send({admins:adminsList})
    
    
    }))
    








//exporting masterAdminApi
module.exports=getDataApi