//importing express
const exp =require("express")

//getting mini router
const signupApi=exp.Router()

//using json
signupApi.use(exp.json())


//importing express-async-handler
const asyncHandler=require("express-async-handler")

//importing bcryptjs to hash password
const bcryptjs=require("bcryptjs")


//http:localhost:5000/signup/admin
signupApi.post('/admin',asyncHandler(async (req,res,next)=>{

//extracting credentials object from request    
adminCredObj=req.body

//getting database object
dbObj=req.app.get('databaseObject')

//fetching collection object
adminColObj=dbObj.collection("admin")

//cheching whether admin already existing or not
objfromdb= await adminColObj.findOne({mail:adminCredObj.mail})


if(objfromdb==null){
//hashing the password
let hashedPw= await bcryptjs.hash(adminCredObj.password,6)

//replacing the password with hashed password
adminCredObj.password=hashedPw

//inserting into database
let result= await adminColObj.insertOne(adminCredObj)

//sending response
res.send({message:'admin successfull'})


}

//if admin already existed
else{
    res.send({message:'admin failed'})
}
}

))



//http:localhost:5000/signup/user
signupApi.post('/user',asyncHandler(async (req,res,next)=>{


//getting credentials object from request    
userCredObj=req.body

//getting database object
dbObj=req.app.get('databaseObject')


//fetching collection object
userColObj=dbObj.collection('users')

//checking whether the user already existed or not
let objfromdb= await userColObj.findOne({mail:userCredObj.mail})

if(objfromdb==null){

    //checking whether username already taken or not
    let userNameObj=await userColObj.findOne({username:userCredObj.username})

    if( userNameObj==null){
       
     //checkig whether both passwords matched or not
         if(userCredObj.password==userCredObj.sPassword){
          
        //hashing password
        hashedUserPw=await bcryptjs.hash(userCredObj.password,6)
        
        //deleting second password
        delete userCredObj.sPassword

        //replacing password with hashed password
        userCredObj.password=hashedUserPw

        //inserting into database
        let result=await userColObj.insertOne(userCredObj)

        //sending response
        res.send({message:'user successfull'})

         }

     //if passwords not matched
     else{
         res.send({message:'passwords failed'})
     }    
 


    }
    
    
    //if username was already taken
    else{
        res.send({message:'username failed'})
    }



}



//if user already exists
else{
    res.send({message:'user failed'})
}






}

))











//exporting signupApi
module.exports=signupApi