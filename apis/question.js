//importing express
const exp =require("express")

//getting mini router
const questionApi=exp.Router()

//importing express-async-handler
const asyncHandler=require("express-async-handler")
const lectureApi = require("./lecture")

//using json
questionApi.use(exp.json())


//http://localhost:5000/question/add
questionApi.post('/add',asyncHandler(async(req,res,next)=>{

//getting question object
qObj=req.body

//getting database object
dbObj=req.app.get("databaseObject")

//fetching collection object
qColObj=dbObj.collection('questions')

//inserting into collection
result=await qColObj.insertOne(qObj)

//sending response
res.send({message:'success'})




}))



//http://localhost:5000/question/delete/:id
questionApi.delete('/delete/:id',asyncHandler(async(req,res,next)=>{

    //getting question id
    qId=req.params.id
    
    
    //getting database object
    dbObj=req.app.get("databaseObject")
    
    //fetching collection object
    qColObj=dbObj.collection('questions')
    
    //inserting into collection
    result=await qColObj.deleteOne({questionId:{$eq:qId}})
    
    //sending response
    res.send({message:'success'})
    
    
    
    
    }))



    //http://localhost:5000/question/get/:id

questionApi.get('/get/:id',asyncHandler(async(req,res,next)=>{


    

    //getting question id
    qId=req.params.id
    
    
    //getting database object
    dbObj=req.app.get("databaseObject")
    
    //fetching collection object
    qColObj=dbObj.collection('questions')
    
    //inserting into collection
    questionObj=await qColObj.findOne({questionId:{$eq:qId}})
    
    
    //sending response if question exists
    if (questionObj!==null){
    res.send({message:'success',question:questionObj})
    }

    //if question doesnt exists
    if(questionObj==null){
        res.send({message:'failed'})
    }
    
    
    
    
    }))






//http:localhost:5000/question/update
questionApi.put('/update',asyncHandler(async(req,res,next)=>{

//getting question object  
questionObj=req.body


 //getting database object
 dbObj=req.app.get("databaseObject")
    
 //fetching collection object
 qColObj=dbObj.collection('questions')
 

 result =await qColObj.updateOne({questionId:{$eq:questionObj.questionId}},{$set:{optionA:questionObj.optionA,optionB:questionObj.optionB,optionC:questionObj.optionC,optionD:questionObj.optionD,correctOption:questionObj.correctOption,explanation:questionObj.explanation}})

//sending response
res.send({message:'success'})



}))




//exporting question api
module.exports=questionApi