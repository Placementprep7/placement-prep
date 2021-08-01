import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {routingComponents} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MasteradmindashboardComponent } from './masteradmindashboard/masteradmindashboard.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddLectureComponent } from './add-lecture/add-lecture.component';
import { SearchQuestionComponent } from './search-question/search-question.component'
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserdashboardComponent,
    AdmindashboardComponent,
    MasteradmindashboardComponent,
    AddAdminComponent,
    AddQuestionComponent,
    AddExamComponent,
    AddLectureComponent,
    SearchQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
