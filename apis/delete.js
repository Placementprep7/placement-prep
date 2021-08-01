//importing express
const exp =require("express")

//getting mini router
const deleteApi=exp.Router()

//importing express-async-handler
const asyncHandler=require("express-async-handler")


//http://localhost:5000/delete/admin/:mail
deleteApi.delete('/admin/:mail',asyncHandler(async (req,res,next)=>{

//getting database object
dbObj=req.app.get('databaseObject')


//fetching collection object
adminColObj=dbObj.collection('admin')

//fetching mail from route
deleteMail=req.params.mail

//deleting object
let result =await adminColObj.deleteOne({mail:deleteMail})

//sending response
res.send({message:'delete successfull'})

}))

deleteApi.delete('/user/:username',asyncHandler(async (req,res,next)=>{

    //getting database object
    dbObj=req.app.get('databaseObject')
    
    
    //fetching collection object
    adminColObj=dbObj.collection('users')
    
    //fetching mail from route
    deleteName=req.params.username
    
    //deleting object
    let result =await adminColObj.deleteOne({username:deleteName})
    
    //sending response
    res.send({message:'delete successfull'})
    
    }))



//exportig delete api
module.exports=deleteApi