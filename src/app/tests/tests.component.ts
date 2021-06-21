import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationDetails } from '../models/registration';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {


  studentsList:Array<RegistrationDetails> = [];
  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get<RegistrationDetails[]>('http://localhost:3000/students').subscribe(result => {
      this.studentsList = result;
      console.log(this.studentsList);
    }, (error) => { console.log(error); })
  }

}
