//importing express
const exp= require("express")



//getting express object
 const expObj=exp()

//importing path module
const path=require("path")

//connecting dist folder with server
expObj.use(exp.static(path.join(__dirname,'dist/placement-prep')))



//importing mongoClient
const mc =require("mongodb").MongoClient

//db url
dbUrl="mongodb+srv://Placement-prep:Prepdata_7@cluster0.qbtsl.mongodb.net/placementPrep?retryWrites=true&w=majority"

//connecting to database
mc.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log("error in connecting databse",err)

    }
    else {
      //getting database object
      dbObj=client.db("placementPrep")
      
      //making express object available to other apis
      expObj.set("databaseObject",dbObj)
  

      console.log("database connected")

    }
})


//importing loginApi
const loginApi=require("./apis/login")

//using  loginApi as middleware
expObj.use('/login',loginApi)

//importing signupApi
const signupApi=require("./apis/signup")

//using  siginupApi as middleware
expObj.use('/signup',signupApi)

//importing getdata api
const getDataApi=require("./apis/getdata")

//using getdataapi as middleware
expObj.use('/getdata',getDataApi)


//importing delete api
const deleteApi=require("./apis/delete")

//using delete api
expObj.use("/delete",deleteApi)


//importing question api
const questionApi=require('./apis/question')

//using questionApi
expObj.use('/question',questionApi)


//importing exam api
const examApi=require('./apis/exam')

//using examApi
expObj.use('/exam',examApi)


//importing lecture api
const lectureApi=require('./apis/lecture')

//using lectureApi
expObj.use('/lecture',lectureApi)



//importing names api
const namesApi=require('./apis/names')

//using namesApi
expObj.use('/names',namesApi)




//invalid path handling middleware
expObj.use((req,res,next)=>{
    res.send({message:'invalid path'})
})





//error handling middle ware
expObj.use((err,req,res,next)=>{
    res.send({message:'error occured',reason:err.message})
})


//port number
port =5009

 //assigning port number
 expObj.listen(port,()=>{
     
 })
