//importing express
const exp =require("express")

//getting mini router
const namesApi=exp.Router()

//importing express-async-handler
const asyncHandler=require("express-async-handler")


//http:localhost:5009/names/subjects
namesApi.get('/subjects',asyncHandler(async(req,res,next)=>{

//getting database object
dbObj=req.app.get('databaseObject')


//fetching collection object
subjectsColObj=dbObj.collection('subjects')


subjectsArray =await subjectsColObj.find().toArray()

//sending response
res.send({subArray:subjectsArray})
}))



//http:localhost:5009/names/subjects
namesApi.get('/chapters',asyncHandler(async(req,res,next)=>{

    //getting database object
    dbObj=req.app.get('databaseObject')
    
    
    //fetching collection object
    chaptersColObj=dbObj.collection('chapters')
    
    
    chaptersArray =await chaptersColObj.find().toArray()
    
    //sending response
    res.send({chapArray:chaptersArray})
    }))












//exportig delete api
module.exports=namesApi