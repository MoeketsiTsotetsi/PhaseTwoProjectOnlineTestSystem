import { Component, OnInit } from '@angular/core';
import { login } from '../models/login';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
login:login = new login();

logon(){
  alert("You have successfully logged in");
  console.log(this.login);
}
resetAll(){
  this.login = new login();
}

goBackHome(){
this._router.navigate(['/home']);
}
}
