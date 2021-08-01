//importing express
const exp =require("express")

//getting mini router
const lectureApi=exp.Router()

//importing express-async-handler
const asyncHandler=require("express-async-handler")

//importing cloudinary
const cloudinaryObj=require('cloudinary').v2

//importing multer
const multer =require("multer")

//importing multer-cloudinary-storage
const {CloudinaryStorage}=require("multer-storage-cloudinary")

//configuring cloudinary
cloudinaryObj.config({
    cloud_name:'placement-prep',
    api_key:'272824851126218',
    api_secret:'MRMk52rxfZwE4s5m26sejaSgfuY'

})


//configuring multer-storage-cloudinary
const cloudStorage=new CloudinaryStorage({

   cloudinary:cloudinaryObj,
   params:async(req,file,next)=>{
       return{
           folder:"LectureVideos",
           public_id:file.fieldname+'-'+Date.now()
       }
   } 

})


//configuring multer object
const multerObj= multer({storage:cloudStorage})






//http:localhost:5009/lecture/add
lectureApi.post('/new',multerObj.single('video'),asyncHandler(async(req,res,next)=>{

   
    
    //getting database object
    dbObj=req.app.get('databaseObject')
    
   
    //fetching collection
    lectureCol=dbObj.collection('lectures')
    


    //getting lecture reference object
    lectureObj=JSON.parse(req.body.lectureRefObj)
    
   
    //checking whether object existed or not
    lectureObjFromDb= await lectureCol.findOne({$and:[{subject:{$eq:lectureObj.subject}},{chapter:{$eq:lectureObj.chapter}}]})
    
    

    //if object doesnt existed
    if(lectureObjFromDb==null){
     
    //creating new object
    let newLectureObj={subject:`${lectureObj.subject}`,chapter:`${lectureObj.chapter}`}  


   
    
    //creating lectures array
    let videoLinks = []
    
    //pushing link into array
    videoLinks.push(req.file.path)
    
    //inserting videos array into object
    newLectureObj.links=videoLinks
    
    //inserting into database
    let result =await lectureCol.insertOne(newLectureObj)
    
    //sending response
    res.send({message:'success'}) 
    
    
    }
    
    //if object already existed
    if(lectureObjFromDb!==null){

   
    
    //getting array
    linksArray=lectureObjFromDb["links"]
    
    

    //pushing new link unto the array
    linksArray.push(req.file.path)
    
    console.log(linksArray)
    //updating the links in database
    result =await lectureCol.updateOne({$and:[{subject:{$eq:lectureObj.subject}},{chapter:{$eq:lectureObj.chapter}}]},{$set:{links:linksArray}})
    
    //sending response
    res.send({message:'success'})
    
    }
    
    
    
    
    
    }))
    
    
    
    
    
    
   


  //http:localhost:5009/lecture/get/:subject/:chapter
     
  lectureApi.get('/get/:subject/:chapter',asyncHandler(async(req,res,next)=>{
    
    //getting database object
    dbObj=req.app.get('databaseObject')
    
    //fetching collection
    lectureCol=dbObj.collection('lectures')
    
    //checking whether object existed or not
    lectureObj= await lectureCol.findOne({$and:[{$eq:{subject:req.params.subject}},{$eq:{chapter:req.params.chapter}}]})
    
    //sending response
    res.send({lecObj:lectureObj})
    
        
    }))








//exportig lecture api
module.exports=lectureApi