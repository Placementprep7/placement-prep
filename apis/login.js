//importing express
const exp =require("express")

//getting mini router
const loginApi=exp.Router()

//importing express-async-handler
const asyncHandler=require("express-async-handler")

//using json
loginApi.use(exp.json())



//importing bcryptjs
const bcryptjs=require('bcryptjs')

//importing jsonwebtoken
const jwt=require("jsonwebtoken")

//http:localhost:5000/login/dashboard
loginApi.post('/dashboard', asyncHandler(async(req,res,next)=>{

//getting credentials object
credObj=req.body


//getting database object
dbObj=req.app.get('databaseObject')

//fetching user collection
userColObj=dbObj.collection('users')

//fetching admincollection object
adminColObj=dbObj.collection('admin')




//getting admin object if existed
adminObj= await adminColObj.findOne({mail:credObj.mail})

//getting user object if existed
userObj= await userColObj.findOne({mail:credObj.mail})

//checking whether user existed or not
if(userObj==null & adminObj==null){
    res.send({message:'failed'})
}

else{
//if entered mail belongs to admin    
if(adminObj!== null){

    //comparing the passwords
    let passwordResult=await bcryptjs.compare(credObj.password,adminObj.password)

    //if passwords matched
    if(passwordResult==true){
    
    //generating token
    let jwtToken =jwt.sign({mail:adminObj.mail},'secretkey',{expiresIn:'7d'})
    
    //checking the type of admin
    if(adminObj.type=='master'){
        res.send({message:'master admin',master:adminObj})
    }
    
    //type of admin
    if(adminObj.type=='admin'){

        res.send({message:'admin',admin:adminObj})
    }


    }

    //if passwords not matched
    if(passwordResult==false){
        res.send({message:'password failed'})
    }

}

//if user object is not null
if(userObj!==null){

       //comparing the passwords
       let passwordResult=await bcryptjs.compare(credObj.password,userObj.password)

       //if passwords matched
       if(passwordResult==true){
       
       //generating token
       let jwtToken =jwt.sign({username:userObj.username},'secretkey',{expiresIn:'7d'})


       //sending response
       res.send({message:'user',token:jwtToken,user:userObj})
         }

      if(passwordResult==false){
          res.send({message:'password failed'})
      }   


}

}
}
)

)









//exporting loginApi
module.exports=loginApi