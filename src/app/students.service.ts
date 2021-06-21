import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationDetails } from './models/registration';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  studentList: Array<RegistrationDetails> = [];

  constructor(private _httpClient: HttpClient) { }
  registerStudent(student: RegistrationDetails): Observable<RegistrationDetails> {
    return this._httpClient.post<RegistrationDetails>('http://localhost:3000/students', student);

}

getStudents(): Observable<RegistrationDetails[]> {
    return this._httpClient.get<RegistrationDetails[]>('http://localhost:5000/students');
}

  
}
