import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  api = 'http://localhost/OES_REST/Faculty/faculty_oes.php';
  constructor(private http: HttpClient) { }

  getDashboard()
  {
    return this.http.get(this.api,{ params:{ operation: "facultydashboard"} });
  }
}
