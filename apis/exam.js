//importing express
const exp =require("express")

//getting mini router
const examApi=exp.Router()

//importing express-async-handler
const asyncHandler=require("express-async-handler")

//using json
examApi.use(exp.json())

//http:localhost:5009/exam/add
examApi.post('/add',asyncHandler(async(req,res,next)=>{

//getting exam object    
examObj=req.body

//getting database object
dbObj=req.app.get('databaseObject')

//fetching collection object
examColObj=dbObj.collection('exams')

//adding exam object into collection
result= await examColObj.insertOne(examObj)


//sending response
res.send({message:'success'})







}))


//http:localhost:5009/exam/get/:subject/:chapter

examApi.get('/get/:subject/:chapter',asyncHandler(async(req,res,next)=>{


//getting subject
subjectName=req.params.subject

//getting chapter
chapterName= req.params.chapter

//getting database object
dbObj=req.app.get('databaseObject')

//fetching collection object
examColObj=dbObj.collection('exams')

//fetching from database
examObj=await examColObj.findOne({$and:[{subject:{$eq:subjectName}},{chapter:{$eq:chapterName}}]})

//sending response
res.send({exam:examObj})


}))






//exporting examApi
module.exports=examApi