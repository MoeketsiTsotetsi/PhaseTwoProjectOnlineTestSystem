import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private  _router:Router) { }

  ngOnInit(): void {
  }

  gotLoginPage(){
    this._router.navigate(['/login']);
  }
  goToRegistrationPage(){
    this._router.navigate(['/register']);
  }

}
