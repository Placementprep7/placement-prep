import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddLectureComponent } from './add-lecture/add-lecture.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './login/login.component';
import { MasteradmindashboardComponent } from './masteradmindashboard/masteradmindashboard.component';
import { SearchQuestionComponent } from './search-question/search-question.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'userdashboard',component:UserdashboardComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'masteradmindashboard',component:MasteradmindashboardComponent},
  {path:'addAdmin',component:AddAdminComponent},
  {path:'addQuestion',component:AddQuestionComponent},
  {path:'addLecture',component:AddLectureComponent},
  {path:'addExam',component:AddExamComponent},
  {path:'searchQuestion',component:SearchQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,UserdashboardComponent,AdmindashboardComponent,MasteradmindashboardComponent,AddAdminComponent,AddQuestionComponent,AddExamComponent,AddLectureComponent]