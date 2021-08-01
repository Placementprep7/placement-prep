import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private ls:LoginService) { }

  ngOnInit(): void {
  }

  //object to store details when logged in successfully
  userObj:any;



 //method to login 
 login(loginRef){

  
  //getting the login object
   let credObj=loginRef.value
  

   //subscribing to loginuser servive
  this.ls.login(credObj).subscribe(res=>{



  //getting response when user doesnt register  
  if(res["message"]=="failed"){
    alert("user doesn't exist")
  }


  //getting response when passwords not matched
  if(res["message"]=="password failed"){
    alert("enter correct password")
  }


  //getting response when credentiala matched
  if(res["message"]=="user"){

   
   
   //getting userobj
    this.userObj=JSON.stringify(res["user"])

   //storing username in local storage
   localStorage.setItem("username",this.userObj.username)

   this.router.navigate(['/userdashboard'])

  }


  //getting response when admin logged in
  if(res["message"]=="admin"){

    
   
    //getting userobj
     this.userObj=(res["admin"])
     
   
    //storing username in local storage
    localStorage.setItem("username",this.userObj.username)
      

   this.router.navigate(['/admindashboard'])

  }
   

   //getting response when masteradmin logged in
   if(res["message"]=="master admin"){
   
   



    //getting userobj
     this.userObj=(res["master"])

     
 
    //storing username in local storage
    localStorage.setItem("username",this.userObj.username)

   this.router.navigate(['/masteradmindashboard'])

  }

   },
   err=>{
     console.log("error in login")
   })
  }


}
