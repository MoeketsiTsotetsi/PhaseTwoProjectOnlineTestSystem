import { Component, OnInit } from '@angular/core';
import { login } from '../models/login';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegistrationDetails } from '../models/registration';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  studentList: Array<RegistrationDetails> = [];
  valid:boolean= false;
  
  
  constructor(private _router:Router,private _httpClient: HttpClient,private _studentservice: StudentsService) { }


  
  ngOnInit(): void {
  }
login:login = new login();

logon(){

  
}
resetAll(){
  this.login = new login();
}

goBackHome(){
this._router.navigate(['/home']);
}
}
