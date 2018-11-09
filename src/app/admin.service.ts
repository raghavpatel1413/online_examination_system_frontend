import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  api = 'http://localhost/OES_REST/Admin/admin_oes.php';
  constructor(private http: HttpClient) { }

  getDashboard()
  {
    return this.http.get(this.api,{ params:{ operation: "admindashboard"} });
  }

  insertdepartment(dname: string, ddetails: string){
    let obs=this.http.get(this.api,{ params:{ operation: "adddepartment",dname: dname, ddetails: ddetails } });
    obs.subscribe((response)=>console.log(response));
    return obs;
  }

  getdepartmentdata(){
    let obs=this.http.get(this.api,{ params:{ operation: "getdepartment"} });
    return obs;
  }

  insertdirector(dname: string, demail: string,dcontact: string,daddress:string,dgender:string,ddob:string,deptselect:string){
    let obs=this.http.get(this.api,{ params:{ operation: "adddirector",dname: dname, demail: demail ,dcontact: dcontact, daddress: daddress, dgender: dgender, ddob: ddob, deptselect: deptselect} });
    console.log(dname, demail,dcontact, daddress, dgender, ddob, deptselect);
    return obs;
  }

  getdirectordata()
  {
    let obs=this.http.get(this.api,{ params:{ operation: "getdirector"} });
    return obs;
  }

  insertfaculty(){
    let obs=this.http.get(this.api,{ params:{ operation: "addfaculty"} });
    obs.subscribe((response)=>console.log(response));
    return obs;
  }

  getfacultydata()
  {
    let obs=this.http.get(this.api,{ params:{ operation: "getfaculty"} });
    return obs;
  }

  getstudentdata()
  {
    let obs=this.http.get(this.api,{ params:{ operation: "getstudent"} });
    return obs;
  }
}
