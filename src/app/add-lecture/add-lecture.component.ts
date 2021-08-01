import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.component.html',
  styleUrls: ['./add-lecture.component.css']
})
export class AddLectureComponent implements OnInit {

  constructor(private as:AdminService,private router:Router) { }

  ngOnInit(): void {

this.as.subjects().subscribe(res=>{
  this.subjects=res["subArray"]
})

  }
  
//subjects array
subjects:any=[]

//chapters array
chapters:any=[]


//file object to store video 
file:File;


  //getting username from localstorage
  username=localStorage.getItem("username")

  //function to logout
logout(){

 //clearing local storage
 localStorage.clear()

 //navigating to login page
 this.router.navigate(['/login']) 

}



//function to change when subject is changed
getId(event: { target: { value: any; }; }){

  this.as.chapters().subscribe(res=>{

  this.chapters=res["chapArray"].filter((e: { subject: any; })=>e.subject==event.target.value)

  })

}

//function to execute when change event occurs
selectFile(event: { target: { files: File[]; }; }){

//extracting file  
this.file=event.target.files[0]   
}


//function to call addlectureFun()
addLecture(lectureRef: any){

console.log(lectureRef)

//creating instance of formData  
let formData= new FormData()

//addpending the file
formData.append("video",this.file)

//appending the userObject
formData.append("lectureRefObj",JSON.stringify(lectureRef))


console.log(lectureRef)

this.as.addLectureFun(formData).subscribe(res=>{

if(res["message"]=="success"){
  alert('video added successfully')
}

})




}



}
