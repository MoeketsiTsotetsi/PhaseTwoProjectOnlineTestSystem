import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationDetails } from '../models/registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router:Router) { }

 register:RegistrationDetails = new RegistrationDetails();

  ngOnInit(): void {
  }

  registerStudent(){
    alert("you have register Successfylly");
    console.log(this.register);
  }

  resetAll(){
    this.register = new RegistrationDetails();
  }

  gohome(){
    this._router.navigate(['home']);
  }
}
