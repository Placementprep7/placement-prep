import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable, observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private hc:HttpClient) { }
//function to add admin
addAdminFun(adminObj):Observable<any>{

  return this.hc.post('signup/admin',adminObj)

}


//function to add question
addQuestionFUn(questionObj):Observable<any>{
  return this.hc.post('question/add',questionObj)

}

//function to get question
getQuestion(questionId):Observable<any>{
return this.hc.get(`question/get/${questionId}`)
}


//function to add exam
addExam(examObj):Observable<any>{
  return this.hc.post('exam/add',examObj)
}


//function to addlecture
addLectureFun(formData):Observable<any>{
  return this.hc.post('lecture/new',formData)

}


//function to update
updateQuestionFunction(qObj):Observable<any>{

  return this.hc.put('question/update',qObj)
}


//function to send subjects
subjects():Observable<any>{

  return this.hc.get('names/subjects')
}

//function to send chapters
chapters():Observable<any>{

  return this.hc.get('names/chapters')

}




}
