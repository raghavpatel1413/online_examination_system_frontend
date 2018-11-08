import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = 'http://localhost/OES_REST/auth_oes.php';
  constructor(private http: HttpClient) { }

  onLogin(email: string, password: string, usertype: string)
  {
    let obs=this.http.get(this.api,{ params:{ operation: "login",email: email, password: password, usertype: usertype } });
    return obs;
  }
}
