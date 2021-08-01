import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  constructor(private as: AdminService,private router :Router) { }

  ngOnInit(): void {
  }

  //function to add admin
  addAdmin(adminObj){

//adding type to admin object    
adminObj.type='admin'


//making function call to add admin    
this.as.addAdminFun(adminObj).subscribe(res=>{

//if admin added successfully  
if(res["message"]=="admin successfull"){
  alert('admin added successfully')
}


//if admin already existed
if(res["message"]=="admin failed"){
  alert('admin already exists')
}


})



  }


  //getting username from localstorage
  username=localStorage.getItem("username")

  //function to logout
logout(){

 //clearing local storage
 localStorage.clear()

 //navigating to login page
 this.router.navigate(['/login']) 

}


}
