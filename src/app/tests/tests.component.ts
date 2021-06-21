import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationDetails } from '../models/registration';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {


  questionList:any = [];
  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/questions').subscribe(result => {
      this.questionList = result;
      
      
    }, (error) => { console.log(error); })
  }

}
