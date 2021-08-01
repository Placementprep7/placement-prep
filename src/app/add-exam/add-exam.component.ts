import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

  constructor(private as:AdminService,private router :Router) { }

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




  //array to store questions
  qstnsArray:any=[]
  
  //string to store entered questionId
  questionId:string;


  //function to add question
  addQstn(){

    
      this.as.getQuestion(this.questionId).subscribe(res=>{
      if(res["message"]=="success"){
      
        //adding question to the questions array
        this.qstnsArray.push(res["question"])
        
        //emptying the input form
        this.questionId=''

        alert('question added succesfully')
      }
      if(res["message"]=="failed"){
        alert('question not found')
      }
      }
      )
  }
  

  //function to add exam
  addExam(exam){
    let examObj={subject:exam.subject,chapter:exam.chapter,questions:this.qstnsArray}
     
    this.as.addExam(examObj).subscribe(res=>{

     if(res["message"]=="success"){
       alert('exam added successfully')
     }
     else{
       alert('error in adding exam')
     }


    })

  }

}
