import { Component, OnInit } from '@angular/core';
import { AddAdminComponent } from '../add-admin/add-admin.component';
import{Router} from '@angular/router'
@Component({
  selector: 'app-masteradmindashboard',
  templateUrl: './masteradmindashboard.component.html',
  styleUrls: ['./masteradmindashboard.component.css']
})
export class MasteradmindashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  


 



	   dashboard(){
		  document.getElementById('dashboard').style.display = "block";
		  document.getElementById('addAdmin').style.display = "none";
		  document.getElementById('addExam').style.display = "none";
		  document.getElementById('addCourse').style.display = "none";
		  document.getElementById("addQuestion").style.display = "none";
		  document.getElementById("addLecture").style.display = "none";
	  }
	   admin(){
		  document.getElementById('addAdmin').style.display = "block";
		  document.getElementById('dashboard').style.display = "none";
		  document.getElementById('addExam').style.display = "none";
		  document.getElementById('addCourse').style.display = "none";
		  document.getElementById("addQuestion").style.display = "none";
		  document.getElementById("addLecture").style.display = "none";

	  }
	  exam(){
		  document.getElementById('addExam').style.display = "block";
		  document.getElementById('dashboard').style.display = "none";
		  document.getElementById('addAdmin').style.display = "none";
		  document.getElementById('addCourse').style.display = "none";
		  document.getElementById("addQuestion").style.display = "none";
		  document.getElementById("addLecture").style.display = "none";
	  }
	   question(){
		  document.getElementById('addQuestion').style.display = "block";
		  document.getElementById('dashboard').style.display = "none";
		  document.getElementById('addAdmin').style.display = "none";
		  document.getElementById('addExam').style.display = "none";
		  document.getElementById("addCourse").style.display = "none";
		  document.getElementById("addLecture").style.display = "none";
	  }
	  course(){
		  document.getElementById('addCourse').style.display = "block";
		  document.getElementById('dashboard').style.display = "none";
		  document.getElementById('addAdmin').style.display = "none";
		  document.getElementById('addExam').style.display = "none";
		  document.getElementById("addQuestion").style.display = "none";
		  document.getElementById("addLecture").style.display = "none";
	  }
	   lecture(){
		  document.getElementById("addLecture").style.display = "block";
		  document.getElementById('dashboard').style.display = "none";
		  document.getElementById('addAdmin').style.display = "none";
		  document.getElementById('addExam').style.display = "none";
		  document.getElementById('addCourse').style.display = "none";
		  document.getElementById("addQuestion").style.display = "none";
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

