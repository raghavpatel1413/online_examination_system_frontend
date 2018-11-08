import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  api = 'http://localhost/OES_REST/';
  constructor(private http: HttpClient) { }
}
