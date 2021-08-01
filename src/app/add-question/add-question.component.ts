import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

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



//function to change when subject is changed
getId(event: { target: { value: any; }; }){

  this.as.chapters().subscribe(res=>{

  this.chapters=res["chapArray"].filter((e: { subject: any; })=>e.subject==event.target.value)

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



  //function to add question
  addQuestion(questionObj){
  
  this.as.addQuestionFUn(questionObj).subscribe(res=>{
      
  if(res["message"]=="success"){
    alert('question added successfully')
  }
  },
  err=>{
    alert('error while adding')
  })


  }
}
