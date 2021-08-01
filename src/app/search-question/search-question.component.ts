import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.css']
})
export class SearchQuestionComponent implements OnInit {

  constructor(private as:AdminService) { }

  ngOnInit(): void {
  }
 

  //variables to store data
  questionId: any;
  question: any; 
  optionA: any;
  optionB: any;
  optionC: any;
  optionD: any;
  correctOption: any;
  explanation: any

 


  search(que: any){

   this.as.getQuestion(que.qId).subscribe(res=>{

   //if question not found
    if(res["message"]=="failed"){
     alert('question doesnt existed')
   }


   //if question exits
   if(res["message"]=="success"){
   
    //getting question object
    var qObj=res["question"]

   //assigning values to variables

   this.questionId=qObj.questionId

   this.question=qObj.question

   this.optionA=qObj.optionA

   this.optionB=qObj.optionB

   this.optionC=qObj.optionC

   this.optionD=qObj.optionD

   this.correctOption=qObj.correctOption

   this.explanation=qObj.explanation






     
   }


   

   }) 
  }


//function to update
 update(queObj){

 this.as.updateQuestionFunction(queObj).subscribe(res=>{
 

  //sending response
  if (res["message"]=="success"){

    alert("question updated successsfully")
  }



 })

 }


}
