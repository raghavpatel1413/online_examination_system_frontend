import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  api = 'http://localhost/OES_REST/Student/student_oes.php';
  constructor(private http: HttpClient) { }

  getexamlist(studid:string)
  {
    return this.http.get(this.api,{ params:{ operation: "examlist",studid: studid} });
  }
}
